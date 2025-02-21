"use client";

import { Container, Typography, Button, Box, Grid } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";
import { useTheme } from "@mui/material/styles";

const Hero = () => {
  const theme = useTheme(); // Get theme colors

  return (
    <Box
      sx={{
        mt: 6,
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h1" component="h1" gutterBottom>
            Your Dev Partner for Onboarding the Next Wave of Crypto Users
          </Typography>
          <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
            At SSH Tech, we craft intuitive and secure frontends for crypto
            projects & build custom tools that supercharge your community
            engagement.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary" size="large">
              View plans
            </Button>
            <Button variant="outlined" color="secondary" size="large">
              Learn more
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
            <img
              src="/code.jpg"
              alt="Hero"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </GlassCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
