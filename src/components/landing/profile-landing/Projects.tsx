import React from "react";
import Link from "next/link";
import { Box, Button, Grid, Typography } from "@mui/material";
import ProjectCard from "@/components/card/project-card/ProjectCard";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const projects = [
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
    logo: "/logos/companies/bloctrace.svg",
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
    logo: "/logos/companies/buzzkill.png",
    caseStudyHref: "proof-of-work/buzzkill",
    secondaryLink: {
      label: "Live Demo",
      href: "https://play.buzzkill.world/",
    },
  },
];

export default function Projects() {
  return (
    <Box component="section" sx={{ mb: 10 }}>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          borderBottom: "2px solid",
          borderColor: "primary.main",
          pb: 1,
          mb: 2,
          display: "inline-block",
        }}
      >
        Featured Projects
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Highlighted projects showcasing technical expertise and problem-solving
        capabilities.
      </Typography>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        {projects.map((proj) => (
          <Grid item xs={12} md={6} key={proj.title}>
            <ProjectCard {...proj} />
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center">
        <Link href="/proof-of-work" passHref>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<RocketLaunchIcon sx={{ fontSize: 20 }} />}
            sx={{
              fontWeight: 700,
              gap: 1,
              textTransform: "uppercase",
              px: 4,
              py: 1.5,
              borderWidth: 2,
            }}
          >
            Proof of Work
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
