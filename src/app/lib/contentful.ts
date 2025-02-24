// /lib/contentful.ts

import { createClient } from "contentful";
import { ProofOfWorkEntry, ProofOfWorkSkeleton } from "../types/contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const fetchEntries = async (): Promise<ProofOfWorkEntry[]> => {
  const entries = await client.getEntries<ProofOfWorkSkeleton>({
    content_type: "proofOfWork",
  });
  // Cast through unknown to avoid type incompatibility issues.
  return entries.items as unknown as ProofOfWorkEntry[];
};

export async function fetchAllSlugs(): Promise<string[]> {
  const response = await client.getEntries({
    content_type: "proofOfWork",
    select: ["fields.slug"],
  });

  // Filter out undefined values using a type guard.
  return response.items
    .map((item) => (item.fields as { slug?: string }).slug)
    .filter((slug): slug is string => Boolean(slug));
}

export async function fetchEntryBySlug(
  slug: string
): Promise<ProofOfWorkEntry | null> {
  const response = await client.getEntries({
    content_type: "proofOfWork",
    "fields.slug": slug,
    limit: 1,
  });

  if (response.items.length > 0) {
    // Cast through unknown to our ProofOfWorkEntry type.
    return response.items[0] as unknown as ProofOfWorkEntry;
  }
  return null;
}
