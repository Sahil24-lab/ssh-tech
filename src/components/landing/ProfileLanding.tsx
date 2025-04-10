"use client";

import { Box, Typography } from "@mui/material";
import Layout from "../layout/Layout";
import ConstrainedContainer from "@/components/layout/container/constrained-container";
import CallToAction from "./profile-landing/CallToAction";
import FullWidthContainer from "../layout/container/full-width-container";
import ForRecruiters from "./profile-landing/ForRecruiters";
import Education from "./profile-landing/Education";
import Testimonials from "./web3-landing/testimonials/Testimonials";
import Projects from "./profile-landing/Projects";
import WorkExperience from "./profile-landing/WorkExperience";
import Hero from "./profile-landing/Hero";
// Skills data with categories

// Testimonials data
// const testimonials = [
//   {
//     id: "1",
//     name: "Jane Smith",
//     position: "CTO at TechCorp",
//     text: "Sahil's expertise in blockchain technology and leadership skills were instrumental in the success of our project. His ability to translate complex technical concepts into actionable business strategies is remarkable.",
//     avatar: "/placeholder.svg?height=60&width=60",
//   },
//   {
//     id: "2",
//     name: "Michael Johnson",
//     position: "Product Manager at DeFi Protocol",
//     text: "Working with Sahil was a game-changer for our DeFi platform. His deep understanding of both the technical and business aspects of blockchain helped us navigate complex challenges and deliver a superior product.",
//     avatar: "/placeholder.svg?height=60&width=60",
//   },
// ];

export default function ProfilePage() {
  return (
    <Layout>
      <ConstrainedContainer>
        {/* Hero Section with Resume Download */}
        <FullWidthContainer>
          <section id="hero">
            <Hero />
          </section>
        </FullWidthContainer>
        {/* Key Skills Section - Organized by Category */}
        {/* Projects Section */}
        <FullWidthContainer>
          <section id="projects">
            <Projects />
          </section>
        </FullWidthContainer>

        {/* For Recruiters Section */}
        <FullWidthContainer>
          <section id="for-recruiters">
            <ForRecruiters />
          </section>
        </FullWidthContainer>

        {/* Testimonials Section */}
        <FullWidthContainer>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // key: aligns text/underline to left
            }}
          >
            <Box
              sx={{
                display: "inline-flex", // shrink-to-fit
                flexDirection: "column",
                borderBottom: "2px solid",
                borderColor: "primary.main",
                pb: 1,
                mb: 2,
              }}
            >
              <Typography
                variant="h3"
                component="span" // make text inline-friendly
                sx={{ whiteSpace: "nowrap" }} // optional: keeps text on one line
              >
                Testimonials
              </Typography>
            </Box>

            <Typography variant="body1" paragraph>
              What colleagues and clients say about working with me.
            </Typography>

            <section id="testimonials">
              <Testimonials />
            </section>
          </Box>
        </FullWidthContainer>

        {/* Work Experience Section */}
        <FullWidthContainer>
          <section id="work-experience">
            <WorkExperience />
          </section>
        </FullWidthContainer>

        {/* <Box component="section" sx={{ mb: 6 }}>
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

https://www.linkedin.com/company/sahil-harriram-tech/
 
https://medium.com/@sahilharriram
https://www.youtube.com/@ssh_tech

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
                  <Typography
                    variant="body1"
                    sx={{ fontStyle: "italic", mb: 2 }}
                  >
                    "{testimonial.text}"
                  </Typography>
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </Box> */}

        {/* Education Section */}
        <FullWidthContainer>
          <section id="education">
            <Education />
          </section>
        </FullWidthContainer>

        {/* Call to Action */}
        <FullWidthContainer>
          <section id="call-to-action">
            <CallToAction />
          </section>
        </FullWidthContainer>
      </ConstrainedContainer>
    </Layout>
  );
}
