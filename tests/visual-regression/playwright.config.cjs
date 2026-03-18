const path = require("node:path");
const { defineConfig, devices } = require("@playwright/test");

const staticDir = path.resolve(__dirname, "../../storybook-static");

module.exports = defineConfig({
  testDir: __dirname,
  timeout: 60_000,
  retries: 0,
  snapshotPathTemplate: "{testDir}/{testFilePath}-snapshots/{arg}{ext}",
  use: {
    baseURL: "http://127.0.0.1:6008",
    trace: "off",
  },
  webServer: {
    command: `python3 -m http.server 6008 --bind 127.0.0.1 --directory ${staticDir}`,
    url: "http://127.0.0.1:6008/iframe.html",
    reuseExistingServer: false,
    stdout: "pipe",
    stderr: "pipe",
    timeout: 120_000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
