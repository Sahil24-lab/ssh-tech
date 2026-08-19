"use client";

import { useState } from "react";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import { Box, Stack, Typography } from "@mui/material";
import { BrandButton, Container } from "@ssh/brand-ui";
import BookCallModal from "@/components/book-call-modal/BookCallModal";
import EngineeringOrbitScene from "./EngineeringOrbitScene";
import EngineeringSignalField from "./EngineeringSignalField";

export default function EngineeringHero() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 78% 28%, rgba(7, 223, 193, 0.12), transparent 34%), linear-gradient(180deg, rgba(9, 31, 44, 0.84), rgba(8, 24, 36, 0.5))",
        "&::before": {
          content: '\"\"',
          position: "absolute",
          width: { xs: 360, md: 620 },
          height: { xs: 360, md: 620 },
          top: { xs: "44%", md: "8%" },
          right: { xs: "-42%", md: "-10%" },
          borderRadius: "50%",
          backgroundColor: "rgba(14, 83, 76, 0.34)",
          filter: "blur(100px)",
          pointerEvents: "none",
        },
      }}
    >
      <EngineeringSignalField />

      <Container
        size="wide"
        sx={{
          minHeight: { xs: "auto", md: 560, lg: 600 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.92fr) minmax(480px, 1.08fr)" },
          alignItems: "center",
          gap: { xs: 5, md: 5, lg: 8 },
          py: { xs: 8, md: 6, lg: 8 },
        }}
      >
        <Stack spacing={{ xs: 3, md: 4 }} sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              width: 56,
              height: 2,
              bgcolor: "primary.main",
            }}
          />

          <Typography
            component="h1"
            sx={{
              maxWidth: 650,
              fontFamily: "var(--font-exo2), sans-serif",
              fontSize: { xs: "clamp(2.55rem, 11vw, 3.7rem)", md: "clamp(3.15rem, 4.5vw, 3.9rem)" },
              fontWeight: 600,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "text.primary",
              textWrap: "balance",
            }}
          >
            Intelligent systems for real operations.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 590,
              color: "rgba(239, 254, 235, 0.74)",
              fontSize: { xs: "1rem", md: "1.12rem" },
              lineHeight: 1.65,
              textWrap: "pretty",
            }}
          >
            We build software, robotics and connected systems that improve how complex work gets done.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ sm: "center" }}>
            <BrandButton
              label="Discuss a project"
              size="large"
              glow
              endIcon={<ArrowForwardRounded />}
              onClick={() => setContactOpen(true)}
              sx={{ minHeight: 52, px: 3.5 }}
            />
            <BrandButton
              label="See our work"
              href="#work"
              variant="outlined"
              size="large"
              sx={{ minHeight: 52, px: 3.5 }}
            />
          </Stack>
        </Stack>

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: { xs: 520, md: 520, lg: 560 },
            justifySelf: "center",
            alignSelf: "center",
            mt: { xs: -2, md: 0 },
            mb: { xs: -5, md: -3 },
          }}
        >
          <EngineeringOrbitScene />
        </Box>
      </Container>

      <BookCallModal open={contactOpen} handleClose={() => setContactOpen(false)} />
    </Box>
  );
}
