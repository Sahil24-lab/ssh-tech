import { Typography, Grid, Box } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";

const services = [
  {
    title: "Development of DApps",
    description:
      "We build sleek, responsive frontends. With a focus on intuitive, user-centered design, we make your platform accessible for both newcomers and crypto natives.",
  },
  {
    title: "Community Engagement Tools",
    description:
      "From custom Discord bots to DAO voting tools, we build engagement systems that help your community grow and stay active.",
  },
  {
    title: "Frontend Security",
    description:
      "Trust is everything. We integrate best-in-class security practices directly into the frontend, ensuring your users feel confident interacting with your platform.",
  },
];

const OurServices = () => {
  return (
    <Box id="services" sx={{ padding: "40px 0px 0px 0px", width: "100%" }}>
      {/* Section Title with More Spacing */}
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        align="center"
        sx={{
          mb: 1,
          fontSize: "2.5rem",
          fontWeight: "bold",
          letterSpacing: "0.5px",
          color: "#FFFFFF",
        }}
      >
        Our Services
      </Typography>

      {/* Grid Container for Services */}
      <Grid container spacing={6} sx={{ width: "100%", margin: 0 }}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <GlassCard
              sx={{
                p: 6,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5" component="h3" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2">{service.description}</Typography>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurServices;
