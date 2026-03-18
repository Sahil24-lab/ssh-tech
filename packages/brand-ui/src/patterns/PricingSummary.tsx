import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { BrandButton } from "../components/BrandButton";
import { CardSurface } from "../components/CardSurface";
import type { PricingPlan } from "../types/content";

export function PricingSummary({ plans }: { plans: PricingPlan[] }) {
  return (
    <Grid container spacing={4} alignItems="stretch" justifyContent="center">
      {plans.map((plan) => (
        <Grid item xs={12} md={6} lg={4} key={plan.name}>
          <CardSurface
            surface="panel"
            glow={plan.highlighted}
            sx={{
              p: 5,
              height: "100%",
              borderColor: plan.highlighted ? "primary.main" : "secondary.dark",
              transform: plan.highlighted ? { lg: "scale(1.02)" } : undefined,
            }}
          >
            <Stack spacing={2.25} height="100%">
              {plan.tag ? (
                <Box>
                  <Chip
                    label={plan.tag}
                    color="primary"
                    sx={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                  />
                </Box>
              ) : null}
              <Typography variant="h5">{plan.name}</Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "1.75rem",
                  color: "primary.light",
                }}
              >
                {plan.price}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.65 }}>
                {plan.description}
              </Typography>
              <Stack spacing={1} sx={{ mt: 1 }}>
                {plan.features.map((feature) => (
                  <Typography key={feature} variant="body2" sx={{ color: "text.primary" }}>
                    {`• ${feature}`}
                  </Typography>
                ))}
              </Stack>
              <Box sx={{ mt: "auto", pt: 2 }}>
                <BrandButton
                  label={plan.highlighted ? "Start project" : "View details"}
                  href="#"
                  variant={plan.highlighted ? "contained" : "outlined"}
                />
              </Box>
            </Stack>
          </CardSurface>
        </Grid>
      ))}
    </Grid>
  );
}
