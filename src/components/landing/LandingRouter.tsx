"use client";

import { useSubdomain } from "@/contexts/SubdomainContext";
import ProfileLanding from "./ProfileLanding";
import Web3Landing from "./Web3Landing";
import RoboticsLanding from "./RoboticsLanding";

export default function LandingRouter() {
  const subdomain = useSubdomain();

  if (!subdomain) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (subdomain === "sahil") return <ProfileLanding />;
  if (subdomain === "robotics") return <RoboticsLanding />;
  return <Web3Landing />;
}
