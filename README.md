# SSH Tech Lander

Next.js monorepo with:

- `apps/new-site`: the current frontend app
- `packages/brand-ui`: reusable brand theme + components/templates

## Quick Start

Requirements:

- Node.js 22 LTS (recommended)
- npm 10+

Install:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## How It Is Set Up

- Root `package.json` uses npm workspaces for `apps/*` and `packages/*`.
- `npm run dev`, `npm run build`, `npm run start` are routed to `apps/new-site`.
- `apps/new-site` consumes `@ssh/brand-ui` from `packages/brand-ui`.
- Keep app-specific routing/data-fetching in `apps/new-site`.
- Keep reusable UI and tokens in `packages/brand-ui`.

## Runbook

Run app in dev:

```bash
npm run dev
```

Build app:

```bash
npm run build
```

Run production server:

```bash
npm run start
```

Run lint for app + package:

```bash
npm run lint
```

Run Storybook:

```bash
npm run storybook
```

Build Storybook static:

```bash
npm run build-storybook
```

Regenerate visual baselines:

```bash
npm run visual:baseline
```

Run visual regression tests:

```bash
npm run visual:test
```

## CI Visual Regression

- Workflow: `/Users/sahil/Documents/projects/sahil24-lab/ssh-tech-lander/.github/workflows/visual-regression.yml`
- Trigger: pull requests and manual dispatch
- Gate: PR should fail when visual diffs are detected

Recommended branch protection required check name:

- `Visual Regression / visual-regression`

## Repo Structure

- `/Users/sahil/Documents/projects/sahil24-lab/ssh-tech-lander/apps/new-site`
- `/Users/sahil/Documents/projects/sahil24-lab/ssh-tech-lander/packages/brand-ui`
- `/Users/sahil/Documents/projects/sahil24-lab/ssh-tech-lander/.storybook`
- `/Users/sahil/Documents/projects/sahil24-lab/ssh-tech-lander/tests/visual-regression`
- `/Users/sahil/Documents/projects/sahil24-lab/ssh-tech-lander/docs/brand-ui-package.md`

## Security Tooling

Install:

```bash
brew install semgrep trivy gitleaks nmap testssl nikto lynis
brew install --cask owasp-zap
```

Enable local commit hooks:

```bash
git config core.hooksPath .githooks
```

Run code/dependency security scans:

```bash
npm run security:code
```
