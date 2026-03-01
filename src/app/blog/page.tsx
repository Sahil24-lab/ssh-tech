import { getAllBlogPosts } from "@/app/lib/contentful/blog";
import BlogSearchClient from "./components/BlogSearchClient";
import { unwrapStringField } from "@/utils/unwrapFields";
import { BlogPostEntry } from "@/app/types/contentful";
import type { Metadata } from "next";
import { headers } from "next/headers";

async function getBaseUrl() {
  const hdrs = await headers();
  const host =
    hdrs.get("x-forwarded-host") ?? hdrs.get("host") ?? "ai.ssh-tech.xyz";
  const proto = hdrs.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}`;
}

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl();
  return {
    title: "AI Insights & Resources",
    description:
      "Practical insights on AI integration, workflow automation, and operational AI systems from the SSH Tech team.",
    alternates: {
      canonical: `${baseUrl}/blog`,
    },
    openGraph: {
      url: `${baseUrl}/blog`,
      title: "AI Insights & Resources — SSH Tech",
    },
  };
}

// This page: /blog
export default async function BlogPage() {
  // This runs on the server at request time or revalidation time
  let allPosts: BlogPostEntry[] = [];
  try {
    allPosts = await getAllBlogPosts();
  } catch (err) {
    console.error("Failed to load blog posts.", err);
  }

  const normalizedPosts = allPosts.map((post: BlogPostEntry) => ({
    sys: { id: post.sys.id },
    fields: {
      title: unwrapStringField(post.fields.title),
      shortDescription: unwrapStringField(post.fields.shortDescription),
      publishedDate: unwrapStringField(post.fields.publishedDate),
      tags: Array.isArray(post.fields.tags) ? post.fields.tags : [],
      featuredImage: post.fields.featuredImage,
      slug: unwrapStringField(post.fields.slug),
    },
  }));

  return <BlogSearchClient initialPosts={normalizedPosts} />;
}
