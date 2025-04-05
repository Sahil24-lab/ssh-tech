"use client";

import { ProofOfWorkEntry, ContentfulImageAsset } from "../../types/contentful";
import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Link,
} from "@mui/material";
import Layout from "@/components/layout/Layout";
import { CenteredBackButton } from "@/components/button/back-button/BackButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import FeatureImage from "@/components/feature-image/FeatureImage";

export default function ProofOfWorkPage({
  project,
}: {
  project: ProofOfWorkEntry;
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    return (
      <Box className="flex items-center justify-center h-screen">
        <Typography variant="h5">Project not found</Typography>
      </Box>
    );
  }

  // Extract safe content
  const { title, description, demo, github, tags, screenshots, demoVideo } =
    project.fields;

  const safeTags: string[] = Array.isArray(tags) ? tags : [];
  const safeScreenshots: ContentfulImageAsset[] = Array.isArray(screenshots)
    ? (screenshots as ContentfulImageAsset[])
    : [];

  const videoUrl: string = typeof demoVideo === "string" ? demoVideo : "";

  const isYouTube =
    videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");

  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = "";
    const youtubeMatch = url.match(/(?:youtu\.be\/|v=)([^&]+)/);
    if (youtubeMatch) videoId = youtubeMatch[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <Layout>
      <Box className="flex flex-col gap-10" marginTop="4rem">
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {/* Sticky Back Button */}
          <Box>
            <CenteredBackButton
              component={Link}
              href="/proof-of-work"
              startIcon={<ArrowBackIcon />}
              color="primary"
              className={isScrolled ? "scrolled" : ""}
            >
              {!isScrolled && "Back to Projects"}
            </CenteredBackButton>
          </Box>

          {/* Header Section */}
          <Box
            sx={{
              position: "relative",
              padding: "4rem",
              textAlign: "left",
              color: "white",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Typography variant="h1" fontWeight={700}>
                {String(title ?? "Title")}
              </Typography>

              {/* Description */}
              <Typography variant="body1" sx={{ mt: 4, mb: 4 }}>
                {String(description ?? "No description available")}
              </Typography>

              {/* Tags */}
              {safeTags.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    marginBottom: 2,
                  }}
                >
                  {safeTags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              )}

              {/* Demo Video Section */}
              {demoVideo && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    textAlign: "center",
                    marginTop: "1.5rem",
                  }}
                >
                  <Card
                    sx={{
                      width: "80%",
                      maxWidth: "900px",
                      border: "none",
                      boxShadow: "none",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CardContent
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {isYouTube ? (
                        <Box
                          component="iframe"
                          src={getYouTubeEmbedUrl(videoUrl)}
                          width="100%"
                          height="auto"
                          sx={{
                            aspectRatio: "16/9",
                            borderRadius: "16px",
                            border: "none",
                            display: "block",
                            margin: "auto",
                          }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          controls
                          className="rounded-lg shadow-lg"
                          style={{
                            width: "100%",
                            height: "auto",
                            aspectRatio: "16/9",
                            display: "block",
                            margin: "auto",
                          }}
                        >
                          <source src={videoUrl} />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </CardContent>
                  </Card>
                </Box>
              )}

              <Box sx={{ display: "flex", gap: 2 }}>
                {/* Demo Button */}
                {demo && (
                  <Button
                    variant="contained"
                    color="primary"
                    href={String(demo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 3 }}
                  >
                    View Demo
                  </Button>
                )}
                {github && (
                  <Button
                    variant="contained"
                    color="primary"
                    href={String(github)}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 3 }}
                  >
                    View Github
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Card>

        {/* Features Section (Images Take Full Width) */}
        {safeScreenshots.map((shot, index) => (
          <Box key={index} marginTop="2rem">
            {/* Full-Width Image with Hover Overlay */}
            {shot.fields?.file?.url && (
              <FeatureImage
                src={`https:${shot.fields.file.url}`}
                alt={shot.fields?.title ?? `Feature ${index + 1}`}
                title={shot.fields?.title ?? `Feature ${index + 1}`}
                description={
                  shot.fields?.description ?? "Feature description here."
                }
              />
            )}
          </Box>
        ))}
      </Box>
    </Layout>
  );
}
