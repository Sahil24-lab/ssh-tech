"use client"

import { useState } from "react"
import {
  Container,
  Box,
  Typography,
  Button,
  Avatar,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CardContent,
  CardActions,
} from "@mui/material"
import {
  LinkedIn as LinkedinIcon,
  GitHub as GithubIcon,
  Email as MailIcon,
  OpenInNew as ExternalLinkIcon,
  Download as DownloadIcon,
  LocationOn as LocationIcon,
  Star as StarIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Code as CodeIcon,
  Business as BusinessIcon,
  School as SchoolIcon,
  Work as WorkIcon,
} from "@mui/icons-material"
import GlassCard from "../card/glass-card/GlassCard"
import Link from "next/link"

// Skills data with categories
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
]

// Testimonials data
const testimonials = [
  {
    id: "1",
    name: "Jane Smith",
    position: "CTO at TechCorp",
    text: "Sahil's expertise in blockchain technology and leadership skills were instrumental in the success of our project. His ability to translate complex technical concepts into actionable business strategies is remarkable.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "2",
    name: "Michael Johnson",
    position: "Product Manager at DeFi Protocol",
    text: "Working with Sahil was a game-changer for our DeFi platform. His deep understanding of both the technical and business aspects of blockchain helped us navigate complex challenges and deliver a superior product.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function ProfilePage() {
  const [expandedTestimonials, setExpandedTestimonials] = useState<{
    [key: string]: boolean
  }>({})

  const toggleTestimonial = (id: string) => {
    setExpandedTestimonials((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

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
    )
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section with Resume Download */}
      <GlassCard sx={{ mb: 6, p: { xs: 3, md: 4 }, position: "relative", overflow: "hidden" }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Box>
              <Typography variant="h2" component="h1" gutterBottom>
                Sahil Harriram
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ color: "secondary.light" }}>
                Blockchain Developer & Engineering Leader
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationIcon sx={{ color: "primary.light", mr: 1 }} />
                <Typography variant="body2">Sydney, Australia</Typography>
              </Box>
              <Typography variant="body1" paragraph sx={{ mb: 3, maxWidth: "90%" }}>
                Experienced engineering leader with expertise in blockchain development, technical project management,
                and product strategy. Passionate about building innovative solutions at the intersection of technology
                and business.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  href="/resume.pdf"
                  target="_blank"
                  sx={{
                    backgroundColor: "primary.main",
                    "&:hover": { backgroundColor: "primary.dark" },
                  }}
                >
                  Download Resume
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<LinkedinIcon />}
                  component="a"
                  href="https://linkedin.com"
                  target="_blank"
                  sx={{ borderColor: "primary.light", color: "primary.light" }}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GithubIcon />}
                  component="a"
                  href="https://github.com"
                  target="_blank"
                  sx={{ borderColor: "primary.light", color: "primary.light" }}
                >
                  GitHub
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<MailIcon />}
                  component="a"
                  href="mailto:sahil.harriram@gmail.com"
                  sx={{ borderColor: "primary.light", color: "primary.light" }}
                >
                  Email
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
            <Avatar
              sx={{
                width: { xs: 150, md: 180 },
                height: { xs: 150, md: 180 },
                border: "4px solid",
                borderColor: "primary.main",
                fontSize: { xs: 40, md: 48 },
                backgroundColor: "background.paper",
                boxShadow: "0 8px 32px rgba(7, 223, 193, 0.3)",
              }}
            >
              SH
            </Avatar>
          </Grid>
        </Grid>
      </GlassCard>

      {/* Key Skills Section - Organized by Category */}
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
          Technical expertise and professional competencies developed across multiple industries and leadership roles.
        </Typography>

        <Grid container spacing={3}>
          {skillsData.map((category) => (
            <Grid item xs={12} md={4} key={category.category}>
              <GlassCard sx={{ height: "100%", p: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ color: "primary.light", mb: 2 }}>
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

      {/* Work Experience Section */}
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
          A track record of leadership and technical excellence across blockchain, robotics, and engineering domains.
        </Typography>

        <Box sx={{ mt: 2 }}>
          <GlassCard sx={{ mb: 3, p: 3 }}>
            <Grid container>
              <Grid item xs={12} md={9}>
                <Typography variant="h4" sx={{ color: "primary.light" }}>
                  Sahil Harriram Tech
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Freelance/Contractor (Blockchain & Robotics)
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} sx={{ textAlign: { xs: "left", md: "right" } }}>
                <Chip
                  label="08/2019 – present"
                  sx={{
                    backgroundColor: "primary.dark",
                    color: "text.primary",
                    fontWeight: "bold",
                  }}
                />
              </Grid>
            </Grid>
            <Box component="ul" sx={{ pl: 2, mt: 2 }}>
              <li>
                <Typography variant="body1">
                  Built risk dashboard + landing/blog for Money Market Protocols [Framer, Next.JS, eCharts & MaterialUI]
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Worked with a DeFi protocol to build a frontend SDK to interact with proxy contracts that provide an
                  omnichain stable asset backed by wsETH.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Won the GM Vietnam Avalanche stream Hackathon $3000, building a decentralised supply chain management
                  tool BlocTrace, using Next.JS & Solidity.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Reverse-engineered primary computers on a 15 Tonne Volvo Loader & built a circuit to mimic sensor
                  signals, leading to a multi-million-dollar contract.
                </Typography>
              </li>
            </Box>
            <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
              <Chip size="small" label="Next.js" sx={{ backgroundColor: "secondary.dark", color: "text.primary" }} />
              <Chip size="small" label="Solidity" sx={{ backgroundColor: "secondary.dark", color: "text.primary" }} />
              <Chip size="small" label="MaterialUI" sx={{ backgroundColor: "secondary.dark", color: "text.primary" }} />
              <Chip size="small" label="DeFi" sx={{ backgroundColor: "secondary.dark", color: "text.primary" }} />
            </Box>
          </GlassCard>

          <GlassCard sx={{ mb: 3, p: 3 }}>
            <Grid container>
              <Grid item xs={12} md={9}>
                <Typography variant="h4" sx={{ color: "primary.light" }}>
                  Buzzkill Studio
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Co-Founder (Blockchain GameFi)
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} sx={{ textAlign: { xs: "left", md: "right" } }}>
                <Chip
                  label="11/2023 – present"
                  sx={{
                    backgroundColor: "primary.dark",
                    color: "text.primary",
                    fontWeight: "bold",
                  }}
                />
              </Grid>
            </Grid>
            <Box component="ul" sx={{ pl: 2, mt: 2 }}>
              <li>
                <Typography variant="body1">
                  Co-founder for Buzzkill, a DeFi/Strategy based game built on Viction using Next.JS, Rainbowkit, wagmi,
                  viem, SIWE/Next Auth + Supabase for Custom auth. Designed FE using Figma.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">Received $80,000 for the Viction Hackathon & grant.</Typography>
              </li>
            </Box>
            <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
              <Chip size="small" label="Next.js" sx={{ backgroundColor: "secondary.dark", color: "text.primary" }} />
              <Chip size="small" label="Rainbowkit" sx={{ backgroundColor: "secondary.dark", color: "text.primary" }} />
              <Chip size="small" label="Wagmi" sx={{ backgroundColor: "secondary.dark", color: "text.primary" }} />
              <Chip size="small" label="Supabase" sx={{ backgroundColor: "secondary.dark", color: "text.primary" }} />
            </Box>
          </GlassCard>

          <GlassCard sx={{ mb: 3, p: 3 }}>
            <Grid container>
              <Grid item xs={12} md={9}>
                <Typography variant="h4" sx={{ color: "primary.light" }}>
                  PlayChip Foundation
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Technical Project Lead
                </Typography>
              </Grid>
              <Grid item xs={12} md={3} sx={{ textAlign: { xs: "left", md: "right" } }}>
                <Chip
                  label="03/2022-03/2023"
                  sx={{
                    backgroundColor: "primary.dark",
                    color: "text.primary",
                    fontWeight: "bold",
                  }}
                />
              </Grid>
            </Grid>
            <Box component="ul" sx={{ pl: 2, mt: 2 }}>
              <li>
                <Typography variant="body1">
                  Collaborated with Managing Director & Head of Product to design & implement new monetisation models,
                  resulting in a 10x daily active user growth.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Spearheaded the development of 3 blockchain games, increasing user retention rate by 20%.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Enhanced user engagement by 400% during an event, through React and AWS upgrades & collaborated on
                  landing page design.
                </Typography>
              </li>
            </Box>
            <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
              <Chip size="small" label="React" sx={{ backgroundColor: "secondary.dark", color: "text.primary" }} />
              <Chip size="small" label="AWS" sx={{ backgroundColor: "secondary.dark", color: "text.primary" }} />
              <Chip size="small" label="Blockchain" sx={{ backgroundColor: "secondary.dark", color: "text.primary" }} />
            </Box>
          </GlassCard>

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
      </Box>

      {/* Projects Section */}
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
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          Highlighted projects showcasing technical expertise and problem-solving capabilities.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <GlassCard sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CodeIcon sx={{ color: "primary.main", mr: 1, fontSize: 28 }} />
                  <Typography variant="h4">BlocTrace</Typography>
                </Box>
                <Typography variant="h6" color="primary.light" gutterBottom>
                  Supply Chain Management on Avalanche
                </Typography>
                <Typography variant="body1" paragraph>
                  A decentralized supply chain management tool built on Avalanche blockchain that won the GM Vietnam
                  Hackathon. The solution provides transparent tracking of goods from manufacturer to consumer.
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
                  <Chip
                    size="small"
                    label="Next.js"
                    sx={{ backgroundColor: "secondary.dark", color: "text.primary" }}
                  />
                  <Chip
                    size="small"
                    label="Solidity"
                    sx={{ backgroundColor: "secondary.dark", color: "text.primary" }}
                  />
                  <Chip
                    size="small"
                    label="Avalanche"
                    sx={{ backgroundColor: "secondary.dark", color: "text.primary" }}
                  />
                  <Chip
                    size="small"
                    label="Smart Contracts"
                    sx={{ backgroundColor: "secondary.dark", color: "text.primary" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography variant="body2" color="primary.light">
                    <StarIcon sx={{ fontSize: 16, verticalAlign: "text-top", mr: 0.5 }} />
                    Hackathon Winner
                  </Typography>
                  <Typography variant="body2" color="primary.light">
                    <StarIcon sx={{ fontSize: 16, verticalAlign: "text-top", mr: 0.5 }} />
                    $3,000 Prize
                  </Typography>
                </Box>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  variant="contained"
                  endIcon={<ExternalLinkIcon />}
                  component={Link}
                  href="/projects/bloctrace"
                  sx={{
                    backgroundColor: "primary.main",
                    "&:hover": { backgroundColor: "primary.dark" },
                  }}
                >
                  View Case Study
                </Button>
                <Button
                  variant="outlined"
                  component="a"
                  href="https://github.com/username/bloctrace"
                  target="_blank"
                  sx={{ ml: 1, borderColor: "primary.light", color: "primary.light" }}
                >
                  GitHub
                </Button>
              </CardActions>
            </GlassCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <GlassCard sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <CodeIcon sx={{ color: "primary.main", mr: 1, fontSize: 28 }} />
                  <Typography variant="h4">Buzzkill</Typography>
                </Box>
                <Typography variant="h6" color="primary.light" gutterBottom>
                  GameFi Project on Viction
                </Typography>
                <Typography variant="body1" paragraph>
                  A DeFi/Strategy based game built on Viction with custom authentication and modern web technologies.
                  Players can earn tokens through strategic gameplay and ecosystem participation.
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
                  <Chip
                    size="small"
                    label="Next.js"
                    sx={{ backgroundColor: "secondary.dark", color: "text.primary" }}
                  />
                  <Chip
                    size="small"
                    label="Rainbowkit"
                    sx={{ backgroundColor: "secondary.dark", color: "text.primary" }}
                  />
                  <Chip size="small" label="Wagmi" sx={{ backgroundColor: "secondary.dark", color: "text.primary" }} />
                  <Chip
                    size="small"
                    label="Supabase"
                    sx={{ backgroundColor: "secondary.dark", color: "text.primary" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography variant="body2" color="primary.light">
                    <StarIcon sx={{ fontSize: 16, verticalAlign: "text-top", mr: 0.5 }} />
                    $80,000 Grant
                  </Typography>
                  <Typography variant="body2" color="primary.light">
                    <StarIcon sx={{ fontSize: 16, verticalAlign: "text-top", mr: 0.5 }} />
                    Active Development
                  </Typography>
                </Box>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  variant="contained"
                  endIcon={<ExternalLinkIcon />}
                  component={Link}
                  href="/projects/buzzkill"
                  sx={{
                    backgroundColor: "primary.main",
                    "&:hover": { backgroundColor: "primary.dark" },
                  }}
                >
                  View Case Study
                </Button>
                <Button
                  variant="outlined"
                  component="a"
                  href="https://buzzkill.game"
                  target="_blank"
                  sx={{ ml: 1, borderColor: "primary.light", color: "primary.light" }}
                >
                  Live Demo
                </Button>
              </CardActions>
            </GlassCard>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials Section */}
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
          Testimonials
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          What colleagues and clients say about working with me.
        </Typography>

        <Grid container spacing={3}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={6} key={testimonial.id}>
              <GlassCard sx={{ p: 3, height: "100%" }}>
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <Avatar src={testimonial.avatar} alt={testimonial.name} />
                  <Box>
                    <Typography variant="h6">{testimonial.name}</Typography>
                    <Typography variant="body2" color="primary.light">
                      {testimonial.position}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ fontStyle: "italic", mb: 2 }}>
                  "{testimonial.text}"
                </Typography>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Education Section */}
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
          Education
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <GlassCard sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                <SchoolIcon sx={{ color: "primary.main", fontSize: 32 }} />
                <Box>
                  <Typography variant="h5">University of Newcastle, Australia</Typography>
                  <Typography variant="h6" color="primary.light" gutterBottom>
                    BEng. (Mechatronics)(Honours)
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Graduated: June 2016
                  </Typography>
                  <Typography variant="body1">
                    Awarded $2000 scholarship for an Exchange Program to Karlsruher Institut für Technologie, Germany
                  </Typography>
                </Box>
              </Box>
            </GlassCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <GlassCard sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                <SchoolIcon sx={{ color: "primary.main", fontSize: 32 }} />
                <Box>
                  <Typography variant="h5">Cheung Kong Graduate School of Business, China</Typography>
                  <Typography variant="h6" color="primary.light" gutterBottom>
                    China Start Program
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Completed: April 2018
                  </Typography>
                  <Typography variant="body1">
                    Secured $8500 Scholarship for the China Start Program. Pitched business to audience &gt;500,000.
                  </Typography>
                </Box>
              </Box>
            </GlassCard>
          </Grid>
        </Grid>
      </Box>

      {/* For Recruiters Section */}
      <GlassCard sx={{ mb: 6, p: 4, borderLeft: "4px solid", borderColor: "primary.main" }}>
        <Typography variant="h4" gutterBottom>
          For Recruiters
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for considering my profile. Here's what you should know about my expertise and availability:
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" color="primary.light" gutterBottom>
                <BusinessIcon sx={{ mr: 1, verticalAlign: "text-bottom" }} />
                Core Competencies
              </Typography>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText primary="Blockchain Development (DeFi, GameFi)" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText primary="Technical Leadership & Team Management" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText primary="Product Strategy & Development" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText primary="Frontend Development (React/Next.js)" />
                </ListItem>
              </List>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" color="primary.light" gutterBottom>
                <WorkIcon sx={{ mr: 1, verticalAlign: "text-bottom" }} />
                Work Preferences
              </Typography>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText primary="Remote or Hybrid Work Models" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText primary="Contract & Freelance Opportunities" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText primary="Blockchain & Web3 Projects" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText primary="Technical Advisory Roles" />
                </ListItem>
              </List>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" color="primary.light" gutterBottom>
                <CodeIcon sx={{ mr: 1, verticalAlign: "text-bottom" }} />
                Technical Stack
              </Typography>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText primary="Frontend: React, Next.js, TypeScript" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText primary="Blockchain: Solidity, Web3.js, Ethers.js" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText primary="Backend: Node.js, AWS, Supabase" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckCircleIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText primary="Embedded: C++, Robotics, IoT" />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<DownloadIcon />}
            href="/resume.pdf"
            target="_blank"
            sx={{
              backgroundColor: "primary.main",
              "&:hover": { backgroundColor: "primary.dark" },
            }}
          >
            Download Full Resume
          </Button>
        </Box>
      </GlassCard>

      {/* Call to Action */}
      <GlassCard
        sx={{
          p: { xs: 3, md: 5 },
          textAlign: "center",
          borderRadius: "16px",
          background: "linear-gradient(135deg, rgba(7, 223, 193, 0.15) 0%, rgba(6, 127, 113, 0.25) 100%)",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Let's Work Together
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 700, mx: "auto" }}>
          Looking for expertise in blockchain development, technical leadership, or product strategy? I'm available for
          freelance projects, consulting, and technical advisory roles.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button
            variant="contained"
            size="large"
            component="a"
            href="mailto:sahil.harriram@gmail.com"
            sx={{
              backgroundColor: "primary.main",
              "&:hover": { backgroundColor: "primary.dark" },
            }}
          >
            Contact Me
          </Button>
          <Button
            variant="outlined"
            size="large"
            component="a"
            href="https://calendly.com/sahil-harriram"
            target="_blank"
            sx={{ borderColor: "primary.light", color: "primary.light" }}
          >
            Schedule a Call
          </Button>
        </Box>
      </GlassCard>
    </Container>
  )
}

