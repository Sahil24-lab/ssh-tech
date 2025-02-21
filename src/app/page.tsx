import Layout from "@/components/layout/Layout";
import Hero from "@/components/landing-page/hero/Hero";
import OurServices from "@/components/landing-page/our-services/OurServices";
import OurProcess from "@/components/landing-page/our-process/OurProcess";
import ProofOfWork from "@/components/landing-page/proof-of-work/proof-of-work";

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <OurServices></OurServices>
      <OurProcess></OurProcess>
      <ProofOfWork></ProofOfWork>
    </Layout>
  );
}
