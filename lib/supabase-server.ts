import "server-only";

import { createClient } from "@supabase/supabase-js";

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function createSupabaseServerClient(options: { admin?: boolean } = {}) {
  const key = options.admin
    ? requiredEnv("SUPABASE_SERVICE_ROLE_KEY")
    : requiredEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");

  return createClient(
    requiredEnv("NEXT_PUBLIC_SUPABASE_URL"),
    key,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
