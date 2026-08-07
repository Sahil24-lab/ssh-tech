import { DocsPageTemplate } from "@ssh/brand-ui";

export default function ProofOfWorkPage() {
  return (
    <DocsPageTemplate
      title="Proof of work"
      description="The system is judged by what can be verified in a consuming product, not by how complete a component catalogue looks."
      sections={[
        {
          heading: "Public theme contract",
          body: "Palette extensions, layout tokens, and breakpoint types are exported through the package boundary and compiled in the consumer app.",
        },
        {
          heading: "Accessible interaction",
          body: "Primary controls have stable names, keyboard focus, usable target sizes, and an explicit reduced-motion path.",
        },
        {
          heading: "Connected journeys",
          body: "Pricing, proof, documentation, contact, and article actions resolve to real destinations with semantic page structure.",
        },
      ]}
    />
  );
}
