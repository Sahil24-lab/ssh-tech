import { Box, Container, Grid, Stack, Typography } from "@mui/material";
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
        <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.8rem" } }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 720 }}>
          {description}
        </Typography>
      </Stack>
      <Grid container spacing={4} justifyContent="center">
        {posts.map((post) => (
          <Grid item key={post.href} xs={12} sm={6} md={4}>
            <BlogCard
              title={post.title}
              description={post.excerpt}
              href={post.href}
              tag={post.tag}
              tags={post.tags}
              imageSrc={post.imageSrc}
              imageAlt={post.imageAlt}
              publishedDate={post.publishedDate}
              readTime={post.readTime}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
