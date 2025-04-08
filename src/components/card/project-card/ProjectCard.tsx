"use client";

import React from "react";
import { Box, Typography, Chip, Avatar, Button } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GlassCard from "@/components/card/glass-card/GlassCard";
import { useRouter } from "next/navigation";
import { OpenInNew as ExternalLinkIcon } from "@mui/icons-material";
import { trackEvent } from "@/app/lib/umamiTrackEvent";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  logo?: string;
  caseStudyHref?: string;
  secondaryLink?: { label: string; href: string };
};

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

export default function ProjectCard(props: Project) {
  const {
    title,
    subtitle,
    description,
    highlights,
    tags,
    logo,
    caseStudyHref,
    secondaryLink,
  } = props;
  const router = useRouter();

  return (
    <GlassCard
      sx={{
        p: 4,
        height: "100%",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "none",
        cursor: "default",
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        {logo && (
          <Avatar
            alt={title}
            src={logo}
            sx={{
              width: 60,
              height: 60,
              bgcolor: "background.default",
              border: "2px solid",
              borderColor: "primary.main",
            }}
          />
        )}
        <Box>
          <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "primary.main", fontWeight: 500 }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>

      {/* Highlights */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: 1,
          columnGap: 1,
          mb: 2,
        }}
      >
        {highlights.map((highlight, i) => (
          <Chip
            key={i}
            label={highlight}
            size="medium"
            icon={<EmojiEventsIcon />}
            sx={{
              borderRadius: "999px",
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              fontWeight: 600,
              px: 1.6,
              "& .MuiChip-icon": {
                color: "primary.contrastText",
                fontSize: 18,
              },
            }}
          />
        ))}
      </Box>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          fontSize: { xs: "1.05rem", md: "1.1rem" },
          lineHeight: 1.75,
          mb: 2,
        }}
      >
        {description}
      </Typography>

      {/* Tags */}
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            size="medium"
            label={tag}
            sx={{
              backgroundColor: "secondary.dark",
              color: "text.primary",
            }}
          />
        ))}
      </Box>

      {/* Optional Buttons */}
      <Box sx={{ mt: "auto", display: "flex", gap: 2 }}>
        {caseStudyHref && (
          <Button
            variant="contained"
            endIcon={<ExternalLinkIcon />}
            onClick={() => {
              trackEvent(`project-${slugify(title)}-case-study`);
              router.push(caseStudyHref);
            }}
          >
            View Case Study
          </Button>
        )}

        {secondaryLink && (
          <Button
            variant="outlined"
            endIcon={<ExternalLinkIcon />}
            onClick={() => {
              trackEvent(
                `project-${slugify(title)}-${slugify(secondaryLink.label)}`
              );
              window.open(secondaryLink.href, "_blank", "noopener,noreferrer");
            }}
          >
            {secondaryLink.label}
          </Button>
        )}
      </Box>
    </GlassCard>
  );
}
