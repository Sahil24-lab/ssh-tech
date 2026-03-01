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
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import StorageIcon from "@mui/icons-material/Storage";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const capabilities = [
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 28 }} />,
    label: "Operational Automation",
    detail: "AI-powered workflows that eliminate manual processes at scale",
  },
  {
    icon: <StorageIcon sx={{ fontSize: 28 }} />,
    label: "Enterprise Knowledge Systems",
    detail: "Instant, accurate answers from your internal data and documents",
  },
  {
    icon: <AccountTreeIcon sx={{ fontSize: 28 }} />,
    label: "AI Agents & Reporting",
    detail: "Autonomous agents that handle multi-step workflows end to end",
  },
];

const AIHero = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isXLUp = useMediaQuery(theme.breakpoints.up("xl"));
  const isLargeUp = useMediaQuery(theme.breakpoints.up("lg"));
  const variantSubtitle = isXLUp ? "h4" : isLargeUp ? "h6" : "body1";

  // Spotlight refs — direct DOM mutation so no re-render on every mousemove
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
    if (element) element.scrollIntoView({ behavior: "smooth" });
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
        // Pull up behind the fixed semi-transparent header
        mt: { xs: "-72px", md: "-74px", lg: "-72px" },
        minHeight: {
          xs: "auto",
          sm: "calc(60vh + 72px)",
          md: "calc(50vh + 74px)",
          lg: "calc(80vh + 72px)",
          xl: "calc(100vh + 72px)",
          xxl: "calc(100vh + 72px)",
        },
        overflow: "hidden",
        // Blob-like base matching hero-background.png teal hue
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
      {/* Animated lattice / particle network background */}
      <LatticeBg />

      {/* Dither overlay — reduces gradient banding once canvas animates */}
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

      {/* Vignette — darkens corners and edges, keeps centre light */}
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

      {/* Subtle teal accent glow top-right — very faint so it doesn't overpower blobs */}
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

      {/* Mouse-tracked spotlight — z-index 1, behind content at z-index 2 */}
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

      {/* Fade-to-body gradient */}
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

      {/* Content — z-index 2 so it sits above the spotlight layer */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 3, sm: 6, md: 12, lg: 20, xl: 24, xxl: 30 },
          pt: { xs: "120px", sm: "184px", md: "234px", xl: "72px" },
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
          {/* Right — capability showcase card (GlassCard is semi-transparent so spotlight bleeds through) */}
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
              <GlassCard sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    mb: 3,
                    fontSize: "0.85rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  What we ship
                </Typography>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
                >
                  {capabilities.map((cap, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                        p: 2,
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
                        sx={{ color: "primary.main", mt: 0.25, flexShrink: 0 }}
                      >
                        {cap.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 700,
                            color: "text.primary",
                            mb: 0.5,
                          }}
                        >
                          {cap.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary", fontSize: "0.85rem" }}
                        >
                          {cap.detail}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    mt: 3,
                    pt: 2.5,
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "primary.main",
                      boxShadow: `0 0 8px ${theme.palette.primary.main}`,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: "0.8rem" }}
                  >
                    Production-grade delivery. Discovery call is free.
                  </Typography>
                </Box>
              </GlassCard>
            </Box>
          </Grid>

          {/* Left — headline + CTA */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.78rem",
                color: "primary.main",
                letterSpacing: "0.08em",
                mb: 2,
                textAlign: { xs: "center", md: "left" },
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 1,
                "&::before": {
                  content: '""',
                  display: "inline-block",
                  width: 24,
                  height: 1,
                  backgroundColor: "primary.main",
                },
              }}
            >
              // Your AI Systems Integrator
            </Typography>

            <Typography
              variant={isXLUp ? "h2" : "h3"}
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "primary.main",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              AI that works in your operations, not just a demo.
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
              We integrate AI into your existing infrastructure to automate
              operations, reduce overhead, and give your leadership team full
              visibility. Production-grade systems, not proofs of concept.
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
                Book a Discovery Call
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  width: { xs: "100%", sm: "100%", md: "auto" },
                  fontWeight: 700,
                }}
                onClick={() => handleScroll("services")}
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
