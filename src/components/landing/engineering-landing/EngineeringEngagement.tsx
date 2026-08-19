import { Box, Stack, Typography } from "@mui/material";
import { Container, SectionShell } from "@ssh/brand-ui";
import { engagementSteps } from "./content";

const entryPoints = [
  "Systems review",
  "Focused prototype",
  "Defined delivery",
  "Technical leadership",
] as const;

export default function EngineeringEngagement() {
  return (
    <SectionShell surface="paper" sectionProps={{ id: "approach" }}>
      <Container size="wide" disableGutters>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(260px, 0.66fr) minmax(0, 1.34fr)" },
            gap: { xs: 6, md: 9, lg: 13 },
          }}
        >
          <Stack spacing={2.5}>
            <Typography component="h2" variant="h2" sx={{ color: "text.primary", textWrap: "balance" }}>
              A practical way to start.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 520 }}>
              Work begins with the smallest engagement that can remove meaningful technical risk. That may be a systems review, a prototype or a defined delivery scope.
            </Typography>

            <Box sx={{ pt: 2 }}>
              <Typography
                sx={{
                  color: "primary.main",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "0.78rem",
                  mb: 2,
                }}
              >
                Ways to engage
              </Typography>
              <Stack component="ul" spacing={1.25} sx={{ listStyle: "none", p: 0, m: 0 }}>
                {entryPoints.map((entry) => (
                  <Typography
                    component="li"
                    variant="body2"
                    key={entry}
                    sx={{ color: "text.primary", display: "flex", alignItems: "center", gap: 1.5 }}
                  >
                    <Box component="span" sx={{ width: 16, height: 1, bgcolor: "primary.main", flexShrink: 0 }} />
                    {entry}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Stack>

          <Box
            component="ol"
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            {engagementSteps.map((step, index) => (
              <Box
                component="li"
                key={step.title}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "52px minmax(0, 1fr)", sm: "72px minmax(180px, 0.7fr) minmax(0, 1.3fr)" },
                  gap: { xs: 2, sm: 3.5 },
                  alignItems: "start",
                  py: { xs: 4, md: 5 },
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "0.9rem",
                    pt: 0.5,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Typography>
                <Typography component="h3" variant="h5" sx={{ color: "text.primary", fontWeight: 600 }}>
                  {step.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ gridColumn: { xs: "2", sm: "auto" }, color: "text.secondary", maxWidth: 640 }}
                >
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </SectionShell>
  );
}
