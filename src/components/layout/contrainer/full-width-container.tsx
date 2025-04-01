"use client";

import { Box } from "@mui/material";

export default function FullWidthContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
}
