#!/usr/bin/env node
/**
 * Visual preview script for the screenshot-in-the-loop workflow.
 *
 * Usage:
 *   node scripts/preview.mjs                                    # full page at localhost:3000
 *   node scripts/preview.mjs story <story-id>                   # Storybook story
 *   node scripts/preview.mjs page <url>                         # arbitrary URL
 *   node scripts/preview.mjs story <story-id> <out.png>         # custom output path
 *   node scripts/preview.mjs page <url> --mobile                # 375px viewport
 *
 * Examples:
 *   node scripts/preview.mjs story components-brandbutton--primary
 *   node scripts/preview.mjs page http://localhost:3000/about
 *   node scripts/preview.mjs page http://localhost:3000 --mobile
 */

import { chromium } from '@playwright/test';
import { resolve } from 'path';

const args = process.argv.slice(2);
const mobile = args.includes('--mobile');
const filteredArgs = args.filter(a => a !== '--mobile');

const [mode = 'page', target = 'http://localhost:3000', outArg] = filteredArgs;

const output = outArg ? resolve(outArg) : '/tmp/preview.png';

const STORYBOOK_BASE = 'http://localhost:6006/iframe.html';

const ERROR_PATTERNS = [
  'ECONNREFUSED',
  "This page isn't working",
  'This site can\u2019t be reached',
  'ERR_CONNECTION_REFUSED',
  'Connect ECONNREFUSED',
  'Application error',
  'Internal Server Error',
];

async function shoot(url, outputPath) {
  const viewport = mobile ? { width: 375, height: 812 } : { width: 1280, height: 720 };
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport });

  // Storybook keeps a HMR websocket open so 'networkidle' never fires.
  // Use 'load' + a fixed settle delay instead.
  const waitUntil = url.includes('localhost:6006') ? 'load' : 'networkidle';
  try {
    await page.goto(url, { waitUntil, timeout: 45000 });
  } catch (err) {
    await browser.close();
    if (err.message.includes('ERR_CONNECTION_REFUSED') || err.message.includes('ECONNREFUSED')) {
      console.error(`\u26a0\ufe0f  Dev server not running — connection refused at ${url}`);
      console.error(`    Start the server first (npm run dev / npm run storybook), then retry.`);
    } else {
      console.error(`\u26a0\ufe0f  Navigation failed: ${err.message}`);
    }
    process.exit(1);
  }

  // Detect browser-rendered error pages
  const body = await page.textContent('body').catch(() => '');
  const hit = ERROR_PATTERNS.find(p => body.includes(p));
  if (hit) {
    await browser.close();
    console.error(`\u26a0\ufe0f  Page loaded but shows an error (matched: "${hit}")`);
    console.error(`    Check that the server is up and the route is valid, then retry.`);
    process.exit(1);
  }

  // For Storybook iframes, wait until the story root is populated
  if (url.includes('localhost:6006')) {
    await page.waitForSelector('#storybook-root > *', { timeout: 15000 }).catch(() => {});
  }
  await page.waitForTimeout(1200); // let animations settle
  await page.screenshot({ path: outputPath, fullPage: true });
  await browser.close();

  const label = mobile ? ' [mobile 375px]' : ' [desktop 1280px]';
  console.log(`Screenshot saved${label} \u2192 ${outputPath}`);
  console.log(`\nNEXT STEP: Read the screenshot file at ${outputPath} to visually assess the result.`);
}

if (mode === 'story') {
  const storyId = target;
  const url = `${STORYBOOK_BASE}?id=${storyId}&viewMode=story`;
  await shoot(url, output);
} else {
  // mode === 'page' or bare URL passed as first arg
  const url = mode.startsWith('http') ? mode : target;
  await shoot(url, output);
}
