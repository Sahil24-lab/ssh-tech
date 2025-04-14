import { getAllBlogPosts } from "@/app/lib/contentful/blog";
import BlogSearchClient from "./components/BlogSearchClient";

export default async function BlogPage() {
  // Runs on the server, can safely access environment vars.
  const allPosts = await getAllBlogPosts();

  return <BlogSearchClient initialPosts={allPosts} />;
}
