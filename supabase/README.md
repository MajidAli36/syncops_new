# Blog database setup

1. Run `migrations/20260725170000_create_blogs.sql` in the Supabase SQL editor
   (or apply it with the Supabase CLI).
2. Set every variable shown in `.env.example`.
3. Run `npm run migrate:blogs` once to import the existing Markdown posts and
   fetch their image metadata from Cloudinary.

The application reads blog text from `public.blogs` after this migration. New
admin writes use the server-only Supabase service-role key; browser code never
receives that key or the Cloudinary API secret.
