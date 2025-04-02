import GlassCard from "@/components/card/glass-card/GlassCard";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function CallToAction() {
  return (
    <GlassCard
      sx={{
        px: 10,
        py: 10,
        backgroundColor: "background.paper",
        textAlign: "center",
        borderRadius: "12px",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Let's Work Together
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: 700, mx: "auto" }}>
        Looking for expertise in blockchain development, technical leadership,
        or product strategy? <br></br> <br></br>I'm available for fully remote
        part-time and full-time roles in fullstack, f advisory roles.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="contained"
          size="large"
          component="a"
          href="mailto:sahil.harriram@gmail.com"
          sx={{
            backgroundColor: "primary.main",
            "&:hover": { backgroundColor: "primary.dark" },
          }}
        >
          Email Me
        </Button>
        <Button
          variant="outlined"
          size="large"
          component="a"
          href="https://calendly.com/sahil-harriram"
          target="_blank"
          sx={{ borderColor: "primary.light", color: "primary.light" }}
        >
          Schedule a Call
        </Button>
      </Box>
    </GlassCard>
  );
}
