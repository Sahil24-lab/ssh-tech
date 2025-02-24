"use client";

import { useState, useEffect } from "react";
import { CircularProgress, Box, Container } from "@mui/material";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: `linear-gradient(rgba(5, 11, 43, 0.7), rgba(5, 11, 43, 0.1)),
                     conic-gradient(from -23.81deg at 72.82% 162.44%, #0e534c -44.57deg, #067f71 7.76deg, #029f8c 20.98deg, #067f71 52deg, #0b645c 88.68deg, #067f71 315.43deg, #029f8c 367.76deg)`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <Container
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: loading ? "center" : "flex-start",
          alignItems: "center",
          paddingTop: "64px",
          paddingBottom: 2,
          margin: "0 auto",
          maxWidth: "1200px",
        }}
      >
        {loading ? <CircularProgress size={50} /> : children}
      </Container>
      <Footer />
    </Box>
  );
}
