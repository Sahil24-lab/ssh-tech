import Layout from "@/components/layout/Layout";
import FullWidthContainer from "@/components/layout/contrainer/full-width-container";
import ConstrainedContainer from "@/components/layout/contrainer/constrained-container";
import Hero from "@/components/landing-page/hero/Hero";
import OurServices from "@/components/landing-page/our-services/OurServices";
import OurProcess from "@/components/landing-page/our-process/OurProcess";
import ProofOfWork from "@/components/landing-page/proof-of-work/proof-of-work";
import Testimonials from "@/components/landing-page/testimonials/Testimonials";
import Pricing from "@/components/landing-page/pricing/Pricing";
import FAQ from "@/components/landing-page/faq/FAQ";

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
        <FullWidthContainer>
          <section id="proof">
            <ProofOfWork />
          </section>
        </FullWidthContainer>
        <section id="process">
          <OurProcess />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
      </ConstrainedContainer>
    </Layout>
  );
}
