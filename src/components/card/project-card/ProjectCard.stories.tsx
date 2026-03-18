import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { withLegacyTheme } from "@/components/storybook/withLegacyTheme";

const meta: Meta<typeof ProjectCard> = {
  title: "Legacy/ProjectCard",
  component: ProjectCard,
  decorators: [withLegacyTheme],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Status: `keep legacy`. Routing is now prop-driven and Storybook-safe, but the card still reflects profile-site content structure.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  render: () => (
    <Box sx={{ maxWidth: 720 }}>
      <ProjectCard
        title="SSH Echo"
        subtitle="AI Workflow Product"
        description="End-to-end product design and engineering delivery for a workflow automation platform."
        highlights={["$120k ARR", "2x Conversion", "99.9% Uptime"]}
        tags={["Next.js", "TypeScript", "MUI", "Vercel"]}
        caseStudyHref="/proof-of-work/ssh-echo"
        secondaryLink={{ label: "Live Demo", href: "https://ssh-tech.xyz" }}
      />
    </Box>
  ),
};
