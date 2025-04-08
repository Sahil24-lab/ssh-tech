import GlassCardDark from "@/components/card/glass-card/GlassCard";
import {
  Box,
  Button,
  Chip,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React, { useState } from "react";

interface Experience {
  company: string;
  role: string;
  date: string;
  logo: string;
  points: string[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    company: "Sahil Harriram Tech",
    role: "Freelance/Contractor (Blockchain & Robotics)",
    date: "08/2019 – present",
    logo: "/logos/companies/ssh-tech.png",
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
    logo: "/logos/companies/buzzkill.png",
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
    logo: "/logos/companies/playlobby.png",
    points: [
      "Collaborated with Managing Director & Head of Product to design & implement new monetisation models, resulting in a 10x daily active user growth.",
      "Spearheaded the development of 3 blockchain games, increasing user retention rate by 20%.",
      "Enhanced user engagement by 400% during an event, through React and AWS upgrades & collaborated on landing page design.",
    ],
    tags: ["React", "AWS", "Blockchain"],
  },
];

const nonCryptoExperiences: Experience[] = [
  {
    company: "Body Mind Life Online",
    role: "Head of Engineering | Executive Team",
    date: "08/2021 – 02/2022",
    logo: "/logos/companies/bodymindlife.png",
    points: [
      "Directed a 12 person global dev team, building web applications (React & Go Backend) and native mobile apps (iOS/Android), achieving a 25% improvement in engineering productivity.",
      "Created and executed a strategic product roadmap using agile methodology to deliver 3 major platform upgrades within 4 months.",
    ],
    tags: ["React", "Go", "iOS/Android", "Agile"],
  },
  {
    company: "3ME Technology",
    role: "Head of Mobility | Lead Embedded Software Engineer",
    date: "04/2020 - 07/2021",
    logo: "/logos/companies/3me.png",
    points: [
      ">$4M sales through flagship BMS software dev.",
      "Optimized manufacturing from 2 months to 3 days via automation.",
      "Led hiring and redesign enabling $20M capital raise.",
      "Reverse-engineered Volvo Loader for contract win.",
    ],
    tags: ["Embedded C++", "Automation", "Systems Design"],
  },
  {
    company: "Elite Robotics",
    role: "Co-Founder | CEO",
    date: "06/2015 - 04/2020",
    logo: "/logos/companies/eliterobotics.png",
    points: [
      "Led business strategy and investor negotiations, raising AU$750K + $120K in grants.",
      "Accepted into CDL and Skydeck accelerator programs.",
      "Led engineering to build autonomous electric vehicle platform.",
    ],
    tags: ["Embedded C++", "MATLAB", "Leadership"],
  },
];

function ExperienceCard({
  company,
  role,
  date,
  points,
  tags,
  logo,
}: Experience) {
  return (
    <GlassCardDark
      sx={{
        px: 5,
        py: 6,
        minHeight: 240,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "rgba(18, 18, 18, 0.6)",
        backdropFilter: "blur(8px)",
        borderRadius: 3,
      }}
    >
      <Grid container spacing={2} alignItems="flex-start">
        <Grid
          item
          xs={12}
          sm={12}
          md={1.5}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              position: "relative",
              overflow: "hidden",
              "&:hover::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "primary.main",
                opacity: 0.1,
                borderRadius: "50%",
                zIndex: 1,
              },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt={`${company} logo`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                position: "relative",
                zIndex: 2,
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={9}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Typography variant="h4" color="primary.light">
                {company}
              </Typography>
              <Typography variant="h5" sx={{ color: "white" }}>
                {role}
              </Typography>
              <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
                {tags.map((tag: string) => (
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
            </Box>

            <Box sx={{ mt: { xs: 2, md: 0 } }}>
              <Chip
                size="medium"
                label={date}
                sx={{
                  backgroundColor: "primary.dark",
                  color: "text.primary",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                  maxWidth: "100%",
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <List
        sx={{ mt: 2, pl: 3, listStyleType: "disc", display: "grid", gap: 0.6 }}
      >
        {points.map((point: string, idx: number) => (
          <ListItem
            key={idx}
            sx={{ display: "list-item", py: 0.15, pl: 0 }}
            disableGutters
          >
            <ListItemText
              primary={point}
              primaryTypographyProps={{
                variant: "body1",
                sx: { m: 0, lineHeight: 1.5 },
              }}
            />
          </ListItem>
        ))}
      </List>
    </GlassCardDark>
  );
}

export default function WorkExperience() {
  const [showMore, setShowMore] = useState(false);

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
          mb: 2,
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
        <Box key={exp.company} sx={{ mb: 4 }}>
          <ExperienceCard {...exp} />
        </Box>
      ))}

      <Collapse in={showMore}>
        {nonCryptoExperiences.map((exp) => (
          <Box key={exp.company} sx={{ mb: 4 }}>
            <ExperienceCard {...exp} />
          </Box>
        ))}
      </Collapse>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button
          variant="outlined"
          endIcon={showMore ? <ExpandLess /> : <ExpandMore />}
          onClick={() => setShowMore(!showMore)}
          sx={{ borderColor: "primary.main", color: "primary.main" }}
        >
          {showMore ? "Show Less" : "View More Experiences"}
        </Button>
      </Box>
    </Box>
  );
}
