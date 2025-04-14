import { Entry, EntrySkeletonType } from "contentful";

//
// Shared Asset & Rich Text Types
//

export interface ContentfulFile {
  url: string;
  details?: {
    size?: number;
    image?: {
      width: number;
      height: number;
    };
  };
  fileName?: string;
  contentType?: string;
}

export interface ContentfulImageAsset {
  metadata?: object;
  sys: { id: string };
  fields: {
    title?: string;
    description?: string;
    file: ContentfulFile;
  };
}

export interface RichTextNode {
  nodeType: string;
  content: RichTextNode[] | string;
  value?: string;
  data?: any;
}

export interface RichTextDocument {
  nodeType: "document";
  data: object;
  content: RichTextNode[];
}

//
// Proof of Work Types
//

export interface ProofOfWorkFields {
  title: string;
  subtitle?: string;
  achievements?: string[];
  projectLogo?: ContentfulImageAsset;
  description: string;
  image?: ContentfulImageAsset;
  slug?: string;
  demo?: string;
  tags?: string[];
  screenshots?: ContentfulImageAsset[];
  github?: RichTextDocument;
  demoVideo?: string;
}

export interface ProofOfWorkSkeleton extends EntrySkeletonType {
  fields: ProofOfWorkFields;
  contentTypeId: "proofOfWork";
}

export type ProofOfWorkEntry = Entry<ProofOfWorkSkeleton>;

/* ──────────────────────────────────────────────
   2) SEO: Skeleton & Entry
   ──────────────────────────────────────────────
   If you have a `contentTypeId = "componentSeo"`,
   define its fields + skeleton like so:
────────────────────────────────────────────── */

export interface SEOFields {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: ContentfulImageAsset;
}

export interface SEOSkeleton extends EntrySkeletonType {
  contentTypeId: "componentSeo";
  fields: SEOFields;
}

export type SEOEntry = Entry<SEOSkeleton>;

/* ──────────────────────────────────────────────
   3) BLOG POST: Skeleton & Entry
   ──────────────────────────────────────────────
   If you have a `contentTypeId = "pageBlogPost"`,
   define its fields + skeleton like so:
────────────────────────────────────────────── */

export interface BlogPostFields {
  internalName?: string;
  slug?: string;
  seoFields?: SEOEntry;
  domainScope?: string[];
  publishedDate?: string;
  title?: string;
  shortDescription?: string; // renamed from subtitle to match Contentful
  featuredImage?: ContentfulImageAsset;
  content?: RichTextDocument;
  relatedBlogPosts?: BlogPostEntry[];
  featured?: boolean;
  tags?: string[];
}

export interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: "pageBlogPost";
  fields: BlogPostFields;
}

export type BlogPostEntry = Entry<BlogPostSkeleton>;
