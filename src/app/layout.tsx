// src/app/layout.tsx
import React from "react";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { headers } from "next/headers";
import SubdomainProvider from "@/contexts/SubdomainProvider";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "SSH Tech",
  description: "We craft bulletproof and modern Web3 Dapps",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const host = (await headers()).get("host") || "";
  const subdomain = host.split(".")[0];

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <ThemeRegistry>
          <SubdomainProvider value={subdomain}>
            {children}
            <Script
              async
              defer
              data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
              src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
            />
          </SubdomainProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
