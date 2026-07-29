const DELIVERY_MARKER = "/image/upload/";

function isTransformSegment(segment: string): boolean {
  return segment.includes(",") || /^(?:f_|q_|c_|w_|h_|g_|e_|fl_)/.test(segment);
}

/**
 * Cloudinary originals can be many megabytes, which makes the Next.js image
 * optimizer time out while fetching them. Requesting a resized, auto-format
 * derivative keeps the fetch small.
 */
export function optimizedCloudinaryUrl(url: string, width = 1600): string {
  if (!url.includes("res.cloudinary.com") || !url.includes(DELIVERY_MARKER)) {
    return url;
  }

  const [prefix, rest] = url.split(DELIVERY_MARKER);
  if (!rest) return url;

  const first = rest.split("/")[0] || "";
  if (isTransformSegment(first)) return url;

  const transformation = `f_auto,q_auto,c_limit,w_${width}`;
  return `${prefix}${DELIVERY_MARKER}${transformation}/${rest}`;
}

/** Strip delivery transforms so we persist the original Cloudinary asset URL. */
export function normalizeCloudinaryUrl(url: string): string {
  if (!url.includes("res.cloudinary.com") || !url.includes(DELIVERY_MARKER)) {
    return url;
  }

  try {
    const parsed = new URL(url);
    const [prefix, rest] = parsed.pathname.split(DELIVERY_MARKER);
    if (!rest) return url;

    const cleaned = rest
      .split("/")
      .filter(Boolean)
      .filter((segment) => !isTransformSegment(segment));

    parsed.pathname = `${prefix}${DELIVERY_MARKER}${cleaned.join("/")}`;
    return parsed.toString();
  } catch {
    return url;
  }
}

export function publicIdFromCloudinaryUrl(imageUrl: string): string {
  try {
    const uploadPath = new URL(normalizeCloudinaryUrl(imageUrl)).pathname.split(
      DELIVERY_MARKER
    )[1];
    if (!uploadPath) return "";

    return decodeURIComponent(uploadPath)
      .replace(/^v\d+\//, "")
      .replace(/\.[a-z0-9]+$/i, "");
  } catch {
    return "";
  }
}
