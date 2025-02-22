import Layout from "@/components/layout/Layout";
import Hero from "@/components/landing-page/hero/Hero";
import OurServices from "@/components/landing-page/our-services/OurServices";
import OurProcess from "@/components/landing-page/our-process/OurProcess";
import ProofOfWork from "@/components/landing-page/proof-of-work/proof-of-work";
import Testimonials from "@/components/landing-page/testimonials/Testimonials";
import Pricing from "@/components/landing-page/pricing/Pricing";
import FAQ from "@/components/landing-page/faq/FAQ";

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <OurServices></OurServices>
      <OurProcess></OurProcess>
      <ProofOfWork></ProofOfWork>
      <Testimonials></Testimonials>
      <Pricing></Pricing>
      <FAQ></FAQ>
    </Layout>
  );
}
