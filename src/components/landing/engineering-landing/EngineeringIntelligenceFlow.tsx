import { Box, Stack, Typography } from "@mui/material";
import { Container, SectionShell } from "@ssh/brand-ui";
import styles from "./EngineeringIntelligenceFlow.module.css";

const stages = [
  {
    title: "Operation",
    detail: "Assets, people and constraints",
  },
  {
    title: "Signals",
    detail: "Sensors, data and workflows",
  },
  {
    title: "Intelligence",
    detail: "Perception, retrieval, planning",
  },
  {
    title: "Action",
    detail: "A traceable decision or control",
  },
] as const;

export default function EngineeringIntelligenceFlow() {
  return (
    <SectionShell
      containerProps={{ maxWidth: false, disableGutters: true }}
      sectionProps={{
        id: "intelligence",
        sx: {
          py: { xs: 8, md: 10 },
          backgroundColor: "rgba(4, 73, 69, 0.42)",
          borderBottom: "1px solid",
          borderColor: "rgba(145, 254, 230, 0.1)",
        },
      }}
    >
      <Container size="wide" disableGutters>
        <Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) minmax(320px, 0.72fr)" },
              gap: { xs: 2.5, md: 6 },
              alignItems: "start",
              mb: { xs: 6, md: 7 },
            }}
          >
            <Typography
              component="h2"
              variant="h2"
              sx={{ color: "text.primary", maxWidth: 680, textWrap: "balance" }}
            >
              Where intelligence fits.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(239, 254, 235, 0.78)",
                maxWidth: 520,
                justifySelf: { md: "end" },
                textWrap: "pretty",
              }}
            >
              AI is one part of the system. We connect it to real signals, defined controls and traceable outcomes.
            </Typography>
          </Box>

          <Box component="ol" className={styles.flow} sx={{ listStyle: "none", p: 0, m: 0 }}>
            <span className={styles.track} aria-hidden="true" />
            {stages.map((stage, index) => (
              <Box component="li" key={stage.title} className={styles.stage}>
                <span className={styles.node} aria-hidden="true" />
                <Stack spacing={1.75} className={styles.content}>
                  <Typography
                    sx={{
                      color: "primary.main",
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: "0.78rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography component="h3" variant="h4" sx={{ color: "text.primary", fontWeight: 600 }}>
                    {stage.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "rgba(239, 254, 235, 0.68)", maxWidth: 280 }}>
                    {stage.detail}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </SectionShell>
  );
}
