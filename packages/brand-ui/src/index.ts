import "./types/mui";

export { BrandThemeProvider } from "./providers/BrandThemeProvider";
export type { BrandThemeProviderProps } from "./providers/BrandThemeProvider";
export { brandTokens, overlayTokens, surfaceTokens } from "./theme/tokens";
export type { BrandTokens, OverlayTokens, SurfaceTokens } from "./theme/tokens";
export { createBrandTheme } from "./theme/createBrandTheme";
export type { BrandThemeOptions } from "./theme/createBrandTheme";
export {
  fontFamilyTokens,
  motionTokens,
  shapeTokens,
  surfaceTreatmentTokens,
  typographyTokens,
  zIndexTokens,
} from "./theme/foundation";
export type {
  FontFamilyTokens,
  MotionTokens,
  ShapeTokens,
  SurfaceTreatmentTokens,
  TypographyTokens,
  ZIndexTokens,
} from "./theme/foundation";

export {
  layoutTokens,
  containers,
  sectionSpacing,
  contentSpacing,
  contentMaxWidth,
  grid,
} from "./theme/tokens/layout";
export type {
  LayoutTokens,
  ResponsiveScale,
  ContainerVariant,
  SectionSpacingVariant,
  ContentSpacingVariant,
} from "./theme/tokens/layout";
export {
  containerSx,
  sectionSx,
  contentPaddingSx,
  pageSectionSx,
} from "./theme/tokens/layoutHelpers";

export { Container } from "./primitives/Container";
export type { ContainerProps } from "./primitives/Container";

export { BrandButton } from "./components/BrandButton";
export type { BrandButtonProps } from "./components/BrandButton";
export { BrandChip } from "./components/BrandChip";
export { AccordionList } from "./components/AccordionList";
export type {
  AccordionListItem,
  AccordionListProps,
} from "./components/AccordionList";
export { LabelTag } from "./components/LabelTag";
export { BlogCard } from "./components/BlogCard";
export type { BlogCardProps } from "./components/BlogCard";
export { CardSurface } from "./components/CardSurface";
export type { CardSurfaceProps } from "./components/CardSurface";
export { GlassCard } from "./components/GlassCard";
export type { GlassCardProps, GlassCardVariant } from "./components/GlassCard";
export { FeatureImage } from "./components/FeatureImage";
export type { FeatureImageProps } from "./components/FeatureImage";
export { MetricCard } from "./components/MetricCard";
export type { MetricCardProps } from "./components/MetricCard";
export { TestimonialCard } from "./components/TestimonialCard";
export type { TestimonialCardProps } from "./components/TestimonialCard";
export { DecodeText } from "./motion/DecodeText";
export type { DecodeTextProps } from "./motion/DecodeText";
export { useDecodeText } from "./motion/useDecodeText";
export type { UseDecodeTextOptions, UseDecodeTextResult } from "./motion/useDecodeText";

export { SectionShell } from "./patterns/SectionShell";
export type { SectionShellProps } from "./patterns/SectionShell";
export { SectionHeader } from "./patterns/SectionHeader";
export type { SectionHeaderProps } from "./patterns/SectionHeader";
export { FullWidthSection } from "./patterns/FullWidthSection";
export type { FullWidthSectionProps } from "./patterns/FullWidthSection";
export { Header } from "./patterns/Header";
export type { HeaderNavItem, HeaderProps } from "./patterns/Header";
export { ProofCardGrid } from "./patterns/ProofCardGrid";
export { ProcessSteps } from "./patterns/ProcessSteps";
export { FAQList } from "./patterns/FAQList";
export { TestimonialStack } from "./patterns/TestimonialStack";
export { PricingSummary } from "./patterns/PricingSummary";

export { HeroSection } from "./templates/HeroSection";
export type { HeroSectionProps } from "./templates/HeroSection";
export { FeatureSection } from "./templates/FeatureSection";
export { ProofSection } from "./templates/ProofSection";
export { PricingSection } from "./templates/PricingSection";
export { CTASection } from "./templates/CTASection";
export { FooterSection } from "./templates/FooterSection";
export { BlogListTemplate } from "./templates/BlogListTemplate";
export { DocsPageTemplate } from "./templates/DocsPageTemplate";

export type {
  BlogPostPreview,
  DocsSection,
  FAQItem,
  FeatureItem,
  LinkItem,
  MetricItem,
  PricingPlan,
  ProcessStep,
  QuoteItem,
  TestimonialItem,
} from "./types/content";
