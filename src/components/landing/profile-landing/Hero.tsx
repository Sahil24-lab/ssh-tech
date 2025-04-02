import GlassCard from "@/components/card/glass-card/GlassCard";
import { Box, Grid, Typography, Button, Avatar } from "@mui/material";
import {
  Download as DownloadIcon,
  LinkedIn as LinkedinIcon,
  GitHub as GithubIcon,
  Mail as MailIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import React from "react";

export default function Hero() {
  return (
    <GlassCard
      sx={{
        mb: 6,
        p: { xs: 3, md: 4 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={8}>
          <Box>
            <Typography variant="h2" component="h1" gutterBottom>
              Sahil Harriram
            </Typography>

            <Typography
              variant="h5"
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
                href="/resume.pdf"
                target="_blank"
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
                href="https://linkedin.com"
                target="_blank"
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
                href="https://github.com"
                target="_blank"
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

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Avatar
            sx={{
              width: { xs: 150, md: 180 },
              height: { xs: 150, md: 180 },
              border: "4px solid",
              borderColor: "primary.main",
              fontSize: { xs: 40, md: 48 },
              backgroundColor: "background.paper",
              boxShadow: "0 8px 32px rgba(7, 223, 193, 0.3)",
            }}
          >
            SH
          </Avatar>
        </Grid>
      </Grid>
    </GlassCard>
  );
}
