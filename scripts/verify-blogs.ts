import { loadEnvConfig } from "@next/env";
import { createClient } from "@supabase/supabase-js";

loadEnvConfig(process.cwd());

async function main() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase
    .from("blogs")
    .select("slug,status,image_width,image_height,image_format")
    .order("published_at", { ascending: false });

  if (error) throw new Error(error.message);

  console.log(`Publicly readable rows: ${data.length}`);
  console.table(data.slice(0, 5));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
