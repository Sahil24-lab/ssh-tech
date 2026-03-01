"use client";

import { Typography, Grid, Button, Box, Chip, useTheme } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";

const projects = [
  {
    category: "Financial Services",
    title: "Talk to a Broker",
    description:
      "Built an AI-assisted lending workflow that extracts lender policy, evaluates borrower scenarios, and produces structured recommendations through a review-ready pipeline. Designed for speed, consistency, and operational scale.",
    highlights: [
      "Faster policy assessment",
      "More consistent recommendations",
    ],
  },
  {
    category: "Member Platform",
    title: "TEN",
    description:
      "Structured TEN's legal content and member delivery workflows across restricted content, forms, product setup, and publishing operations to make launches more reliable and easier to manage.",
    highlights: ["Improved content operations", "Cleaner member delivery flow"],
  },
  {
    category: "Gaming Platform",
    title: "Playlobby",
    description:
      "Led technical delivery for a broader platform rebuild, supporting new game launches, partner integrations, and commercial optimisation that drove significant growth and paid conversion.",
    highlights: ["400% user growth", "60% paid conversions"],
  },
];

const AIProofOfWork = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        px: { xs: 4, sm: 4, md: 8, lg: 8, xl: 8, xxl: 20 },
        py: { xs: 10, sm: 14, md: 20 },
        backgroundColor: "background.paper",
      }}
    >
      <Typography
        variant="body2"
        align="center"
        sx={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.73rem",
          color: "primary.main",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          mb: 2,
        }}
      >
        // proof of work
      </Typography>

      <Typography
        variant="h2"
        component="h2"
        sx={{
          color: "text.primary",
          fontWeight: 700,
          mb: 2,
          textAlign: "center",
        }}
      >
        Deployed. Measured. Running.
      </Typography>

      <Typography
        variant="h5"
        align="center"
        sx={{ mb: 16, color: "text.secondary" }}
      >
        Systems in production delivering measurable ROI for real organisations.
      </Typography>

      <Grid
        container
        spacing={{ xs: 4, sm: 6, md: 4 }}
        justifyContent="center"
        alignItems="stretch"
      >
        {projects.map((project, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
            <GlassCard
              sx={{
                p: 4,
                height: "100%",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "box-shadow 0.3s ease",
                "&:hover": {
                  boxShadow: `0px 0px 18px 4px ${theme.palette.primary.main}40`,
                },
              }}
            >
              {/* Category tag */}
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "primary.main",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  mb: 1,
                }}
              >
                {project.category}
              </Typography>

              {/* Title */}
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                {project.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.9rem", md: "0.95rem" },
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                {project.description}
              </Typography>

              {/* Highlights */}
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {project.highlights.map((highlight) => (
                  <Chip
                    key={highlight}
                    label={highlight}
                    color="primary"
                    variant="outlined"
                    sx={{
                      fontWeight: 600,
                      borderColor: "primary.main",
                      color: "primary.main",
                      "& .MuiChip-label": {
                        px: 1.5,
                      },
                    }}
                  />
                ))}
              </Box>
            </GlassCard>
          </Grid>
        ))}
      </Grid>

      {/* CTA */}
      <Box
        sx={{
          mt: { xs: 8, md: 10 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{ fontWeight: 700 }}
          href="/proof-of-work"
        >
          VIEW PROOF OF WORK
        </Button>
      </Box>
    </Box>
  );
};

export default AIProofOfWork;
