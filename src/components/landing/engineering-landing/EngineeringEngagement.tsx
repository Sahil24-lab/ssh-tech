import { Box, Stack, Typography } from "@mui/material";
import { Container, GlassCard, SectionShell } from "@ssh/brand-ui";
import { engagementSteps } from "./content";

const entryPoints = [
  "Systems review",
  "Focused prototype",
  "Defined delivery",
  "Technical leadership",
] as const;

export default function EngineeringEngagement() {
  return (
    <SectionShell surface="paper" sectionProps={{ id: "approach", sx: { py: { xs: 9, md: 14 } } }}>
      <Container size="wide" disableGutters>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.8fr) minmax(320px, 0.7fr)" },
            gap: { xs: 3, md: 8 },
            alignItems: "end",
            mb: { xs: 6, md: 9 },
          }}
        >
          <Stack spacing={2.5}>
            <Typography component="h2" variant="h2" sx={{ color: "text.primary", textWrap: "balance" }}>
              Start with the hardest risk.
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            sx={{ color: "rgba(239, 254, 235, 0.7)", maxWidth: 560, justifySelf: { md: "end" } }}
          >
            Review the system, prove the critical assumption, then build from evidence.
          </Typography>
        </Box>

        <GlassCard variant="darkElevated" sx={{ overflow: "hidden" }}>
          <Box
            component="ol"
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            }}
          >
            {engagementSteps.map((step, index) => (
              <Box
                component="li"
                key={step.title}
                sx={{
                  minHeight: { xs: 220, md: 270 },
                  p: { xs: 3.5, md: 4.5 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRight: { md: index < engagementSteps.length - 1 ? "1px solid" : 0 },
                  borderBottom: { xs: index < engagementSteps.length - 1 ? "1px solid" : 0, md: 0 },
                  borderColor: "divider",
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "0.9rem",
                    letterSpacing: "0.08em",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Typography>
                <Stack spacing={1.5}>
                  <Typography component="h3" variant="h4" sx={{ color: "text.primary", fontWeight: 600 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "rgba(239, 254, 235, 0.66)", maxWidth: 360 }}>
                    {step.description}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Box>

          <Box
            component="ul"
            sx={{
              listStyle: "none",
              p: { xs: 2.5, md: 3 },
              m: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: 1.25,
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            {entryPoints.map((entry) => (
              <Typography
                component="li"
                variant="body2"
                key={entry}
                sx={{
                  color: "rgba(239, 254, 235, 0.72)",
                  px: 1.75,
                  py: 0.75,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1.5,
                }}
              >
                {entry}
              </Typography>
            ))}
          </Box>
        </GlassCard>
      </Container>
    </SectionShell>
  );
}
