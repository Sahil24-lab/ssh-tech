"use client";

import {
  Typography,
  Grid,
  Box,
  Chip,
  Fade,
  useTheme,
  alpha,
} from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";
import { Code, RocketLaunch } from "@mui/icons-material";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const processes = [
  {
    phase: "Phase 1",
    title: "Blueprint",
    description:
      "We define your goals, user flows, and success metrics in a free Blueprint Call—then deliver a clear execution plan.",
    icon: <EmojiObjectsIcon sx={{ fontSize: 72 }} />,
  },
  {
    phase: "Phase 2",
    title: "Validate",
    description:
      "We ship a working POC or modular feature set for early feedback—minimizing risk and accelerating delivery.",
    icon: <ArchitectureIcon sx={{ fontSize: 72 }} />,
  },
  {
    phase: "Phase 3",
    title: "Build",
    description:
      "We craft intuitive, user-friendly interfaces designed for seamless interaction and maximum engagement.",
    icon: <Code sx={{ fontSize: 72 }} />,
  },
  {
    phase: "Phase 4",
    title: "Launch & Optimize",
    description:
      "We deploy to mainnet and stay involved post-launch—handling updates, analytics, and improvements.",
    icon: <RocketLaunch sx={{ fontSize: 72 }} />,
  },
];

const OurProcess = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h1"
        align="center"
        sx={{
          mb: 1,
          fontWeight: "bold",
          letterSpacing: "0.5px",
          color: "#FFFFFF",
        }}
      >
        Our Process
      </Typography>

      <Typography
        variant="h5"
        align="center"
        sx={{ mb: 8, color: "text.secondary" }}
      >
        Built for shipping fast, scaling smart, and staying secure.
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
            lg={6}
            xl={3}
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
                      boxShadow: `0 0 32px ${alpha(
                        theme.palette.primary.main,
                        0.4
                      )}`,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {process.icon}
                  </Box>

                  <GlassCard
                    sx={{
                      pt: { xs: 12, sm: 14 },
                      pb: { xs: 8, sm: 10 },
                      px: { xs: 3, sm: 4 },
                      mt: { xs: 8, sm: 9 },
                      minHeight: {
                        xs: 360,
                        sm: 340,
                        md: 340,
                        lg: 380,
                        xl: 440,
                      },
                      width: "100%",
                      maxWidth: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      position: "relative",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        color: "text.primary",
                        fontWeight: "700",
                        mb: 2,
                      }}
                    >
                      {process.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.primary",
                        maxWidth: "90%",
                      }}
                    >
                      {process.description}
                    </Typography>

                    <Chip
                      label={process.phase}
                      color="primary"
                      sx={{
                        fontWeight: 900,
                        borderRadius: "999px",
                        px: 6,
                        py: 2,
                        height: 32,
                        position: "absolute",
                        bottom: 40,
                        left: "50%",
                        transform: "translateX(-50%)",
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

export default OurProcess;
