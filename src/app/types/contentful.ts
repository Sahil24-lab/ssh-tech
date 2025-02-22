import { Entry, EntrySkeletonType } from "contentful";

// Explicitly define the Asset structure
export interface ContentfulFile {
  url: string;
  details?: object;
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

// Define the Proof of Work content structure
export interface ProofOfWorkFields {
  title: string;
  description: string;
  image?: ContentfulImageAsset;
  demo?: string;
  slug?: string;
  tags?: string[];
  screenshots?: ContentfulImageAsset[];
  videoDemo?: ContentfulImageAsset[];
}

// Ensure the Content Type structure is correct
export interface ProofOfWorkSkeleton extends EntrySkeletonType {
  fields: ProofOfWorkFields;
  contentTypeId: "proofOfWork";
}

export type ProofOfWorkEntry = Entry<ProofOfWorkSkeleton>;
