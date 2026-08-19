import { Box, Stack, Typography } from "@mui/material";
import { Container, GlassCard, SectionShell } from "@ssh/brand-ui";
import { selectedWork } from "./content";

const workSpans = [7, 5, 5, 7] as const;

export default function EngineeringSelectedWork() {
  return (
    <SectionShell sectionProps={{ id: "work", sx: { py: { xs: 9, md: 14 } } }}>
      <Container size="wide" disableGutters>
        <Stack spacing={2.5} sx={{ mb: { xs: 6, md: 9 }, maxWidth: 760 }}>
          <Typography component="h2" variant="h2" sx={{ color: "text.primary", textWrap: "balance" }}>
            Work that moved the operation.
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(239, 254, 235, 0.7)", maxWidth: 680 }}>
            Selected work across manufacturing, vehicle controls, robotics and operational software.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(12, minmax(0, 1fr))" },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {selectedWork.map((item, index) => (
            <GlassCard
              component="article"
              key={item.title}
              variant="darkElevated"
              sx={{
                gridColumn: { xs: "1", md: `span ${workSpans[index]}` },
                minHeight: { xs: 360, md: index < 2 ? 420 : 360 },
                p: { xs: 3.5, md: 4.5 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background:
                  index === 0
                    ? "linear-gradient(145deg, rgba(14, 83, 76, 0.34), rgba(9, 31, 44, 0.8) 62%, rgba(7, 223, 193, 0.08))"
                    : undefined,
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={3}>
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
                    color: "rgba(239, 254, 235, 0.36)",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "0.78rem",
                  }}
                >
                  0{index + 1}
                </Typography>
              </Stack>

              <Stack spacing={3} sx={{ mt: { xs: 7, md: 9 }, maxWidth: 720 }}>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontFamily: "var(--font-exo2), sans-serif",
                    fontSize: { xs: "1.8rem", md: index === 0 ? "2.45rem" : "2.15rem" },
                    fontWeight: 600,
                    lineHeight: 1.15,
                    textWrap: "balance",
                  }}
                >
                  {item.outcome}
                </Typography>

                <Typography component="h3" variant="h5" sx={{ color: "text.primary", fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "rgba(239, 254, 235, 0.68)" }}>
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
            </GlassCard>
          ))}
        </Box>
      </Container>
    </SectionShell>
  );
}
