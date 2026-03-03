# Routing Overview

This project uses the Next.js App Router under `src/app`. Routes are filesystem-based, with:
- `page.tsx` files defining page routes.
- `layout.tsx` defining the root layout shared by all routes.
- `route.ts` files defining Route Handlers (API endpoints or dynamic text/XML routes).
- `not-found.tsx` defining the global 404 UI.

## Core Structure
- Root router directory: `src/app`
- Root layout: `src/app/layout.tsx`
  - Sets global fonts and providers.
  - Builds per-subdomain metadata (ai/web3/sahil/embedded) using request headers.
- Global 404: `src/app/not-found.tsx`
- Global styles: `src/app/globals.css`

## Page Routes
Static routes are created by directories with `page.tsx`:
- `/` -> `src/app/page.tsx`
  - Subdomain-aware landing page:
    - `ai` -> AI landing
    - `web3` -> Web3 landing (default)
    - `sahil` -> Profile landing
    - `embedded` -> Embedded landing
- `/blog` -> `src/app/blog/page.tsx`
- `/blog/[slug]` -> `src/app/blog/[slug]/page.tsx`
  - Dynamic route for Contentful blog posts.
  - `generateStaticParams()` pulls slugs from Contentful.
  - `revalidate = 3600` and `dynamic = "force-static"`.
- `/proof-of-work` -> `src/app/proof-of-work/page.tsx`
- `/proof-of-work/[slug]` -> `src/app/proof-of-work/[slug]/page.tsx`
  - Dynamic route for case studies.
  - `generateStaticParams()` pulls slugs from Contentful.
  - `revalidate = 60`.
- `/tools-and-resources` -> `src/app/tools-and-resources/page.tsx`
- `/privacy-policy` -> `src/app/privacy-policy/page.tsx`
- `/terms` -> `src/app/terms/page.tsx`
- `/cookies` -> `src/app/cookies/page.tsx`

## Route Handlers (API / Text/XML)
Route handlers live in nested folders with `route.ts`:
- `POST /api/leads` -> `src/app/api/leads/route.ts`
  - Inserts form submissions into Supabase.
- `GET /sitemap.xml` -> `src/app/sitemap.xml/route.ts`
  - Builds XML sitemap from static pages plus Contentful slugs.
  - `revalidate = 3600`.
- `GET /robots.txt` -> `src/app/robots.txt/route.ts`
  - Returns a basic robots policy with sitemap link.
  - `revalidate = 3600`.

## Metadata & Canonicals
- Root layout and most pages use `generateMetadata()` for title/description/OG tags.
- Metadata and canonical URLs are derived from request headers (`x-forwarded-host`, `x-forwarded-proto`) to support subdomains.

## Data Sources Driving Dynamic Routes
- Contentful provides:
  - Blog slugs and content (`/blog/[slug]`).
  - Proof-of-work slugs and content (`/proof-of-work/[slug]`).
- The sitemap aggregates static routes and Contentful-derived routes.

## Quick Map
- Pages: `src/app/**/page.tsx`
- Layouts: `src/app/**/layout.tsx`
- API/Text routes: `src/app/**/route.ts`
- 404: `src/app/not-found.tsx`
