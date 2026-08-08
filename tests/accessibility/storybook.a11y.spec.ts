import { expect, test } from "@playwright/test";
import catalog from "../../packages/brand-ui/catalog/component-catalog.json";

const axePath = require.resolve("axe-core/axe.min.js");
const preferredStoryIds = catalog.entries
  .filter((entry) => entry.agent.selection === "preferred")
  .flatMap((entry) => entry.storyIds.slice(0, 1));
const storyIds = [
  "system-agent-component-catalog--overview",
  ...new Set(preferredStoryIds),
];

test.describe("registered Storybook accessibility contracts", () => {
  for (const storyId of storyIds) {
    test(storyId, async ({ page }) => {
      await page.goto(`/iframe.html?id=${storyId}`, { waitUntil: "domcontentloaded" });
      await expect(page.locator("#storybook-root, #root").first()).not.toBeEmpty();
      const hasAxe = await page.evaluate(() => "axe" in window);
      if (!hasAxe) await page.addScriptTag({ path: axePath });

      const violations = await page.evaluate(async () => {
        const axe = (window as typeof window & {
          axe: {
            run: (
              root: Document,
              options: Record<string, unknown>,
            ) => Promise<{
              violations: Array<{
                id: string;
                impact: string | null;
                help: string;
                nodes: Array<{ target: string[]; failureSummary?: string }>;
              }>;
            }>;
          };
        }).axe;

        let result;
        for (let attempt = 0; attempt < 30; attempt += 1) {
          try {
            result = await axe.run(document, {
              runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa"] },
              resultTypes: ["violations"],
            });
            break;
          } catch (error) {
            if (!(error instanceof Error) || !error.message.includes("already running")) throw error;
            await new Promise((resolve) => window.setTimeout(resolve, 100));
          }
        }

        if (!result) throw new Error("axe did not become available after Storybook's audit");

        return result.violations
          .filter((violation) => violation.impact === "critical" || violation.impact === "serious")
          .map((violation) => ({
            id: violation.id,
            impact: violation.impact,
            help: violation.help,
            nodes: violation.nodes.map((node) => ({
              target: node.target,
              failureSummary: node.failureSummary,
            })),
          }));
      });

      expect(violations, `${storyId} has serious or critical axe violations`).toEqual([]);
    });
  }
});
