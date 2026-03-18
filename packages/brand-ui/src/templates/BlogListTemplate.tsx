import { Box, Container, Stack, Typography } from "@mui/material";
import { BlogCard } from "../components/BlogCard";
import type { BlogPostPreview } from "../types/content";

export function BlogListTemplate({
  title,
  description,
  posts,
}: {
  title: string;
  description: string;
  posts: BlogPostPreview[];
}) {
  return (
    <Container sx={{ py: { xs: 8, md: 10 } }}>
      <Stack spacing={2} sx={{ mb: 4 }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.8rem" } }}>{title}</Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 720 }}>{description}</Typography>
      </Stack>
      <Stack spacing={2}>
        {posts.map((post) => (
          <BlogCard
            key={post.href}
            title={post.title}
            description={post.excerpt}
            href={post.href}
            tag={post.tag}
          />
        ))}
      </Stack>
    </Container>
  );
}
