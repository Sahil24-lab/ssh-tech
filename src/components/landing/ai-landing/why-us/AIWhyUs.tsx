"use client";

import { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import { CheckCircleOutlineRounded } from "@mui/icons-material";
import GlassCard from "@/components/card/glass-card/GlassCard";
import BookCallModal from "@/components/book-call-modal/BookCallModal";

const keyUsps = [
  "Deploy into your current stack without rip-and-replace projects",
  "Track quality, latency, and cost with real operational visibility",
  "Add guardrails and ongoing optimisation so value keeps compounding",
];

const AIWhyUs = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
        py: { xs: 11, sm: 15, md: 22 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          minHeight: { xs: "auto", md: 760 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: { xs: 5, md: 5 },
        }}
      >
        <Grid
          container
          rowSpacing={{ xs: 5, md: 0 }}
          columnSpacing={{ xs: 0, sm: 0, md: 4, lg: 6 }}
          alignItems="stretch"
          justifyContent="center"
        >
          <Grid item xs={12} md={5}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.73rem",
                color: "primary.main",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              PRICING
            </Typography>

            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 700,
                color: "primary.light",
                mb: 2.5,
                letterSpacing: "-0.03em",
                lineHeight: 1.14,
              }}
            >
              Built for operational outcomes
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.primary",
                lineHeight: 1.72,
                mb: 2.5,
                fontSize: "0.98rem",
                maxWidth: { md: "96%" },
              }}
            >
              We design and deploy AI systems inside your existing workflows so
              the end result is usable, reliable, and easier to adopt in
              day-to-day operations.
            </Typography>

            <List sx={{ py: 0 }}>
              {keyUsps.map((item) => (
                <ListItem key={item} disablePadding sx={{ mb: 1.3 }}>
                  <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                    <CheckCircleOutlineRounded
                      fontSize="small"
                      sx={{ color: "primary.main" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      sx: {
                        color: "text.primary",
                        lineHeight: 1.5,
                        fontSize: "0.98rem",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={7} sx={{ display: "flex" }}>
            <GlassCard
              sx={{
                p: { xs: 3, md: 4 },
                backgroundColor: "rgba(4, 20, 31, 0.94)",
                border: `1px solid ${theme.palette.secondary.dark}`,
                boxShadow: "0 14px 30px rgba(0, 0, 0, 0.28)",
                width: "100%",
                maxWidth: { md: 760 },
                ml: { md: "auto" },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.72rem",
                  color: "primary.main",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                How pricing works
              </Typography>

              <Box sx={{ mb: 2.2 }}>
                <Box sx={{ mb: 2.1 }}>
                  <Typography sx={{ color: "text.primary", fontWeight: 700 }}>
                    1. Fixed-fee assessment
                  </Typography>
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.65 }}>
                    We assess one workflow or bottleneck and define the
                    opportunity.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    mb: 2.1,
                    pt: 2.1,
                    borderTop: `1px solid ${theme.palette.secondary.dark}50`,
                  }}
                >
                  <Typography sx={{ color: "text.primary", fontWeight: 700 }}>
                    2. Scoped implementation
                  </Typography>
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.65 }}>
                    If the business case is strong, we quote and deliver a
                    defined project.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    pt: 2.1,
                    borderTop: `1px solid ${theme.palette.secondary.dark}50`,
                  }}
                >
                  <Typography sx={{ color: "text.primary", fontWeight: 700 }}>
                    3. Optional ongoing support
                  </Typography>
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.65 }}>
                    After launch, we provide maintenance, optimisation, and
                    operational support as needed.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mt: "auto" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setOpen(true)}
                  sx={{ fontWeight: 700, px: 4 }}
                >
                  Start with an assessment
                </Button>
              </Box>
            </GlassCard>
          </Grid>
        </Grid>
      </Box>

      <BookCallModal open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
};

export default AIWhyUs;
