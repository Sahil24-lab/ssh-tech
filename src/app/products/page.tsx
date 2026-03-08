import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
import {
  Box,
  Typography,
  Grid,
  CardContent,
  Button,
  Chip,
  Stack,
  Avatar,
} from "@mui/material";
import Layout from "@/components/layout/Layout";
import FullWidthContainer from "@/components/layout/container/full-width-container";
import GlassCardDark from "@/components/card/glass-card-dark/GlassCardDark";
import type { Metadata } from "next";

async function getBaseUrl() {
  const hdrs = await headers();
  const host =
    hdrs.get("x-forwarded-host") ?? hdrs.get("host") ?? "ai.ssh-tech.xyz";
  const proto = hdrs.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}`;
}

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl();
  return {
    title: "Products",
    description:
      "Production-ready AI products and system blueprints from SSH Tech.",
    alternates: {
      canonical: `${baseUrl}/products`,
    },
    openGraph: {
      url: `${baseUrl}/products`,
      title: "Products — SSH Tech",
    },
  };
}

const products = [
  {
    slug: "ssh-echo",
    name: "SSH Echo",
    subtitle: "Agentic Systems Architecture Blueprint",
    description:
      "A next-generation open-claw style agentic system engineered for hardened security and optimal token management.",
    tags: [
      "Token Routing",
      "PII Shield",
      "Verifiable Memory",
      "Multi-Channel",
    ],
  },
];

export default function ProductsPage() {
  return (
    <Layout>
      <FullWidthContainer>
        <Box
          sx={{
            padding: "3rem 0rem",
            width: {
              xs: "90%",
              sm: "80%",
              md: "90%",
              lg: "100%",
              xl: "94%",
              xxl: "90%",
            },
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            align="center"
            sx={{ marginBottom: 6, color: "white" }}
          >
            Products
          </Typography>

          <Grid
            container
            spacing={6}
            justifyContent="center"
            alignItems="stretch"
          >
            {products.map((product) => (
              <Grid item xs={12} md={12} lg={10} key={product.slug}>
                <GlassCardDark
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-1px)",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "100%", md: "45%" },
                      height: { xs: 320, md: 360 },
                      position: "relative",
                      borderTopLeftRadius: { xs: 12, md: 12 },
                      borderTopRightRadius: { xs: 12, md: 0 },
                      borderBottomLeftRadius: { xs: 0, md: 12 },
                      overflow: "hidden",
                      background: "#003338",
                    }}
                  >
                    <Image
                      src="/products/ssh-echo/ssh-echo-cover.png"
                      alt="SSH Echo cover"
                      fill
                      sizes="(max-width: 900px) 100vw, 45vw"
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </Box>

                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: { xs: 3, md: "1.5rem 2rem" },
                      flex: 1,
                      color: "white",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      sx={{ mb: 3 }}
                    >
                      <Avatar
                        src="/products/ssh-echo/avatar.png"
                        alt={product.name}
                        sx={{
                          width: 88,
                          height: 88,
                          borderRadius: "50%",
                          overflow: "hidden",
                          border: "none",
                          backgroundColor: "transparent",
                          "& img": {
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transform: "scale(1.18)",
                          },
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h3"
                          sx={{ color: "primary.main", fontWeight: 700, mb: 0.5 }}
                        >
                          {product.name}
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 600, color: "#B0B0B0" }}
                        >
                          {product.subtitle}
                        </Typography>
                      </Box>
                    </Stack>

                    <Typography variant="body1" sx={{ mb: 3 }}>
                      {product.description}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {product.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          color="primary"
                          variant="outlined"
                          sx={{
                            fontWeight: 600,
                            borderColor: "primary.main",
                            color: "primary.main",
                            "& .MuiChip-label": {
                              px: 1.5,
                            },
                          }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ mt: 4 }}>
                      <Button
                        variant="contained"
                        size="large"
                        component={Link}
                        href={`/products/${product.slug}`}
                        sx={{ fontWeight: 700 }}
                      >
                        View Product
                      </Button>
                    </Box>
                  </CardContent>
                </GlassCardDark>
              </Grid>
            ))}
          </Grid>
        </Box>
      </FullWidthContainer>
    </Layout>
  );
}
