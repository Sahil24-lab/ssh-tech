import type { Metadata } from "next";
import { JetBrains_Mono, Montserrat, Poppins } from "next/font/google";
import { BrandThemeProvider } from "@ssh/brand-ui";
import "./globals.css";

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

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "New Site",
  description: "A reusable brand-template site powered by @ssh/brand-ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="emotion-insertion-point" content="" />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <BrandThemeProvider>{children}</BrandThemeProvider>
      </body>
    </html>
  );
}
