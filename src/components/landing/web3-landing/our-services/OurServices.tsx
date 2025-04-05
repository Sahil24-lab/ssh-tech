"use client";

import { Typography, Grid, Box } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";
import HubIcon from "@mui/icons-material/Hub";
import SecurityIcon from "@mui/icons-material/Security";
import { Code as CodeIcon } from "@mui/icons-material";

const services = [
  {
    title: "DApp Developments",
    description:
      "We build fast, accessible, and beautiful user interfaces—optimized for all types of users",
    icon: <CodeIcon sx={{ fontSize: 56 }} />,
  },
  {
    title: "Community Tools",
    description:
      "From custom bots to DAO dashboards, we help you engage and grow your community",
    icon: <HubIcon sx={{ fontSize: 56 }} />,
  },
  {
    title: "Frontend Security",
    description:
      "Security baked into the UI layer—so your users can trust every click, tap, and transaction",
    icon: <SecurityIcon sx={{ fontSize: 56 }} />,
  },
];

const OurServices = () => {
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
        variant="h1"
        component="h1"
        align="center"
        sx={{
          fontWeight: "bold",
          letterSpacing: "0.5px",
          color: "#FFFFFF",
          mb: 6,
        }}
      >
        Our Services
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
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box sx={{ mb: 3, color: "primary.main" }}>{service.icon}</Box>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: 800,
                  color: "primary.main",
                  mb: 1,
                }}
              >
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.primary" }}>
                {service.description}
              </Typography>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurServices;
