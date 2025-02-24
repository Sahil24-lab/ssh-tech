// app/proof-of-work/[slug]/ProofOfWorkPage.tsx

"use client";

import Layout from "@/components/layout/Layout";
import { ProofOfWorkEntry, ContentfulImageAsset } from "../../types/contentful";
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function ProofOfWorkPage({
  project,
}: {
  project: ProofOfWorkEntry;
}) {
  if (!project) {
    return (
      <Layout>
        <Typography variant="h5">Project not found</Typography>
      </Layout>
    );
  }

  const { title, description, demo, tags, screenshots, videoDemo } =
    project.fields;

  const safeTitle = typeof title === "string" ? title : "";
  const safeDescription = typeof description === "string" ? description : "";
  const safeDemo = typeof demo === "string" ? demo : "";
  const safeTags = Array.isArray(tags) ? tags : [];
  const safeScreenshots = Array.isArray(screenshots)
    ? (screenshots as ContentfulImageAsset[])
    : [];
  const safeVideoDemo = Array.isArray(videoDemo)
    ? (videoDemo as ContentfulImageAsset[])
    : [];

  // Use "image" in the UI so it's not flagged as unused
  return (
    <Layout>
      <Box sx={{ maxWidth: 900, margin: "auto", padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          {safeTitle}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          {safeDescription}
        </Typography>

        <CardMedia
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: "auto", md: "100%" },
            flexShrink: 0,
          }}
        >
          {Boolean(
            (project.fields.image as unknown as ContentfulImageAsset)?.fields
              ?.file?.url
          ) && (
            <Image
              src={`https:${
                (project.fields.image as unknown as ContentfulImageAsset).fields
                  .file.url
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
          )}
        </CardMedia>

        {safeDemo && (
          <Button
            variant="contained"
            color="primary"
            href={safeDemo}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 2 }}
          >
            View Demo
          </Button>
        )}

        {safeTags.length > 0 && (
          <Box sx={{ mt: 3 }}>
            {safeTags.map((tag, index) => (
              <Button
                key={index}
                variant="outlined"
                sx={{ mr: 1, mb: 1 }}
                size="small"
              >
                {tag}
              </Button>
            ))}
          </Box>
        )}

        {safeScreenshots.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Screenshots
            </Typography>
            <Grid container spacing={2}>
              {safeScreenshots.map(
                (shot, index) =>
                  shot?.fields?.file?.url && (
                    <Grid item xs={12} sm={6} key={index}>
                      <Card>
                        <CardMedia
                          component="img"
                          height="200"
                          image={`https:${shot.fields.file.url}`}
                          alt={shot.fields.title ?? `Screenshot ${index + 1}`}
                          sx={{ objectFit: "cover" }}
                        />
                      </Card>
                    </Grid>
                  )
              )}
            </Grid>
          </Box>
        )}

        {safeVideoDemo.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Video Demo
            </Typography>
            <Grid container spacing={2}>
              {safeVideoDemo.map(
                (vid, index) =>
                  vid?.fields?.file?.url && (
                    <Grid item xs={12} sm={6} key={index}>
                      <Card>
                        <CardContent>
                          <video
                            controls
                            style={{ width: "100%", height: "auto" }}
                          >
                            <source src={`https:${vid.fields.file.url}`} />
                            Your browser does not support the video tag.
                          </video>
                        </CardContent>
                      </Card>
                    </Grid>
                  )
              )}
            </Grid>
          </Box>
        )}
      </Box>
    </Layout>
  );
}
