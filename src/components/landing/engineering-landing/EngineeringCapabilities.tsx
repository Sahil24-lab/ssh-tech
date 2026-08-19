import {
  AccountTreeRounded,
  DataObjectRounded,
  HubRounded,
  MemoryRounded,
  PrecisionManufacturingRounded,
  SensorsRounded,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@ssh/brand-ui";

const proofPoints = [
  {
    value: "Founder-led",
    label: "One technical lead across the system",
    icon: <AccountTreeRounded />,
  },
  {
    value: "Embedded to cloud",
    label: "Full-stack systems delivery",
    icon: <MemoryRounded />,
  },
  {
    value: "Robotics and EVs",
    label: "Physical systems experience",
    icon: <PrecisionManufacturingRounded />,
  },
  {
    value: "AI in context",
    label: "Intelligence inside engineered controls",
    icon: <HubRounded />,
  },
] as const;

const capabilities = [
  {
    title: "Engineering software",
    description:
      "Tools and platforms for operators, engineers and technical teams.",
    icon: <DataObjectRounded />,
  },
  {
    title: "Connected systems",
    description:
      "Reliable data between field assets, devices and software.",
    icon: <SensorsRounded />,
  },
  {
    title: "Robotics and controls",
    description:
      "Embedded control, perception and autonomy for physical systems.",
    icon: <PrecisionManufacturingRounded />,
  },
  {
    title: "Applied AI",
    description:
      "Perception, retrieval and planning inside controlled engineering workflows.",
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
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container
        size="wide"
        sx={{
          position: "relative",
          py: 0,
        }}
      >
        <Typography
          component="h2"
          sx={{
            position: "absolute",
            width: 1,
            height: 1,
            p: 0,
            m: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
        >
          Engineering capabilities
        </Typography>

        <Box
          aria-label="SSH Tech engineering background"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(4, minmax(0, 1fr))" },
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          {proofPoints.map((point, index) => (
            <Stack
              key={point.value}
              direction="row"
              spacing={2}
              alignItems="flex-start"
              sx={{
                minHeight: 126,
                px: { xs: 2.5, md: 3.5 },
                py: 3,
                borderRight: {
                  xs: 0,
                  sm: index % 2 === 0 ? "1px solid" : 0,
                  lg: index < proofPoints.length - 1 ? "1px solid" : 0,
                },
                borderBottom: { xs: index < proofPoints.length - 1 ? "1px solid" : 0, sm: index < 2 ? "1px solid" : 0, lg: 0 },
                borderColor: "divider",
              }}
            >
              <Box sx={{ color: "primary.main", opacity: 0.78, pt: 0.25, "& svg": { fontSize: 27 } }}>
                {point.icon}
              </Box>
              <Stack spacing={0.75}>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontFamily: "var(--font-exo2), sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                  }}
                >
                  {point.value}
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(239, 254, 235, 0.58)", fontSize: "0.9rem" }}>
                  {point.label}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Box>

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
                minHeight: 162,
                px: { xs: 2.5, md: 3.5 },
                py: 3,
                display: "grid",
                gridTemplateColumns: "36px minmax(0, 1fr)",
                gap: 2,
                borderRight: {
                  xs: 0,
                  sm: index % 2 === 0 ? "1px solid" : 0,
                  lg: index < capabilities.length - 1 ? "1px solid" : 0,
                },
                borderBottom: { xs: index < capabilities.length - 1 ? "1px solid" : 0, sm: index < 2 ? "1px solid" : 0, lg: 0 },
                borderColor: "divider",
              }}
            >
              <Box sx={{ color: "primary.main", opacity: 0.76, "& svg": { fontSize: 28 } }}>
                {capability.icon}
              </Box>
              <Stack spacing={1.25}>
                <Typography component="h3" variant="h5" sx={{ color: "text.primary", fontWeight: 600 }}>
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
