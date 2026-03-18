import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@mui/material";
import { SectionShell } from "./SectionShell";

const meta: Meta<typeof SectionShell> = {
  title: "Patterns/SectionShell",
  component: SectionShell,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof SectionShell>;

export const Default: Story = {
  render: () => (
    <SectionShell sectionProps={{ sx: { py: 8 } }}>
      <Typography variant="body1">Shared section wrapper with consistent vertical rhythm.</Typography>
    </SectionShell>
  ),
};
