import {
  DataObjectRounded,
  HubRounded,
  PrecisionManufacturingRounded,
  SensorsRounded,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { Container, SectionShell } from "@ssh/brand-ui";

const capabilities = [
  {
    title: "Engineering software",
    description:
      "Operator tools, automation platforms and technical applications built around real workflows.",
    icon: <DataObjectRounded />,
  },
  {
    title: "Connected systems",
    description:
      "Firmware, sensor networks and integrations that move reliable data between field assets and software.",
    icon: <SensorsRounded />,
  },
  {
    title: "Robotics and controls",
    description:
      "Embedded control, perception and autonomy for machines that have to behave predictably.",
    icon: <PrecisionManufacturingRounded />,
  },
  {
    title: "AI-enabled engineering tools",
    description:
      "Perception, retrieval and planning tools used inside a wider engineering system.",
    icon: <HubRounded />,
  },
] as const;

export default function EngineeringCapabilities() {
  return (
    <SectionShell sectionProps={{ id: "capabilities" }}>
      <Container
        size="wide"
        disableGutters
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(260px, 0.72fr) minmax(0, 1.28fr)" },
          gap: { xs: 6, md: 9, lg: 13 },
          alignItems: "start",
        }}
      >
        <Stack spacing={2.5} sx={{ position: { md: "sticky" }, top: { md: 116 } }}>
          <Typography
            component="h2"
            variant="h2"
            sx={{ color: "text.primary", maxWidth: 440, textWrap: "balance" }}
          >
            Systems built around the operation.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 500 }}>
            Some projects begin with an operator workflow. Others begin on a controller, a vehicle or a sensor network. We work across that boundary.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              pt: 1,
              maxWidth: 460,
              color: "text.muted",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "0.82rem",
            }}
          >
            For industrial, infrastructure, robotics and technical product teams.
          </Typography>
        </Stack>

        <Box sx={{ borderTop: "1px solid", borderColor: "divider" }}>
          {capabilities.map((capability) => (
            <Box
              key={capability.title}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "48px minmax(0, 1fr)", sm: "64px minmax(180px, 0.7fr) minmax(0, 1.3fr)" },
                gap: { xs: 2, sm: 3.5 },
                alignItems: "start",
                py: { xs: 3.5, md: 4.5 },
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  display: "grid",
                  placeItems: "center",
                  color: "primary.main",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                }}
              >
                {capability.icon}
              </Box>
              <Typography
                component="h3"
                variant="h5"
                sx={{ color: "text.primary", fontWeight: 600, pt: 0.75 }}
              >
                {capability.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  gridColumn: { xs: "2", sm: "auto" },
                  color: "text.secondary",
                  maxWidth: 620,
                }}
              >
                {capability.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </SectionShell>
  );
}
