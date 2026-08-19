import { Box, Stack, Typography } from "@mui/material";
import { Container, GlassCard, SectionShell } from "@ssh/brand-ui";

const background = [
  "Mechatronics engineering (Honours)",
  "Embedded and full-stack delivery",
  "Robotics, EVs and connected systems",
  "Product, engineering and commercial leadership",
] as const;

export default function EngineeringFounder() {
  return (
    <SectionShell sectionProps={{ id: "about", sx: { py: { xs: 9, md: 14 } } }}>
      <Container size="wide" disableGutters>
        <GlassCard
          variant="darkElevated"
          sx={{
            position: "relative",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(280px, 0.78fr) minmax(0, 1.22fr)" },
            gap: { xs: 6, md: 9 },
            alignItems: "start",
            p: { xs: 3.5, sm: 5, md: 6 },
            backgroundColor: "rgba(9, 31, 44, 0.96)",
            backgroundImage: "none",
            backdropFilter: "none",
            "&::after": {
              content: '\"SH\"',
              position: "absolute",
              right: { xs: -12, md: 24 },
              bottom: { xs: -36, md: -52 },
              color: "rgba(7, 223, 193, 0.055)",
              fontFamily: "var(--font-exo2), sans-serif",
              fontSize: { xs: "9rem", md: "15rem" },
              fontWeight: 700,
              lineHeight: 1,
              pointerEvents: "none",
            },
          }}
        >
          <Stack spacing={2.5} sx={{ position: "relative", zIndex: 1 }}>
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
              Engineering depth. Commercial judgement.
            </Typography>
          </Stack>

          <Stack spacing={3.5} sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              variant="body1"
              sx={{
                color: "text.primary",
                fontSize: { xs: "1.1rem", md: "1.28rem" },
                lineHeight: 1.65,
                maxWidth: 800,
              }}
            >
              I am a mechatronics engineer who has built embedded systems, robotics platforms and production software, then led the teams and commercial work around them.
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(239, 254, 235, 0.68)", maxWidth: 760 }}>
              That range helps when software, hardware and operations have to move together.
            </Typography>

            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                m: 0,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                gap: 1.5,
              }}
            >
              {background.map((item) => (
                <Typography
                  component="li"
                  variant="body2"
                  key={item}
                  sx={{
                    color: "rgba(239, 254, 235, 0.76)",
                    px: 2,
                    py: 1.5,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 1.5,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Stack>
        </GlassCard>
      </Container>
    </SectionShell>
  );
}
