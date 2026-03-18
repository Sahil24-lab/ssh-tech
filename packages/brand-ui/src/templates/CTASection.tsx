import { Box, Container, Stack, Typography } from "@mui/material";
import { BrandButton, type BrandButtonProps } from "../components/BrandButton";

export function CTASection({ heading, body, cta }: { heading: string; body: string; cta: BrandButtonProps }) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 45% 30% at 50% 40%, rgba(7,223,193,0.09) 0%, transparent 75%)",
          pointerEvents: "none",
        }}
      />
      <Container>
        <Stack spacing={2.5} maxWidth={700}>
          <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.8rem" } }}>{heading}</Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>{body}</Typography>
          <Box>
            <BrandButton {...cta} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
