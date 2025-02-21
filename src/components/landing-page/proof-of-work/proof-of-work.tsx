import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";

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
    <Box id="work" sx={{ py: 8, backgroundColor: "background.paper" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom>
          Trusted by Leading DeFi and GameFi Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Button variant="contained" color="primary" size="large">
            View Our Work
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProofOfWork;
