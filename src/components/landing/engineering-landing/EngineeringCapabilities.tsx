import {
  CodeRounded,
  HubRounded,
  PrecisionManufacturingRounded,
  SensorsRounded,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@ssh/brand-ui";

const capabilities = [
  {
    title: "Software and interfaces",
    description:
      "Dashboards, workflow tools and control interfaces built around how teams actually work.",
    icon: <CodeRounded />,
  },
  {
    title: "Embedded to cloud",
    description:
      "Devices, field assets, software and cloud services designed to work together.",
    icon: <SensorsRounded />,
  },
  {
    title: "Robotics and controls",
    description:
      "Control, perception and autonomy for machines and physical systems.",
    icon: <PrecisionManufacturingRounded />,
  },
  {
    title: "AI for complex engineering",
    description:
      "AI for engineering analysis and constrained workflows where accuracy and traceability matter.",
    icon: <HubRounded />,
  },
] as const;

export default function EngineeringCapabilities() {
  return (
    <Box
      component="section"
      id="capabilities"
      sx={{
        backgroundColor: "rgba(8, 24, 36, 0.92)",
      }}
    >
      <Container
        size="wide"
        sx={{
          position: "relative",
          py: 0,
        }}
      >
        <Box
          aria-label="Engineering capabilities"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(4, minmax(0, 1fr))" },
          }}
        >
          {capabilities.map((capability, index) => (
            <Box
              key={capability.title}
              sx={{
                position: "relative",
                minHeight: 162,
                px: { xs: 2.5, md: 3.5 },
                py: 3,
                display: "grid",
                gridTemplateColumns: "36px minmax(0, 1fr)",
                gap: 2,
                borderBottom: { xs: index < capabilities.length - 1 ? "1px solid" : 0, sm: index < 2 ? "1px solid" : 0, lg: 0 },
                borderColor: "rgba(145, 254, 230, 0.08)",
                "&::after": {
                  content: '""',
                  display: {
                    xs: "none",
                    sm: index % 2 === 0 ? "block" : "none",
                    lg: index < capabilities.length - 1 ? "block" : "none",
                  },
                  position: "absolute",
                  top: 24,
                  right: 0,
                  bottom: 24,
                  width: "1px",
                  background:
                    "linear-gradient(180deg, transparent, rgba(145, 254, 230, 0.12) 18%, rgba(145, 254, 230, 0.12) 82%, transparent)",
                },
              }}
            >
              <Box sx={{ color: "primary.main", opacity: 0.76, "& svg": { fontSize: 28 } }}>
                {capability.icon}
              </Box>
              <Stack spacing={1.25}>
                <Typography component="h2" variant="h5" sx={{ color: "text.primary", fontWeight: 600 }}>
                  {capability.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(239, 254, 235, 0.58)", fontSize: "0.9rem" }}>
                  {capability.description}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
