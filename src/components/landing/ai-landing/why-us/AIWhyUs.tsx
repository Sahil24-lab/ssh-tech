"use client";

import { Typography, Box, Grid, useTheme } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";

const codeLines = [
  { ln: "01", comment: true, content: "// SSH-Tech: transparent by default" },
  { ln: "02", content: "const system = sshTech.deploy({" },
  { ln: "03", content: "  ..." },
  { ln: "04", content: "  humanReview: 'edge-cases'," },
  { ln: "05", content: "  compliance: 'audit-ready'," },
  { ln: "06", content: "});" },
  { ln: "07", content: "" },
  { ln: "08", comment: true, content: "// You see: accuracy, cost, ROI" },
  { ln: "09", comment: true, content: "// We see: what to optimise next" },
];

const AIWhyUs = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        px: { xs: 4, sm: 4, md: 8, lg: 8, xl: 8, xxl: 30 },
        py: { xs: 10, sm: 14, md: 20 },
        backgroundColor: "background.paper",
        borderTop: `1px solid ${theme.palette.secondary.dark}40`,
        borderBottom: `1px solid ${theme.palette.secondary.dark}40`,
      }}
    >
      <Grid
        container
        spacing={{ xs: 6, md: 8 }}
        alignItems="center"
        justifyContent="center"
      >
        {/* Left — text */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.73rem",
              color: "primary.main",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            // why ssh-tech
          </Typography>

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              color: "primary.light",
              mb: 3,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            We integrate the system,
            <br />
            not just build the demo.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              lineHeight: 1.75,
              mb: 2,
              fontSize: "0.95rem",
            }}
          >
            Most AI vendors deliver a polished demo and leave you to figure out
            production. We start with your existing infrastructure and build
            systems that integrate into your daily operations from day one. No
            rip-and-replace. No vendor lock-in.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              lineHeight: 1.75,
              fontSize: "0.95rem",
            }}
          >
            Every system we deliver includes full monitoring so your leadership
            team sees exactly what the AI is doing, how accurate it is, and
            what it costs to run. Complete transparency at every level.
          </Typography>
        </Grid>

        {/* Right — code block */}
        <Grid item xs={12} md={6}>
          <GlassCard
            sx={{
              p: { xs: 3, md: 4 },
              backgroundColor: "rgba(9, 31, 44, 0.9)",
              border: `1px solid ${theme.palette.secondary.dark}`,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: { xs: "0.72rem", md: "0.76rem" },
              lineHeight: 1.9,
              overflowX: "auto",
            }}
          >
            {codeLines.map((line, i) => (
              <Box key={i} sx={{ display: "flex", whiteSpace: "pre" }}>
                <Box
                  component="span"
                  sx={{
                    color: "rgba(145, 254, 230, 0.3)",
                    userSelect: "none",
                    mr: 2,
                    minWidth: 20,
                  }}
                >
                  {line.ln}
                </Box>
                <Box
                  component="span"
                  sx={{
                    color: line.comment
                      ? "rgba(145, 254, 230, 0.35)"
                      : "text.primary",
                    fontStyle: line.comment ? "italic" : "normal",
                  }}
                >
                  {line.content}
                </Box>
              </Box>
            ))}
          </GlassCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AIWhyUs;
