"use client";

import { useState } from "react";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import MailOutlineRounded from "@mui/icons-material/MailOutlineRounded";
import { Box, Stack, Typography } from "@mui/material";
import { BrandButton, Container, brandTokens } from "@ssh/brand-ui";
import BookCallModal from "@/components/book-call-modal/BookCallModal";

export default function EngineeringContact() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        backgroundColor: brandTokens.color.secondary.dark,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container
        size="wide"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.25fr) minmax(260px, 0.75fr)" },
          gap: { xs: 5, md: 8 },
          alignItems: "end",
          py: { xs: 8, md: 12, lg: 14 },
        }}
      >
        <Stack spacing={2.5}>
          <Typography component="h2" variant="h2" sx={{ color: "text.primary", maxWidth: 820, textWrap: "balance" }}>
            Bring the awkward system problem.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 670 }}>
            If the challenge sits between software, hardware and the way people actually operate, that is a useful place to start.
          </Typography>
        </Stack>

        <Stack spacing={2} alignItems={{ xs: "stretch", sm: "flex-start", md: "stretch" }}>
          <BrandButton
            label="Discuss a project"
            size="large"
            endIcon={<ArrowForwardRounded />}
            onClick={() => setContactOpen(true)}
            sx={{ minHeight: 52 }}
          />
          <BrandButton
            label="Email Sahil"
            href="mailto:sahil.harriram@gmail.com"
            variant="outlined"
            size="large"
            startIcon={<MailOutlineRounded />}
            sx={{ minHeight: 52 }}
          />
        </Stack>
      </Container>

      <BookCallModal open={contactOpen} handleClose={() => setContactOpen(false)} />
    </Box>
  );
}
