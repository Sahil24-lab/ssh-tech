import { getAllBlogPosts, getBlogPostBySlug } from "@/app/lib/contentful/blog";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  INLINES,
  Document as RichTextDocument,
} from "@contentful/rich-text-types";
import Layout from "@/components/layout/Layout";
import {
  Box,
  Typography,
  Stack,
  Divider,
  Breadcrumbs,
  Link as MuiLink,
  Chip,
  Grid,
} from "@mui/material";
import Image from "next/image";
import { Options } from "@contentful/rich-text-react-renderer";
import { unwrapStringField, unwrapRichTextField } from "@/utils/unwrapFields";
import { ContentfulImageAsset, SEOEntry } from "@/app/types/contentful";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/table-of-contents/TableOfContents";
import StickyWrapper from "@/components/table-of-contents/StickyWrapper";
import GlassCardDark from "@/components/card/glass-card-dark/GlassCardDark";
export const revalidate = 3600;
export const dynamic = "force-static";
import PostHeader from "../components/post-header/PostHeader";

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const title = unwrapStringField(post.fields.title);
  const seoEntry = post.fields.seoFields as SEOEntry | undefined;
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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const { fields } = post;
  const title = unwrapStringField(fields.title);
  const subtitle = unwrapStringField(fields.shortDescription);
  const publishedDate = unwrapStringField(fields.publishedDate);
  const tags = Array.isArray(fields.tags) ? fields.tags : [];
  const content = unwrapRichTextField(fields.content);
  const featuredImage = (
    fields.featuredImage as ContentfulImageAsset | undefined
  )?.fields?.file?.url;

  // Rich text rendering options.
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
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          py: 6,
          scrollBehavior: "smooth",
        }}
      >
        {/* Breadcrumb */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <MuiLink href="/blog">Blog</MuiLink>
          <Typography color="text.primary">{title}</Typography>
        </Breadcrumbs>
        {/*  PostHeader*/}
        <PostHeader
          title={unwrapStringField(fields.title) ?? "Untitled"}
          subtitle={unwrapStringField(fields.shortDescription)}
          featuredImage={
            (fields.featuredImage as ContentfulImageAsset | undefined)?.fields
              ?.file?.url
          }
          publishedDate={
            unwrapStringField(fields.publishedDate) ?? new Date().toISOString()
          }
          tags={Array.isArray(fields.tags) ? fields.tags : []}
        />

        {/* Main layout: Table of Contents and Content */}
        <Box
          sx={{
            mt: 5,
            padding: { xs: "1rem", md: "3rem" },
            borderRadius: "16px",
            border: `1px solid rgba(255, 255, 255, 0.15)`,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            backgroundColor: "background.paper",
          }}
        >
          <Grid container spacing={4} alignItems="flex-start">
            {/* Sidebar: Wrap the TOC in StickyWrapper.
         The offset here should equal your header height plus any extra spacing.
         In this example, 96px is used (e.g. 80px header + 16px extra). */}
            <Grid
              item
              xs={12}
              md={3.5}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <StickyWrapper offset={96}>
                <TableOfContents content={content} includeSubheadings />
              </StickyWrapper>
            </Grid>

            {/* Main Content */}
            <Grid item xs={12} md={8.5}>
              <Box sx={{ typography: "body1" }}>
                {content && documentToReactComponents(content, renderOptions)}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
}
