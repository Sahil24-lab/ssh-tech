import { Container, Typography, Grid, Box } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";

const processes = [
  {
    step: "01",
    title: "Discovery and Research",
    description:
      "Understand the client's values and audience. Conduct market research. Identify key design elements.",
  },
  {
    step: "02",
    title: "Concept Development",
    description:
      "Brainstorm and sketch initial concepts. Focus on simplicity. Prioritise ideas for further development.",
  },
  {
    step: "03",
    title: "Design and Refinement",
    description:
      "Create digital versions of prioritised concepts. Refine the designs, ensuring clarity. Incorporate client feedback for fine-tuning.",
  },
  {
    step: "04",
    title: "Finalisation and Delivery",
    description:
      "Prepare the final deliverables in various formats. Provide a comprehensive brand guide. Deliver the final assets and support.",
  },
];

const OurProcess = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" gutterBottom align="center">
        Our process
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        gutterBottom
        sx={{ mb: 4 }}
      >
        Reliable process for achieving distinctiveness.
      </Typography>
      <Grid container spacing={4}>
        {processes.map((process, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <GlassCard sx={{ p: 4, height: "100%" }}>
              <Typography variant="h6" color="primary" gutterBottom>
                {process.step}
              </Typography>
              <Typography variant="h5" component="h3" gutterBottom>
                {process.title}
              </Typography>
              <Typography variant="body2">{process.description}</Typography>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurProcess;
