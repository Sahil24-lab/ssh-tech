"use client";

import { Box } from "@mui/material";

import Layout from "@/components/layout/Layout";
import FullWidthContainer from "@/components/layout/container/full-width-container";
import ConstrainedContainer from "@/components/layout/container/constrained-container";
import AIHero from "./hero/AIHero";
import AIServices from "./services/AIServices";
import AIProofOfWork from "./proof-of-work/AIProofOfWork";
import AIProcess from "./process/AIProcess";
import AIWhyUs from "./why-us/AIWhyUs";
import AITestimonials from "./testimonials/AITestimonials";
import AIFAQ from "./faq/AIFAQ";
import AICTA from "./cta/AICTA";

export default function AILanding() {
  return (
    <Layout flushFooter>
      <Box id="hero" sx={{ mb: 0 }}>
        <FullWidthContainer>
          <AIHero />
        </FullWidthContainer>
      </Box>

      <Box id="services" sx={{ mt: { xs: -2, md: -3 }, mb: 14 }}>
        <ConstrainedContainer>
          <AIServices />
        </ConstrainedContainer>
      </Box>

      <Box id="proof" sx={{ mb: 14 }}>
        <FullWidthContainer>
          <AIProofOfWork />
        </FullWidthContainer>
      </Box>

      <Box id="process" sx={{ mb: 14 }}>
        <ConstrainedContainer>
          <AIProcess />
        </ConstrainedContainer>
      </Box>

      <Box id="pricing" sx={{ mb: 14 }}>
        <FullWidthContainer>
          <AIWhyUs />
        </FullWidthContainer>
      </Box>

      <Box id="testimonials" sx={{ mb: 14 }}>
        <ConstrainedContainer>
          <AITestimonials />
        </ConstrainedContainer>
      </Box>

      <Box id="faq">
        <ConstrainedContainer>
          <AIFAQ />
        </ConstrainedContainer>
      </Box>

      <Box id="cta" sx={{ mt: 14 }}>
        <FullWidthContainer>
          <AICTA />
        </FullWidthContainer>
      </Box>
    </Layout>
  );
}
