"use client";

import {
  Typography,
  Grid,
  Box,
  Chip,
  Fade,
  useTheme,
  alpha,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";
import {
  Search,
  BuildCircleOutlined,
  RocketLaunch,
  CheckCircleOutlineRounded,
} from "@mui/icons-material";

const processes = [
  {
    phase: "Stage 1",
    title: "Assess",
    description:
      "We run a fixed-fee diagnostic on one business process or bottleneck to identify the highest-value automation opportunity and define a practical path to implementation.",
    deliverables: [
      "Workflow diagnostic and baseline metrics",
      "Prioritised opportunity and ROI map",
      "Technical scope for implementation",
    ],
    outcome:
      "Low-risk entry with a clear commercial and technical next step.",
    icon: <Search sx={{ fontSize: 72 }} />,
  },
  {
    phase: "Stage 2",
    title: "Build",
    description:
      "We implement a fixed-scope solution for production use in your environment, with clear milestones and acceptance criteria.",
    deliverables: [
      "Production-ready automation, workflow, or internal tool",
      "Defined milestones and implementation boundaries",
      "Launch readiness checks and handover",
    ],
    outcome:
      "Defined scope and timeline instead of open-ended consulting.",
    icon: <BuildCircleOutlined sx={{ fontSize: 72 }} />,
  },
  {
    phase: "Stage 3",
    title: "Operate",
    description:
      "Once live, we provide ongoing operational ownership through maintenance, monitoring, and optimisation so the system continues to deliver value over time.",
    deliverables: [
      "Monitoring, maintenance, and issue response",
      "Monthly optimisation and performance reviews",
      "Iteration roadmap based on live usage data",
    ],
    outcome:
      "Long-term operational leverage after go-live, not post-project decay.",
    icon: <RocketLaunch sx={{ fontSize: 72 }} />,
  },
];

const AIProcess = () => {
  const theme = useTheme();

  return (
    <Box>
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
        {"// how we work"}
      </Typography>

      <Typography
        variant="h1"
        align="center"
        sx={{
          mb: 1,
          fontWeight: "bold",
          letterSpacing: "-0.02em",
          color: "#FFFFFF",
        }}
      >
        A 3-stage model built for operational results.
      </Typography>

      <Typography
        variant="h5"
        align="center"
        sx={{ mb: 8, color: "text.secondary" }}
      >
        Start with a fixed-fee assessment, move to scoped implementation, then
        protect outcomes with ongoing optimisation and support.
      </Typography>

      <Grid
        container
        rowSpacing={{ xs: 4, lg: 8 }}
        columnSpacing={{ xs: 4, lg: 4 }}
        justifyContent="center"
        minWidth="100%"
      >
        {processes.map((process, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            sx={{ display: "flex", justifyContent: "center" }}
            key={index}
          >
            <Box sx={{ width: "100%" }}>
              <Fade
                in
                timeout={600}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    "&:hover .glow-icon": {
                      boxShadow: `0 0 48px ${theme.palette.primary.main}`,
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Box
                    className="glow-icon"
                    sx={{
                      width: 140,
                      height: 140,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                      position: "absolute",
                      top: 0,
                      zIndex: 2,
                      boxShadow: `0 0 32px ${alpha(theme.palette.primary.main, 0.4)}`,
                    }}
                  >
                    {process.icon}
                  </Box>

                  <GlassCard
                    sx={{
                      pt: { xs: 12, sm: 14 },
                      pb: { xs: 4, sm: 5 },
                      px: { xs: 3, sm: 4 },
                      mt: { xs: 8, sm: 9 },
                      minHeight: {
                        xs: 520,
                        sm: 500,
                        md: 560,
                        lg: 620,
                        xl: 640,
                      },
                      width: "100%",
                      maxWidth: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      position: "relative",
                      textAlign: "left",
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <Typography
                        variant="h3"
                        sx={{
                          color: "text.primary",
                          fontWeight: "700",
                          mb: 2,
                          textAlign: "center",
                        }}
                      >
                        {process.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{ color: "text.primary", mb: 2.5, lineHeight: 1.75 }}
                      >
                        {process.description}
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

                      <List sx={{ py: 0, mb: 2.5 }}>
                        {process.deliverables.map((deliverable) => (
                          <ListItem key={deliverable} disablePadding sx={{ mb: 1 }}>
                            <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                              <CheckCircleOutlineRounded
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

                      <Typography variant="body2" sx={{ color: "primary.main", mb: 1 }}>
                        {process.outcome}
                      </Typography>
                    </Box>

                    <Chip
                      label={process.phase}
                      color="primary"
                      sx={{
                        fontWeight: 900,
                        borderRadius: "999px",
                        px: 6,
                        py: 2,
                        height: 32,
                        mt: "auto",
                        alignSelf: "center",
                      }}
                    />
                  </GlassCard>
                </Box>
              </Fade>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AIProcess;
