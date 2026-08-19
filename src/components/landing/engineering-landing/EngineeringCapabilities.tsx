import {
  AccountTreeRounded,
  DataObjectRounded,
  HubRounded,
  PrecisionManufacturingRounded,
  SensorsRounded,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { Container } from "@ssh/brand-ui";

const capabilities = [
  {
    title: "Engineering software",
    description:
      "Operational tools and platforms built around how technical teams work.",
    icon: <DataObjectRounded />,
  },
  {
    title: "Embedded to cloud",
    description:
      "Reliable data and software across devices, field assets and cloud services.",
    icon: <SensorsRounded />,
  },
  {
    title: "Robotics and controls",
    description:
      "Control, perception and autonomy for machines and physical systems.",
    icon: <PrecisionManufacturingRounded />,
  },
  {
    title: "Applied intelligence",
    description:
      "AI used where it improves a broader, controlled engineering system.",
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
        borderColor: "rgba(145, 254, 230, 0.08)",
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
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.15fr) minmax(300px, 0.85fr)" },
            gap: { xs: 2.5, md: 6 },
            alignItems: "end",
            px: { xs: 2.5, md: 3.5 },
            py: { xs: 4, md: 5 },
            borderBottom: "1px solid",
            borderColor: "rgba(145, 254, 230, 0.08)",
          }}
        >
          <Typography component="h2" variant="h3" sx={{ color: "text.primary", maxWidth: 720 }}>
            Engineering across the whole system
          </Typography>

          <Stack direction="row" spacing={2} alignItems="flex-start">
            <Box sx={{ color: "primary.main", opacity: 0.82, pt: 0.25, "& svg": { fontSize: 28 } }}>
              <AccountTreeRounded />
            </Box>
            <Stack spacing={0.5}>
              <Typography sx={{ color: "text.primary", fontWeight: 600 }}>
                Founder-led from scope to delivery
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(239, 254, 235, 0.66)" }}>
                One technical lead working across software, hardware and controls.
              </Typography>
            </Stack>
          </Stack>
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
