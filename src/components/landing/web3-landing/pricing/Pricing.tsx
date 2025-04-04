"use client";

import React from "react";
import {
  Typography,
  Grid,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Paper,
  PaperProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Check, Whatshot } from "@mui/icons-material";

const GlassPane = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5))",
  backdropFilter: "blur(15px)",
  borderRadius: "16px",
  border: `1px solid ${theme.palette.text.primary}20`,
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  position: "relative",
}));

const GlassCardDark: React.FC<PaperProps> = (props) => {
  return <GlassPane elevation={0} {...props} />;
};

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Essential",
      price: "$6K /month",
      description:
        "Lean, production-ready builds with a tight scope, perfect for smaller funded teams or new feature validation.",
      features: [
        "20 hrs/week dev time",
        "FREE Blueprint Call",
        "1–2 week POC with clear deliverables",
        "Mainnet deployment included",
        "Cancel anytime post-POC (pay only for work done)",
        "3-month min (6-month discount)",
      ],
    },
    {
      name: "Growth",
      price: "$9K /month",
      description:
        "Enhanced feature development, Multi-chain integrations, & faster iterations for post-fundraise scaling.",
      features: [
        "30 hrs/week dev & product input",
        "Everything in Essential",
        "Subgraph + analytics for real-time insights",
        "Multi-chain/bridging capabilities",
        "Testnet pipelines + iterative security reviews",
        "Dedicated Discord for collaboration",
      ],
      tag: "Most Popular",
    },
    {
      name: "Premium",
      price: "$13K /month",
      description:
        "Full-spectrum partnership, 24/7 support, and robust infrastructure to launch & scale with confidence.",
      features: [
        "40 hrs/week dedicated dev + strategy",
        "Everything in Growth",
        "24/7 priority Discord suppport",
        "Auto security scans and testing CI/CD pipelines",
        "Complex integrations (bridging, yield, tokens)",
        "Performance optimization & monitoring",
        "Team handoffs + internal training",
      ],
    },
  ];

  return (
    <Box
      id="pricing"
      sx={{
        py: 8,
        animation: "fadeIn 0.8s ease-in-out",
        "@keyframes fadeIn": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        align="center"
        sx={{
          mb: 1,
          fontWeight: "bold",
          letterSpacing: "0.5px",
          color: "#FFFFFF",
        }}
      >
        Our Services
      </Typography>

      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ mb: 4, color: "text.secondary" }}
      >
        Fixed-cost plans to avoid negotiations and start creating.
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {pricingPlans.map((plan, index) => (
          <Grid
            item
            xs={12}
            md={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
              <GlassCardDark
                sx={{
                  px: 5,
                  py: plan.tag === "Most Popular" ? 9 : 6,
                  minHeight: plan.tag === "Most Popular" ? 740 : 640,
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "space-between",
                  backgroundColor:
                    plan.tag === "Most Popular"
                      ? "background.paper"
                      : undefined,
                  transform:
                    plan.tag === "Most Popular" ? "scale(1.02)" : "scale(1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform:
                      plan.tag === "Most Popular"
                        ? "scale(1.04) translateY(-8px)"
                        : "scale(1.02) translateY(-4px)",
                    boxShadow: "0px 16px 36px rgba(0, 0, 0, 0.35)",
                  },
                  border: plan.tag === "Most Popular" ? "2px solid" : "none",
                  borderColor:
                    plan.tag === "Most Popular" ? "primary.main" : undefined,
                  animation: `cardFadeIn 0.5s ${0.1 * index}s both`,
                  "@keyframes cardFadeIn": {
                    from: { opacity: 0, transform: "translateY(10px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                }}
              >
                {plan.tag === "Most Popular" && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",
                      px: 2,
                      py: 1,
                      borderRadius: "0 12px 0 16px",
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <Whatshot sx={{ color: "background.main", fontSize: 18 }} />
                    {plan.tag}
                  </Box>
                )}

                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "primary.main",
                      fontWeight: "800",
                      fontSize:
                        plan.tag === "Most Popular" ? "2.1rem" : "1.8rem",
                    }}
                  >
                    {plan.name}
                  </Typography>

                  {plan.tag && plan.tag !== "Most Popular" && (
                    <Chip
                      icon={<Whatshot sx={{ color: "#fff", fontSize: 18 }} />}
                      label={plan.tag}
                      color="secondary"
                      size="small"
                      sx={{
                        backgroundColor: "secondary.main",
                        color: "secondary.contrastText",
                        fontWeight: 600,
                        px: 1,
                        height: 24,
                      }}
                    />
                  )}
                </Box>

                <Typography
                  variant="h3"
                  component="p"
                  color="#fff"
                  gutterBottom
                >
                  {plan.price}
                </Typography>

                <Typography variant="body2" color="primary.main" paragraph>
                  {plan.description}
                </Typography>

                <List sx={{ mb: 2, flexGrow: 1 }}>
                  {plan.features.map((feature, featureIndex) => (
                    <ListItem key={featureIndex} disablePadding>
                      <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                        <Check
                          fontSize="small"
                          sx={{ color: "primary.main" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>

                <Button variant="contained" color="primary" fullWidth>
                  Book a Call
                </Button>
              </GlassCardDark>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
