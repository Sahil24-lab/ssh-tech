"use client";

import { useRef, useState } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

import Layout from "@/components/layout/Layout";
import FullWidthContainer from "@/components/layout/container/full-width-container";
import ConstrainedContainer from "@/components/layout/container/constrained-container";
import Hero from "@/components/landing/web3-landing/hero/Hero";
import OurServices from "@/components/landing/web3-landing/our-services/OurServices";
import OurProcess from "@/components/landing/web3-landing/our-process/OurProcess";
import ProofOfWork from "@/components/landing/web3-landing/proof-of-work/proof-of-work";
import Testimonials from "@/components/landing/web3-landing/testimonials/Testimonials";
import Pricing from "@/components/landing/web3-landing/pricing/Pricing";
import FAQ from "@/components/landing/web3-landing/faq/FAQ";

export default function Web3Landing() {
  return (
    <Layout>
      {/* Progress Bar below header */}
      <Box
        sx={{
          position: "fixed",
          top: 64,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      ></Box>

      <Box id="hero" sx={{ mb: 14 }}>
        <FullWidthContainer>
          <Hero />
        </FullWidthContainer>
      </Box>

      <Box id="services" sx={{ mb: 14 }}>
        <ConstrainedContainer>
          <OurServices />
        </ConstrainedContainer>
      </Box>

      <Box id="proof" sx={{ mb: 14 }}>
        <FullWidthContainer>
          <ProofOfWork />
        </FullWidthContainer>
      </Box>

      <Box id="process" sx={{ mb: 14 }}>
        <ConstrainedContainer>
          <OurProcess />
        </ConstrainedContainer>
      </Box>

      <Box id="pricing" sx={{ mb: 14 }}>
        <ConstrainedContainer>
          <Pricing />
        </ConstrainedContainer>
      </Box>

      <Box id="testimonials" sx={{ mb: 14 }}>
        <ConstrainedContainer>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            align="center"
            sx={{
              mb: 4,
              fontWeight: "bold",
              letterSpacing: "0.5px",
              color: "#FFFFFF",
            }}
          >
            Trusted by Experts
          </Typography>
          <Testimonials />
        </ConstrainedContainer>
      </Box>

      <Box id="faq">
        <ConstrainedContainer>
          <FAQ />
        </ConstrainedContainer>
      </Box>
    </Layout>
  );
}
