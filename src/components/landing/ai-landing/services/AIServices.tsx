"use client";

import { Typography, Grid, Box, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import GlassCard from "@/components/card/glass-card/GlassCard";
import { services } from "./services";

const AIServices = () => {
  const theme = useTheme();

  return (
    <Box
      id="services"
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 8, sm: 10 },
        width: "100%",
      }}
    >
      <Typography
        variant="body2"
        align="center"
        sx={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.73rem",
          color: "primary.main",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          mb: 2,
        }}
      >
        What we build
      </Typography>

      <Typography
        variant="h1"
        component="h2"
        align="center"
        sx={{
          fontWeight: "bold",
          letterSpacing: "-0.02em",
          color: "#FFFFFF",
          mb: 2,
        }}
      >
        AI systems built into your operations.
      </Typography>

      <Typography
        variant="h5"
        align="center"
        sx={{ mb: 8, color: "text.secondary" }}
      >
        Not demos. Production-grade systems that plug into your stack and
        scale with your team.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={12} md={6} lg={4}>
            <GlassCard
              sx={{
                p: 5,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                backgroundImage:
                  "linear-gradient(180deg, rgba(31,226,196,0.06) 0%, rgba(31,226,196,0.02) 26%, rgba(255,255,255,0.01) 100%)",
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 14px 30px -16px ${theme.palette.primary.main}66`,
                  borderColor: `${theme.palette.primary.main}33`,
                },
              }}
            >
              {/* Mono label */}
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.74rem",
                  letterSpacing: "0.1em",
                  color: alpha(theme.palette.primary.main, 0.62),
                  textTransform: "uppercase",
                  display: "inline-block",
                  mb: 2.5,
                  alignSelf: "flex-start",
                }}
              >
                {`// ${service.label}`}
              </Typography>

              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: "text.primary", lineHeight: 1.65 }}
                >
                  {service.description}
                </Typography>
              </Box>

              {/* Tech stack tags */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, minmax(0, 1fr))",
                  },
                  gap: 1,
                  mt: 3.5,
                  alignItems: "stretch",
                }}
              >
                {service.tags.map((tag) => (
                  <Box
                    key={tag}
                    sx={{
                      width: "100%",
                      minHeight: 30,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.64rem",
                      letterSpacing: "0.02em",
                      color: "text.secondary",
                      borderColor: `${theme.palette.primary.main}45`,
                      backgroundColor: `${theme.palette.primary.main}12`,
                      border: `1px solid ${theme.palette.primary.main}45`,
                      borderRadius: "8px",
                      px: 1.25,
                      py: 0.45,
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
    </Box>
  );
};

export default AIServices;
