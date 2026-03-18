import { Box, Grid, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { CardSurface } from "../components/CardSurface";
import type { ProcessStep } from "../types/content";

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <Grid container spacing={{ xs: 4, md: 4 }}>
      {steps.map((step) => (
        <Grid item xs={12} md={6} xl={3} key={`${step.phase}-${step.title}`}>
          <Box sx={{ position: "relative", pt: 8 }}>
            <Box
              sx={{
                width: 112,
                height: 112,
                borderRadius: "50%",
                bgcolor: "primary.main",
                color: "primary.contrastText",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                boxShadow: (theme) => `0 0 32px ${alpha(theme.palette.primary.main, 0.42)}`,
                zIndex: 1,
              }}
            >
              {step.icon}
            </Box>
            <CardSurface surface="glass" sx={{ p: 4, pt: 10, height: "100%", textAlign: "center" }}>
              <Stack spacing={1.5}>
                <Typography variant="caption" sx={{ fontSize: "0.68rem" }}>
                  {step.phase}
                </Typography>
                <Typography variant="h5">{step.title}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.65 }}>
                  {step.description}
                </Typography>
              </Stack>
            </CardSurface>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
