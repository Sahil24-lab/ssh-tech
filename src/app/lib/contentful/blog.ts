import { createClient } from "contentful";
import { BlogPostSkeleton, BlogPostEntry } from "@/app/types/contentful";

type EntriesQuery = NonNullable<
  Parameters<typeof client.getEntries<BlogPostSkeleton>>[0]
> & {
  order?: string[];
  "fields.slug"?: string;
};


// Create the Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getAllBlogPosts(): Promise<BlogPostEntry[]> {
  const query: EntriesQuery = {
    content_type: "pageBlogPost",
    order: ["-fields.publishedDate"],
    // Specify the locale so that fields are returned as strings.
    locale: "en-US",
  };
  const res = await client.getEntries<BlogPostSkeleton>(query);

  return res.items;
}

export async function getAllBlogPostsWithUpdatedAt(): Promise<
  { slug: string; updatedAt: string }[]
> {
  const posts = await getAllBlogPosts();
  const results: { slug: string; updatedAt: string }[] = [];
  for (const post of posts) {
    const slug = (post.fields as { slug?: string }).slug;
    if (typeof slug === "string" && slug.length > 0) {
      results.push({
        slug,
        updatedAt: post.sys.updatedAt,
      });
    }
  }
  return results;
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPostEntry | undefined> {
  const query: EntriesQuery = {
    content_type: "pageBlogPost",
    limit: 1,
    "fields.slug": slug,
    locale: "en-US",
  };

  const res = await client.getEntries<BlogPostSkeleton>(query);
  return res.items[0];
}
