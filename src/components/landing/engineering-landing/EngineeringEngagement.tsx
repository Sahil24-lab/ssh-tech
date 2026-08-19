import { Box, Typography } from "@mui/material";
import { Container, GlassCard, SectionShell } from "@ssh/brand-ui";
import { engagementSteps } from "./content";

const entryPoints = [
  "Systems review",
  "Focused prototype",
  "Defined delivery",
  "Technical leadership",
] as const;

const opaquePanelSx = {
  backgroundColor: "rgba(9, 31, 44, 0.94)",
  backgroundImage: "none",
  backdropFilter: "none",
} as const;

export default function EngineeringEngagement() {
  return (
    <SectionShell sectionProps={{ id: "approach", sx: { py: { xs: 10, md: 15 } } }}>
      <Container size="wide" disableGutters>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.8fr) minmax(320px, 0.7fr)" },
            gap: { xs: 3, md: 8 },
            alignItems: "end",
            mb: { xs: 7, md: 9 },
          }}
        >
          <Typography component="h2" variant="h2" sx={{ color: "text.primary", textWrap: "balance" }}>
            Start with the hardest risk.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "rgba(239, 254, 235, 0.72)", maxWidth: 560, justifySelf: { md: "end" } }}
          >
            Review the system, prove the critical assumption, then build from evidence.
          </Typography>
        </Box>

        <GlassCard
          variant="darkElevated"
          sx={{
            overflow: "hidden",
            ...opaquePanelSx,
            borderColor: "rgba(145, 254, 230, 0.12)",
          }}
        >
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
                  position: "relative",
                  minHeight: { xs: 220, md: 280 },
                  p: { xs: 3.5, md: 4.5 },
                  display: "grid",
                  gridTemplateRows: { xs: "auto auto auto", md: "auto minmax(5.4rem, auto) 1fr" },
                  alignContent: "start",
                  rowGap: { xs: 2.5, md: 3 },
                  borderBottom: { xs: index < engagementSteps.length - 1 ? "1px solid" : 0, md: 0 },
                  borderColor: "rgba(145, 254, 230, 0.1)",
                  "&::after": {
                    content: index < engagementSteps.length - 1 ? '""' : "none",
                    display: { xs: "none", md: "block" },
                    position: "absolute",
                    top: 36,
                    right: 0,
                    bottom: 36,
                    width: "1px",
                    background:
                      "linear-gradient(180deg, transparent, rgba(145, 254, 230, 0.14) 18%, rgba(145, 254, 230, 0.14) 82%, transparent)",
                  },
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
                <Typography
                  component="h3"
                  sx={{
                    color: "text.primary",
                    fontFamily: "var(--font-exo2), sans-serif",
                    fontSize: { xs: "1.65rem", md: "clamp(1.55rem, 1.9vw, 1.9rem)" },
                    fontWeight: 600,
                    lineHeight: 1.25,
                    textWrap: "balance",
                  }}
                >
                  {step.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "rgba(239, 254, 235, 0.68)", maxWidth: 360 }}>
                  {step.description}
                </Typography>
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
              gap: { xs: 1.75, md: 3 },
              borderTop: "1px solid",
              borderColor: "rgba(145, 254, 230, 0.1)",
            }}
          >
            {entryPoints.map((entry) => (
              <Typography
                component="li"
                variant="body2"
                key={entry}
                sx={{
                  color: "rgba(239, 254, 235, 0.72)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  "&::before": {
                    content: '""',
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    backgroundColor: "primary.main",
                    opacity: 0.65,
                  },
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
