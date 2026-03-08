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

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function getBaseUrlFromHeaders(): Promise<string> {
  const hdrs = await headers();
  const host = hdrs.get("x-forwarded-host") ?? hdrs.get("host") ?? "";

  if (!host) {
    const site = process.env.NEXT_PUBLIC_SITE ?? "web3";
    return baseUrlBySite[site] ?? baseUrlBySite.web3;
  }

  const proto = hdrs.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}`;
}

async function getDynamicPaths(): Promise<{ path: string; lastmod: string }[]> {
  const paths: { path: string; lastmod: string }[] = [];

  try {
    const proofSlugs = await fetchAllSlugsWithUpdatedAt();
    for (const entry of proofSlugs) {
      if (entry.slug) {
        paths.push({
          path: `/proof-of-work/${entry.slug}`,
          lastmod: entry.updatedAt,
        });
      }
    }
  } catch (err) {
    console.error("[sitemap] Failed to load Proof of Work slugs:", err);
  }

  try {
    const posts = await getAllBlogPostsWithUpdatedAt();
    for (const entry of posts) {
      if (entry.slug) {
        paths.push({
          path: `/blog/${entry.slug}`,
          lastmod: entry.updatedAt,
        });
      }
    }
  } catch (err) {
    console.error("[sitemap] Failed to load blog slugs:", err);
  }

  return paths;
}

export async function GET() {
  const baseUrl = await getBaseUrlFromHeaders();

  const staticPages = [
    { path: "/", lastmod: new Date().toISOString().split("T")[0] },
    { path: "/proof-of-work", lastmod: new Date().toISOString().split("T")[0] },
    { path: "/blog", lastmod: new Date().toISOString().split("T")[0] },
    {
      path: "/tools-and-resources",
      lastmod: new Date().toISOString().split("T")[0],
    },
    { path: "/products", lastmod: new Date().toISOString().split("T")[0] },
    {
      path: "/products/ssh-echo",
      lastmod: new Date().toISOString().split("T")[0],
    },
  ];

  const dynamicPaths = await getDynamicPaths();
  const allPaths = [...staticPages, ...dynamicPaths];

  const urls = allPaths
    .map(
      (entry) =>
        `  <url>\n` +
        `    <loc>${escapeXml(baseUrl + entry.path)}</loc>\n` +
        `    <lastmod>${entry.lastmod}</lastmod>\n` +
        `  </url>`,
    )
    .join("\n");

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls +
    `\n</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
    },
  });
}
