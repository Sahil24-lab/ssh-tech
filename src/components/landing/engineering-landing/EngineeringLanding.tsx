"use client";

import { Box } from "@mui/material";
import Layout from "@/components/layout/Layout";
import EngineeringCapabilities from "./EngineeringCapabilities";
import EngineeringContact from "./EngineeringContact";
import EngineeringEngagement from "./EngineeringEngagement";
import EngineeringFounder from "./EngineeringFounder";
import EngineeringHero from "./EngineeringHero";
import EngineeringIntelligenceFlow from "./EngineeringIntelligenceFlow";
import EngineeringSelectedWork from "./EngineeringSelectedWork";
import EngineeringTestimonials from "./EngineeringTestimonials";

export default function EngineeringLanding() {
  return (
    <Layout flushFooter>
      <Box
        sx={{
          backgroundColor: "background.default",
          backgroundImage: `
            radial-gradient(ellipse 72% 42% at 14% 24%, rgba(14, 83, 76, 0.34), transparent 70%),
            radial-gradient(ellipse 64% 46% at 88% 58%, rgba(6, 127, 113, 0.18), transparent 72%),
            radial-gradient(ellipse 52% 34% at 38% 88%, rgba(11, 100, 92, 0.16), transparent 74%),
            linear-gradient(120deg, #091f2c 0%, #0E534C 52%, #091f2c 100%)
          `,
          backgroundAttachment: { xs: "scroll", md: "fixed" },
          backgroundSize: "cover",
          isolation: "isolate",
          "& section[id]": {
            scrollMarginTop: { xs: "72px", md: "74px" },
          },
        }}
      >
        <EngineeringHero />
        <EngineeringCapabilities />
        <EngineeringIntelligenceFlow />
        <EngineeringSelectedWork />
        <EngineeringEngagement />
        <EngineeringTestimonials />
        <EngineeringFounder />
        <EngineeringContact />
      </Box>
    </Layout>
  );
}
