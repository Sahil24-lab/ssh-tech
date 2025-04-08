import GlassCard from "@/components/card/glass-card/GlassCard";
import { Box, Grid, Typography } from "@mui/material";
import { School as SchoolIcon } from "@mui/icons-material";
import React from "react";

type EducationItem = {
  institution: string;
  program: string;
  details: string;
};

const educationList: EducationItem[] = [
  {
    institution: "University of Newcastle, Australia",
    program: "BEng. (Mechatronics)(Honours)",
    details:
      "Awarded $2000 scholarship for an Exchange Program to Karlsruher Institut für Technologie, Germany",
  },
  {
    institution: "Cheung Kong Graduate School of Business, China",
    program: "China Start Program",
    details:
      "Secured $8500 Scholarship for the China Start Program. Pitched business to audience >500,000.",
  },
];

function EducationCard({ item }: { item: EducationItem }) {
  return (
    <GlassCard sx={{ p: 3 }}>
      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
        <SchoolIcon sx={{ color: "primary.main", fontSize: 32 }} />
        <Box>
          <Typography variant="h5">{item.institution}</Typography>
          <Typography variant="h6" color="primary.light" gutterBottom>
            {item.program}
          </Typography>
          <Typography variant="body1">{item.details}</Typography>
        </Box>
      </Box>
    </GlassCard>
  );
}

export default function Education() {
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
        Education
      </Typography>

      <Grid container spacing={3}>
        {educationList.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <EducationCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
