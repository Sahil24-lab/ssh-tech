import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { BlogCard } from "../components/BlogCard";
import type { BlogPostPreview } from "../types/content";

export function BlogListTemplate({
  title,
  description,
  posts,
  loading = false,
  count = 6,
}: {
  title: string;
  description: string;
  posts: BlogPostPreview[];
  loading?: boolean;
  count?: number;
}) {
  return (
    <Box component="main">
    <Container sx={{ py: { xs: 8, md: 10 } }}>
      <Stack spacing={2} sx={{ mb: 4 }}>
        <Typography component="h1" variant="h1" sx={{ fontSize: { xs: "2.7rem", md: "4rem" } }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 720 }}>
          {description}
        </Typography>
      </Stack>
      <Grid container spacing={4} justifyContent="center">
        {loading
          ? [...Array(count)].map((_, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <BlogCard loading title="" description="" href="" />
              </Grid>
            ))
          : posts.map((post) => (
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
    </Box>
  );
}
