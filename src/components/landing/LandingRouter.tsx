"use client";

import ProfileLanding from "./ProfileLanding";
import Web3Landing from "./Web3Landing";
import RoboticsLanding from "./RoboticsLanding";
import { useSubdomain } from "@/contexts/SubdomainContexts";

export default function LandingRouter() {
  const subdomain = useSubdomain();

  if (!subdomain) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (subdomain === "profile") return <ProfileLanding />;
  if (subdomain === "robotics") return <RoboticsLanding />;
  return <Web3Landing />;
}
