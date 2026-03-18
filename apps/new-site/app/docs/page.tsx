import { DocsPageTemplate } from "@ssh/brand-ui";

export default function DocsPage() {
  return (
    <DocsPageTemplate
      title="Brand UI docs"
      description="Usage guidance for themes, tokens, components, and templates."
      sections={[
        {
          heading: "Installation",
          body: "Install @ssh/brand-ui and wrap your app with BrandThemeProvider.",
        },
        {
          heading: "Customization",
          body: "Use documented props and token overrides instead of deep CSS overrides.",
        },
      ]}
    />
  );
}
