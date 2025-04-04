import { Entry, EntrySkeletonType } from "contentful";

// Asset file structure
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

// Asset structure
export interface ContentfulImageAsset {
  metadata?: object;
  sys: { id: string };
  fields: {
    title?: string;
    description?: string;
    file: ContentfulFile;
  };
}

// RichText type for 'github' field
export interface RichTextNode {
  nodeType: string;
  content: RichTextNode[] | string;
  data?: any;
}

// Complete structure for ProofOfWork content
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
  github?: {
    data: {};
    content: RichTextNode[];
    nodeType: "document";
  };
  demoVideo?: string;
}

// Skeleton for Contentful entry
export interface ProofOfWorkSkeleton extends EntrySkeletonType {
  fields: ProofOfWorkFields;
  contentTypeId: "proofOfWork";
}

export type ProofOfWorkEntry = Entry<ProofOfWorkSkeleton>;
