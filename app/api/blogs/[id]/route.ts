import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { deleteImage } from "@/lib/cloudinary";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { validateBlogInput } from "@/lib/validate-blog";

export const runtime = "nodejs";

type RouteContext = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: RouteContext) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;
  const supabase = createSupabaseServerClient({ admin: true });
  const { data: existing, error: lookupError } = await supabase
    .from("blogs")
    .select("image_public_id")
    .eq("id", id)
    .single();

  if (lookupError || !existing) {
    return NextResponse.json({ error: "Blog not found." }, { status: 404 });
  }

  let input;
  try {
    input = validateBlogInput(await request.json());
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Invalid blog payload." },
      { status: 400 }
    );
  }

  const imageWasReplaced = existing.image_public_id !== input.image_public_id;
  const { data, error } = await supabase
    .from("blogs")
    .update(input)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Failed to update blog:", error);
    if (imageWasReplaced) {
      await deleteImage(input.image_public_id).catch((cleanupError) => {
        console.error("Failed to clean up replacement image:", cleanupError);
      });
    }
    const message = error.message || "Failed to update blog.";
    return NextResponse.json(
      {
        error: message.includes("duplicate key")
          ? "A blog with this slug already exists. Change the slug and try again."
          : message,
      },
      { status: 500 }
    );
  }

  let warning: string | undefined;
  if (imageWasReplaced) {
    try {
      await deleteImage(existing.image_public_id);
    } catch (deleteError) {
      console.error("Failed to delete replaced image:", deleteError);
      warning = "The blog was updated, but the old image could not be deleted.";
    }
  }

  return NextResponse.json({ blog: data, warning });
}

export async function DELETE(_: Request, { params }: RouteContext) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;
  const supabase = createSupabaseServerClient({ admin: true });
  const { data: blog, error: lookupError } = await supabase
    .from("blogs")
    .select("image_public_id")
    .eq("id", id)
    .single();

  if (lookupError || !blog) {
    return NextResponse.json({ error: "Blog not found." }, { status: 404 });
  }

  try {
    await deleteImage(blog.image_public_id);
  } catch (error) {
    console.error("Failed to delete blog image:", error);
    return NextResponse.json(
      { error: "The image could not be deleted; the blog was not removed." },
      { status: 502 }
    );
  }

  const { error: deleteError } = await supabase.from("blogs").delete().eq("id", id);
  if (deleteError) {
    console.error("Failed to delete blog row:", deleteError);
    return NextResponse.json(
      { error: "The image was deleted, but the blog record could not be removed." },
      { status: 500 }
    );
  }

  return new NextResponse(null, { status: 204 });
}
