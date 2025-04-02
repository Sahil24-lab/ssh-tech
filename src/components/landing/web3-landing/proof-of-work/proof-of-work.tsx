import { Typography, Grid, Button, Box } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";

const projects = [
  {
    title: "LlamaRisk",
    description:
      "We designed and built the website and risk portal app for LlamaRisk, a DeFi risk monitoring tool used by leading lending/borrowing protocols like Curve, Arcadia, and DeFi.Money.",
  },
  {
    title: "PlayLobby",
    description:
      "Drove the development of three GambleFi games and spearheaded marketing initiatives that increased activity by over 400%, driving growth and engagement.",
  },
  {
    title: "Buzzkill",
    description:
      "Developed Buzzkill, a strategy-based DeFi game that won a $50,000 prize at a major hackathon and secured a grant for further development. Buzzkill has been recognized for its innovative gameplay and community-driven dynamics.",
  },
];

const ProofOfWork = () => {
  return (
    <Box
      sx={{
        px: 10,
        py: 10,
        backgroundColor: "background.paper",
        textAlign: "center",
      }}
    >
      {/* Section Title with Better Spacing */}
      <Typography variant="h2" component="h2" gutterBottom sx={{ mb: 6 }}>
        Trusted by Leading DeFi and GameFi Projects
      </Typography>

      {/* Grid Container */}
      <Grid container spacing={6} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <GlassCard
              sx={{
                p: 4,
                height: "100%", // Ensures all cards have equal height
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5" component="h3" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2">{project.description}</Typography>
            </GlassCard>
          </Grid>
        ))}
      </Grid>

      {/* CTA Button */}
      <Box sx={{ mt: 6 }}>
        <Button variant="contained" color="primary" size="large">
          Proof of Work
        </Button>
      </Box>
    </Box>
  );
};

export default ProofOfWork;
