import Layout from "@/components/layout/Layout";
import FullWidthContainer from "@/components/layout/contrainer/full-width-container";
import ConstrainedContainer from "@/components/layout/contrainer/constrained-container";
import Hero from "@/components/landing/web3-landing/hero/Hero";
import OurServices from "@/components/landing/web3-landing/our-services/OurServices";
import OurProcess from "@/components/landing/web3-landing/our-process/OurProcess";
import ProofOfWork from "@/components/landing/web3-landing/proof-of-work/proof-of-work";
import Testimonials from "@/components/landing/web3-landing/testimonials/Testimonials";
import Pricing from "@/components/landing/web3-landing/pricing/Pricing";
import FAQ from "@/components/landing/web3-landing/faq/FAQ";
import { Typography } from "@mui/material";

export default function Web3Landing() {
  return (
    <Layout>
      <FullWidthContainer>
        <section id="hero">
          <Hero />
        </section>
      </FullWidthContainer>

      <ConstrainedContainer>
        <section id="services">
          <OurServices />
        </section>
      </ConstrainedContainer>
      <FullWidthContainer>
        <section id="proof">
          <ProofOfWork />
        </section>
      </FullWidthContainer>

      <ConstrainedContainer>
        <section id="process">
          <OurProcess />
        </section>

        <section id="testimonials">
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            align="center"
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              letterSpacing: "0.5px",
              color: "#FFFFFF",
              mb: 4,
            }}
          >
            Trusted by Experts
          </Typography>

          <Testimonials />
        </section>

        <section id="pricing">
          <Pricing />
        </section>
      </ConstrainedContainer>
      <section id="faq">
        <FAQ />
      </section>
    </Layout>
  );
}
