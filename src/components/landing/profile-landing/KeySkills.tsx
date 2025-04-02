import GlassCard from "@/components/card/glass-card/GlassCard";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

import {
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
} from "@mui/icons-material";

const skillsData = [
  {
    category: "Technical",
    skills: [
      { name: "Blockchain", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "Solidity", level: 4 },
      { name: "React", level: 5 },
      { name: "AWS", level: 4 },
      { name: "C++", level: 4 },
    ],
  },
  {
    category: "Leadership",
    skills: [
      { name: "Project Management", level: 5 },
      { name: "Team Leadership", level: 5 },
      { name: "Agile Methodologies", level: 4 },
      { name: "Strategic Planning", level: 4 },
    ],
  },
  {
    category: "Business",
    skills: [
      { name: "Startup Development", level: 5 },
      { name: "Product Strategy", level: 4 },
      { name: "Investor Relations", level: 4 },
    ],
  },
];

export default function KeySkills() {
  // Function to render skill level
  const renderSkillLevel = (level: number) => {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            sx={{
              fontSize: "0.8rem",
              color: i < level ? "primary.main" : "rgba(255, 255, 255, 0.3)",
              mr: 0.2,
            }}
          />
        ))}
      </Box>
    );
  };

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
        Key Skills
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 3 }}>
        Technical expertise and professional competencies developed across
        multiple industries and leadership roles.
      </Typography>

      <Grid container spacing={3}>
        {skillsData.map((category) => (
          <Grid item xs={12} md={4} key={category.category}>
            <GlassCard sx={{ height: "100%", p: 3 }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "primary.light", mb: 2 }}
              >
                {category.category}
              </Typography>
              <List dense>
                {category.skills.map((skill) => (
                  <ListItem key={skill.name} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleIcon sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={skill.name}
                      secondary={renderSkillLevel(skill.level)}
                      primaryTypographyProps={{
                        variant: "body1",
                        sx: { color: "text.primary" },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
