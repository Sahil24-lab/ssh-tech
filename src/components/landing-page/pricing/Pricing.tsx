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
    name: "Lite",
    price: "$1,495",
    description:
      "Quickly receive a high-quality brand logo, representing your business vision.",
    features: [
      "Primary logo",
      "Brand colours",
      "72hr delivery",
      "Max 1 revision",
      "Figma files",
    ],
  },
  {
    name: "Standard",
    price: "$2,225",
    description:
      "Full scale brand identity promoting and connecting with your target audience.",
    features: [
      "Primary and secondary logos",
      "Full brand guidebook",
      "2 weeks delivery",
      "Max 3 revisions",
      "Figma files",
    ],
  },
  {
    name: "Monthly",
    price: "$2,495/m",
    description:
      "Monthly design support, perfect for companies who require ongoing design work.",
    features: [
      "Unlimited banners",
      "Unlimited revisions",
      "Updates every 24 hours",
      "Max 1 revision",
      "Pause or cancel anytime",
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
