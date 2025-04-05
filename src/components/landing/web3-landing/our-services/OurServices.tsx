"use client";

import { Typography, Grid, Box } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";
import Image from "next/image";

const services = [
  {
    title: "DApp Developments",
    description:
      "We build fast, accessible, and beautiful user interfaces—optimized for all types of users",
    imageSrc: "/icons/our-services/development.svg",
  },
  {
    title: "Community Tools",
    description:
      "From custom bots to DAO dashboards, we help you engage and grow your community",
    imageSrc: "/icons/our-services/community.svg",
  },
  {
    title: "Frontend Security",
    description:
      "Security baked into the UI layer—so your users can trust every click, tap, and transaction",
    imageSrc: "/icons/our-services/security.svg",
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
              <Box
                sx={{
                  mb: 3,
                  width: "100%",
                  maxWidth: {
                    xs: 140, // extra-small screens
                    sm: 120, // small screens
                    md: 140, // medium and up
                    lg: 376, // medium and up
                  },
                  display: "flex",
                  justifyContent: "center",
                  mx: "auto", // center the box horizontally
                }}
              >
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  width={376}
                  height={286}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Box>

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
