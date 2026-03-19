"use client";

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Chip,
  Stack,
  Avatar,
  useTheme,
} from "@mui/material";
import GlassCardDark from "@/components/card/glass-card-dark/GlassCardDark";
import {
  Bolt,
  Security,
  Storage,
  History,
  Memory,
  Mouse,
  SmartToy,
} from "@mui/icons-material";

type SSHEchoBlueprintProps = {
  variant?: "full" | "snapshot";
};

const mainFeatures = [
  {
    id: "routing",
    title: "Token-Efficient Routing",
    desc: "Zero-LLM perception layer classifies and routes intents. Drastically reduces token overhead and latency compared to monolithic agents.",
    icon: <Bolt sx={{ fontSize: 26 }} />,
    tag: "CORE",
  },
  {
    id: "shield",
    title: "PII Shield & Vault",
    desc: "Deterministic redaction at the edge. Reasoning engines operate on stable pseudonyms, keeping sensitive identity behind the vault.",
    icon: <Security sx={{ fontSize: 26 }} />,
    tag: "SECURITY",
  },
  {
    id: "ledger",
    title: "Verifiable Memory Ledger",
    desc: "Atomic SQLite persistence with outbox settlement. State is a verifiable history, not a probabilistic vector guess.",
    icon: <Storage sx={{ fontSize: 26 }} />,
    tag: "STATE",
  },
];

const capabilities = [
  {
    label: "Internal Tool Call Optimization",
    detail:
      "Optimized tool-selection logic that prevents redundant model calls and context bloating.",
    icon: <Mouse sx={{ fontSize: 20 }} />,
  },
  {
    label: "Sub-Agent Orchestration",
    detail:
      "Distributed execution via local async or Celery workers for heavy-duty background tasks.",
    icon: <Memory sx={{ fontSize: 20 }} />,
  },
  {
    label: "Measurable Context Replay",
    detail:
      "Quantitative QA harness to replay historical interactions and measure logic improvements.",
    icon: <History sx={{ fontSize: 20 }} />,
  },
  {
    label: "Multi-Channel Ingress",
    detail:
      "Production-ready adapters for Telegram and Slack with unified message normalization.",
    icon: <SmartToy sx={{ fontSize: 20 }} />,
  },
];

export default function SSHEchoBlueprint({
  variant = "full",
}: SSHEchoBlueprintProps) {
  const theme = useTheme();
  const isSnapshot = variant === "snapshot";

  const backgroundImage =
    "linear-gradient(rgba(5, 11, 43, 0.95), rgba(5, 11, 43, 0.7)), conic-gradient(from -23.81deg at 72.82% 162.44%, #0e534c -44.57deg, #067f71 7.76deg, #029f8c 20.98deg, #067f71 52deg, #0b645c 88.68deg, #067f71 315.43deg, #029f8c 367.76deg)";

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",

        backgroundImage,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: isSnapshot ? 2 : 3,
        overflow: "hidden",
        px: isSnapshot ? 3 : { xs: 3, md: 6 },
        py: isSnapshot ? 3 : { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1020,
          mx: "auto",
        }}
      >
        <Box sx={{ mb: isSnapshot ? 3 : 6 }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                color: theme.palette.primary.main,
              }}
            >
              {"//"}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                color: theme.palette.primary.main,
              }}
            >
              Architecture Blueprint
            </Typography>
          </Stack>
          {isSnapshot ? (
            <>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  mb: 1.5,
                }}
              >
                SSH ECHO
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                  maxWidth: 820,
                  color: theme.palette.text.primary,
                }}
              >
                A next-generation{" "}
                <Box component="span">open-claw style agentic system</Box>{" "}
                engineered for hardened security and optimal token management.
              </Typography>
            </>
          ) : (
            <Stack
              direction="row"
              spacing={2.5}
              alignItems="flex-start"
              sx={{ mb: 2 }}
            >
              <Avatar
                src="/products/ssh-echo/avatar.png"
                alt="SSH Echo icon"
                sx={{
                  width: 156,
                  height: 156,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "none",
                  backgroundColor: "transparent",
                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scale(1.18)",
                  },
                }}
              />
              <Box>
                <Typography
                  variant="h1"
                  sx={{ fontWeight: 700, letterSpacing: "-0.04em", mb: 1.5 }}
                >
                  SSH ECHO
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    maxWidth: 820,
                    color: theme.palette.text.primary,
                  }}
                >
                  A next-generation{" "}
                  <Box component="span">open-claw style agentic system</Box>{" "}
                  engineered for hardened security and optimal token management.
                </Typography>
              </Box>
            </Stack>
          )}
        </Box>

        <Box sx={{ mb: isSnapshot ? 3 : 6 }}>
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: theme.palette.primary.main,
            }}
          >
            Core Logic Flow
          </Typography>
          <Stack spacing={2.5}>
            {mainFeatures.map((step) => (
              <GlassCardDark
                key={step.id}
                sx={{
                  p: isSnapshot ? 2.5 : 3.5,
                  borderRadius: 2,
                  border: "2px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Box sx={{ display: "flex", gap: 2.5, alignItems: "center" }}>
                  <Box
                    sx={{
                      color: theme.palette.primary.main,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 44,
                      height: 44,
                    }}
                  >
                    {React.cloneElement(step.icon, { sx: { fontSize: 36 } })}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Typography
                        variant={isSnapshot ? "h5" : "h4"}
                        sx={{ fontWeight: 700, letterSpacing: "-0.02em" }}
                      >
                        {step.title}
                      </Typography>
                      <Chip
                        label={step.tag}
                        size="small"
                        variant="outlined"
                        sx={{
                          fontSize: 9,
                          fontWeight: 700,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          opacity: 0.7,
                          borderColor: "rgba(255,255,255,0.2)",
                          color: theme.palette.text.primary,
                        }}
                      />
                    </Stack>
                    <Typography
                      variant="body2"
                      sx={{
                        mt: 1,
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.7,
                      }}
                    >
                      {step.desc}
                    </Typography>
                  </Box>
                </Box>
              </GlassCardDark>
            ))}
          </Stack>
        </Box>

        <Box sx={{ mb: isSnapshot ? 2 : 3 }}>
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: theme.palette.primary.main,
            }}
          >
            System Capabilities
          </Typography>
          <Grid container spacing={2}>
            {capabilities.map((cap) => (
              <Grid key={cap.label} item xs={12} md={6}>
                <GlassCardDark
                  sx={{
                    p: isSnapshot ? 2 : 2.5,
                    borderRadius: 2,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        color: theme.palette.primary.main,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 44,
                        height: 44,
                      }}
                    >
                      {React.cloneElement(cap.icon, { sx: { fontSize: 32 } })}
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.2em",
                        }}
                      >
                        {cap.label}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          mt: 1,
                          color: "rgba(255,255,255,0.7)",
                          lineHeight: 1.6,
                        }}
                      >
                        {cap.detail}
                      </Typography>
                    </Box>
                  </Stack>
                </GlassCardDark>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
