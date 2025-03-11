import {
  Typography,
  Grid,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Check } from "@mui/icons-material";
import GlassCard from "@/components/card/glass-card/GlassCard";

const pricingPlans = [
  {
    name: "Essential",
    price: "$6K /month",
    description:
      "Kickstart your project with 20 hrs/week of targeted Web3 development and strategic blueprinting.",
    features: [
      "20 hrs/week dedicated development time",
      "Blueprint Discovery Call & 1–2 Week Proof-of-Concept",
      "Core Web3 development & strategic planning",
      "Minimum 3-month commitment (6-month discount available)",
    ],
  },
  {
    name: "Growth",
    price: "$9K /month",
    description:
      "Accelerate your project wiht 30 hrs/week of iterative development, and adnvanced security testing",
    features: [
      "30 hrs/week development time",
      "Everything in Essential, plus:",
      "Extended development & iterative enhancements",
      "Enhanced Subgraph deployment for real-time data indexing",
      "Iterative Web3 integration improvements with additional security testing",
    ],
  },
  {
    name: "Premium",
    price: "$13K /month",
    description:
      "Transform your project with dedicated 40 hrs/week of development and 24/7 dedicated support",
    features: [
      "40 hrs/week development time",
      "Everything in Growth, plus:",
      "Scalable, robust Subgraph deployment for high-performance data retrieval",
      "Access to Private discord server with dedicated 24/7 support for your project",
      "Extensive, automated security and performance testing",
    ],
  },
];

const Pricing = () => {
  return (
    <Box id="pricing" sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" gutterBottom align="center">
        Our Services
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        gutterBottom
        sx={{ mb: 4 }}
      >
        Fixed-cost plans to avoid negotiations and start creating.
      </Typography>
      <Grid container spacing={4}>
        {pricingPlans.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <GlassCard
              sx={{
                p: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" color="primary" gutterBottom>
                {plan.name}
              </Typography>
              <Typography variant="h3" component="p" gutterBottom>
                {plan.price}
              </Typography>
              <Typography variant="body2" paragraph>
                {plan.description}
              </Typography>
              <List sx={{ mb: 2, flexGrow: 1 }}>
                {plan.features.map((feature, featureIndex) => (
                  <ListItem key={featureIndex} disablePadding>
                    <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                      <Check fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
              <Button variant="contained" color="primary" fullWidth>
                Book a Call
              </Button>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
