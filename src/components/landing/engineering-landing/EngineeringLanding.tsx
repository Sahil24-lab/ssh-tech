"use client";

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
      <EngineeringHero />
      <EngineeringCapabilities />
      <EngineeringIntelligenceFlow />
      <EngineeringSelectedWork />
      <EngineeringEngagement />
      <EngineeringTestimonials />
      <EngineeringFounder />
      <EngineeringContact />
    </Layout>
  );
}
