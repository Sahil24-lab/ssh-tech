"use client";

import { Box } from "@mui/material";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: `linear-gradient(rgba(5, 11, 43, 0.7), rgba(5, 11, 43, 0.1)),
                     conic-gradient(from -23.81deg at 72.82% 162.44%, #0e534c -44.57deg, #067f71 7.76deg, #029f8c 20.98deg, #067f71 52deg, #0b645c 88.68deg, #067f71 315.43deg, #029f8c 367.76deg)`,
        backgroundSize: "100% auto",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
