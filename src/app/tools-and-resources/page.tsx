import Layout from "@/components/layout/Layout";
import { Typography, Box } from "@mui/material";
import ConstrainedContainer from "@/components/layout/container/constrained-container";
export default function AboutPage() {
  return (
    <Layout>
      <ConstrainedContainer>
        <Box
          sx={{
            flexGrow: 1,
            minHeight: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h1">Coming Soon</Typography>
        </Box>
      </ConstrainedContainer>
    </Layout>
  );
}
