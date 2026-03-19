"use client";

import { Typography, Grid, Box, Container, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import GlassCard from "@/components/card/glass-card/GlassCard";
import { services } from "./services";

const AIServices = () => {
  const theme = useTheme();

  return (
    <Box
      id="services"
      component="section"
      sx={{
        width: "100%",
        minHeight: "76vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 8, sm: 10, md: 12 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            maxWidth: 1040,
            mx: "auto",
            textAlign: "center",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: "var(--font-play), sans-serif",
              fontSize: "0.82rem",
              color: theme.palette.text.primary,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 700,
              mb: 2,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              "&::before": {
                content: '"//"',
                display: "inline-block",
                marginLeft: 0,
                marginRight: "0.45rem",
                color: theme.palette.text.primary,
                opacity: 1,
                transform: "translateY(-0.02em)",
              },
            }}
          >
            What we build
          </Typography>

          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: theme.palette.text.primary,
              mb: 2,
              fontSize: {
                xs: "2.2rem",
                sm: "2.8rem",
                md: "3.4rem",
              },
              lineHeight: 1.08,
            }}
          >
            AI systems built into your operations.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              maxWidth: 760,
              mx: "auto",
              lineHeight: 1.5,
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.2rem",
              },
            }}
          >
            Not demos. Production-grade systems that plug into your stack and
            scale with your team.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {services.map((service) => (
            <Grid item key={service.title} xs={12} md={6} lg={4}>
              <GlassCard
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  p: { xs: 3, sm: 3.5, md: 4 },
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.26)}`,
                  background: `linear-gradient(
      180deg,
      ${alpha(theme.palette.primary.main, 0.12)} 0%,
      ${alpha(theme.palette.primary.main, 0.06)} 28%,
      rgba(255,255,255,0.02) 100%
    )`,
                  transition:
                    "transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    borderColor: alpha(theme.palette.primary.main, 0.38),
                    boxShadow: `0 18px 40px -22px ${alpha(theme.palette.primary.main, 0.5)}`,
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "var(--font-play), sans-serif",
                    fontSize: "0.74rem",
                    letterSpacing: "0.1em",
                    color: theme.palette.text.primary,
                    textTransform: "uppercase",
                    fontWeight: 700,
                    mb: 1.75,
                    lineHeight: 1.1,
                  }}
                >
                  {`// ${service.label}`}
                </Typography>

                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 800,
                    color: theme.palette.text.primary,
                    mb: 1.5,
                    lineHeight: 1.22,
                    letterSpacing: "-0.02em",
                    fontSize: {
                      xs: "1.45rem",
                      sm: "1.55rem",
                    },
                    maxWidth: "18ch",
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: alpha(theme.palette.common.white, 0.84),
                    lineHeight: 1.66,
                    fontSize: "1rem",
                    mb: 3.25,
                    maxWidth: "38ch",
                  }}
                >
                  {service.description}
                </Typography>

                <Box
                  sx={{
                    mt: "auto",
                    pt: 0.25,
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      sm: "repeat(2, minmax(0, 1fr))",
                    },
                    gap: 1,
                  }}
                >
                  {service.tags.map((tag) => (
                    <Box
                      key={tag}
                      sx={{
                        minHeight: 34,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-play), sans-serif",
                        fontSize: "0.72rem",
                        letterSpacing: "0.05em",
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        backgroundColor: alpha(theme.palette.primary.main, 0.24),
                        border: `1.5px solid ${alpha(theme.palette.primary.main, 0.55)}`,
                        borderRadius: 2,
                        px: 1.25,
                        py: 0.6,
                        textAlign: "center",
                        lineHeight: 1.25,
                        whiteSpace: "normal",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AIServices;
