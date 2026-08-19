import { Box, Stack, Typography } from "@mui/material";
import { Container, SectionShell } from "@ssh/brand-ui";
import styles from "./EngineeringIntelligenceFlow.module.css";

const stages = [
  {
    title: "Operation",
    detail: "Assets, people, constraints",
  },
  {
    title: "Signals",
    detail: "Sensors, workflows, controls",
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
    <SectionShell sectionProps={{ id: "intelligence", sx: { py: { xs: 10, md: 15 } } }}>
      <Container size="wide" disableGutters>
        <Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.9fr) minmax(320px, 0.7fr)" },
              gap: { xs: 3, md: 8 },
              alignItems: "end",
              mb: { xs: 7, md: 10 },
            }}
          >
            <Typography component="h2" variant="h2" sx={{ color: "text.primary", textWrap: "balance" }}>
              From signal to action.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgba(239, 254, 235, 0.72)", maxWidth: 560, justifySelf: { md: "end" } }}
            >
              AI is useful when it connects to a real decision. We design the controls, permissions and fallback around it.
            </Typography>
          </Box>

          <Box component="ol" className={styles.flow} sx={{ listStyle: "none", p: 0, m: 0 }}>
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
