import Layout from "@/components/layout/Layout";
import { Typography, Box } from "@mui/material";
import ConstrainedContainer from "@/components/layout/container/constrained-container";
import type { Metadata } from "next";
import { headers } from "next/headers";

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
    title: "AI Tools & Resources",
    description:
      "Curated AI tools, frameworks, and resources for building operational AI systems.",
    alternates: {
      canonical: `${baseUrl}/tools-and-resources`,
    },
    openGraph: {
      url: `${baseUrl}/tools-and-resources`,
      title: "AI Tools & Resources — SSH Tech",
    },
  };
}
export default function AboutPage() {
  return (
    <Layout>
      <ConstrainedContainer>
        <Box
          sx={{
            flexGrow: 1,
            minHeight: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h1">Coming Soon</Typography>
        </Box>
      </ConstrainedContainer>
    </Layout>
  );
}
