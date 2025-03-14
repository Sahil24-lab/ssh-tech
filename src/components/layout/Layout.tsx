// Layout.tsx
"use client";

import { Box, Container } from "@mui/material";
import Header from "./header/Header";
import Footer from "./footer/Footer";

// Removed the loading spinner to avoid hydration mismatch.
// This ensures server and client see the same markup.
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
      <Container
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: { xs: "64px", md: "80px", lg: "100px" },
          paddingX: { xs: 2, sm: 4, md: 6 },
          paddingBottom: 2,
          margin: "0 auto",
          maxWidth: {
            xs: "95%",
            sm: "90%",
            md: "1100px",
            lg: "1400px",
            xl: "1600px",
          },
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
