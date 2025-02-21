"use client";

import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

export default function Custom404() {
  const theme = useTheme(); // Get theme colors

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: `linear-gradient(rgba(5, 11, 43, 0.7), rgba(5, 11, 43, 0.1)),
                     conic-gradient(from -23.81deg at 72.82% 162.44%, #0e534c -44.57deg, #067f71 7.76deg, #029f8c 20.98deg, #067f71 52deg, #0b645c 88.68deg, #067f71 315.43deg, #029f8c 367.76deg)`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "6rem", fontWeight: "bold" }}>
        404
      </Typography>
      <Typography
        variant="h5"
        sx={{ mb: 3, color: theme.palette.text.secondary }}
      >
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        component={Link}
        href="/"
        variant="contained"
        color="primary"
        sx={{
          mt: 2,
          textTransform: "none",
          fontSize: "1.1rem",
          padding: "10px 20px",
        }}
      >
        Go Home
      </Button>
    </Box>
  );
}
