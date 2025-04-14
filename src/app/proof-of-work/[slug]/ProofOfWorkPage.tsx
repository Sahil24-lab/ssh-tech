// ProofOfWorkPage.tsx

"use client";

import { useEffect, useState } from "react";
import {
  ProofOfWorkEntry,
  ProofOfWorkFields,
  ContentfulImageAsset,
} from "../../types/contentful";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Chip,
  Link,
  Avatar,
  Stack,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Layout from "@/components/layout/Layout";
import CenteredBackButton from "@/components/button/back-button/BackButton";
import FeatureImage from "@/components/feature-image/FeatureImage";
import ConstrainedContainer from "@/components/layout/container/constrained-container";
import {
  PlayCircle as PlayCircleIcon,
  GitHub as GithubIcon,
} from "@mui/icons-material";

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

  // Extract fields
  const fields = project.fields as ProofOfWorkFields;
  const {
    title,
    subtitle,
    achievements,
    description,
    demo,
    github,
    tags,
    screenshots,
    demoVideo,
    projectLogo,
  } = fields;

  // Prepare tags
  const safeTags: string[] = Array.isArray(tags) ? tags : [];

  // Prepare screenshots
  const safeScreenshots: ContentfulImageAsset[] = Array.isArray(screenshots)
    ? (screenshots as ContentfulImageAsset[])
    : [];

  // Prepare logo (Avatar)
  const logoUrl =
    projectLogo && typeof projectLogo === "object" && "fields" in projectLogo
      ? (projectLogo as ContentfulImageAsset).fields.file.url
      : undefined;

  // Handle video
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
      <ConstrainedContainer>
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
              <CenteredBackButton></CenteredBackButton>
            </Box>

            {/* Header Section */}
            <Box
              sx={{
                position: "relative",
                padding: { xs: "2rem 2rem", lg: "3rem 4rem" },
                textAlign: "left",
                color: "white",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box sx={{ position: "relative", zIndex: 2 }}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  {logoUrl && (
                    <Avatar
                      src={`https:${logoUrl}`}
                      alt={String(title ?? "Title")}
                      sx={{
                        width: 96,
                        height: 96,
                        border: "2px solid",
                        borderColor: "primary.main",
                        boxShadow: "none",
                        transition: "box-shadow 0.3s ease",
                        "&:hover": {
                          boxShadow: "2px 2px 16px rgba(7, 223, 193, 0.7)",
                        },
                      }}
                    />
                  )}

                  <Box>
                    <Typography variant="h1" fontWeight={700}>
                      {String(title ?? "Title")}
                    </Typography>

                    {subtitle && (
                      <Typography
                        variant="h3"
                        sx={{ fontWeight: 600, color: "#B0B0B0" }}
                      >
                        {subtitle}
                      </Typography>
                    )}
                  </Box>
                </Stack>

                {/* Achievements */}
                {Array.isArray(achievements) && achievements.length > 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      mt: 3,
                    }}
                  >
                    {achievements.map((achievement, i) => (
                      <Chip
                        key={i}
                        label={achievement}
                        size="medium"
                        icon={<EmojiEventsIcon />}
                        color="primary"
                        variant="filled"
                      />
                    ))}
                  </Box>
                )}

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
                        width: { xs: "100%", md: "80%" },
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

                {/* Thin line with gradient */}

                <Box
                  sx={{
                    margin: "0.4rem 0",
                    width: "100%",
                    height: "2px",
                    background: (theme) =>
                      `linear-gradient(to right, transparent 1%, ${theme.palette.secondary.dark} 20%, ${theme.palette.secondary.dark} 80%, transparent 98%)`,
                  }}
                />

                {/* Buttons */}
                <Box sx={{ display: "flex", gap: 2 }}>
                  {demo && (
                    <Button
                      variant="contained"
                      startIcon={<PlayCircleIcon />}
                      color="primary"
                      href={String(demo)}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mt: 2 }}
                    >
                      View Demo
                    </Button>
                  )}
                  {github && (
                    <Button
                      variant="contained"
                      startIcon={<GithubIcon />}
                      color="primary"
                      href={String(github)}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mt: 2 }}
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
              {shot.fields?.file?.url && (
                <FeatureImage
                  src={`https:${shot.fields.file.url}`}
                  alt={shot.fields?.title ?? `Feature ${index + 1}`}
                  title={shot.fields?.title ?? `Feature ${index + 1}`}
                  description={shot.fields?.description ?? ""}
                  images={safeScreenshots
                    .map((s) => `https:${s.fields?.file?.url}`)
                    .filter(Boolean)}
                  priority={index === 0}
                />
              )}
            </Box>
          ))}
        </Box>
      </ConstrainedContainer>
    </Layout>
  );
}
