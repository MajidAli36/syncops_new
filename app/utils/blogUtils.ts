import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Blog } from "@/lib/blog-types";
import { optimizedCloudinaryUrl } from "@/lib/cloudinary-url";
import { createSupabaseServerClient } from "@/lib/supabase-server";

export type BlogPost = Blog & {
  coverImage: string;
  authorRole: string;
  metaDescription: string;
  date: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

function toBlogPost(blog: Blog): BlogPost {
  return {
    ...blog,
    coverImage: optimizedCloudinaryUrl(blog.image_url),
    authorRole: blog.author_role,
    metaDescription: blog.meta_description,
    date: blog.published_at,
  };
}

function isMissingBlogsTable(error: { message?: string; code?: string } | null) {
  if (!error) return false;
  const message = error.message || "";
  return (
    error.code === "PGRST205" ||
    message.includes("Could not find the table 'public.blogs'") ||
    message.includes("relation \"public.blogs\" does not exist")
  );
}

function publicIdFromUrl(imageUrl: string): string {
  try {
    const marker = "/image/upload/";
    const uploadPath = new URL(imageUrl).pathname.split(marker)[1];
    if (!uploadPath) return "";
    return decodeURIComponent(uploadPath)
      .replace(/^v\d+\//, "")
      .replace(/\.[a-z0-9]+$/i, "");
  } catch {
    return "";
  }
}

function readMarkdownPosts(options: { includeDrafts?: boolean } = {}): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const posts = fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const source = fs.readFileSync(path.join(postsDirectory, fileName), "utf8");
      const { data, content } = matter(source);
      const imageUrl = typeof data.coverImage === "string" ? data.coverImage : "";
      const status = data.status === "draft" ? "draft" : "published";
      const publishedAt = data.date
        ? new Date(data.date).toISOString()
        : new Date().toISOString();

      const blog: Blog = {
        id: slug,
        title: String(data.title || "Untitled"),
        slug,
        excerpt: String(data.excerpt || ""),
        content,
        author: String(data.author || "SyncOps"),
        author_role: String(data.authorRole || "Tech Innovators"),
        category: String(data.category || "Technology"),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        featured: Boolean(data.featured),
        status,
        views: Number(data.views) || 0,
        meta_description: String(data.metaDescription || data.excerpt || ""),
        published_at: publishedAt,
        created_at: publishedAt,
        updated_at: publishedAt,
        image_url: imageUrl,
        image_public_id: publicIdFromUrl(imageUrl),
        image_width: Number(data.imageWidth) || 1600,
        image_height: Number(data.imageHeight) || 900,
        image_format: String(data.imageFormat || "jpg"),
      };

      return toBlogPost(blog);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  if (options.includeDrafts) return posts;
  return posts.filter((post) => post.status === "published");
}

export async function getAllPosts(options: { includeDrafts?: boolean } = {}) {
  try {
    const supabase = createSupabaseServerClient({ admin: options.includeDrafts });
    let query = supabase
      .from("blogs")
      .select("*")
      .order("published_at", { ascending: false });

    if (!options.includeDrafts) query = query.eq("status", "published");

    const { data, error } = await query;
    if (error) {
      if (isMissingBlogsTable(error)) {
        console.warn(
          "[blog] public.blogs is missing. Falling back to markdown posts until the Supabase migration is applied."
        );
        return readMarkdownPosts(options);
      }
      throw new Error(`Failed to load blog posts: ${error.message}`);
    }

    return (data as Blog[]).map(toBlogPost);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.includes("Missing required environment variable")) {
      console.warn(`[blog] ${message}. Falling back to markdown posts.`);
      return readMarkdownPosts(options);
    }
    throw error;
  }
}

export async function getPostBySlug(
  slug: string,
  options: { includeDrafts?: boolean } = {}
) {
  try {
    const supabase = createSupabaseServerClient({ admin: options.includeDrafts });
    let query = supabase.from("blogs").select("*").eq("slug", slug);

    if (!options.includeDrafts) query = query.eq("status", "published");

    const { data, error } = await query.maybeSingle();
    if (error) {
      if (isMissingBlogsTable(error)) {
        console.warn(
          "[blog] public.blogs is missing. Falling back to markdown posts until the Supabase migration is applied."
        );
        return readMarkdownPosts(options).find((post) => post.slug === slug) || null;
      }
      throw new Error(`Failed to load blog post: ${error.message}`);
    }

    return data ? toBlogPost(data as Blog) : null;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.includes("Missing required environment variable")) {
      console.warn(`[blog] ${message}. Falling back to markdown posts.`);
      return readMarkdownPosts(options).find((post) => post.slug === slug) || null;
    }
    throw error;
  }
}
