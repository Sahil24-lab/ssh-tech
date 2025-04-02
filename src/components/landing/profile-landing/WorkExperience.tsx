import GlassCard from "@/components/card/glass-card/GlassCard";
import {
  Box,
  Button,
  Chip,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import React from "react";

type Experience = {
  company: string;
  role: string;
  date: string;
  points: string[];
  tags: string[];
};

const experiences: Experience[] = [
  {
    company: "Sahil Harriram Tech",
    role: "Freelance/Contractor (Blockchain & Robotics)",
    date: "08/2019 – present",
    points: [
      "Built risk dashboard + landing/blog for Money Market Protocols [Framer, Next.JS, eCharts & MaterialUI]",
      "Worked with a DeFi protocol to build a frontend SDK to interact with proxy contracts that provide an omnichain stable asset backed by wsETH.",
      "Won the GM Vietnam Avalanche stream Hackathon $3000, building a decentralised supply chain management tool BlocTrace, using Next.JS & Solidity.",
      "Reverse-engineered primary computers on a 15 Tonne Volvo Loader & built a circuit to mimic sensor signals, leading to a multi-million-dollar contract.",
    ],
    tags: ["Next.js", "Solidity", "MaterialUI", "DeFi"],
  },
  {
    company: "Buzzkill Studio",
    role: "Co-Founder (Blockchain GameFi)",
    date: "11/2023 – present",
    points: [
      "Co-founder for Buzzkill, a DeFi/Strategy based game built on Viction using Next.JS, Rainbowkit, wagmi, viem, SIWE/Next Auth + Supabase for Custom auth. Designed FE using Figma.",
      "Received $80,000 for the Viction Hackathon & grant.",
    ],
    tags: ["Next.js", "Rainbowkit", "Wagmi", "Supabase"],
  },
  {
    company: "PlayChip Foundation",
    role: "Technical Project Lead",
    date: "03/2022 – 03/2023",
    points: [
      "Collaborated with Managing Director & Head of Product to design & implement new monetisation models, resulting in a 10x daily active user growth.",
      "Spearheaded the development of 3 blockchain games, increasing user retention rate by 20%.",
      "Enhanced user engagement by 400% during an event, through React and AWS upgrades & collaborated on landing page design.",
    ],
    tags: ["React", "AWS", "Blockchain"],
  },
];

function ExperienceCard({ company, role, date, points, tags }: Experience) {
  return (
    <GlassCard sx={{ mb: 3, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Typography variant="h4" color="primary.light">
            {company}
          </Typography>
          <Typography variant="h6">{role}</Typography>

          <Box sx={{ mt: 1.5, display: "flex", flexWrap: "wrap", gap: 1 }}>
            {tags.map((tag) => (
              <Chip
                key={tag}
                size="small"
                label={tag}
                sx={{
                  backgroundColor: "secondary.dark",
                  color: "text.primary",
                }}
              />
            ))}
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          sx={{
            textAlign: { xs: "left", md: "right" },
            pt: { xs: 0.5, md: 1.5 },
          }}
        >
          <Chip
            label={date}
            sx={{
              backgroundColor: "primary.dark",
              color: "text.primary",
              fontWeight: "bold",
            }}
          />
        </Grid>
      </Grid>

      <List
        sx={{
          mt: 2,
          pl: 3,
          listStyleType: "disc",
          display: "grid",
          gap: 0.6,
        }}
      >
        {points.map((point, idx) => (
          <ListItem
            key={idx}
            sx={{
              display: "list-item",
              py: 0.25,
              pl: 0,
              alignItems: "flex-start",
            }}
            disableGutters
          >
            <ListItemText
              primary={point}
              primaryTypographyProps={{
                variant: "body1",
                sx: { m: 0, lineHeight: 1.6 },
              }}
            />
          </ListItem>
        ))}
      </List>
    </GlassCard>
  );
}

export default function WorkExperience() {
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
        Work Experience
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 3 }}>
        A track record of leadership and technical excellence across blockchain,
        robotics, and engineering domains.
      </Typography>

      {experiences.map((exp) => (
        <ExperienceCard key={exp.company} {...exp} />
      ))}

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          sx={{ borderColor: "primary.main", color: "primary.main" }}
        >
          View More Experience
        </Button>
      </Box>
    </Box>
  );
}
