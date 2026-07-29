export type BlogStatus = "draft" | "published";

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  author_role: string;
  category: string;
  tags: string[];
  featured: boolean;
  status: BlogStatus;
  views: number;
  meta_description: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  image_url: string;
  image_public_id: string;
  image_width: number;
  image_height: number;
  image_format: string;
}

export type BlogInput = Omit<
  Blog,
  "id" | "created_at" | "updated_at" | "views"
> & {
  views?: number;
};

export interface UploadResponse {
  secure_url: string;
  public_id: string;
  width: number;
  height: number;
  format: string;
}
