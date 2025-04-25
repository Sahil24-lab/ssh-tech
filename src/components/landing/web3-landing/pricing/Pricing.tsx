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
import theme from "@/theme/theme";
import BookCallModal from "@/components/book-call-modal/BookCallModal";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  const pricingPlans = [
    {
      name: "Launch",
      price: "$6K /month",
      description:
        "Tight scope, production ready builds for lean teams. Ideal for new feature validation or for smaller teams.",
      features: [
        "FREE Blueprint Call (risk & timeline mapping)",
        "1–2 week POC with clear deliverables", 
        "Cancel anytime during POC phase (pay only for time used)",
        "Production-ready front-end integrated with your smart contracts",
        "Wallet connect & core transaction flows",
        "2-month min (6-month discount available)",
      ],
    },
    {
      name: "Growth",
      price: "$9K /month",
      description:
        "Continuous feature delivery and rapid iterations for scaling Web3 teams with evolving product needs.",
      features: [
        "Everything in Launch",
        "Secure Subgraph & API Integration",
        "Real-time staging builds for user testing",
        "Real-time analytics dashboards for usage, transactions, and Users",
        "Frontend security review (CSP, XSS protection)",
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
        "24/7 private Discord channel for instant support",
        "Proactive technical risk audits every 4 weeks",
        "Performance optimization & monitoring",
        "Detailed API architecture & security design",
        "Team handoffs + internal training",
      ],
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 6, xl: 12 },
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
          mb: 2,
          fontWeight: "bold",
          letterSpacing: "0.5px",
          color: "#FFFFFF",
        }}
      >
        Our Pricing
      </Typography>

      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ mb: 6, color: "text.secondary" }}
      >
        Fixed-cost plans to avoid negotiations and start creating.
      </Typography>
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "90%",
            md: "80%",
            lg: "96%",
            xl: "94%",
            xxl: "76%",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {pricingPlans.map((plan, index) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <GlassCardDark
                sx={{
                  px: 5,
                  py: 6,
                  minHeight: {
                    xs: index === 1 ? 740 : 640,
                    sm: index === 1 ? 780 : 680,
                    md: index === 1 ? 800 : 800,
                    lg: index === 1 ? 880 : 760,
                    xl: index === 1 ? 780 : 740,
                    xxl: index === 1 ? 900 : 800,
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexGrow: 1,
                  flexBasis: {
                    xs: "100%",
                    sm: "80%",
                    md: "70%",
                    lg: "100%",
                  },
                  maxWidth: {
                    xs: "100%",
                    md: "460px",
                    lg: "500px",
                    xl: "600px",
                  },
                  backgroundColor:
                    plan.tag === "Most Popular"
                      ? "background.paper"
                      : undefined,
                  transform: {
                    xs: "scale(1)",
                    sm: "scale(1)",
                    md: plan.tag === "Most Popular" ? "scale(1)" : "scale(1)",
                    lg:
                      plan.tag === "Most Popular" ? "scale(1.02)" : "scale(1)",
                    xl:
                      plan.tag === "Most Popular" ? "scale(1.02)" : "scale(1)",
                  },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: {
                      xs: "scale(1)",
                      sm: "scale(1)",
                      md: plan.tag === "Most Popular" ? "scale(1)" : "scale(1)",
                      lg:
                        plan.tag === "Most Popular"
                          ? "scale(1.04) translateY(-8px)"
                          : "scale(1.02) translateY(-4px)",
                      xl:
                        plan.tag === "Most Popular"
                          ? "scale(1.04) translateY(-8px)"
                          : "scale(1.02) translateY(-4px)",
                    },
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

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => setOpen(true)}
                  sx={{ fontWeight: "700" }}
                >
                  Book a Call
                </Button>
              </GlassCardDark>
            </Grid>
          ))}
        </Grid>
      </Box>
      <BookCallModal open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
}
