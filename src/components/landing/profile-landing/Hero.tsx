import GlassCardDark from "@/components/card/glass-card-dark/GlassCardDark";
import {
  Box,
  Grid,
  Typography,
  Button,
  Avatar,
  Container,
} from "@mui/material";
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
          xs: "4rem 4rem",
          sm: "4rem 4rem",
          md: "4rem 4rem",
          lg: "4rem 4rem",
          xxl: "4rem 6rem",
        }, // internal padding inside the card
        borderRadius: 4,
        my: 4,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={5} alignItems="center">
        <Grid item xs={12} md={8}>
          <Box>
            <Typography variant="h1" component="h1" gutterBottom>
              Sahil Harriram
            </Typography>

            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "secondary.light" }}
            >
              Blockchain Developer & Engineering Leader
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocationIcon sx={{ color: "primary.light", mr: 1 }} />
              <Typography variant="body2">
                Fully Remote, GMT+7 Timezone
              </Typography>
            </Box>

            <Typography
              variant="body1"
              paragraph
              sx={{ mb: 3, maxWidth: "100%" }}
            >
              Experienced engineering leader with expertise in blockchain
              development, technical project management, and product strategy.
              Passionate about building innovative solutions at the intersection
              of technology and business.
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
                component="a"
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
                component="a"
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
                component="a"
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

        {/* AVATAR */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: 150, sm: 200, md: 300 },
              height: { xs: 150, sm: 200, md: 300 },
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
                width: { xs: 80, sm: 100, md: 160 },
                height: { xs: 80, sm: 100, md: 160 },
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
