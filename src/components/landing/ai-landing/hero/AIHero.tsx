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
import BookCallModal from "@/components/book-call-modal/BookCallModal";
import LatticeBg from "./LatticeBg";
import { useState, useRef, useCallback } from "react";
import SearchIcon from "@mui/icons-material/Search";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const capabilities = [
  {
    icon: <SearchIcon />,
    label: "Assess",
    detail: "Fixed-fee diagnostic to find your highest-ROI workflow.",
  },
  {
    icon: <BuildCircleOutlinedIcon />,
    label: "Build",
    detail: "Production build with clear milestones and sign-off criteria.",
  },
  {
    icon: <RocketLaunchIcon />,
    label: "Operate",
    detail: "Ongoing monitoring and optimisation to keep gains compounding.",
  },
];

const AIHero = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isXLUp = useMediaQuery(theme.breakpoints.up("xl"));
  const isHeroDesktop = useMediaQuery("(min-width:1280px)");
  const variantSubtitle = isXLUp ? "h5" : isHeroDesktop ? "h6" : "body1";

  const heroRef = useRef<HTMLDivElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current || !spotlightRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.background = `radial-gradient(160px circle at ${x}px ${y}px, rgba(7, 223, 193, 0.04) 0%, transparent 90%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (spotlightRef.current) {
      spotlightRef.current.style.background = "none";
    }
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const headerOffset = 92;
    const targetTop =
      element.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  return (
    <Box
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="hero"
      sx={{
        position: "relative",
        width: "100%",
        mt: { xs: "-72px", md: "-74px", lg: "-72px" },
        minHeight: {
          xs: "auto",
          sm: "calc(60vh + 72px)",
          md: "calc(50vh + 74px)",
          lg: "calc(70vh + 72px)",
          xl: "calc(80vh + 72px)",
          xxl: "calc(80vh + 72px)",
        },
        maxHeight: { xl: "920px", xxl: "1000px" },
        overflow: "hidden",
        background: `
          radial-gradient(ellipse 78% 68% at 24% 56%,
            rgba(14, 58, 72, 0.90) 0%,
            rgba(14, 58, 72, 0.35) 46%,
            rgba(9, 31, 44, 0.00) 78%
          ),
          radial-gradient(ellipse 68% 56% at 72% 38%,
            rgba(13, 48, 64, 0.85) 0%,
            rgba(13, 48, 64, 0.30) 44%,
            rgba(9, 31, 44, 0.00) 76%
          ),
          radial-gradient(ellipse 56% 52% at 50% 86%,
            rgba(11, 42, 56, 0.80) 0%,
            rgba(11, 42, 56, 0.28) 42%,
            rgba(9, 31, 44, 0.00) 74%
          ),
          radial-gradient(ellipse 46% 40% at 86% 76%,
            rgba(14, 53, 69, 0.75) 0%,
            rgba(14, 53, 69, 0.24) 38%,
            rgba(9, 31, 44, 0.00) 70%
          ),
          linear-gradient(120deg,
            rgba(9, 31, 44, 0.35) 0%,
            rgba(9, 31, 44, 0.00) 42%,
            rgba(9, 31, 44, 0.25) 100%
          ),
          #091f2c
        `,
      }}
    >
      <LatticeBg />

      {/* Dither overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.16,
          mixBlendMode: "soft-light",
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E"),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.35' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n2)' opacity='0.18'/%3E%3C/svg%3E")
          `,
          backgroundSize: "120px 120px, 220px 220px",
          backgroundPosition: "0 0, 30px 40px",
          filter: "blur(1.2px)",
        }}
      />

      {/* Vignette */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background: `radial-gradient(ellipse 90% 80% at 48% 44%,
            rgba(4,10,16,0)    0%,
            rgba(4,10,16,0)   22%,
            rgba(4,10,16,0.08) 35%,
            rgba(4,10,16,0.20) 48%,
            rgba(4,10,16,0.38) 60%,
            rgba(4,10,16,0.56) 72%,
            rgba(4,10,16,0.74) 83%,
            rgba(4,10,16,0.90) 93%,
            rgba(4,10,16,0.97) 100%
          )`,
        }}
      />

      {/* Teal accent glow */}
      <Box
        sx={{
          position: "absolute",
          top: "-5%",
          right: "0%",
          width: { xs: 280, md: 420, xl: 520 },
          height: { xs: 280, md: 420, xl: 520 },
          borderRadius: "50%",
          background: `radial-gradient(ellipse at center, ${theme.palette.primary.main}07 0%, transparent 65%)`,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Mouse spotlight */}
      <Box
        ref={spotlightRef}
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background: "none",
        }}
      />

      {/* Fade-to-body */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background: `linear-gradient(to bottom,
              transparent 0%,
              transparent 42%,
              rgba(9,31,44,0.04) 52%,
              rgba(9,31,44,0.10) 60%,
              rgba(9,31,44,0.22) 68%,
              rgba(9,31,44,0.40) 75%,
              rgba(9,31,44,0.62) 82%,
              rgba(9,31,44,0.82) 90%,
              rgba(9,31,44,1.00) 100%
            )`,
        }}
      />

      {/* ── Content ── */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          // Generous padding on tablet+, tight on mobile
          px: { xs: 2.5, sm: 4, md: 6, lg: 10, xl: 10, xxl: 12 },
          // Cap the content width and centre it
          maxWidth: { xs: "100%", lg: "1240px", xl: "1360px", xxl: "1440px" },
          mx: "auto",
          pt: {
            xs: "108px",
            sm: "128px",
            md: "140px",
            lg: "140px",
            xl: "140px",
            xxl: "160px",
          },
          pb: { xs: 5, sm: 6, md: 6, xl: 8, xxl: 10 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          minHeight: "100%",
        }}
      >
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 4, lg: 4, xl: 4 }}
          direction={isHeroDesktop ? "row" : "column"}
          alignItems="center"
          justifyContent="center"
        >
          {/* Right — capability card */}
          <Grid
            item
            xs={12}
            lg={6}
            order={{ xs: 2, lg: 2 }}
            sx={{
              px: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: {
                  xs: 520,
                  sm: 580,
                  md: 640,
                  lg: 700,
                  xl: 760,
                  xxl: 820,
                },
                mx: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <GlassCard
                sx={{
                  width: "100%",
                  p: { xs: 2.5, md: 3 },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    mb: 2,
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  How we work
                </Typography>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                >
                  {capabilities.map((cap, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.75,
                        p: 1.5,
                        borderRadius: "10px",
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        transition: "border-color 0.2s ease",
                        "&:hover": {
                          borderColor: `${theme.palette.primary.main}50`,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 32,
                          minWidth: 32,
                          height: 32,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "primary.main",
                          flexShrink: 0,
                          mt: 0.15,
                          "& svg": {
                            display: "block",
                            fontSize: 28,
                          },
                        }}
                      >
                        {cap.icon}
                      </Box>

                      <Box sx={{ minWidth: 0, pt: 0.1 }}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 700,
                            color: "text.primary",
                            mb: 0.35,
                            fontSize: "0.92rem",
                            lineHeight: 1.15,
                          }}
                        >
                          {cap.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            fontSize: "0.82rem",
                            lineHeight: 1.45,
                          }}
                        >
                          {cap.detail}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    mt: 2,
                    pt: 1.5,
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      boxShadow: `0 0 8px ${theme.palette.primary.main}`,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: "0.78rem" }}
                  >
                    Assess. Build. Operate. Start with a discovery call.
                  </Typography>
                </Box>
              </GlassCard>
            </Box>
          </Grid>

          {/* Left — headline + CTA */}
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: 1 }}
            sx={{
              pl: { xs: 0, md: 1, lg: 2 },
              pr: { xs: 0, md: 1, lg: 1 },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", xl: "flex-start" },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.78rem",
                color: "primary.main",
                letterSpacing: "0.08em",
                mb: 1.5,
                textAlign: { xs: "center", xl: "left" },
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", xl: "flex-start" },
                gap: 0,
                "&::before": {
                  content: '"//"',
                  display: "inline-block",
                  marginLeft: 0,
                  marginRight: "0.45rem",
                  color: "#FFFFFF",
                  opacity: 0.95,
                  transform: "translateY(-0.02em)",
                },
              }}
            >
              Your AI Systems Integrator
            </Typography>

            <Typography
              variant={isXLUp ? "h2" : "h3"}
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "primary.main",
                textAlign: { xs: "center", xl: "left" },
                lineHeight: 1.15,
              }}
            >
              Production AI for <br /> real operations.
            </Typography>

            <Typography
              variant={variantSubtitle}
              component="p"
              sx={{
                color: "rgba(255,255,255,0.85)",
                mt: 1.5,
                mb: { xs: 3, sm: 3, lg: 4, xl: 4, xxl: 5 },
                textAlign: { xs: "center", xl: "left" },
                lineHeight: 1.55,
                fontWeight: 400,
              }}
            >
              We integrate with your stack and <br />
              automate high-impact workflows.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                gap: 2,
                justifyContent: { xs: "center", xl: "flex-start" },
                alignItems: { xs: "stretch", lg: "center" },
                maxWidth: { xs: 360, md: 420, lg: "none" },
                mx: { xs: "auto", xl: 0 },
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  fontWeight: "700",
                  width: { xs: "100%", lg: "auto" },
                }}
                onClick={() => setOpen(true)}
              >
                Book a Discovery Call
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  width: { xs: "100%", lg: "auto" },
                  fontWeight: 700,
                }}
                onClick={() => handleScroll("process")}
              >
                How We Work
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <BookCallModal open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
};

export default AIHero;
