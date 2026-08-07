import {
  BlogCard,
  CTASection,
  FeatureSection,
  FooterSection,
  HeroSection,
  PricingSection,
  ProofSection,
} from "@ssh/brand-ui";
import { Box, Container, Typography } from "@mui/material";

const systemLayers = [
  { label: "Tokens", detail: "Colour, type, spacing" },
  { label: "Primitives", detail: "Accessible interaction" },
  { label: "Patterns", detail: "Reusable product logic" },
  { label: "Templates", detail: "Page-ready structure" },
];

export default function HomePage() {
  return (
    <>
    <Box component="main">
      <HeroSection
        label="Product engineering"
        title="One interface system. Every product surface."
        subtitle="SSH Tech turns validated interaction patterns into accessible, responsive building blocks that can move across products without visual or behavioural drift."
        primaryCta={{ label: "Start project", href: "#pricing" }}
        secondaryCta={{ label: "Read docs", href: "/docs" }}
      />

      <Box component="section" aria-labelledby="system-map-title" sx={{ py: { xs: 8, md: 10 } }}>
        <Container>
          <Box
            component="figure"
            sx={{ m: 0, py: { xs: 4, md: 6 }, borderBlock: "1px solid", borderColor: "divider" }}
          >
            <Typography id="system-map-title" component="h2" variant="h2" sx={{ mb: 1 }}>
              A visible path from decisions to delivery
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 720, mb: 5 }}>
              Each layer narrows interpretation, so teams spend less time reconciling UI and more time shipping the product.
            </Typography>
            <Box
              component="ol"
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
                gap: { xs: 1, md: 0 },
                p: 0,
                m: 0,
                listStyle: "none",
              }}
            >
              {systemLayers.map((layer, index) => (
                <Box
                  component="li"
                  key={layer.label}
                  sx={{
                    position: "relative",
                    p: { xs: 2.5, md: 3 },
                    borderTop: index === 0 ? "2px solid" : "1px solid",
                    borderColor: index === 0 ? "primary.main" : "secondary.dark",
                    backgroundColor: index % 2 === 0 ? "action.hover" : "transparent",
                  }}
                >
                  <Typography variant="caption" sx={{ color: "primary.main" }}>0{index + 1}</Typography>
                  <Typography component="h3" variant="h5" sx={{ mt: 1 }}>{layer.label}</Typography>
                  <Typography variant="body2" sx={{ mt: 0.5, color: "text.secondary" }}>{layer.detail}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <FeatureSection
        heading="A contract teams can actually use"
        subheading="The system carries the decisions that are expensive to rediscover in every repository."
        items={[
          {
            title: "One theme contract",
            description: "Palette, typography, spacing, breakpoints, and semantic states travel through a single public theme entrypoint.",
          },
          {
            title: "Accessible interaction",
            description: "Controls retain clear names, visible focus, usable touch targets, and reduced-motion behaviour by default.",
          },
          {
            title: "Release evidence",
            description: "Consumer typechecks, linting, route coverage, and change-impact analysis turn polish into something verifiable.",
          },
        ]}
      />

      <ProofSection
        heading="Checks built into the delivery path"
        quotes={[
          {
            quote: "Theme augmentation is exposed through the package boundary and verified in the consumer application.",
            author: "Type contract",
          },
          {
            quote: "Every example action resolves to a real page, section, or contact pathway instead of a placeholder target.",
            author: "Navigation contract",
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
            href: "/contact?plan=launch",
          },
          {
            name: "Growth",
            price: "$5k",
            description: "Landing + blog/docs templates.",
            features: ["Everything in Launch", "Pricing/Proof sections", "Docs layouts"],
            highlighted: true,
            href: "/contact?plan=growth",
          },
          {
            name: "Scale",
            price: "$8k",
            description: "Release automation and hardening.",
            features: ["Versioning workflow", "Visual regression", "Consumer integration checks"],
            href: "/contact?plan=scale",
          },
        ]}
      />

      <CTASection
        heading="Make the next interface easier to trust"
        body="Start with the shared contract, then adapt the content and composition to the product—not the other way around."
        cta={{ label: "Start a conversation", href: "/contact" }}
      />

      <Container sx={{ py: 8 }}>
        <BlogCard
          title="How to migrate to shared UI packages"
          description="A practical path from one-off frontend repos to reusable component systems."
          href="/blog"
          tag="Guide"
          publishedDate="2026-08-08"
          readTime={6}
        />
      </Container>
    </Box>
      <FooterSection
        leftText="© 2026 SSH Tech"
        links={[
          { label: "Docs", href: "/docs" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "/contact" },
        ]}
      />
    </>
  );
}
