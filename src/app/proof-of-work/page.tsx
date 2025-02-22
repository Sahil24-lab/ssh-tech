import { fetchEntries } from "../lib/contentful";
import { ContentfulImageAsset, ProofOfWorkEntry } from "../types/contentful";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Chip,
  Box,
} from "@mui/material";
import Layout from "@/components/layout/Layout";

export default async function ProofOfWorkList() {
  const projects: ProofOfWorkEntry[] = await fetchEntries();

  return (
    <Layout>
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        sx={{ marginTop: 4, marginBottom: 4 }}
      >
        Proof of Work
      </Typography>
      <Grid container spacing={6} justifyContent="center" alignItems="stretch">
        {projects.map((project) => (
          <Grid
            item
            xs={12}
            md={12}
            lg={10}
            key={project.sys.id}
            sx={{ display: "flex" }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                flexGrow: 1,
                alignItems: "stretch",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "box-shadow 0.2s ease-in-out",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
                },
                minHeight: "100%", // Ensure consistent height
              }}
            >
              {/* Image Section */}
              {(project.fields.image as unknown as ContentfulImageAsset)?.fields
                ?.file?.url && (
                <CardMedia
                  sx={{
                    height: "100%",
                    width: { xs: "100%", md: "50%" },
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={`https:${
                      (project.fields.image as unknown as ContentfulImageAsset)
                        .fields.file.url
                    }`}
                    alt={String(project.fields.title ?? "Project Image")}
                    width={800}
                    height={500}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </CardMedia>
              )}

              {/* Content Section */}
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  justifyContent: "space-between",
                  padding: { xs: 3, md: 5 },
                  minHeight: "100%", // Ensure content height consistency
                }}
              >
                <Typography
                  color="text.secondary"
                  variant="h5"
                  sx={{ marginBottom: 2 }}
                >
                  {String(project.fields.title ?? "Untitled Project")}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ flexGrow: 1, marginBottom: 2 }}
                >
                  {String(
                    project.fields.description ?? "No description available"
                  )}
                </Typography>

                {/* Tags */}
                {project.fields.tags &&
                  Array.isArray(project.fields.tags) &&
                  project.fields.tags.length > 0 && (
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        marginBottom: 2,
                      }}
                    >
                      {project.fields.tags.map((tag: string, index: number) => (
                        <Chip
                          key={index}
                          label={tag}
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  )}

                {/* Extra Space After Tags */}
                <Box sx={{ flexGrow: 1 }}></Box>

                {/* Button Positioned at Bottom */}
                <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                  <Link href={`/proof-of-work/${project.fields.slug}`} passHref>
                    <Button variant="contained" color="primary">
                      View Project
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
