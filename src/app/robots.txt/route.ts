import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 3600;

const baseUrlBySite: Record<string, string> = {
  web3: "https://web3.ssh-tech.xyz",
  sahil: "https://sahil.ssh-tech.xyz",
  profile: "https://sahil.ssh-tech.xyz",
  ai: "https://ai.ssh-tech.xyz",
  embedded: "https://embedded.ssh-tech.xyz",
};

function getBaseUrlFromHeaders() {
  const hdrs = headers();
  const host =
    hdrs.get("x-forwarded-host") ?? hdrs.get("host") ?? "";
  if (!host) {
    const site = process.env.NEXT_PUBLIC_SITE ?? "web3";
    return baseUrlBySite[site] ?? baseUrlBySite.web3;
  }

  const proto = hdrs.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}`;
}

export async function GET() {
  const baseUrl = getBaseUrlFromHeaders();
  const body = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${baseUrl}/sitemap.xml`,
    "Content-Signal: search=yes",
    "Content-Signal: ai-input=no",
    "Content-Signal: ai-train=no",
    "",
  ].join("\n");

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
