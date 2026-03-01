import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { fetchAllSlugsWithUpdatedAt } from "@/app/lib/contentful/contentful";
import { getAllBlogPostsWithUpdatedAt } from "@/app/lib/contentful/blog";

export const runtime = "nodejs";
export const revalidate = 3600;

const baseUrlBySite: Record<string, string> = {
  web3: "https://web3.ssh-tech.xyz",
  sahil: "https://sahil.ssh-tech.xyz",
  profile: "https://sahil.ssh-tech.xyz",
  ai: "https://ai.ssh-tech.xyz",
  embedded: "https://embedded.ssh-tech.xyz",
};

async function getBaseUrlFromHeaders() {
  const hdrs = await headers();
  const host =
    hdrs.get("x-forwarded-host") ?? hdrs.get("host") ?? "";
  if (!host) {
    const site = process.env.NEXT_PUBLIC_SITE ?? "web3";
    return baseUrlBySite[site] ?? baseUrlBySite.web3;
  }

  const proto = hdrs.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}`;
}

async function getDynamicPaths() {
  const paths: { path: string; lastmod: string }[] = [];

  try {
    const proofSlugs = await fetchAllSlugsWithUpdatedAt();
    for (const entry of proofSlugs) {
      paths.push({
        path: `/proof-of-work/${entry.slug}`,
        lastmod: entry.updatedAt,
      });
    }
  } catch (err) {
    console.error("Failed to load Proof of Work slugs for sitemap.", err);
  }

  try {
    const posts = await getAllBlogPostsWithUpdatedAt();
    for (const entry of posts) {
      paths.push({
        path: `/blog/${entry.slug}`,
        lastmod: entry.updatedAt,
      });
    }
  } catch (err) {
    console.error("Failed to load blog slugs for sitemap.", err);
  }

  return paths;
}

export async function GET() {
  const baseUrl = await getBaseUrlFromHeaders();
  const staticPages = [
    { path: "/", lastmod: "2026-03-01" },
    { path: "/proof-of-work", lastmod: "2026-03-01" },
    { path: "/blog", lastmod: "2026-03-01" },
    { path: "/tools-and-resources", lastmod: "2026-03-01" },
  ];

  const dynamicPaths = await getDynamicPaths();
  const allPaths = [
    ...staticPages,
    ...dynamicPaths.filter((entry) => entry.path),
  ];

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    allPaths
      .map(
        (entry) =>
          `<url><loc>${baseUrl}${entry.path}</loc><lastmod>${entry.lastmod}</lastmod></url>`
      )
      .join("") +
    `</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
