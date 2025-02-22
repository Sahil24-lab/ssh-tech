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

  return entries.items as ProofOfWorkEntry[]; // Explicitly cast to the correct type
};
