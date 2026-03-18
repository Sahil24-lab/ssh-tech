import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../packages/brand-ui/src/**/*.stories.@(ts|tsx)",
    "../src/components/**/*.stories.@(ts|tsx)",
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-links", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
