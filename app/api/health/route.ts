import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Lightweight liveness probe for Docker / reverse-proxy health checks.
 * Does not touch Supabase or other external services.
 */
export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      service: "syncops-web",
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
