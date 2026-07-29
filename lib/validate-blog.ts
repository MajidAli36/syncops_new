import type { BlogInput, BlogStatus } from "@/lib/blog-types";
import { normalizeCloudinaryUrl } from "@/lib/cloudinary-url";

const STATUSES = new Set<BlogStatus>(["draft", "published"]);

function stringValue(value: unknown, field: string, required = true): string {
  if (typeof value !== "string" || (required && !value.trim())) {
    throw new Error(`${field} is ${required ? "required" : "invalid"}.`);
  }
  return value.trim();
}

function positiveInteger(value: unknown, field: string): number {
  const number = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(number) || !Number.isInteger(number) || number <= 0) {
    throw new Error(`${field} must be a positive integer.`);
  }
  return number;
}

function cloudinaryUrl(value: unknown): string {
  const url = normalizeCloudinaryUrl(stringValue(value, "image_url"));
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "https:" || parsed.hostname !== "res.cloudinary.com") {
      throw new Error();
    }
  } catch {
    throw new Error("image_url must be a secure Cloudinary URL.");
  }
  return url;
}

function publishedAt(value: unknown): string {
  if (typeof value === "string" && value.trim()) {
    const parsed = new Date(value.trim());
    if (!Number.isNaN(parsed.getTime())) return parsed.toISOString();
  }
  throw new Error("published_at must be a valid date.");
}

export function validateBlogInput(value: unknown): BlogInput {
  if (!value || typeof value !== "object") {
    throw new Error("Invalid blog payload.");
  }

  const input = value as Record<string, unknown>;
  const status = stringValue(input.status, "status") as BlogStatus;
  if (!STATUSES.has(status)) throw new Error("status must be draft or published.");

  return {
    title: stringValue(input.title, "title"),
    slug: stringValue(input.slug, "slug"),
    excerpt: stringValue(input.excerpt, "excerpt"),
    content: stringValue(input.content, "content"),
    author: stringValue(input.author, "author"),
    author_role: stringValue(input.author_role, "author_role"),
    category: stringValue(input.category, "category"),
    tags: Array.isArray(input.tags)
      ? input.tags.filter((tag): tag is string => typeof tag === "string")
      : [],
    featured: Boolean(input.featured),
    status,
    views: typeof input.views === "number" ? Math.max(0, Math.trunc(input.views)) : 0,
    meta_description: stringValue(input.meta_description, "meta_description"),
    published_at: publishedAt(input.published_at),
    image_url: cloudinaryUrl(input.image_url),
    image_public_id: stringValue(input.image_public_id, "image_public_id"),
    image_width: positiveInteger(input.image_width, "image_width"),
    image_height: positiveInteger(input.image_height, "image_height"),
    image_format: stringValue(input.image_format, "image_format"),
  };
}
