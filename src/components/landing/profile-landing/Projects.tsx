import GlassCard from "@/components/card/glass-card/GlassCard";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import {
  OpenInNew as ExternalLinkIcon,
  Star as StarIcon,
  Code as CodeIcon,
} from "@mui/icons-material";
import Link from "next/link";
import React from "react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  highlights: string[];
  caseStudyHref: string;
  secondaryLink?: {
    label: string;
    href: string;
  };
};

const projects: Project[] = [
  {
    title: "BlocTrace",
    subtitle: "Supply Chain Management on Avalanche",
    description:
      "A decentralized supply chain management tool built on Avalanche blockchain that won the GM Vietnam Hackathon. The solution provides transparent tracking of goods from manufacturer to consumer.",
    tags: [
      "Next.js",
      "Solidity",
      "Avalanche",
      "NFT minting",
      "Account Management",
    ],
    highlights: ["Hackathon 1st Place", "$3,000 Prize"],
    caseStudyHref: "/proof-of-work/bloctrace",
    secondaryLink: {
      label: "GitHub",
      href: "https://github.com/Sahil24-lab/BlocTrace",
    },
  },
  {
    title: "Buzzkill",
    subtitle: "GameFi Project on Viction",
    description:
      "A DeFi/Strategy based game built on Viction with custom authentication and modern web technologies. Players can earn tokens through strategic gameplay and ecosystem participation.",
    tags: [
      "Next.js",
      "Rainbowkit",
      "Wagmi",
      "Supabase",
      "Airdrop Leaderboard",
      "NFT Minting",
      "NFT Staking",
    ],
    highlights: ["$50,000 Grant", "3.3K Users in 30 days", "Hackathon Winner"],
    caseStudyHref: "proof-of-work/projects/buzzkill",
    secondaryLink: {
      label: "Live Demo",
      href: "https://play.buzzkill.world/",
    },
  },
];

function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  highlights,
  caseStudyHref,
  secondaryLink,
}: Project) {
  return (
    <GlassCard
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: 4,
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 0 }}>
        {/* Title */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <CodeIcon sx={{ color: "primary.main", mr: 1, fontSize: 48 }} />
          <Typography variant="h2" component="h3">
            {title}
          </Typography>
        </Box>

        {/* Highlights */}
        <Box sx={{ display: "flex", gap: 3, alignItems: "center", mb: 2 }}>
          {highlights.map((text) => (
            <Typography
              key={text}
              variant="body1"
              color="primary.light"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <StarIcon sx={{ fontSize: 18, mr: 0.5 }} />
              {text}
            </Typography>
          ))}
        </Box>

        {/* Subtitle */}
        <Typography variant="h5" color="primary.light" gutterBottom>
          {subtitle}
        </Typography>

        {/* Description */}
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
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
      </CardContent>

      {/* Buttons */}
      <CardActions sx={{ p: 0, pt: 2, gap: 1 }}>
        <Button
          variant="contained"
          endIcon={<ExternalLinkIcon />}
          component={Link}
          href={caseStudyHref}
          sx={{
            px: 3,
            py: 1.2,
            fontWeight: 500,
            backgroundColor: "primary.main",
            "&:hover": { backgroundColor: "primary.dark" },
          }}
        >
          View Case Study
        </Button>
        {secondaryLink && (
          <Button
            variant="outlined"
            component="a"
            href={secondaryLink.href}
            target="_blank"
            sx={{
              px: 3,
              py: 1.2,
              fontWeight: 500,
              borderColor: "primary.light",
              color: "primary.light",
            }}
          >
            {secondaryLink.label}
          </Button>
        )}
      </CardActions>
    </GlassCard>
  );
}

export default function Projects() {
  return (
    <Box component="section" sx={{ mb: 6 }}>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          borderBottom: "2px solid",
          borderColor: "primary.main",
          pb: 1,
          display: "inline-block",
        }}
      >
        Featured Projects
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Highlighted projects showcasing technical expertise and problem-solving
        capabilities.
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid key={project.title} item xs={12} md={6}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
