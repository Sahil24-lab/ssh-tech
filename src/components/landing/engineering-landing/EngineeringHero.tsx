"use client";

import { useState } from "react";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import { Box, Stack, Typography } from "@mui/material";
import { BrandButton, Container, brandTokens } from "@ssh/brand-ui";
import BookCallModal from "@/components/book-call-modal/BookCallModal";
import EngineeringOrbitScene from "./EngineeringOrbitScene";

export default function EngineeringHero() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container
        size="wide"
        sx={{
          minHeight: { xs: "auto", md: "calc(100svh - 72px)" },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.02fr) minmax(420px, 0.98fr)" },
          alignItems: "center",
          gap: { xs: 4, md: 3, lg: 6 },
          py: { xs: 8, sm: 10, md: 8, lg: 10 },
        }}
      >
        <Stack spacing={{ xs: 3, md: 3.5 }} sx={{ position: "relative", zIndex: 1 }}>
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
              maxWidth: 780,
              fontFamily: "var(--font-exo2), sans-serif",
              fontSize: { xs: "clamp(2.6rem, 12vw, 4rem)", md: "clamp(3.3rem, 5.25vw, 5.25rem)" },
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              color: "text.primary",
              textWrap: "balance",
            }}
          >
            Engineering software and intelligent systems for complex physical operations.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 660,
              color: "text.secondary",
              fontSize: { xs: "1.05rem", md: "1.18rem" },
              lineHeight: 1.7,
              textWrap: "pretty",
            }}
          >
            SSH Tech combines software, embedded systems, controls and applied intelligence around the way an operation actually works.
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
              label="See selected work"
              href="#work"
              variant="outlined"
              size="large"
              sx={{ minHeight: 52, px: 3.5 }}
            />
          </Stack>

          <Typography
            variant="body2"
            sx={{
              maxWidth: 610,
              pt: 1,
              color: brandTokens.color.text.muted,
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: { xs: "0.78rem", md: "0.84rem" },
              lineHeight: 1.7,
            }}
          >
            Mechatronics-led delivery across robotics, electric vehicles, industrial software and connected systems.
          </Typography>
        </Stack>

        <Box
          sx={{
            width: "100%",
            maxWidth: 760,
            justifySelf: "center",
            alignSelf: "center",
            mt: { xs: -1, md: 0 },
            mb: { xs: -4, md: 0 },
          }}
        >
          <EngineeringOrbitScene />
        </Box>
      </Container>

      <BookCallModal open={contactOpen} handleClose={() => setContactOpen(false)} />
    </Box>
  );
}
