"use client";

import { useState } from "react";
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
import { CheckRounded } from "@mui/icons-material";
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
  stageLabel: string;
  engagementType: string;
  description: string;
  deliverables: string[];
  highlight: string;
  isEntryPoint: boolean;
};

const engagementStages: EngagementStage[] = [
  {
    name: "Assess",
    stageLabel: "STAGE 1",
    engagementType: "Fixed-fee diagnostic",
    description:
      "We review one workflow, bottleneck, or operational process to identify the best automation opportunity and define a practical implementation path.",
    deliverables: [
      "Workflow review and baseline assessment",
      "Prioritised opportunity map with expected impact",
      "Technical scope, delivery approach, and next-step recommendation",
    ],
    highlight:
      "A low-risk first step that gives you a clear commercial and technical decision.",
    isEntryPoint: true,
  },
  {
    name: "Build",
    stageLabel: "STAGE 2",
    engagementType: "Fixed-scope implementation",
    description:
      "We deliver a production-ready AI or automation system tailored to your environment, with defined scope, milestones, and launch readiness.",
    deliverables: [
      "Production workflow, integration, or internal tool",
      "Delivery plan with fixed boundaries and acceptance criteria",
      "Documentation, handover, and launch support",
    ],
    highlight:
      "Defined implementation scope instead of open-ended consulting hours.",
    isEntryPoint: false,
  },
  {
    name: "Operate",
    stageLabel: "STAGE 3",
    engagementType: "Ongoing optimisation and support",
    description:
      "After launch, we support system reliability, maintenance, and continuous improvement so performance and business value keep compounding over time.",
    deliverables: [
      "Monitoring, maintenance, and issue response",
      "Monthly optimisation and performance review",
      "Iteration roadmap based on live usage and operational needs",
    ],
    highlight:
      "Ongoing operational ownership so the system improves after launch instead of degrading.",
    isEntryPoint: false,
  },
];

export default function AIPricing() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        py: { xs: 9, sm: 10, md: 11 },
        px: { xs: 4.5, sm: 5.5, md: 6, xl: 12 },
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
        ENGAGEMENT MODEL
      </Typography>

      <Typography
        variant="h1"
        component="h2"
        gutterBottom
        align="center"
        sx={(theme) => ({
          mb: 2.5,
          fontWeight: "bold",
          letterSpacing: "-0.02em",
          color: theme.palette.text.primary,
        })}
      >
        Assess. Build. Operate.
      </Typography>

      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ mb: 2, color: "text.secondary" }}
      >
        A simple engagement model for turning one clear operational problem into
        a production-ready AI system with ongoing support.
      </Typography>

      <Typography
        align="center"
        sx={{
          mb: 1.5,
          color: "primary.main",
          fontWeight: 700,
          fontSize: { xs: "0.98rem", md: "1.04rem" },
        }}
      >
        Pricing: Fixed-fee assessment • Fixed-scope implementation • Ongoing
        monthly support
      </Typography>

      <Typography
        align="center"
        sx={{
          color: "text.secondary",
          fontSize: { xs: "0.92rem", md: "0.98rem" },
          mb: 6,
        }}
      >
        Every engagement starts with Assess. Build and Operate are quoted based
        on scope, complexity, and support requirements.
      </Typography>

      <Box
        sx={{
          width: { xs: "100%", sm: "95%", md: "90%", lg: "96%", xl: "90%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Grid
          container
          spacing={{ xs: 4.5, sm: 5.5, md: 7 }}
          alignItems="stretch"
          justifyContent="center"
        >
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
                  px: { xs: 4, md: 4.75 },
                  py: { xs: 4.5, md: 5.25 },
                  minHeight: { xs: 560, md: 620, lg: 640 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  flexGrow: 1,
                  flexBasis: { xs: "100%", sm: "90%", md: "100%" },
                  maxWidth: { xs: "100%", md: "480px", lg: "520px" },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0px 16px 36px rgba(0, 0, 0, 0.3)",
                  },
                  border: "1px solid",
                  borderColor: "rgba(255, 255, 255, 0.14)",
                  animation: `cardFadeIn 0.5s ${0.1 * index}s both`,
                  "@keyframes cardFadeIn": {
                    from: { opacity: 0, transform: "translateY(10px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.72rem",
                    color: "text.secondary",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    mb: 1.25,
                  }}
                >
                  {stage.stageLabel}
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    color: "primary.main",
                    fontWeight: "800",
                    fontSize: "2rem",
                    mb: 1.75,
                  }}
                >
                  {stage.name}
                </Typography>

                <Chip
                  label={stage.engagementType}
                  sx={{
                    mb: 2.5,
                    width: "fit-content",
                    maxWidth: "100%",
                    color: "primary.main",
                    borderColor: "primary.main",
                    backgroundColor: "rgba(145, 254, 230, 0.08)",
                    border: "1px solid",
                    fontWeight: 700,
                    "& .MuiChip-label": {
                      display: "block",
                      whiteSpace: "normal",
                      textAlign: "left",
                      lineHeight: 1.2,
                      py: 0.4,
                    },
                  }}
                />

                <Typography
                  variant="body2"
                  color="text.primary"
                  paragraph
                  sx={{ mb: 2.5 }}
                >
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
                        <CheckRounded
                          fontSize="small"
                          sx={{ color: "primary.main" }}
                        />
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

                <Box
                  sx={{ minHeight: 40, display: "flex", alignItems: "center" }}
                >
                  {stage.isEntryPoint ? (
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={() => setOpen(true)}
                      sx={{ fontWeight: "700" }}
                    >
                      Start with Assess
                    </Button>
                  ) : null}
                </Box>
              </GlassCardDark>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "95%", md: "90%", lg: "82%", xl: "72%" },
          margin: "28px auto 0",
        }}
      >
        <GlassCardDark sx={{ p: { xs: 3, md: 4 } }}>
          <Typography
            variant="h5"
            align="center"
            sx={(theme) => ({
              color: theme.palette.text.primary,
              mb: 1.5,
              fontWeight: 700,
            })}
          >
            Our Engagement Model
          </Typography>
          <Typography
            align="center"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.97rem", md: "1.02rem" },
              lineHeight: 1.7,
            }}
          >
            Every engagement begins with a fixed-fee assessment. Implementation
            is then quoted as a defined project based on scope, systems, and
            delivery complexity. Once live, ongoing support is structured as a
            monthly service for maintenance, optimisation, and operational
            continuity.
          </Typography>
        </GlassCardDark>
      </Box>

      <BookCallModal open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
}
