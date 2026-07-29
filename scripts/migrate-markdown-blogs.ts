import fs from "node:fs/promises";
import path from "node:path";
import { loadEnvConfig } from "@next/env";
import { v2 as cloudinary } from "cloudinary";
import matter from "gray-matter";
import { createClient } from "@supabase/supabase-js";

loadEnvConfig(process.cwd());

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

cloudinary.config({
  cloud_name: requiredEnv("CLOUDINARY_CLOUD_NAME"),
  api_key: requiredEnv("CLOUDINARY_API_KEY"),
  api_secret: requiredEnv("CLOUDINARY_API_SECRET"),
  secure: true,
});

const supabase = createClient(
  requiredEnv("NEXT_PUBLIC_SUPABASE_URL"),
  requiredEnv("SUPABASE_SERVICE_ROLE_KEY"),
  { auth: { autoRefreshToken: false, persistSession: false } }
);

function publicIdFromUrl(imageUrl: string): string {
  const marker = "/image/upload/";
  const uploadPath = new URL(imageUrl).pathname.split(marker)[1];
  if (!uploadPath) throw new Error(`Unsupported Cloudinary URL: ${imageUrl}`);

  return decodeURIComponent(uploadPath)
    .replace(/^v\d+\//, "")
    .replace(/\.[a-z0-9]+$/i, "");
}

async function main() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = (await fs.readdir(postsDirectory)).filter((name) =>
    name.endsWith(".md")
  );

  for (const filename of filenames) {
    const slug = filename.replace(/\.md$/, "");
    const source = await fs.readFile(path.join(postsDirectory, filename), "utf8");
    const { data, content } = matter(source);
    const imageUrl = String(data.coverImage || "");
    const publicId = publicIdFromUrl(imageUrl);
    const asset = await cloudinary.api.resource(publicId, {
      resource_type: "image",
    });

    const { error } = await supabase.from("blogs").upsert(
      {
        title: data.title,
        slug,
        excerpt: data.excerpt,
        content,
        author: data.author || "SyncOps",
        author_role: data.authorRole || "Tech Innovators",
        category: data.category || "Technology",
        tags: Array.isArray(data.tags) ? data.tags : [],
        featured: Boolean(data.featured),
        status: data.status || "published",
        views: Number(data.views) || 0,
        meta_description: data.metaDescription || data.excerpt,
        published_at: new Date(data.date || Date.now()).toISOString(),
        image_url: asset.secure_url,
        image_public_id: asset.public_id,
        image_width: asset.width,
        image_height: asset.height,
        image_format: asset.format,
      },
      { onConflict: "slug" }
    );

    if (error) throw new Error(`Failed to migrate ${filename}: ${error.message}`);
    console.log(`Migrated ${slug}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
