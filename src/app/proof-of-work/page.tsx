import { fetchEntries } from "../lib/contentful";
import {
  ContentfulImageAsset,
  ProofOfWorkEntry,
  ProofOfWorkFields,
} from "../types/contentful";
import Image from "next/image";
import Link from "next/link";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Chip,
  Box,
  Avatar,
  Stack,
} from "@mui/material";
import Layout from "@/components/layout/Layout";
import ConstrainedContainer from "@/components/layout/container/constrained-container";
import FullWidthContainer from "@/components/layout/container/full-width-container";
import GlassCardDark from "@/components/card/glass-card-dark/GlassCardDark";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export default async function ProofOfWorkList() {
  const projects: ProofOfWorkEntry[] = await fetchEntries();

  return (
    <Layout>
      <FullWidthContainer>
        <Box
          sx={{
            padding: "8rem 0rem",
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
            Proof of Work
          </Typography>

          <Grid
            container
            spacing={6}
            justifyContent="center"
            alignItems="stretch"
          >
            {projects.map((project) => {
              const fields = project.fields as ProofOfWorkFields;
              const image = fields.image as unknown;
              const logo = fields.projectLogo as unknown;

              const imageUrl =
                image && typeof image === "object" && "fields" in image
                  ? (image as ContentfulImageAsset).fields.file.url
                  : undefined;

              const logoUrl =
                logo && typeof logo === "object" && "fields" in logo
                  ? (logo as ContentfulImageAsset).fields.file.url
                  : undefined;

              const title =
                typeof fields.title === "string"
                  ? fields.title
                  : "Untitled Project";
              const subtitle =
                typeof fields.subtitle === "string" ? fields.subtitle : null;
              const description =
                typeof fields.description === "string"
                  ? fields.description
                  : "";

              return (
                <Grid item xs={12} md={12} lg={10} key={project.sys.id}>
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
                    {imageUrl && (
                      <>
                        <CardMedia
                          sx={{
                            display: {
                              xs: "block",
                              sm: "block",
                              md: "none",
                              lg: "none",
                              xl: "none",
                              xxl: "block",
                            },
                            width: { xs: "100%", lg: "40%", xl: "36%" },
                            height: "100%",
                            flexShrink: 0,
                            borderTopLeftRadius: { xs: 12, md: 12 },
                            borderTopRightRadius: { xs: 12, md: 0 },
                            borderBottomLeftRadius: { xs: 0, md: 12 },
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            src={`https:${imageUrl}`}
                            alt={title}
                            width={800}
                            height={500}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </CardMedia>

                        <CardMedia
                          sx={{
                            width: { xs: "100%", md: "45%" },
                            flexShrink: 0,
                            display: {
                              xs: "none",
                              sm: "none",
                              md: "flex",
                              lg: "flex",
                              xl: "flex",
                              xxl: "none",
                            },
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            borderTopLeftRadius: { xs: 12, md: 12 },
                            borderTopRightRadius: { xs: 12, md: 0 },
                            borderBottomLeftRadius: { xs: 0, md: 12 },
                            overflow: "hidden",
                            background: `#003338`,
                          }}
                        >
                          <Box
                            sx={{
                              display: "inline-block",
                              maxWidth: "100%",
                            }}
                          >
                            <Image
                              src={`https:${imageUrl}`}
                              alt={title}
                              width={800}
                              height={500}
                              style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                display: "block",
                              }}
                            />
                          </Box>
                        </CardMedia>
                      </>
                    )}

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
                        {logoUrl && (
                          <Avatar
                            src={`https:${logoUrl}`}
                            alt={title}
                            sx={{
                              width: 96,
                              height: 96,
                              border: "2px solid",
                              borderColor: "primary.main",
                              boxShadow: "none",
                              transition: "box-shadow 0.3s ease",
                              "&:hover": {
                                boxShadow:
                                  "2px 2px 16px rgba(7, 223, 193, 0.7)",
                              },
                            }}
                          />
                        )}
                        <Box>
                          <Typography
                            variant="h3"
                            sx={{
                              color: "primary.main",
                              fontWeight: 700,
                              mb: 0.5,
                            }}
                          >
                            {title}
                          </Typography>
                          {subtitle && (
                            <Typography
                              variant="h5"
                              sx={{ fontWeight: 600, color: "#B0B0B0" }}
                            >
                              {subtitle}
                            </Typography>
                          )}
                        </Box>
                      </Stack>

                      {Array.isArray(fields.achievements) &&
                        fields.achievements.length > 0 && (
                          <Box
                            sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: 1,
                              mb: 2.5,
                            }}
                          >
                            {fields.achievements.map(
                              (achievement: string, i: number) => (
                                <Chip
                                  key={i}
                                  label={achievement}
                                  size="medium"
                                  icon={<EmojiEventsIcon />}
                                  color="primary"
                                  variant="filled"
                                  sx={{
                                    fontWeight: 500,
                                    borderColor: "#00ffc2",
                                    opacity: 0.8,
                                  }}
                                />
                              )
                            )}
                          </Box>
                        )}

                      <Typography
                        variant="body2"
                        sx={{
                          color: "#E0E0E0",
                          lineHeight: 1.75,
                          mb: 2.5,
                          minHeight: { xs: "auto", md: 128 },
                        }}
                      >
                        {description}
                      </Typography>

                      {Array.isArray(fields.tags) && fields.tags.length > 0 && (
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1,
                            mb: 3,
                          }}
                        >
                          {fields.tags.map((tag: string, i: number) => (
                            <Chip
                              key={i}
                              label={tag}
                              variant="outlined"
                              color="primary"
                              size="small"
                              sx={{
                                fontWeight: 500,
                                opacity: 0.7,
                              }}
                            />
                          ))}
                        </Box>
                      )}

                      <Box
                        pt={3}
                        display="flex"
                        justifyContent={{ xs: "center", sm: "flex-start" }}
                        sx={{
                          position: "relative",
                          width: "100%",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "1px",
                            background:
                              "linear-gradient(to right, transparent 0%, #0B645C 10%, #0B645C 90%, transparent 100%)",
                            opacity: 0.9,
                          },
                        }}
                      >
                        <Link href={`/proof-of-work/${fields.slug}`} passHref>
                          <Button
                            variant="contained"
                            color="primary"
                            disableRipple
                            size="large"
                            startIcon={
                              <RocketLaunchIcon sx={{ fontSize: 20 }} />
                            }
                            sx={{
                              width: { xs: "100%", sm: "auto" },
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 1,
                              padding: "0.45rem 2rem",
                              fontWeight: 800,
                            }}
                          >
                            View Project
                          </Button>
                        </Link>
                      </Box>
                    </CardContent>
                  </GlassCardDark>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </FullWidthContainer>
    </Layout>
  );
}
