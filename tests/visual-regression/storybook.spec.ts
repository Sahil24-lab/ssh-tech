import { expect, test } from "@playwright/test";

const stories = [
  "foundations-colors--palette",
  "components-brandbutton--all-variants",
  "components-cardsurface--variants",
  "components-metriccard--default",
  "patterns-proofcardgrid--default",
  "patterns-pricingsummary--default",
];

test.describe("storybook visual baselines", () => {
  for (const storyId of stories) {
    test(storyId, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 1600 });
      await page.goto(`/iframe.html?id=${storyId}`, {
        waitUntil: "domcontentloaded",
      });
      await page.waitForFunction(() => {
        const root = document.querySelector("#storybook-root, #root");
        const hasStory = root && root.children.length > 0;
        const hasError = document.body.textContent?.includes("Couldn't find story matching");
        return Boolean(hasStory || hasError);
      });
      await expect(page.getByText("Couldn't find story matching", { exact: false })).toHaveCount(0);
      await expect(page).toHaveScreenshot(`${storyId}.png`, {
        fullPage: true,
        animations: "disabled",
      });
    });
  }
});
