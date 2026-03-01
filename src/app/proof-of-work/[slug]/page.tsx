import { notFound } from "next/navigation";
import {
  fetchAllSlugs,
  fetchEntryBySlug,
} from "../../lib/contentful/contentful";
import ProofOfWorkPage from "./ProofOfWorkPage";
import { Metadata } from "next";
import { headers } from "next/headers";
import { ProofOfWorkFields, ContentfulImageAsset } from "../../types/contentful";

export const revalidate = 60;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = await fetchEntryBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const hdrs = await headers();
  const host =
    hdrs.get("x-forwarded-host") ?? hdrs.get("host") ?? "ai.ssh-tech.xyz";
  const proto = hdrs.get("x-forwarded-proto") ?? "https";
  const baseUrl = `${proto}://${host}`;

  const fields = project.fields as ProofOfWorkFields;
  const heroImage = fields.image as ContentfulImageAsset | undefined;
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: fields.title,
    creator: {
      "@type": "Organization",
      name: "SSH Tech",
      url: baseUrl,
    },
    description: fields.subtitle ?? fields.description,
    url: `${baseUrl}/proof-of-work/${resolvedParams.slug}`,
    dateCreated: project.sys.createdAt,
    dateModified: project.sys.updatedAt,
    image: heroImage?.fields?.file?.url
      ? `https:${heroImage.fields.file.url}`
      : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudySchema),
        }}
      />
      <ProofOfWorkPage project={project} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = await fetchEntryBySlug(resolvedParams.slug);
  if (!project) {
    return {
      title: "Case Study — SSH Tech",
      description: "AI case study by SSH Tech.",
    };
  }

  const hdrs = await headers();
  const host =
    hdrs.get("x-forwarded-host") ?? hdrs.get("host") ?? "ai.ssh-tech.xyz";
  const proto = hdrs.get("x-forwarded-proto") ?? "https";
  const baseUrl = `${proto}://${host}`;

  const fields = project.fields as ProofOfWorkFields;
  const heroImage = fields.image as ContentfulImageAsset | undefined;
  const description =
    fields.subtitle ?? fields.description ?? "AI case study by SSH Tech.";
  const title = fields.title ?? `Case Study — ${resolvedParams.slug}`;

  return {
    title: `${title} — AI Case Study`,
    description: description.slice(0, 160),
    alternates: {
      canonical: `${baseUrl}/proof-of-work/${resolvedParams.slug}`,
    },
    openGraph: {
      url: `${baseUrl}/proof-of-work/${resolvedParams.slug}`,
      title: `${title} — AI Case Study`,
      description: description.slice(0, 160),
      images: heroImage?.fields?.file?.url
        ? [`https:${heroImage.fields.file.url}`]
        : undefined,
    },
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const slugs = await fetchAllSlugs();
    return slugs.map((slug: string) => ({ slug }));
  } catch (err) {
    console.error("Failed to load Proof of Work slugs.", err);
    return [];
  }
}
