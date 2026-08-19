import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import { Box, Stack, Typography } from "@mui/material";
import { Container, SectionShell } from "@ssh/brand-ui";

const stages = [
  {
    title: "Physical operation",
    detail: "Assets, people, constraints",
  },
  {
    title: "Signals and software",
    detail: "Sensors, workflows, controls",
  },
  {
    title: "Applied intelligence",
    detail: "Perception, retrieval, planning",
  },
  {
    title: "Operator or control",
    detail: "A traceable point of action",
  },
] as const;

export default function EngineeringIntelligenceFlow() {
  return (
    <SectionShell surface="paper" sectionProps={{ id: "intelligence" }}>
      <Container size="wide" disableGutters>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "minmax(300px, 0.72fr) minmax(0, 1.28fr)" },
            gap: { xs: 6, lg: 10 },
            alignItems: "end",
          }}
        >
          <Stack spacing={2.5}>
            <Typography component="h2" variant="h2" sx={{ color: "text.primary", textWrap: "balance" }}>
              Where intelligence fits.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 600 }}>
              Models can help interpret images, retrieve engineering knowledge, prioritise work or plan within defined constraints. The surrounding system still owns permissions, traceability and safe fallback.
            </Typography>
          </Stack>

          <Box
            component="ol"
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", xl: "repeat(4, minmax(0, 1fr))" },
              borderTop: "1px solid",
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            {stages.map((stage, index) => (
              <Box
                component="li"
                key={stage.title}
                sx={{
                  position: "relative",
                  minHeight: 170,
                  px: { xs: 0, sm: 3 },
                  py: 3.5,
                  borderRight: {
                    xs: 0,
                    sm: index % 2 === 0 ? "1px solid" : 0,
                    xl: index < stages.length - 1 ? "1px solid" : 0,
                  },
                  borderBottom: {
                    xs: index < stages.length - 1 ? "1px solid" : 0,
                    sm: index < 2 ? "1px solid" : 0,
                    xl: 0,
                  },
                  borderColor: "divider",
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "0.78rem",
                    mb: 4,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Typography>
                <Typography component="h3" variant="h5" sx={{ color: "text.primary", fontWeight: 600, mb: 1 }}>
                  {stage.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {stage.detail}
                </Typography>
                {index < stages.length - 1 ? (
                  <ArrowForwardRounded
                    aria-hidden="true"
                    sx={{
                      display: { xs: "none", xl: "block" },
                      position: "absolute",
                      right: -14,
                      top: 35,
                      zIndex: 1,
                      p: 0.5,
                      bgcolor: "background.paper",
                      color: "primary.main",
                      borderRadius: "50%",
                    }}
                  />
                ) : null}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </SectionShell>
  );
}
