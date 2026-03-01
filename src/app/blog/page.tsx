import { getAllBlogPosts } from "@/app/lib/contentful/blog";
import BlogSearchClient from "./components/BlogSearchClient";
import { unwrapStringField } from "@/utils/unwrapFields";
import { BlogPostEntry } from "@/app/types/contentful";

// This page: /blog
export default async function BlogPage() {
  // This runs on the server at request time or revalidation time
  const allPosts = await getAllBlogPosts();

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
