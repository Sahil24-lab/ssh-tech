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
          backgroundColor: "background.paper",
          backgroundImage:
            "radial-gradient(circle at 88% 12%, rgba(7, 223, 193, 0.08), transparent 24%), radial-gradient(circle at 8% 62%, rgba(14, 83, 76, 0.22), transparent 28%)",
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
