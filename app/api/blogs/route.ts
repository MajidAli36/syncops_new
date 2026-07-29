import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { deleteImage } from "@/lib/cloudinary";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { validateBlogInput } from "@/lib/validate-blog";

export const runtime = "nodejs";

export async function GET() {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const supabase = createSupabaseServerClient({ admin: true });
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Failed to load blogs:", error);
    return NextResponse.json({ error: "Failed to load blogs." }, { status: 500 });
  }

  return NextResponse.json({ blogs: data });
}

export async function POST(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
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

  try {
    const supabase = createSupabaseServerClient({ admin: true });
    const { data, error } = await supabase
      .from("blogs")
      .insert(input)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json({ blog: data }, { status: 201 });
  } catch (error) {
    console.error("Failed to create blog:", error);

    if (input.image_public_id) {
      await deleteImage(input.image_public_id).catch((cleanupError) => {
        console.error("Failed to clean up image after insert failure:", cleanupError);
      });
    }

    const message =
      typeof error === "object" && error && "message" in error && typeof error.message === "string"
        ? error.message
        : error instanceof Error
          ? error.message
          : "Failed to create blog.";

    return NextResponse.json(
      {
        error: message.includes("duplicate key")
          ? "A blog with this slug already exists. Change the slug and try again."
          : message || "Failed to create blog.",
      },
      { status: 500 }
    );
  }
}
