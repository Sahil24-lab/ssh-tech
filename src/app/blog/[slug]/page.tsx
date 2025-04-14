// src/app/blog/[slug]/page.tsx

import { getBlogPostBySlug } from "@/app/lib/contentful/blog";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  INLINES,
  Document as RichTextDocument,
} from "@contentful/rich-text-types";
import Layout from "@/components/layout/Layout";
import {
  Box,
  Grid,
  Typography,
  Chip,
  Stack,
  Breadcrumbs,
  Link as MuiLink,
  Divider,
} from "@mui/material";
import Image from "next/image";
import { Options } from "@contentful/rich-text-react-renderer";
import { unwrapStringField, unwrapRichTextField } from "@/utils/unwrapFields";
import { ContentfulImageAsset, SEOEntry } from "@/app/types/contentful";
import { Metadata } from "next";
import TableOfContentsWrapper from "@/components/table-of-contents/TableOfContentsWrapper";

export const revalidate = 3600;
export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  const title = unwrapStringField(post?.fields?.title);
  const seoEntry = post?.fields?.seoFields as SEOEntry | undefined;
  const description = unwrapStringField(seoEntry?.fields?.metaDescription);

  const ogImage = (
    seoEntry?.fields?.ogImage as ContentfulImageAsset | undefined
  )?.fields?.file?.url;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImage ? [`https:${ogImage}`] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return <Typography>Not found</Typography>;

  const { fields } = post;
  const title = unwrapStringField(fields.title);
  const subtitle = unwrapStringField(fields.shortDescription);
  const publishedDate = unwrapStringField(fields.publishedDate);
  const tags = Array.isArray(fields.tags) ? fields.tags : [];
  const content = unwrapRichTextField(fields.content);
  const featuredImage = (
    fields.featuredImage as ContentfulImageAsset | undefined
  )?.fields?.file?.url;

  const renderOptions: Options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        const anchor = `section-${children
          ?.toString()
          .toLowerCase()
          .replace(/\s+/g, "-")}`;
        return (
          <Typography
            variant="h4"
            gutterBottom
            id={anchor}
            sx={{ scrollMarginTop: "6rem" }}
          >
            {children}
          </Typography>
        );
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        const anchor = `subsection-${children
          ?.toString()
          .toLowerCase()
          .replace(/\s+/g, "-")}`;
        return (
          <Typography
            variant="h6"
            gutterBottom
            id={anchor}
            sx={{ scrollMarginTop: "6rem" }}
          >
            {children}
          </Typography>
        );
      },
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <Typography paragraph>{children}</Typography>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <MuiLink href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </MuiLink>
      ),
    },
  };

  return (
    <Layout>
      <Box
        px={{ xs: 2, md: 4 }}
        py={6}
        maxWidth="1200px"
        mx="auto"
        sx={{ scrollBehavior: "smooth", position: "relative" }}
      >
        <Breadcrumbs sx={{ mb: 3 }}>
          <MuiLink href="/">Home</MuiLink>
          <MuiLink href="/blog">Blog</MuiLink>
          <Typography color="text.primary">{title}</Typography>
        </Breadcrumbs>

        <Grid container spacing={4} alignItems="center" mb={6}>
          {featuredImage && (
            <Grid item xs={12} md={4}>
              <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
                <Image
                  src={`https:${featuredImage}`}
                  alt={title ?? "Featured Image"}
                  width={400}
                  height={400}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          )}
          <Grid item xs={12} md={8}>
            <Typography variant="h3" component="h1" gutterBottom>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="h6" color="text.secondary" gutterBottom>
                {subtitle}
              </Typography>
            )}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              mt={1}
              mb={2}
            >
              <Typography variant="body2" color="text.secondary">
                {new Date(publishedDate ?? "").toLocaleDateString()}
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography variant="body2" color="text.secondary">
                15 min read
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              {tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" />
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={6} alignItems="flex-start">
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: { xs: "none", md: "block" },
              position: "sticky",
              top: 160,
              alignSelf: "start",
              maxHeight: "calc(100vh - 160px)",
              overflowY: "auto",
            }}
          >
            <TableOfContentsWrapper
              content={content}
              includeSubheadings={true}
            />
          </Grid>

          <Grid item xs={12} md={9}>
            <Box sx={{ typography: "body1" }}>
              {content && documentToReactComponents(content, renderOptions)}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
