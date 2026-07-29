import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { deleteImage, uploadImage } from "@/lib/cloudinary";

export const runtime = "nodejs";

const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

function isUploadableFile(value: FormDataEntryValue | null): value is File {
  return (
    !!value &&
    typeof value === "object" &&
    typeof (value as File).arrayBuffer === "function" &&
    typeof (value as File).size === "number" &&
    "type" in value
  );
}

export async function POST(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json(
      { error: "Unauthorized. Please sign in again on the admin page." },
      { status: 401 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!isUploadableFile(file)) {
      return NextResponse.json({ error: "No image file provided." }, { status: 400 });
    }

    const mimeType = file.type || "application/octet-stream";
    if (!ALLOWED_IMAGE_TYPES.has(mimeType)) {
      return NextResponse.json(
        { error: "Only JPG, PNG, WEBP, and GIF images are allowed." },
        { status: 415 }
      );
    }

    if (file.size === 0 || file.size > MAX_IMAGE_BYTES) {
      return NextResponse.json(
        { error: "The image must be non-empty and no larger than 5MB." },
        { status: 413 }
      );
    }

    const image = await uploadImage(Buffer.from(await file.arrayBuffer()));
    return NextResponse.json(image, { status: 201 });
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    const message =
      error instanceof Error && error.message.includes("Missing required environment variable")
        ? "Cloudinary is not configured on the server."
        : "Failed to upload image.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as
    | { public_id?: unknown }
    | null;
  const publicId = typeof body?.public_id === "string" ? body.public_id : "";

  if (!publicId.startsWith("syncops/blog/")) {
    return NextResponse.json({ error: "Invalid image public ID." }, { status: 400 });
  }

  try {
    await deleteImage(publicId);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Temporary image cleanup failed:", error);
    return NextResponse.json({ error: "Failed to delete image." }, { status: 502 });
  }
}
