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
            linear-gradient(rgba(5, 11, 43, 0.7), rgba(5, 11, 43, 0.1)),
            conic-gradient(
              from -23.81deg at 72.82% 162.44%,
              #0E534C -44.57deg,
              #067F71 7.76deg,
              #029F8C 20.98deg,
              #067F71 52deg,
              #0B645C 88.68deg,
              #067F71 315.43deg,
              #029F8C 367.76deg
            )
          `,
          backgroundAttachment: "fixed",
          backgroundSize: "100%",
          backgroundPosition: "50% 0%",
          backgroundRepeat: "repeat",
          isolation: "isolate",
          "& section[id]": {
            scrollMarginTop: { xs: "72px", md: "74px" },
          },
        }}
      >
        <Box
          sx={{
            display: { xs: "block", lg: "grid" },
            height: { lg: "calc(100dvh - 72px)" },
            gridTemplateRows: { lg: "minmax(0, 1fr) auto" },
          }}
        >
          <EngineeringHero />
          <EngineeringCapabilities />
        </Box>
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
