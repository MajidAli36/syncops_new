import { v2 as cloudinary, type UploadApiOptions, type UploadApiResponse } from "cloudinary";

export type CloudinaryImage = Pick<
  UploadApiResponse,
  "secure_url" | "public_id" | "width" | "height" | "format"
>;

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function ensureCloudinaryConfig() {
  cloudinary.config({
    cloud_name: requiredEnv("CLOUDINARY_CLOUD_NAME"),
    api_key: requiredEnv("CLOUDINARY_API_KEY"),
    api_secret: requiredEnv("CLOUDINARY_API_SECRET"),
    secure: true,
  });
}

export function uploadImage(
  buffer: Buffer,
  options: UploadApiOptions = {}
): Promise<CloudinaryImage> {
  ensureCloudinaryConfig();

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: "image",
        folder: "syncops/blog",
        ...options,
      },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error("Cloudinary did not return an upload result."));
          return;
        }

        resolve({
          secure_url: result.secure_url,
          public_id: result.public_id,
          width: result.width,
          height: result.height,
          format: result.format,
        });
      }
    );

    stream.end(buffer);
  });
}

export async function deleteImage(publicId: string): Promise<void> {
  if (!publicId) return;

  ensureCloudinaryConfig();

  const result = await cloudinary.uploader.destroy(publicId, {
    resource_type: "image",
    invalidate: true,
  });

  if (result.result !== "ok" && result.result !== "not found") {
    throw new Error(`Cloudinary deletion failed: ${result.result}`);
  }
}
