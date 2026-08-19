import { Box, Stack, Typography } from "@mui/material";
import { Container, SectionShell } from "@ssh/brand-ui";
import { selectedWork } from "./content";

export default function EngineeringSelectedWork() {
  return (
    <SectionShell
      sectionProps={{
        id: "work",
        sx: {
          position: "relative",
          overflow: "hidden",
          py: { xs: 10, md: 15 },
          backgroundColor: "rgba(7, 27, 40, 0.94)",
          backgroundImage: `
            radial-gradient(ellipse 62% 46% at 4% 8%, rgba(7, 223, 193, 0.08), transparent 72%),
            radial-gradient(ellipse 54% 42% at 96% 92%, rgba(14, 83, 76, 0.22), transparent 74%)
          `,
          borderBlock: "1px solid rgba(145, 254, 230, 0.1)",
        },
      }}
    >
      <Container size="wide" disableGutters>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "minmax(280px, 0.72fr) minmax(0, 1.28fr)" },
            gap: { xs: 7, md: 10, lg: 14 },
            alignItems: "start",
          }}
        >
          <Stack spacing={3} sx={{ maxWidth: 560, pt: { lg: 2 } }}>
            <Typography
              sx={{
                color: "primary.main",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "0.78rem",
                letterSpacing: "0.06em",
              }}
            >
              Selected work
            </Typography>
            <Typography component="h2" variant="h2" sx={{ color: "text.primary", textWrap: "balance" }}>
              Work that moved the operation.
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(239, 254, 235, 0.72)", maxWidth: 520 }}>
              Selected work across manufacturing, vehicle controls, robotics and operational software.
            </Typography>
            <Box
              aria-hidden="true"
              sx={{
                width: 72,
                height: 2,
                mt: { xs: 1, lg: 2 },
                backgroundColor: "primary.main",
                boxShadow: "0 0 18px rgba(7, 223, 193, 0.22)",
              }}
            />
          </Stack>

          <Stack spacing={{ xs: 2, md: 2.5 }}>
            {selectedWork.map((item, index) => (
              <Box
                component="article"
                key={item.title}
                sx={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "minmax(150px, 0.42fr) minmax(0, 1fr)" },
                  gap: { xs: 3, md: 5 },
                  p: { xs: 3, sm: 4, md: 4.5 },
                  border: "1px solid",
                  borderColor: index === 0 ? "rgba(7, 223, 193, 0.3)" : "rgba(145, 254, 230, 0.14)",
                  borderRadius: 2,
                  backgroundColor: "rgba(9, 31, 44, 0.76)",
                  transition: "border-color 220ms cubic-bezier(0.22, 1, 0.36, 1), background-color 220ms cubic-bezier(0.22, 1, 0.36, 1)",
                  "&:hover": {
                    borderColor: "rgba(7, 223, 193, 0.34)",
                    backgroundColor: "rgba(9, 38, 50, 0.88)",
                  },
                }}
              >
                <Stack spacing={2.25}>
                  <Stack direction="row" justifyContent="space-between" spacing={2}>
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
                        color: "rgba(239, 254, 235, 0.38)",
                        fontFamily: "var(--font-jetbrains-mono), monospace",
                        fontSize: "0.8rem",
                      }}
                    >
                      0{index + 1}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontFamily: "var(--font-exo2), sans-serif",
                      fontSize: { xs: "1.7rem", md: "clamp(1.7rem, 2.2vw, 2.15rem)" },
                      fontWeight: 600,
                      lineHeight: 1.12,
                      textWrap: "balance",
                    }}
                  >
                    {item.outcome}
                  </Typography>
                </Stack>

                <Stack spacing={2.25}>
                  <Typography component="h3" variant="h5" sx={{ color: "text.primary", fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "rgba(239, 254, 235, 0.72)", maxWidth: 680 }}>
                    {item.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.muted",
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "0.8rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.disciplines}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </SectionShell>
  );
}
