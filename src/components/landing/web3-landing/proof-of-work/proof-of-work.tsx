"use client";

import {
  Typography,
  Grid,
  Button,
  Box,
  Chip,
  Avatar,
  useTheme,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GlassCard from "@/components/card/glass-card/GlassCard";

const projects = [
  {
    logo: "/logos/companies/llamarisk.png",
    title: "LlamaRisk",
    subtitle: "Risk Monitoring Platform",
    description:
      "Built LlamaRisk’s site and first mainnet dashboard for Arcadia, enabling Tier 1 integrations with Curve and DeFi.Money.",
    highlights: ["Live", "Enabled Tier 1 Integrations"],
  },
  {
    logo: "/logos/companies/playlobby.png",
    title: "PlayLobby",
    subtitle: "GambleFi Game Suite",
    description:
      "Built and launched 3 blockchain-integrated games, driving 400% user growth and converting 60% to paid plans.",
    highlights: ["400% Growth", "60% Conversions"],
  },
  {
    logo: "/logos/companies/buzzkill.png",
    title: "Buzzkill",
    subtitle: "GameFi Project on Viction",
    description:
      "Scaled from 0 to 3.3K users and 5K NFT mints in 60 days; secured $80K through grants and hackathon wins.",
    highlights: ["$80K Raised", "3.3K Users", "5K NFTs Minted"],
  },
];

const ProofOfWork = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        px: { xs: 4, sm: 4, md: 8, lg: 8, xl: 8, xxl: 30 },
        py: { xs: 10, sm: 14, md: 20 },
        backgroundColor: "background.paper",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          color: "text.primary",
          fontWeight: 700,
          mb: 16,
          textAlign: "center",
        }}
      >
        Trusted by Leading DeFi and GameFi Projects
      </Typography>

      <Grid
        container
        spacing={{ xs: 4, sm: 6, md: 4 }}
        justifyContent="center"
        alignItems="stretch"
      >
        {projects.map((project, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
            <GlassCard
              sx={{
                p: 4,
                height: "100%",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Header */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                  alt={project.title}
                  src={project.logo}
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: "background.default",
                    border: "2px solid",
                    borderColor: "primary.main",
                  }}
                />
                <Box>
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "primary.main", fontWeight: 500 }}
                  >
                    {project.subtitle}
                  </Typography>
                </Box>
              </Box>

              {/* Highlights */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  rowGap: 1,
                  columnGap: 1,
                  mt: 3,
                  justifyContent: "flex-start",
                }}
              >
                {project.highlights.map((highlight, i) => (
                  <Chip
                    key={i}
                    label={highlight}
                    size="medium"
                    icon={<EmojiEventsIcon />}
                    sx={{
                      borderRadius: "999px",
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",
                      fontWeight: 600,
                      px: 1.6,
                      "& .MuiChip-icon": {
                        color: "primary.contrastText",
                        fontSize: 18,
                      },
                    }}
                  />
                ))}
              </Box>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  mt: 3,
                  fontSize: { xs: "1.05rem", md: "1.1rem" },
                  lineHeight: 1.75,
                }}
              >
                {project.description}
              </Typography>
            </GlassCard>
          </Grid>
        ))}
      </Grid>

      {/* CTA */}
      <Box
        sx={{
          mt: { xs: 8, md: 10 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            px: 5,
            py: 2,
            fontWeight: 700,
            fontSize: "1rem",
          }}
        >
          PROOF OF WORK
        </Button>
      </Box>
    </Box>
  );
};

export default ProofOfWork;
