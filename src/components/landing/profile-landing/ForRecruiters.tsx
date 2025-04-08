import GlassCard from "@/components/card/glass-card/GlassCard";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Download as DownloadIcon,
  CheckCircle as CheckCircleIcon,
  Code as CodeIcon,
  Business as BusinessIcon,
  Work as WorkIcon,
} from "@mui/icons-material";
import React from "react";

type InfoSectionProps = {
  title: string;
  icon: React.ReactElement;
  items: string[];
};

function InfoSection({ title, icon, items }: InfoSectionProps) {
  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h6"
        color="primary.light"
        gutterBottom
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Box
          component="span"
          sx={{ mr: 1, display: "inline-flex", verticalAlign: "middle" }}
        >
          {icon}
        </Box>
        {title}
      </Typography>

      <List dense>
        {items.map((text, index) => (
          <ListItem key={index} sx={{ px: 0 }}>
            <ListItemIcon sx={{ minWidth: 28 }}>
              <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default function ForRecruiters() {
  const competencies = [
    "Blockchain Development (DeFi, GameFi)",
    "Technical Leadership & Team Management",
    "Product Strategy & Development",
    "Frontend Development (React/Next.js)",
  ];

  const preferences = [
    "Remote or Hybrid Work Models",
    "Contract & Freelance Opportunities",
    "Blockchain & Web3 Projects",
    "Technical Advisory Roles",
  ];

  const techStack = [
    "Frontend: Next.js, RainbowKit, Viem, Wagmi",
    "Blockchain: Solidity, Foundry, Chai, Mocha ",
    "Backend: Node.js, AWS, Supabase",
    "APIs: Nest.JS, Subquery, Subgraph",
  ];

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track("resume-full-pdf-click");
    }
  };

  return (
    <GlassCard
      sx={{
        mb: 6,
        p: 4,
        borderLeft: "4px solid",
        borderColor: "primary.main",
      }}
    >
      <Typography variant="h4" gutterBottom>
        For Recruiters
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Thank you for considering my profile. Here's what you should know about
        my expertise and availability:
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <InfoSection
            title="Core Competencies"
            icon={<BusinessIcon />}
            items={competencies}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoSection
            title="Work Preferences"
            icon={<WorkIcon />}
            items={preferences}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoSection
            title="Technical Stack"
            icon={<CodeIcon />}
            items={techStack}
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<DownloadIcon />}
          href="https://drive.google.com/file/d/1vQGr7z8OAO2PkedyyYDSlQr16W8hDvjH/view?usp=sharing&utm_source=portfolio"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          sx={{
            backgroundColor: "primary.main",
            "&:hover": { backgroundColor: "primary.dark" },
          }}
        >
          Download Full Resume
        </Button>
      </Box>
    </GlassCard>
  );
}
