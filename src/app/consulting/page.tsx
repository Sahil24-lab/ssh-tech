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

export default function Home() {
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
