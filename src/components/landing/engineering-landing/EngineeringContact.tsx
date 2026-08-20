"use client";

import { useState } from "react";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import { Box, Stack, Typography } from "@mui/material";
import { BrandButton, Container } from "@ssh/brand-ui";
import BookCallModal from "@/components/book-call-modal/BookCallModal";

export default function EngineeringContact() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "background.paper",
        borderBlock: "1px solid",
        borderColor: "rgba(145, 254, 230, 0.14)",
        "&::before": {
          content: '\"\"',
          position: "absolute",
          width: { xs: 360, md: 560 },
          height: { xs: 360, md: 560 },
          top: { xs: "-58%", md: "-76%" },
          right: { xs: "-42%", md: "-8%" },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(7, 223, 193, 0.16) 0%, rgba(7, 223, 193, 0.07) 34%, transparent 70%)",
          filter: "blur(28px)",
          opacity: 0.5,
          transformOrigin: "center",
          animation: "engineering-contact-breathe 9s cubic-bezier(0.22, 1, 0.36, 1) infinite alternate",
          pointerEvents: "none",
        },
        "@keyframes engineering-contact-breathe": {
          from: {
            opacity: 0.42,
            transform: "scale(0.94)",
          },
          to: {
            opacity: 0.68,
            transform: "scale(1.06)",
          },
        },
        "@media (prefers-reduced-motion: reduce)": {
          "&::before": {
            animation: "none",
            opacity: 0.52,
            transform: "none",
          },
        },
      }}
    >
      <Container
        size="wide"
        sx={{
          py: { xs: 9, md: 14 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) auto" },
            gap: { xs: 5, md: 8 },
            alignItems: "center",
          }}
        >
          <Stack spacing={2.5}>
            <Typography
              component="h2"
              variant="h2"
              sx={{ color: "text.primary", maxWidth: 820, textWrap: "balance" }}
            >
              Bring us the hard system problem.
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(239, 254, 235, 0.7)", maxWidth: 670 }}>
              If it sits between software, hardware and the way people work, we should talk.
            </Typography>
          </Stack>

          <BrandButton
            label="Start a project"
            size="large"
            endIcon={<ArrowForwardRounded />}
            onClick={() => setContactOpen(true)}
            sx={{
              width: { xs: "100%", sm: "fit-content" },
              minWidth: { sm: 280, md: 320 },
              minHeight: 56,
              px: 4,
              justifySelf: { sm: "start", md: "end" },
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          />
        </Box>
      </Container>

      <BookCallModal open={contactOpen} handleClose={() => setContactOpen(false)} />
    </Box>
  );
}
