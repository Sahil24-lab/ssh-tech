"use client";

import { Box } from "@mui/material";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout({
  children,
  flushFooter = false,
}: {
  children: React.ReactNode;
  flushFooter?: boolean;
}) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flex: 1,
          width: "100%",
          mx: "auto",
          mt: {
            xs: "72px",
            md: "74px",
            lg: "72px",
          },
          mb: flushFooter
            ? 0
            : {
                xs: "80px",
                md: "100px",
              },
        }}
      >
        {children}
      </Box>

      <Footer mt={flushFooter ? 0 : 4} />
    </Box>
  );
}
