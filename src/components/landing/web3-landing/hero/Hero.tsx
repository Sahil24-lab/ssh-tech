"use client";

import {
  Typography,
  Button,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";
import Image from "next/image";
import BookCallModal from "@/components/book-call-modal/BookCallModal";
import { useState } from "react";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isXLUp = useMediaQuery(theme.breakpoints.up("xl"));
  const isLargeUp = useMediaQuery(theme.breakpoints.up("lg"));
  const variantSubtitle = isXLUp ? "h4" : isLargeUp ? "h6" : "body1";

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
        minHeight: {
          xs: "auto",
          sm: "60vh",
          md: "50vh",
          lg: "80vh",
          xl: "100vh",
          xxl: "100vh",
        },
        overflow: "hidden",
        backgroundColor: "#0b0c10",
      }}
    >
      {/* Background + overlay */}
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

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 3, sm: 6, md: 12, lg: 20, xl: 24, xxl: 30 },
          pt: { xs: 6, sm: 14, md: 20, xl: 0 },
          pb: { xs: 6, sm: 8, md: 10, xl: 0, xxl: 0 },
          display: "flex",
          alignItems: { xs: "flex-start", xl: "center" },
          justifyContent: { xs: "start", xl: "center" },
          flexDirection: "column",
          minHeight: "100%",
        }}
      >
        <Grid
          container
          spacing={6}
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
        >
          {/* Image */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                maxWidth: {
                  xs: 340,
                  sm: 360,
                  md: 500,
                  lg: 580,
                  xl: 680,
                  xxl: 780,
                },
                mx: { xs: "auto", md: "unset" },
              }}
            >
              <GlassCard
                sx={{
                  p: { xs: 2, md: 4 },
                  boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Image
                  src="/Hero/hero-image.png"
                  alt="Hero Image"
                  width={680}
                  height={480}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                  priority
                />
              </GlassCard>
            </Box>
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography
              variant={isXLUp ? "h2" : "h3"}
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "primary.main",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Bulletproof Interfaces, <br /> Brilliant Experiences
            </Typography>

            <Typography
              variant={variantSubtitle}
              component="p"
              sx={{
                color: "#ffffff",
                mt: 2,
                mb: { xs: 4, lg: 10, xl: 10, xxl: 12 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              At SSH Tech we are empowering the <br />
              next generation of web3 Dapps
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
                maxWidth: { xs: 360, sm: "none" },
                mx: { xs: "auto", sm: 0 },
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  fontWeight: "700",
                  width: { xs: "100%", sm: "100%", md: "auto" },
                }}
                onClick={() => setOpen(true)}
              >
                Book a Call
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  width: { xs: "100%", sm: "100%", md: "auto" },
                  fontWeight: 700,
                }}
                onClick={() => handleScroll("pricing")}
              >
                View Plans
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <BookCallModal open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
};

export default Hero;
