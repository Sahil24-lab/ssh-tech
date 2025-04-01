import React from "react";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { cookies } from "next/headers";
import { SubdomainContext } from "@/contexts/SubdomainContexts";

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
  const cookieStore = await cookies();
  const subdomain = cookieStore.get("subdomain")?.value;

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <ThemeRegistry>
          <SubdomainContext.Provider value={subdomain}>
            {children}
          </SubdomainContext.Provider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
