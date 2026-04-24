-- profiles (Supabase Auth extension)
create table profiles (
  id uuid references auth.users primary key,
  full_name text,
  role text, -- admin, sales, etc.
  avatar_url text
);

-- testimonials / client logos
create table testimonials (
  id bigserial primary key,
  name text,
  company text,
  role text,
  quote text,
  rating integer check (rating between 1 and 5),
  logo_url text,
  featured boolean default false,
  created_at timestamptz default now()
);

-- pricing tiers
create table pricing_tiers (
  id bigserial primary key,
  tier text unique, -- e.g., 'Starter', 'Growth', 'Enterprise'
  price_monthly numeric,
  price_annual numeric,
  features jsonb, -- array of feature strings
  popular boolean default false
);

-- blog / resources
create table blog_posts (
  id bigserial primary key,
  slug text unique,
  title text,
  excerpt text,
  body text, -- markdown or rich text
  author text,
  published_at timestamptz,
  seo_title text,
  seo_description text
);

-- contact form submissions
create table contact_submissions (
  id bigserial primary key,
  name text,
  email text,
  phone text,
  company text,
  service_interest text,
  message text,
  submitted_at timestamptz default now(),
  status text default 'new' -- new, contacted, qualified
);