"use client";

import React, { useState } from "react";
import {
  Typography,
  Grid,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Chip,
  PaperProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ArrowForwardRounded,
  CheckCircleOutlineRounded,
  CheckRounded,
} from "@mui/icons-material";
import BookCallModal from "@/components/book-call-modal/BookCallModal";

const GlassPane = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5))",
  backdropFilter: "blur(15px)",
  borderRadius: "16px",
  border: `1px solid ${theme.palette.text.primary}20`,
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  position: "relative",
}));

const GlassCardDark: React.FC<PaperProps> = (props) => {
  return <GlassPane elevation={0} {...props} />;
};

type EngagementStage = {
  name: string;
  stage: string;
  engagementType: string;
  description: string;
  deliverables: string[];
  buttonLabel: string;
  highlight: string;
};

const engagementStages: EngagementStage[] = [
  {
    name: "Assess",
    stage: "Stage 1",
    engagementType: "Fixed-fee diagnostic",
    description:
      "We audit one workflow or operational bottleneck to identify the highest-value automation opportunity and define a practical implementation path.",
    deliverables: [
      "Workflow audit and baseline metrics",
      "Opportunity map ranked by impact and effort",
      "Technical approach and architecture outline",
      "ROI estimate with delivery scope",
    ],
    buttonLabel: "Start with Assess",
    highlight:
      "Low-risk first step with a clear commercial and technical decision.",
  },
  {
    name: "Build",
    stage: "Stage 2",
    engagementType: "Fixed-scope implementation",
    description:
      "We deliver a production-ready AI or automation system tailored to your environment with defined milestones, quality checks, and rollout support.",
    deliverables: [
      "Production workflow, tooling, or integration",
      "Implementation plan with fixed boundaries",
      "Documentation and handover assets",
      "Launch readiness and quality validation",
    ],
    buttonLabel: "Plan the Build",
    highlight:
      "Defined scope and timeline instead of open-ended consulting hours.",
  },
  {
    name: "Operate",
    stage: "Stage 3",
    engagementType: "Ongoing optimisation and support",
    description:
      "After launch, we own system reliability and continuous improvement so performance, quality, and business value keep compounding over time.",
    deliverables: [
      "Monitoring, maintenance, and issue response",
      "Monthly optimisation and performance reviews",
      "Iteration roadmap based on live usage",
      "Ongoing operational ownership",
    ],
    buttonLabel: "Set Up Operate",
    highlight:
      "Systems keep improving after launch instead of degrading post-project.",
  },
];

const modelBenefits = [
  "Low-risk entry with a clear first step",
  "Defined implementation scope rather than vague retainers",
  "Ongoing operational support once the system is live",
  "Structured around measurable business outcomes",
];

const bestFitSignals = [
  "You already have clear operational pain points",
  "You want production-ready systems, not prototypes",
  "You care about measurable efficiency and decision quality gains",
];

export default function AIPricing() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 6, xl: 12 },
        animation: "fadeIn 0.8s ease-in-out",
        "@keyframes fadeIn": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
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
        {"// engagement model"}
      </Typography>

      <Typography
        variant="h1"
        component="h2"
        gutterBottom
        align="center"
        sx={{
          mb: 2,
          fontWeight: "bold",
          letterSpacing: "-0.02em",
          color: "#FFFFFF",
        }}
      >
        Assess. Build. Operate.
      </Typography>

      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ mb: 5, color: "text.secondary" }}
      >
        A simple 3-stage model that turns one clear operational problem into a
        production AI system with long-term operational support.
      </Typography>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          gap: 1.5,
          mb: 5,
        }}
      >
        {engagementStages.map((stage, index) => (
          <React.Fragment key={stage.name}>
            <Chip
              label={`${index + 1}. ${stage.name}`}
              color="primary"
              variant="outlined"
              sx={{
                fontWeight: 700,
                borderColor: "primary.main",
                color: "primary.main",
              }}
            />
            {index < engagementStages.length - 1 && (
              <ArrowForwardRounded sx={{ color: "text.secondary" }} />
            )}
          </React.Fragment>
        ))}
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "95%", md: "90%", lg: "96%", xl: "90%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {engagementStages.map((stage, index) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={stage.name}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <GlassCardDark
                sx={{
                  px: { xs: 3.5, md: 4.5 },
                  py: { xs: 4, md: 5 },
                  minHeight: { xs: 560, md: 620, lg: 640 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  flexGrow: 1,
                  flexBasis: { xs: "100%", sm: "90%", md: "100%" },
                  maxWidth: { xs: "100%", md: "480px", lg: "520px" },
                  backgroundColor:
                    stage.name === "Build" ? "rgba(9, 31, 44, 0.86)" : undefined,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0px 16px 36px rgba(0, 0, 0, 0.3)",
                  },
                  border: stage.name === "Build" ? "2px solid" : "1px solid",
                  borderColor:
                    stage.name === "Build"
                      ? "primary.main"
                      : "rgba(255, 255, 255, 0.14)",
                  animation: `cardFadeIn 0.5s ${0.1 * index}s both`,
                  "@keyframes cardFadeIn": {
                    from: { opacity: 0, transform: "translateY(10px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  mb={1.5}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.72rem",
                      color: "text.secondary",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {stage.stage}
                  </Typography>
                  <Chip
                    label={stage.engagementType}
                    size="small"
                    sx={{
                      color: "primary.main",
                      borderColor: "primary.main",
                      backgroundColor: "rgba(145, 254, 230, 0.08)",
                      border: "1px solid",
                      fontWeight: 700,
                    }}
                  />
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    color: "primary.main",
                    fontWeight: "800",
                    fontSize: "2rem",
                    mb: 2,
                  }}
                >
                  {stage.name}
                </Typography>

                <Typography variant="body2" color="text.primary" paragraph sx={{ mb: 2.5 }}>
                  {stage.description}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.72rem",
                    color: "text.secondary",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    mb: 1.25,
                  }}
                >
                  Key deliverables
                </Typography>

                <List sx={{ mb: 2, flexGrow: 1, py: 0 }}>
                  {stage.deliverables.map((deliverable) => (
                    <ListItem key={deliverable} disablePadding>
                      <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                        <CheckRounded fontSize="small" sx={{ color: "primary.main" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={deliverable}
                        primaryTypographyProps={{
                          sx: { color: "text.primary", fontSize: "0.93rem" },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Typography variant="body2" color="primary.main" sx={{ mb: 3 }}>
                  {stage.highlight}
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => setOpen(true)}
                  sx={{ fontWeight: "700" }}
                >
                  {stage.buttonLabel}
                </Button>
              </GlassCardDark>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "95%", md: "90%", lg: "96%", xl: "90%" },
          margin: "24px auto 0",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <GlassCardDark sx={{ p: 3.5, height: "100%" }}>
              <Typography variant="h5" sx={{ color: "#fff", mb: 2, fontWeight: 700 }}>
                Why this model works
              </Typography>
              <List sx={{ py: 0 }}>
                {modelBenefits.map((benefit) => (
                  <ListItem key={benefit} disablePadding sx={{ mb: 1.25 }}>
                    <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                      <CheckCircleOutlineRounded
                        fontSize="small"
                        sx={{ color: "primary.main" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={benefit}
                      primaryTypographyProps={{ sx: { color: "text.primary" } }}
                    />
                  </ListItem>
                ))}
              </List>
            </GlassCardDark>
          </Grid>
          <Grid item xs={12} md={6}>
            <GlassCardDark sx={{ p: 3.5, height: "100%" }}>
              <Typography variant="h5" sx={{ color: "#fff", mb: 2, fontWeight: 700 }}>
                Best fit for
              </Typography>
              <List sx={{ py: 0 }}>
                {bestFitSignals.map((signal) => (
                  <ListItem key={signal} disablePadding sx={{ mb: 1.25 }}>
                    <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                      <CheckCircleOutlineRounded
                        fontSize="small"
                        sx={{ color: "primary.main" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={signal}
                      primaryTypographyProps={{ sx: { color: "text.primary" } }}
                    />
                  </ListItem>
                ))}
              </List>
            </GlassCardDark>
          </Grid>
        </Grid>
      </Box>

      <BookCallModal open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
}
