import { Box, Stack, Typography } from "@mui/material";
import { Container, SectionShell } from "@ssh/brand-ui";
import { selectedWork } from "./content";

export default function EngineeringSelectedWork() {
  return (
    <SectionShell sectionProps={{ id: "work", sx: { py: { xs: 10, md: 15 } } }}>
      <Container size="wide" disableGutters>
        <Stack spacing={2.5} sx={{ mb: { xs: 7, md: 9 }, maxWidth: 760 }}>
          <Typography component="h2" variant="h2" sx={{ color: "text.primary", textWrap: "balance" }}>
            Work that moved the operation.
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(239, 254, 235, 0.72)", maxWidth: 680 }}>
            Selected work across manufacturing, vehicle controls, robotics and operational software.
          </Typography>
        </Stack>

        <Box
          sx={{
            borderTop: "1px solid",
            borderBottom: "1px solid",
            borderColor: "rgba(145, 254, 230, 0.18)",
          }}
        >
          {selectedWork.map((item, index) => (
            <Box
              component="article"
              key={item.title}
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "minmax(150px, 0.34fr) minmax(280px, 0.82fr) minmax(360px, 1.14fr)",
                },
                gap: { xs: 3.5, md: 5, lg: 8 },
                alignItems: "start",
                py: { xs: 5, md: 7.5 },
                borderBottom: index < selectedWork.length - 1 ? "1px solid" : 0,
                borderColor: "rgba(145, 254, 230, 0.14)",
              }}
            >
              <Stack direction="row" justifyContent={{ xs: "space-between", md: "flex-start" }} spacing={2.5}>
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
                    color: "rgba(239, 254, 235, 0.4)",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "0.78rem",
                  }}
                >
                  0{index + 1}
                </Typography>
              </Stack>

              <Stack spacing={2.5}>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontFamily: "var(--font-exo2), sans-serif",
                    fontSize: { xs: "1.85rem", md: "clamp(2rem, 2.8vw, 2.65rem)" },
                    fontWeight: 600,
                    lineHeight: 1.12,
                    textWrap: "balance",
                  }}
                >
                  {item.outcome}
                </Typography>
                <Typography component="h3" variant="h5" sx={{ color: "rgba(239, 254, 235, 0.88)", fontWeight: 600 }}>
                  {item.title}
                </Typography>
              </Stack>

              <Stack spacing={3} sx={{ maxWidth: 720 }}>
                <Typography variant="body1" sx={{ color: "rgba(239, 254, 235, 0.72)" }}>
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
