"use client";

import { Typography, Button, Box, Grid } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";
import Image from "next/image";

const Hero = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0b0c10",
        overflow: "hidden",
      }}
    >
      {/* Background image that fills the viewport */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/Hero/hero-background.png"
          alt="Background Hero"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
        />
        {/* Overlay that starts transparent and becomes #091F2C toward the bottom */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(to bottom, rgba(9,31,44,0.1) 0%, rgba(9,31,44,0.6) 50%, rgba(9,31,44,1) 100%)",
          }}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          // More generous padding all around
          px: { xs: 4, md: 24 },
          py: { xs: 8, md: 24 },
          display: "flex",
          alignItems: "center",
          minHeight: "100%",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Bulletproof Interfaces, Brilliant Experiences
            </Typography>
            <Typography
              variant="h5"
              component="p"
              gutterBottom
              sx={{ mb: 12, color: "#ffffff" }}
            >
              At SSH Tech we are empowering the next <br /> generation of web3 Dapps
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => handleScroll("faq")}
              >
                Book a Call
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => handleScroll("pricing")}
              >
                View Plans
              </Button>
            </Box>
          </Grid>

          {/* Right Side - Image inside GlassCard */}
          <Grid item xs={12} md={6}>
            <GlassCard
              sx={{
                p: 4,
                boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.)",
              }}
            >
              <Image
                src="/Hero/hero-image.png"
                alt="Hero Image"
                width={600}
                height={400}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
                priority
              />
            </GlassCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
