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
                     conic-gradient(from -23.81deg at 72.82% 162.44%, ${theme.palette.background.default} -44.57deg, ${theme.palette.secondary.main} 7.76deg, ${theme.palette.primary.dark} 20.98deg, ${theme.palette.secondary.main} 52deg, ${theme.palette.secondary.dark} 88.68deg, ${theme.palette.secondary.main} 315.43deg, ${theme.palette.primary.dark} 367.76deg)`,
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
        Oops! The page you&apos;re looking for doesn&apos;t exist.
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
