"use client";

import { Typography, Grid, Box, Chip, useTheme } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";

const services = [
  {
    label: "01 — AUTOMATE",
    title: "Operational Automation",
    description:
      "Eliminate repetitive manual processes across your organisation. We build AI-powered workflows that handle intake, classification, document processing, and routing at scale. Your team focuses on decisions. The system handles everything else.",
    tags: ["Process Automation", "Document Processing", "Data Extraction", "Intake & Routing"],
  },
  {
    label: "02 — SEARCH",
    title: "Enterprise Knowledge Systems",
    description:
      "Give every team instant, accurate answers from your internal data. We connect AI to your existing documentation, policies, CRM records, and operational history. Staff find what they need in seconds instead of hours.",
    tags: ["Knowledge Base", "Intelligent Search", "Document Q&A", "Internal Assistant"],
  },
  {
    label: "03 — AGENTS",
    title: "AI Agents & Reporting",
    description:
      "Deploy AI agents that handle multi-step workflows autonomously. Aggregate data across systems, generate executive reports, route decisions, and flag exceptions. Full audit trails and human oversight where it matters.",
    tags: ["Executive Reporting", "Multi-system Workflows", "Decision Routing", "Audit & Compliance"],
  },
];

const AIServices = () => {
  const theme = useTheme();

  return (
    <Box
      id="services"
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 8, sm: 10 },
        width: "100%",
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
        // what we build
      </Typography>

      <Typography
        variant="h1"
        component="h2"
        align="center"
        sx={{
          fontWeight: "bold",
          letterSpacing: "-0.02em",
          color: "#FFFFFF",
          mb: 2,
        }}
      >
        AI systems that integrate into how your business runs.
      </Typography>

      <Typography
        variant="h5"
        align="center"
        sx={{ mb: 8, color: "text.secondary" }}
      >
        Not standalone tools. Not chatbot demos. Systems engineered to work
        inside your existing infrastructure and scale with your operations.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={12} md={6} lg={4}>
            <GlassCard
              sx={{
                p: 5,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: `0px 0px 20px 4px ${theme.palette.primary.main}35`,
                  borderColor: `${theme.palette.primary.main}40`,
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                },
                "&:hover::before": {
                  opacity: 1,
                },
              }}
            >
              {/* Mono label */}
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  color: theme.palette.primary.main,
                  textTransform: "uppercase",
                  backgroundColor: `${theme.palette.primary.main}18`,
                  display: "inline-block",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: "4px",
                  mb: 3,
                  alignSelf: "flex-start",
                }}
              >
                {service.label}
              </Typography>

              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "text.primary", lineHeight: 1.7 }}
                >
                  {service.description}
                </Typography>
              </Box>

              {/* Tech stack tags */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 4 }}>
                {service.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "0.7rem",
                      color: "text.secondary",
                      borderColor: "secondary.dark",
                      borderRadius: "4px",
                      height: 24,
                    }}
                  />
                ))}
              </Box>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AIServices;
