import { addons } from "storybook/manager-api";
import { managerTheme } from "./managerTheme";

addons.setConfig({
  theme: managerTheme,
});
