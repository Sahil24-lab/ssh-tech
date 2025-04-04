import { Typography, Grid, Box } from "@mui/material";
import GlassCard from "@/components/card/glass-card/GlassCard";

const services = [
  {
    title: "DApp Developments",
    description:
      "We build fast, accessible, and beautiful user interfaces—optimized for all types of users",
  },
  {
    title: "Community Tools",
    description:
      "From custom bots to DAO dashboards, we help you engage and grow your community",
  },
  {
    title: "Frontend Security",
    description:
      "Security baked into the UI layer—so your users can trust every click, tap, and transaction",
  },
];

const OurServices = () => {
  return (
    <Box id="services" sx={{ padding: "20px 0px 40px 0px", width: "100%" }}>
      {/* Section Title with More Spacing */}
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        align="center"
        sx={{
          mb: 1,
          fontWeight: "bold",
          letterSpacing: "0.5px",
          color: "#FFFFFF",
        }}
      >
        Our Services
      </Typography>

      {/* Grid Container for Services */}
      <Grid
        container
        spacing={4}
        sx={{ width: "100%", align: "center", margin: 0 }}
      >
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
