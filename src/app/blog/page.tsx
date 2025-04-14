import { getAllBlogPosts } from "@/app/lib/contentful/blog";
import BlogSearchClient from "./components/BlogSearchClient";

// This page: /blog
export default async function BlogPage() {
  // This runs on the server at request time or revalidation time
  const allPosts = await getAllBlogPosts();

  return <BlogSearchClient initialPosts={allPosts} />;
}
