import type { Meta, StoryObj } from "@storybook/react";
import SearchIcon from "@mui/icons-material/Search";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { ProcessSteps } from "./ProcessSteps";

const meta: Meta<typeof ProcessSteps> = {
  title: "Patterns/ProcessSteps",
  component: ProcessSteps,
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof ProcessSteps>;

export const Default: Story = {
  args: {
    steps: [
      {
        phase: "Phase 1",
        title: "Assess",
        description: "Fixed-fee diagnostic to identify the highest-ROI workflow.",
        icon: <SearchIcon sx={{ fontSize: 56 }} />,
      },
      {
        phase: "Phase 2",
        title: "Build",
        description: "Production build with clear milestones and sign-off criteria.",
        icon: <BuildCircleOutlinedIcon sx={{ fontSize: 56 }} />,
      },
      {
        phase: "Phase 3",
        title: "Operate",
        description: "Monitoring and optimisation to keep gains compounding.",
        icon: <RocketLaunchIcon sx={{ fontSize: 56 }} />,
      },
    ],
  },
};
