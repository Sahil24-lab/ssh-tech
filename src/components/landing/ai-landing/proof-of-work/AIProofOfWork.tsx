"use client";

import { Typography, Grid, Button, Box, useTheme } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";

const projects = [
  {
    category: "Operations",
    title: "Automated Intake & Routing",
    description:
      "An operations team was spending 4+ hours daily manually sorting and routing incoming requests across departments. We built an AI pipeline that reads, classifies, and distributes each request to the right team in real time. Edge cases escalate to a human reviewer.",
    highlights: ["4hrs Saved daily", "95% Routing accuracy"],
  },
  {
    category: "Support",
    title: "Enterprise Knowledge Assistant",
    description:
      "Support and compliance staff were spending hours searching across Notion, SharePoint, and legacy documentation to answer internal queries. We deployed an AI assistant that searches the full knowledge base and returns verified answers in seconds.",
    highlights: ["65% Faster resolution", "40% Fewer escalations"],
  },
  {
    category: "Executive Reporting",
    title: "Automated Weekly Reports",
    description:
      "Leadership required weekly operational reports aggregated from 5 different platforms. A senior analyst spent a full day compiling them. We built an AI agent that gathers the data, writes the report, validates its own output, and delivers it by Monday morning.",
    highlights: ["10hrs Saved weekly", "98% Quality pass rate"],
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

              {/* Metrics */}
              <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                {project.highlights.map((highlight, i) => {
                  const [value, ...labelParts] = highlight.split(" ");
                  const label = labelParts.join(" ");
                  return (
                    <Box key={i}>
                      <Typography
                        sx={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "primary.main",
                          lineHeight: 1,
                        }}
                      >
                        {value}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.65rem",
                          color: "text.secondary",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {label}
                      </Typography>
                    </Box>
                  );
                })}
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
