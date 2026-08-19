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
        backgroundColor: "rgba(8, 24, 36, 0.94)",
        borderTop: "1px solid",
        borderColor: "divider",
        "&::before": {
          content: '\"\"',
          position: "absolute",
          width: 520,
          height: 520,
          right: "-12%",
          bottom: "-70%",
          borderRadius: "50%",
          backgroundColor: "rgba(7, 223, 193, 0.12)",
          filter: "blur(100px)",
          pointerEvents: "none",
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
