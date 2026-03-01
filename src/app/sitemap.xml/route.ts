import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { fetchAllSlugs } from "@/app/lib/contentful/contentful";
import { getAllBlogPosts } from "@/app/lib/contentful/blog";

export const runtime = "nodejs";
export const revalidate = 3600;

const baseUrlBySite: Record<string, string> = {
  web3: "https://web3.ssh-tech.xyz",
  sahil: "https://sahil.ssh-tech.xyz",
  profile: "https://sahil.ssh-tech.xyz",
  ai: "https://ai.ssh-tech.xyz",
  embedded: "https://embedded.ssh-tech.xyz",
};

function getBaseUrlFromHeaders() {
  const hdrs = headers();
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
  const paths: string[] = [];

  try {
    const proofSlugs = await fetchAllSlugs();
    for (const slug of proofSlugs) {
      paths.push(`/proof-of-work/${slug}`);
    }
  } catch (err) {
    console.error("Failed to load Proof of Work slugs for sitemap.", err);
  }

  try {
    const posts = await getAllBlogPosts();
    for (const post of posts) {
      const slug = post.fields.slug;
      if (typeof slug === "string" && slug.length > 0) {
        paths.push(`/blog/${slug}`);
      }
    }
  } catch (err) {
    console.error("Failed to load blog slugs for sitemap.", err);
  }

  return paths;
}

export async function GET() {
  const baseUrl = getBaseUrlFromHeaders();
  const staticPaths = [
    "/",
    "/proof-of-work",
    "/blog",
    "/consulting",
    "/tools-and-resources",
  ];

  const dynamicPaths = await getDynamicPaths();
  const allPaths = Array.from(new Set([...staticPaths, ...dynamicPaths]));
  const now = new Date().toISOString();

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    allPaths
      .map(
        (path) =>
          `<url><loc>${baseUrl}${path}</loc><lastmod>${now}</lastmod></url>`
      )
      .join("") +
    `</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
