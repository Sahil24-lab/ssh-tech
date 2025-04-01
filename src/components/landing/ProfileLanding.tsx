import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Link from "next/link";
import Linkedin from "@mui/icons-material/LinkedIn";
import Github from "@mui/icons-material/GitHub";
import Mail from "@mui/icons-material/Email";
import ExternalLink from "@mui/icons-material/OpenInNew"; // Equivalent of ExternalLink
import Star from "@mui/icons-material/Star";

import Testimonials from "../landing-page/testimonials/Testimonials";
import GlassCard from "../card/glass-card/GlassCard";
import { Chip } from "@mui/material";

export default function ProfileLanding() {
  // Added missing state for testimonials
  const [expandedTestimonials, setExpandedTestimonials] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleTestimonial = (id: string) => {
    setExpandedTestimonials((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 12 }}>
        {/* Hero Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            mb: 12,
            gap: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Sahil Harriram
            </Typography>
            <Typography variant="h5" gutterBottom>
              Blockchain Developer & Engineering Leader
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Button
                variant="outlined"
                startIcon={<Linkedin style={{ fontSize: 16 }} />}
                component="a"
                href="https://linkedin.com"
                target="_blank"
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                startIcon={<Mail style={{ fontSize: 16 }} />}
                component="a"
                href="mailto:sahil.harriram@gmail.com"
              >
                Email
              </Button>
              <Button
                variant="outlined"
                startIcon={<Github style={{ fontSize: 16 }} />}
                component="a"
                href="https://github.com"
                target="_blank"
              >
                GitHub
              </Button>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              <Chip label="Project Management" color="primary" />
              <Chip label="Blockchain" color="primary" />
              <Chip label="TypeScript" color="primary" />
              <Chip label="Next.js" color="primary" />
              <Chip label="Solidity" color="primary" />
              <Chip label="React" color="primary" />
              <Chip label="AWS" color="primary" />
              <Chip label="C++" color="primary" />
            </Box>
          </Box>
          <Box>
            <Avatar
              sx={{
                width: 160,
                height: 160,
                border: "4px solid",
                borderColor: "primary.main",
                fontSize: 48,
              }}
            >
              SH
            </Avatar>
          </Box>
        </Box>

        {/* Work Experience Section */}
        <Box component="section" sx={{ mb: 10 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ borderBottom: 1, borderColor: "divider", pb: 1 }}
          >
            Work Experience
          </Typography>
          <Box sx={{ mt: 2 }}>
            <GlassCard sx={{ mb: 3, p: 2 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="h5">Sahil Harriram Tech</Typography>
                <Typography variant="body2">08/2019 – present</Typography>
              </Box>
              <Typography variant="subtitle1" gutterBottom>
                Freelance/Contractor (Blockchain & Robotics)
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <li>
                  <Typography variant="body2">
                    Built risk dashboard + landing/blog for Money Market
                    Protocols [Framer, Next.JS, eCharts & MaterialUI]
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Worked with a DeFi protocol to build a frontend SDK to
                    interact with proxy contracts that provide an omnichain
                    stable asset backed by wsETH.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Worked with various DeFi Protocols: building API's and
                    interfaces for DefiLlama & Coin Market Cap
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Won the GM Vietnam Avalanche stream Hackathon $3000,
                    building a decentralised supply chain management tool
                    BlocTrace, using Next.JS & Solidity.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Reverse-engineered primary computers on a 15 Tonne Volvo
                    Loader & built a circuit to mimic sensor signals. This
                    pivotal project led to a multi-million-dollar contract for
                    large-scale vehicle electrification.
                  </Typography>
                </li>
              </Box>
            </GlassCard>

            <GlassCard sx={{ mb: 3, p: 2 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="h5">Buzzkill Studio</Typography>
                <Typography variant="body2">11/2023 – present</Typography>
              </Box>
              <Typography variant="subtitle1" gutterBottom>
                Co-Founder (Blockchain GameFi)
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <li>
                  <Typography variant="body2">
                    Co-founder for Buzzkill, a DeFi/Strategy based game built on
                    Viction using Next.JS, Rainbowkit, wagmi, viem, SIWE/Next
                    Auth + Supabase for Custom auth. Designed FE using Figma.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Received $80,000 for the Viction Hackathon & grant.
                  </Typography>
                </li>
              </Box>
            </GlassCard>

            <GlassCard sx={{ mb: 3, p: 2 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="h5">PlayChip Foundation</Typography>
                <Typography variant="body2">03/2022-03/2023</Typography>
              </Box>
              <Typography variant="subtitle1" gutterBottom>
                Technical Project Lead
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <li>
                  <Typography variant="body2">
                    Collaborated with Managing Director & Head of Product to
                    design & implement new monetisation models, resulting in a
                    10x daily active user growth and transitioning most users
                    from free play to paid.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Spearheaded the development of 3 blockchain games,
                    increasing user retention rate by 20%.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Enhanced user engagement by 400% during an event, through
                    React and AWS upgrades & collaborated on landing page design
                    and deployment to support marketing campaigns.
                  </Typography>
                </li>
              </Box>
            </GlassCard>

            <GlassCard sx={{ mb: 3, p: 2 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="h5">Body Mind Life Online</Typography>
                <Typography variant="body2">08/2021-02/2022</Typography>
              </Box>
              <Typography variant="subtitle1" gutterBottom>
                Head of Engineering | Executive Team
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <li>
                  <Typography variant="body2">
                    Lead a team of 12 internal and offshore developers across a
                    range of products including multiple customer facing and
                    internal web applications (GO BE & React FE) and native
                    Android, iOS applications.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Collaborated with executive team to streamline core business
                    priorities and translate into a comprehensive product
                    roadmap, resulting in a 25% improvement in development team
                    output.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Implemented Agile processes to execute roadmap and
                    manage/mentor the engineering team which led to the
                    deployment of 3 major platform upgrades over the course of 4
                    months.
                  </Typography>
                </li>
              </Box>
            </GlassCard>

            <GlassCard sx={{ mb: 3, p: 2 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="h5">3ME Technology</Typography>
                <Typography variant="body2">04/2020 - 07/2021</Typography>
              </Box>
              <Typography variant="subtitle1" gutterBottom>
                Head of Mobility | Lead Embedded Software Engineer
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <li>
                  <Typography variant="body2">
                    Headed software development (Embedded C++) for company's
                    flagship Battery Management System for Heavy Vehicles in
                    Mining and Defence Industry which led to &gt;$4M in sales.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Designed test procedures &amp; built tools to optimise build
                    time and scale production, reducing production time of
                    batteries from 2 months to 3 days.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Directed PCB technicians and engineers to redesign
                    electrical system for larger scale production resulting in
                    the company raising $20M to scale and grow Battery
                    production for EV's and retrofits.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Supported team growth by 4x by interviewing candidates for
                    technical roles &amp; managed staff.
                  </Typography>
                </li>
              </Box>
            </GlassCard>

            <GlassCard sx={{ mb: 3, p: 2 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="h5">Elite Robotics</Typography>
                <Typography variant="body2">06/2016-04/2020</Typography>
              </Box>
              <Typography variant="subtitle1" gutterBottom>
                Co-Founder | CEO
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <li>
                  <Typography variant="body2">
                    Oversaw with executives &amp; advisors to outline business,
                    marketing, engineering strategies within investment
                    documentation and led investor negotiations for AU$750,000
                    investment/partnership deal.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2">
                    Managed engineering team to develop an autonomous vehicle
                    platform (embedded C++, MATLAB, electrical and mechanical
                    design).
                  </Typography>
                </li>
              </Box>
            </GlassCard>
          </Box>
        </Box>

        {/* Education Section */}
        <Box component="section" sx={{ mb: 10 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ borderBottom: 1, borderColor: "divider", pb: 1 }}
          >
            Education
          </Typography>
          <Box sx={{ mt: 2 }}>
            <GlassCard sx={{ mb: 3, p: 2 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="h5">
                  University of Newcastle, Australia
                </Typography>
                <Typography variant="body2">06/2016</Typography>
              </Box>
              <Typography variant="subtitle1" gutterBottom>
                BEng. (Mechatronics)(Honours)
              </Typography>
              <Typography variant="body2">
                Awarded $2000 scholarship for an Exchange Program to Karlsruher
                Institut für Technologie, Germany
              </Typography>
            </GlassCard>

            <GlassCard sx={{ mb: 3, p: 2 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="h5">
                  Cheung Kong Graduate School of Business, China
                </Typography>
                <Typography variant="body2">04/2018</Typography>
              </Box>
              <Typography variant="subtitle1" gutterBottom>
                China Start Program
              </Typography>
              <Typography variant="body2">
                Secured $8500 Scholarship for the China Start Program. Pitched
                business to audience &gt;500,000.
              </Typography>
            </GlassCard>
          </Box>
        </Box>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Projects Section */}
        <Box component="section" sx={{ mb: 10 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ borderBottom: 1, borderColor: "divider", pb: 1 }}
          >
            Featured Projects
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 2,
            }}
          >
            <GlassCard sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                BlocTrace - Supply Chain Management
              </Typography>
              <Typography variant="body2" gutterBottom>
                A decentralized supply chain management tool built on Avalanche
                blockchain that won the GM Vietnam Hackathon.
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
                <Badge badgeContent="" color="secondary">
                  Next.js
                </Badge>
                <Badge badgeContent="" color="secondary">
                  Solidity
                </Badge>
                <Badge badgeContent="" color="secondary">
                  Avalanche
                </Badge>
              </Box>
              <Button
                variant="contained"
                endIcon={<ExternalLink style={{ fontSize: 16 }} />}
                component={Link}
                href="/tools-resources"
              >
                View Details
              </Button>
            </GlassCard>

            <GlassCard sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                Buzzkill - GameFi Project
              </Typography>
              <Typography variant="body2" gutterBottom>
                A DeFi/Strategy based game built on Viction with custom
                authentication and modern web technologies.
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
                <Badge badgeContent="" color="secondary">
                  Next.js
                </Badge>
                <Badge badgeContent="" color="secondary">
                  Rainbowkit
                </Badge>
                <Badge badgeContent="" color="secondary">
                  Wagmi
                </Badge>
                <Badge badgeContent="" color="secondary">
                  Supabase
                </Badge>
              </Box>
              <Button
                variant="contained"
                endIcon={<ExternalLink style={{ fontSize: 16 }} />}
                component={Link}
                href="/blogs"
              >
                Read Case Study
              </Button>
            </GlassCard>
          </Box>
        </Box>

        {/* Call to Action */}
        <Box
          component="section"
          sx={{
            px: 10,
            py: 10,
            backgroundColor: "background.paper",
            textAlign: "center",
            borderRadius: "12px",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Let's Work Together
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, maxWidth: 600, mx: "auto" }}>
            Looking for expertise in blockchain development, technical
            leadership, or product strategy? I'm available for freelance
            projects and consulting.
          </Typography>
          <Button variant="contained">Contact Me</Button>
        </Box>
      </Container>
    </Layout>
  );
}
