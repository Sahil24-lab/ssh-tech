// src/app/layout.tsx
import React from "react";
import { Exo_2, Play } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { headers } from "next/headers";
import SubdomainProvider from "@/contexts/SubdomainProvider";
import Script from "next/script";
import { getUmamiWebsiteId } from "./lib/getUmamiWebsiteId";
import type { Metadata } from "next";

const play = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteMetadataBySubdomain: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  ai: {
    title: "SSH Tech — AI Systems Integration & Automation",
    description:
      "SSH Tech builds production-grade AI systems that automate workflows, integrate with your stack, and deliver measurable ROI.",
    keywords: [
      "AI systems integration",
      "AI workflow automation",
      "enterprise AI consulting",
      "AI operational automation",
      "AI implementation",
    ],
  },
  web3: {
    title: "SSH Tech — Web3 Product & Engineering",
    description: "We craft bulletproof and modern Web3 Dapps.",
    keywords: ["web3 development", "smart contracts", "blockchain engineering"],
  },
  sahil: {
    title: "Sahil Harriram — SSH Tech",
    description:
      "Sahil Harriram — engineering, product, and systems leadership.",
    keywords: ["Sahil Harriram", "engineering", "product leadership"],
  },
  embedded: {
    title: "SSH Tech — Embedded Systems",
    description: "Embedded systems engineering and product delivery.",
    keywords: ["embedded systems", "firmware", "hardware engineering"],
  },
};

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
  const meta =
    siteMetadataBySubdomain[subdomain] ?? siteMetadataBySubdomain.ai;
  const ogImage = `${baseUrl}/Logo.svg`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: meta.title,
      template: "%s | SSH Tech",
    },
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      type: "website",
      url: baseUrl,
      siteName: "SSH Tech",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "SSH Tech",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@sahil_harriram",
      title: meta.title,
      description: meta.description,
      images: [ogImage],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const host = (await headers()).get("host") || "";
  const subdomain = host.split(".")[0];
  const websiteId = getUmamiWebsiteId(subdomain);
  const baseUrl = `https://${host || "ai.ssh-tech.xyz"}`;
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SSH Tech",
    url: baseUrl,
    logo: `${baseUrl}/Logo.svg`,
    founder: {
      "@type": "Person",
      name: "Sahil Harriram",
      url: "https://www.linkedin.com/in/sahil-harriram/",
      sameAs: [
        "https://x.com/sahil_harriram",
        "https://github.com/Sahil24-lab",
        "https://medium.com/@sahilharriram",
      ],
    },
    sameAs: [
      "https://x.com/sahil_harriram",
      "https://www.linkedin.com/in/sahil-harriram/",
      "https://github.com/Sahil24-lab",
      "https://medium.com/@sahilharriram",
    ],
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SSH Tech",
    url: baseUrl,
  };

  return (
    <html lang="en">
      <head>
        <meta name="emotion-insertion-point" content="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${play.variable} ${exo2.variable} antialiased`}>
        <ThemeRegistry>
          <SubdomainProvider value={subdomain}>
            {children}
            <Script
              async
              defer
              data-website-id={websiteId}
              src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            />
          </SubdomainProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
