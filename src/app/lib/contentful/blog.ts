import { createClient } from "contentful";
import { BlogPostSkeleton, BlogPostEntry } from "@/app/types/contentful";


// Create the Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getAllBlogPosts(): Promise<BlogPostEntry[]> {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: "pageBlogPost",
    // Cast order as any to bypass TS restrictions on allowed order keys.
    order: ["-fields.publishedDate"] as any,
    // Specify the locale so that fields are returned as strings.
    locale: "en-US",
  });

  return res.items;
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPostEntry | undefined> {
  // Using a query cast as any allows custom keys like "fields.slug"
  const query: any = {
    content_type: "pageBlogPost",
    limit: 1,
    "fields.slug": slug,
    locale: "en-US",
  };

  const res = await client.getEntries<BlogPostSkeleton>(query);
  return res.items[0];
}
