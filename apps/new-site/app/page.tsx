import {
  BlogCard,
  CTASection,
  FeatureSection,
  FooterSection,
  HeroSection,
  PricingSection,
  ProofSection,
} from "@ssh/brand-ui";
import { Box, Container } from "@mui/material";

export default function HomePage() {
  return (
    <Box>
      <HeroSection
        label="// product engineering"
        title="Build faster with reusable templates"
        subtitle="This site consumes @ssh/brand-ui templates without app-specific routing or legacy complexity."
        primaryCta={{ label: "Start project", href: "#pricing" }}
        secondaryCta={{ label: "Read docs", href: "/docs" }}
      />

      <FeatureSection
        heading="Template-first sections"
        subheading="Reusable blocks for landing pages, product marketing, and docs websites."
        items={[
          {
            title: "Theme tokens",
            description: "Palette, typography, spacing, and motion exposed by package.",
          },
          {
            title: "Consistent states",
            description: "Buttons, chips, tags, and links keep one state model across projects.",
          },
          {
            title: "Composable sections",
            description: "Hero, features, proof, pricing, CTA, and footer with content props.",
          },
        ]}
      />

      <ProofSection
        heading="Proof"
        quotes={[
          {
            quote: "The reusable package cut setup time for our second project by over 60%.",
            author: "Product Lead",
          },
          {
            quote: "We can now ship style changes once and update apps via package versions.",
            author: "Engineering Manager",
          },
        ]}
      />

      <PricingSection
        id="pricing"
        heading="Simple package tiers"
        plans={[
          {
            name: "Launch",
            price: "$2.5k",
            description: "Foundation theme and first templates.",
            features: ["Tokens", "Buttons/Chips", "Hero/CTA/Footer"],
          },
          {
            name: "Growth",
            price: "$5k",
            description: "Landing + blog/docs templates.",
            features: ["Everything in Launch", "Pricing/Proof sections", "Docs layouts"],
            highlighted: true,
          },
          {
            name: "Scale",
            price: "$8k",
            description: "Release automation and hardening.",
            features: ["Versioning workflow", "Visual regression", "Consumer integration checks"],
          },
        ]}
      />

      <CTASection
        heading="Use one UI system across repos"
        body="Consume templates from @ssh/brand-ui and upgrade with semver releases."
        cta={{ label: "See blog layout", href: "/blog" }}
      />

      <Container sx={{ py: 8 }}>
        <BlogCard
          title="How to migrate to shared UI packages"
          description="A practical path from one-off frontend repos to reusable component systems."
          href="/blog"
          tag="Guide"
        />
      </Container>

      <FooterSection
        leftText="© 2026 Your Company"
        links={[
          { label: "Docs", href: "/docs" },
          { label: "Blog", href: "/blog" },
        ]}
      />
    </Box>
  );
}
