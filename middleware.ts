// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const subdomain = hostname.split(".")[0]; // e.g. web3, profile, robotics

  const response = NextResponse.next();
  response.cookies.set("subdomain", subdomain);
  console.log("Detected subdomain:", subdomain);
  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)"],
};
