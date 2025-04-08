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
import { trackEvent } from "@/app/lib/umamiTrackEvent";

type InfoSectionProps = {
  title: string;
  icon: React.ReactElement;
  items: string[];
  iconColor?: string;
};

function InfoSection({
  title,
  icon,
  items,
  iconColor = "primary.main",
}: InfoSectionProps) {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        height: "100%",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="800"
        color="background.main"
        gutterBottom
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Box
          component="span"
          sx={{
            mr: 1,
            p: 1,
            backgroundColor: "primary.light",
            borderRadius: "50%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "background.paper",
          }}
        >
          {icon}
        </Box>
        {title}
      </Typography>

      <List dense>
        {items.map((text, index) => (
          <ListItem key={index} sx={{ px: 0, mb: 1 }}>
            <ListItemIcon sx={{ minWidth: 28 }}>
              <CheckCircleIcon sx={{ color: iconColor, fontSize: 20 }} />
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

  return (
    <GlassCard
      sx={{
        mb: 6,
        p: 4,
        borderLeft: "4px solid",
        borderColor: "primary.main",
      }}
    >
      <Typography variant="h3" gutterBottom>
        For Recruiters
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Thank you for considering my profile. Here's what you should know about
        my expertise and availability:
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <InfoSection
            title="Core Competencies"
            icon={<BusinessIcon />}
            items={competencies}
            iconColor="background.paper"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoSection
            title="Work Preferences"
            icon={<WorkIcon />}
            items={preferences}
            iconColor="background.paper"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoSection
            title="Tech Stack"
            icon={<CodeIcon />}
            items={techStack}
            iconColor="background.paper"
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<DownloadIcon />}
          href="https://drive.google.com/file/d/1vQGr7z8OAO2PkedyyYDSlQr16W8hDvjH/view?usp=sharing&utm_source=portfolio"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackEvent("resume-recruiters-pdf-click");
          }}
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
