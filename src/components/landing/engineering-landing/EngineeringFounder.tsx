import { Box, Stack, Typography } from "@mui/material";
import { Container, SectionShell } from "@ssh/brand-ui";

const background = [
  "Mechatronics engineering (Honours)",
  "Embedded and full-stack delivery",
  "Robotics, EVs and connected systems",
  "Product, engineering and commercial leadership",
] as const;

export default function EngineeringFounder() {
  return (
    <SectionShell surface="paper" sectionProps={{ id: "about" }}>
      <Container size="wide" disableGutters>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(260px, 0.72fr) minmax(0, 1.28fr)" },
            gap: { xs: 5, md: 10, lg: 14 },
            alignItems: "start",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "primary.main",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "0.8rem",
                mb: 2,
              }}
            >
              Sahil Harriram · Founder and technical lead
            </Typography>
            <Typography component="h2" variant="h2" sx={{ color: "text.primary", textWrap: "balance" }}>
              Built from both sides of the system.
            </Typography>
          </Box>

          <Stack spacing={3.5}>
            <Typography
              variant="body1"
              sx={{
                color: "text.primary",
                fontSize: { xs: "1.2rem", md: "1.45rem" },
                lineHeight: 1.6,
                maxWidth: 800,
              }}
            >
              I am a mechatronics engineer and technical lead. I have built embedded systems, robotics platforms and production software, then led the teams and commercial work around them.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 760 }}>
              That range matters when a project crosses boundaries. The controller, cloud service, operator interface and delivery plan have to work together.
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              {background.map((item) => (
                <Typography
                  component="li"
                  variant="body2"
                  key={item}
                  sx={{
                    color: "text.primary",
                    py: 2.5,
                    pr: 3,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Stack>
        </Box>
      </Container>
    </SectionShell>
  );
}
