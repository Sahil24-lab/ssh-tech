import { notFound } from "next/navigation";
import {
  fetchAllSlugs,
  fetchEntryBySlug,
} from "../../lib/contentful/contentful";
import ProofOfWorkPage from "./ProofOfWorkPage";
import { Metadata } from "next";

export const revalidate = 60;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  console.log("Resolved params:", resolvedParams);

  const project = await fetchEntryBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <ProofOfWorkPage project={project} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  console.log("Resolved metadata params:", resolvedParams);

  return {
    title: `Project - ${resolvedParams.slug}`,
    description: `Details about ${resolvedParams.slug}`,
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = await fetchAllSlugs();
  return slugs.map((slug: string) => ({ slug }));
}
