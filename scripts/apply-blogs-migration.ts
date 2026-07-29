import { readFileSync } from "node:fs";
import path from "node:path";
import { loadEnvConfig } from "@next/env";
import { createClient } from "@supabase/supabase-js";

loadEnvConfig(process.cwd());

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

async function main() {
  const url = requiredEnv("NEXT_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = requiredEnv("SUPABASE_SERVICE_ROLE_KEY");
  const sqlPath = path.join(
    process.cwd(),
    "supabase",
    "migrations",
    "20260725170000_create_blogs.sql"
  );
  const sql = readFileSync(sqlPath, "utf8");

  // Prefer the database connection string when available.
  const databaseUrl = process.env.SUPABASE_DB_URL || process.env.DATABASE_URL;
  if (databaseUrl) {
    const postgres = await import("postgres");
    const sqlClient = postgres.default(databaseUrl, { prepare: false });
    try {
      await sqlClient.unsafe(sql);
      console.log("Applied blogs migration via DATABASE_URL.");
    } finally {
      await sqlClient.end({ timeout: 5 });
    }
  } else {
    console.log(
      "No SUPABASE_DB_URL/DATABASE_URL found. Checking whether public.blogs already exists..."
    );
  }

  const supabase = createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { error } = await supabase.from("blogs").select("id").limit(1);
  if (error) {
    if (
      error.code === "PGRST205" ||
      error.message.includes("Could not find the table 'public.blogs'")
    ) {
      throw new Error(
        [
          "public.blogs does not exist yet.",
          "Open the Supabase SQL Editor and run:",
          sqlPath,
          "Or set SUPABASE_DB_URL (Postgres connection string) and re-run this script.",
        ].join("\n")
      );
    }
    throw new Error(`Failed to verify blogs table: ${error.message}`);
  }

  console.log("Verified: public.blogs is available.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
