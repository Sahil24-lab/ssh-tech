import { expect, test } from "@playwright/test";

const stories = [
  "foundations-colors--palette",
  "primitives-box--surface-block",
  "primitives-container--default",
  "primitives-heading--default",
  "primitives-stack--spacing-rhythm",
  "primitives-text--default",
  "components-brandbutton--all-variants",
  "components-cardsurface--variants",
  "components-metriccard--default",
  "patterns-proofcardgrid--default",
  "patterns-pricingsummary--default",
];

const responsivePrimitiveStories = [
  "primitives-box--responsive-composition",
  "primitives-container--narrow-viewport",
  "primitives-heading--wrapping-stress",
  "primitives-stack--wrapping-and-rtl",
  "primitives-text--international-and-long-content",
];

async function waitForStory(page: import("@playwright/test").Page) {
  await page.waitForFunction(() => {
    const root = document.querySelector("#storybook-root, #root");
    const hasStory = root && root.children.length > 0;
    const hasError = document.body.textContent?.includes("Couldn't find story matching");
    return Boolean(hasStory || hasError);
  });
  await expect(page.getByText("Couldn't find story matching", { exact: false })).toHaveCount(0);
}

test.describe("storybook visual baselines", () => {
  for (const storyId of stories) {
    test(storyId, async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 1600 });
      await page.goto(`/iframe.html?id=${storyId}`, {
        waitUntil: "domcontentloaded",
      });
      await waitForStory(page);
      await expect(page).toHaveScreenshot(`${storyId}.png`, {
        fullPage: true,
        animations: "disabled",
      });
    });
  }
});

test.describe("primitive responsive baselines", () => {
  for (const storyId of responsivePrimitiveStories) {
    test(storyId, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(`/iframe.html?id=${storyId}`, {
        waitUntil: "domcontentloaded",
      });
      await waitForStory(page);
      await expect(page).toHaveScreenshot(`${storyId}--mobile.png`, {
        fullPage: true,
        animations: "disabled",
      });
    });
  }
});
