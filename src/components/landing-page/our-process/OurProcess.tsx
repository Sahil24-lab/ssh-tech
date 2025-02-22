import { Typography, Grid, Box } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";

const processes = [
  {
    step: "01",
    title: "Tailored Solutions for You",
    description:
      "No two projects are the same, which is why we tailor our approach to fit your specific needs. Whether you’re building a DApp or creating community tools, we take the time to understand your goals and deliver custom development that fits your project needs.",
  },
  {
    step: "02",
    title: "Simple, Scalable Pricing",
    description:
      "We operate on a simple flat-rate monthly fee for ongoing development and support. It’s transparent, predictable, and scales as your project grows. You’ll always know what to expect.",
  },
  {
    step: "03",
    title: "Fast Onboarding, Quick Results",
    description:
      "With over 7 years of experience in the crypto space, we hit the ground running. We bring the expertise and the understanding of what it takes to get results quickly, so you can start seeing real progress sooner rather than later.",
  },
  {
    step: "04",
    title: "Flexible Collaboration",
    description:
      "We mold our process to fit your preferences—whether you prefer regular updates and a hands-on approach, or need us to handle the details more independently. Our goal is to work the way that’s best for you, giving you the freedom to focus on what matters most.",
  },
];

const OurProcess = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h2" component="h2" gutterBottom align="center">
        Our Process
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
