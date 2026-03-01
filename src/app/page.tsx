import { headers } from "next/headers";
import type { Metadata } from "next";
import AILanding from "@/components/landing/ai-landing/AILanding";
import Web3Landing from "@/components/landing/Web3Landing";
import EmbeddedLanding from "@/components/landing/EmbeddedLanding";
import ProfileLanding from "@/components/landing/ProfileLanding";
import FAQSchema from "@/components/landing/ai-landing/faq/FAQSchema";
import AIServicesSchema from "@/components/landing/ai-landing/services/AIServicesSchema";

async function getHostContext() {
  const hdrs = await headers();
  const host =
    hdrs.get("x-forwarded-host") ?? hdrs.get("host") ?? "ai.ssh-tech.xyz";
  const proto = hdrs.get("x-forwarded-proto") ?? "https";
  const subdomain = host.split(".")[0];
  const baseUrl = `${proto}://${host}`;
  return { baseUrl, subdomain };
}

export async function generateMetadata(): Promise<Metadata> {
  const { baseUrl, subdomain } = await getHostContext();
  const metaBySubdomain: Record<string, { title: string; description: string }> =
    {
      ai: {
        title: "SSH Tech — Production AI for Real Operations",
        description:
          "We integrate AI into operational workflows, automate high-impact processes, and deliver measurable ROI.",
      },
      web3: {
        title: "SSH Tech — Web3 Product & Engineering",
        description: "We craft bulletproof and modern Web3 Dapps.",
      },
      sahil: {
        title: "Sahil Harriram — SSH Tech",
        description:
          "Sahil Harriram — engineering, product, and systems leadership.",
      },
      embedded: {
        title: "SSH Tech — Embedded Systems",
        description: "Embedded systems engineering and product delivery.",
      },
    };

  const meta = metaBySubdomain[subdomain] ?? metaBySubdomain.ai;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      url: baseUrl,
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function HomePage() {
  const { subdomain } = await getHostContext();
  const isAi = subdomain === "ai";
  const landing = (() => {
    if (subdomain === "sahil") return <ProfileLanding />;
    if (subdomain === "embedded") return <EmbeddedLanding />;
    if (subdomain === "ai") return <AILanding />;
    return <Web3Landing />;
  })();

  return (
    <>
      {isAi && (
        <>
          <FAQSchema />
          <AIServicesSchema />
        </>
      )}
      {landing}
    </>
  );
}
