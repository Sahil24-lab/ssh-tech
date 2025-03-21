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
    <Box sx={{ mt: 12 }}>
      <Grid container spacing={12} alignItems="center">
        {/* Left Side - Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h1" component="h1" gutterBottom>
            Making Web3 User Friendly
          </Typography>
          <Typography
            variant="h5"
            component="p"
            gutterBottom
            sx={{ mb: 4, color: "#fff" }}
          >
            At SSH Tech, we craft bullet proof easy to use web3 frontends
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
              color="secondary"
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
              boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Image
              src="/code.jpg"
              alt="Hero"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </GlassCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
