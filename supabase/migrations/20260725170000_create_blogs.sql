create extension if not exists pgcrypto;

create table if not exists public.blogs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  author text not null default 'SyncOps',
  author_role text not null default 'Tech Innovators',
  category text not null default 'Technology',
  tags text[] not null default '{}',
  featured boolean not null default false,
  status text not null default 'draft' check (status in ('draft', 'published')),
  views integer not null default 0 check (views >= 0),
  meta_description text not null,
  published_at timestamptz not null default now(),
  image_url text not null,
  image_public_id text not null,
  image_width integer not null check (image_width > 0),
  image_height integer not null check (image_height > 0),
  image_format text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blogs_status_published_at_idx
  on public.blogs (status, published_at desc);

alter table public.blogs enable row level security;

drop policy if exists "Published blogs are publicly readable" on public.blogs;
create policy "Published blogs are publicly readable"
  on public.blogs
  for select
  to anon, authenticated
  using (status = 'published');

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists blogs_set_updated_at on public.blogs;
create trigger blogs_set_updated_at
before update on public.blogs
for each row execute function public.set_updated_at();
