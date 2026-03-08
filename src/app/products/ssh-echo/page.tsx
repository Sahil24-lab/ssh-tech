import { headers } from "next/headers";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import FullWidthContainer from "@/components/layout/container/full-width-container";
import SSHEchoBlueprint from "@/components/products/ssh-echo/SSHEchoBlueprint";
import { Box } from "@mui/material";

async function getBaseUrl() {
  const hdrs = await headers();
  const host =
    hdrs.get("x-forwarded-host") ?? hdrs.get("host") ?? "ai.ssh-tech.xyz";
  const proto = hdrs.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}`;
}

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl();
  return {
    title: "SSH Echo",
    description:
      "SSH Echo is a next-generation open-claw style agentic system engineered for hardened security and optimal token management.",
    alternates: {
      canonical: `${baseUrl}/products/ssh-echo`,
    },
    openGraph: {
      url: `${baseUrl}/products/ssh-echo`,
      title: "SSH Echo — SSH Tech",
    },
  };
}

export default function SSHEchoPage() {
  return (
    <Layout>
      <FullWidthContainer>
        <Box sx={{ py: { xs: 3, md: 6 } }}>
          <SSHEchoBlueprint variant="full" />
        </Box>
      </FullWidthContainer>
    </Layout>
  );
}
