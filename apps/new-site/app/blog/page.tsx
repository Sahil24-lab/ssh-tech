import { BlogListTemplate } from "@ssh/brand-ui";

export default function BlogPage() {
  return (
    <BlogListTemplate
      title="Engineering blog"
      description="Long-form writeups about reusable frontend systems, standards, and delivery."
      posts={[
        {
          title: "Design tokens that survive scale",
          excerpt: "Token contracts that support multiple products without drift.",
          href: "/blog/design-tokens",
          tag: "Design System",
        },
        {
          title: "Template-first website delivery",
          excerpt: "Why section templates are faster and safer than ad-hoc page builds.",
          href: "/blog/template-first",
          tag: "Frontend",
        },
      ]}
    />
  );
}
