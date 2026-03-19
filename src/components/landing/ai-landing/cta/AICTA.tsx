"use client";

import { Typography, Button, Box, useTheme } from "@mui/material";
import { useState } from "react";
import BookCallModal from "@/components/book-call-modal/BookCallModal";

const AICTA = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        minHeight: "86vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.paper",
        borderTop: `1px solid ${theme.palette.secondary.dark}`,
        borderBottom: `1px solid ${theme.palette.secondary.dark}`,
        py: { xs: 12, md: 18 },
        px: { xs: 4, md: 8 },
        textAlign: "center",
      }}
    >
      {/* Glow orbs */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: { xs: 620, md: 1200 },
          height: { xs: 620, md: 1200 },
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(ellipse at center, ${theme.palette.primary.main}10 0%, ${theme.palette.primary.main}05 35%, transparent 75%)`,
          pointerEvents: "none",
          zIndex: 0,
          filter: "blur(6px)",
          animation: "ctaGlowPulse 10.5s ease-in-out infinite",
          "@keyframes ctaGlowPulse": {
            "0%": {
              transform: "translate(-50%, -50%) scale(1)",
              opacity: 0.35,
              filter: "blur(6px)",
            },
            "32%": {
              transform: "translate(-50%, -50%) scale(1.06)",
              opacity: 0.48,
              filter: "blur(8px)",
            },
            "58%": {
              transform: "translate(-50%, -50%) scale(0.98)",
              opacity: 0.38,
              filter: "blur(5px)",
            },
            "78%": {
              transform: "translate(-50%, -50%) scale(1.08)",
              opacity: 0.5,
              filter: "blur(9px)",
            },
            "100%": {
              transform: "translate(-50%, -50%) scale(1)",
              opacity: 0.35,
              filter: "blur(6px)",
            },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: { xs: 900, md: 1600 },
          height: { xs: 900, md: 1600 },
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(ellipse at center, ${theme.palette.primary.main}08 0%, ${theme.palette.primary.main}04 40%, transparent 80%)`,
          pointerEvents: "none",
          zIndex: 0,
          filter: "blur(10px)",
          opacity: 0.28,
          animation: "ctaGlowDrift 14s ease-in-out infinite",
          "@keyframes ctaGlowDrift": {
            "0%": {
              transform: "translate(-50%, -50%) scale(1.02)",
              opacity: 0.24,
            },
            "35%": {
              transform: "translate(-50%, -50%) scale(1.1)",
              opacity: 0.34,
            },
            "64%": {
              transform: "translate(-50%, -50%) scale(1.03)",
              opacity: 0.28,
            },
            "100%": {
              transform: "translate(-50%, -50%) scale(1.02)",
              opacity: 0.24,
            },
          },
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.78rem",
            letterSpacing: "0.1em",
            color: theme.palette.primary.main,
            textTransform: "uppercase",
            mb: 3,
          }}
        >
          Let&apos;s talk
        </Typography>

        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 700,
            color: theme.palette.text.primary,
            mb: 3,
            maxWidth: 680,
            mx: "auto",
          }}
        >
          Ready to integrate AI?
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "text.secondary",
            mb: 6,
            maxWidth: 520,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Book a Discovery Call. We&apos;ll assess the highest ROI for your
          organisation and show you how to get there.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
            maxWidth: { xs: 320, sm: "none" },
            mx: "auto",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setOpen(true)}
            sx={{
              fontWeight: 700,
              px: 5,
              boxShadow: `0 0 28px ${theme.palette.primary.main}30`,
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: `0 0 42px ${theme.palette.primary.main}55`,
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            Book a Discovery Call
          </Button>
        </Box>
      </Box>

      <BookCallModal open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
};

export default AICTA;
