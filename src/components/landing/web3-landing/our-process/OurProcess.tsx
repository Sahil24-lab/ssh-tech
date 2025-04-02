"use client";

import { Typography, Grid, Box, Fade } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";
import {
  MapsUgc,
  DesignServices,
  Code,
  RocketLaunch,
} from "@mui/icons-material";

const processes = [
  {
    step: "01",
    title: "Blueprint & Planning",
    description:
      "We define goals, user flows, and success metrics in a free Blueprint Call—then deliver a clear execution plan.",
    icon: <MapsUgc fontSize="small" />,
  },
  {
    step: "02",
    title: "Design & Architecture",
    description:
      "We craft intuitive UIs and smart contract architecture—scalable, secure, and mainnet-ready.",
    icon: <DesignServices fontSize="small" />,
  },
  {
    step: "03",
    title: "Build & Validate",
    description:
      "We ship a working POC or modular feature set for early feedback—minimizing risk and accelerating delivery.",
    icon: <Code fontSize="small" />,
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description:
      "We deploy to mainnet and stay involved post-launch—handling updates, analytics, and improvements.",
    icon: <RocketLaunch fontSize="small" />,
  },
];

const OurProcess = () => {
  return (
    <Box sx={{ py: 8 }} id="process">
      <Typography variant="h2" align="center" gutterBottom sx={{ mb: 1 }}>
        Our Process
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        gutterBottom
        sx={{ mb: 4 }}
      >
        Built for shipping fast, scaling smart, and staying secure.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {processes.map((process, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Fade
              in
              timeout={600 + index * 200}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <GlassCard
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
                    px: 2,
                    py: 0.5,
                    borderRadius: "999px",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                  }}
                >
                  {process.icon}
                  {process.step}
                </Box>

                <Typography variant="h4" gutterBottom>
                  {process.title}
                </Typography>

                <Typography variant="body2">{process.description}</Typography>
              </GlassCard>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurProcess;
