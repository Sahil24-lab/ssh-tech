import { Box, Stack, Typography } from "@mui/material";
import { Container, SectionShell } from "@ssh/brand-ui";
import { selectedWork } from "./content";

export default function EngineeringSelectedWork() {
  return (
    <SectionShell sectionProps={{ id: "work" }}>
      <Container size="wide" disableGutters>
        <Stack spacing={2.5} sx={{ mb: { xs: 6, md: 8 }, maxWidth: 760 }}>
          <Typography component="h2" variant="h2" sx={{ color: "text.primary", textWrap: "balance" }}>
            Evidence from systems that had to work.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 680 }}>
            The work spans different technologies, but the job is consistent: take a difficult technical boundary and make it useful in the operation.
          </Typography>
        </Stack>

        <Box sx={{ borderTop: "1px solid", borderColor: "divider" }}>
          {selectedWork.map((item) => (
            <Box
              component="article"
              key={item.title}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "minmax(210px, 0.68fr) minmax(0, 1.32fr)" },
                gap: { xs: 3, md: 8 },
                py: { xs: 5, md: 6.5 },
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            >
              <Stack spacing={1.5}>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "0.8rem",
                  }}
                >
                  {item.organisation}
                </Typography>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontFamily: "var(--font-exo2), sans-serif",
                    fontSize: { xs: "1.7rem", md: "2.2rem" },
                    fontWeight: 600,
                    lineHeight: 1.15,
                    textWrap: "balance",
                  }}
                >
                  {item.outcome}
                </Typography>
              </Stack>

              <Stack spacing={2} sx={{ maxWidth: 760 }}>
                <Typography component="h3" variant="h4" sx={{ color: "text.primary", fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  {item.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.muted",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "0.78rem",
                  }}
                >
                  {item.disciplines}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Box>
      </Container>
    </SectionShell>
  );
}
