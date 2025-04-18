"use client";

import { Container } from "@mui/material";

export default function ConstrainedContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingX: { xs: 2, sm: 4, md: 6 },
        paddingBottom: 2,
        margin: "0 auto",
        maxWidth: {
          xs: "95%",
          sm: "90%",
          md: "100%",
          lg: "1200px",
          xl: "1400px",
          xxl: "1600px",
        },
      }}
    >
      {children}
    </Container>
  );
}
