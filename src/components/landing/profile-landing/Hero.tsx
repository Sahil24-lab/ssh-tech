"use client";

import GlassCardDark from "@/components/card/glass-card-dark/GlassCardDark";
import { Box, Grid, Typography, Button } from "@mui/material";
import {
  Download as DownloadIcon,
  LinkedIn as LinkedinIcon,
  GitHub as GithubIcon,
  Mail as MailIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import React from "react";
import Image from "next/image";
import { trackEvent } from "@/app/lib/umamiTrackEvent";

export default function Hero() {
  return (
    <GlassCardDark
      sx={{
        p: {
          xs: "2rem",
          sm: "4rem",
          md: "4rem",
          lg: "4rem",
          xxl: "4rem 6rem",
        },
        borderRadius: 4,
        my: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} md={8}>
          <Box>
            {/* Inline Avatar + Headline for Mobile */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                gap: 2,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  border: "2px solid",
                  borderColor: "primary.main",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "background.paper",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/logos/S Shape.png"
                  alt="Logo"
                  width={28}
                  height={28}
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Typography
                variant="h6"
                component="h1"
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    xs: "1.25rem",
                    sm: "1.5rem",
                  },
                }}
              >
                Building High-Impact Web3 Products
              </Typography>
            </Box>

            {/* Headline for md+ */}
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                display: { xs: "none", md: "block" },
                fontWeight: 600,
              }}
            >
              Building High-Impact Web3 Products
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "secondary.light", fontWeight: 500, opacity: 0.7 }}
            >
              Engineering Leader | Blockchain Developer | Web3 Growth Architect
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocationIcon sx={{ color: "primary.light", mr: 1 }} />
              <Typography variant="body2">
                Fully Remote — GMT+7 (Asia Pacific)
              </Typography>
            </Box>

            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              I’m Sahil Harriram — I help Web3 startups create traction, and
              growth through full-stack product execution. I have experience
              leading engineering strategy to drive real outcomes. From GameFi
              to DeFi dashboards, I ship tech that raises, retains, and scales.
              Key highlights:
            </Typography>

            {/* Bullet List */}
            <Box
              component="ul"
              sx={{
                pl: 3,
                mb: 4,
                listStyleType: "disc",
                listStylePosition: "outside",
                color: "text.secondary",
              }}
            >
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                <strong>Led 12-person global teams</strong> across Web3 &
                Robotics — scaled engineering teams 4x and managed teams
                shipping 3 full-stack products in parallel
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Led development and delivery of flagship products, enabling{" "}
                <strong>$4M+ in new revenue</strong> and a{" "}
                <strong>$20M capital raise</strong>
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 1 }}>
                Secured over <strong>$600K</strong> through grants, token raises
                & delivery-led fundraising
              </Typography>
              <Typography component="li" variant="body2">
                Launched GameFi product with <strong>5,000 NFTs minted</strong>{" "}
                and <strong>3,000+ users in 14 days</strong>
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ mb: 2 }}>
              Let’s connect or dive into my work:
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                href="https://drive.google.com/file/d/1vQGr7z8OAO2PkedyyYDSlQr16W8hDvjH/view?usp=sharing&utm_source=portfolio"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("resume-pdf-click")}
                sx={{
                  backgroundColor: "primary.main",
                  "&:hover": { backgroundColor: "primary.dark" },
                }}
              >
                Download Resume
              </Button>

              <Button
                variant="outlined"
                startIcon={<LinkedinIcon />}
                href="https://www.linkedin.com/in/sahil-harriram/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("social-linkedin-click")}
                sx={{
                  borderColor: "primary.light",
                  color: "primary.light",
                }}
              >
                LinkedIn
              </Button>

              <Button
                variant="outlined"
                startIcon={<GithubIcon />}
                href="https://github.com/Sahil24-lab"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("social-github-click")}
                sx={{
                  borderColor: "primary.light",
                  color: "primary.light",
                }}
              >
                GitHub
              </Button>

              <Button
                variant="outlined"
                startIcon={<MailIcon />}
                href="mailto:sahil.harriram@gmail.com"
                onClick={() => trackEvent("social-email-click")}
                sx={{
                  borderColor: "primary.light",
                  color: "primary.light",
                }}
              >
                Email
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right-side Avatar for md+ only */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { md: 300 },
              height: { md: 300 },
              border: "4px solid",
              borderColor: "primary.main",
              backgroundColor: "background.paper",
              boxShadow: "0 8px 32px rgba(7, 223, 193, 0.3)",
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 160,
                height: 160,
                position: "relative",
              }}
            >
              <Image
                src="/logos/S Shape.png"
                alt="Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </GlassCardDark>
  );
}
