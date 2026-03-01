"use client";

import { useSubdomain } from "@/contexts/SubdomainContext";
import ProfileLanding from "./ProfileLanding";
import Web3Landing from "./Web3Landing";
import EmbeddedLanding from "./EmbeddedLanding";
import AILanding from "./ai-landing/AILanding";

export default function LandingRouter() {
  const subdomain = useSubdomain();

  if (!subdomain) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (subdomain === "sahil") return <ProfileLanding />;
  if (subdomain === "embedded") return <EmbeddedLanding />;
  if (subdomain === "ai") return <AILanding />;
  return <Web3Landing />;
}
