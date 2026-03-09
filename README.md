# SSH Tech Lander

Marketing site and content hub built with Next.js.

## Architecture

- App Router pages under `src/app`
- API routes under `src/app/api`
- Contentful CMS integration under `src/app/lib/contentful`
- Supabase client and leads endpoint under `src/app/lib/supabaseClient.ts` and `src/app/api/leads/route.ts`
- Shared UI in `src/components`
- App state in `src/contexts`
- Hooks in `src/hooks`
- Theme primitives in `src/theme`
- Utilities in `src/utils`

## Setup

Requirements:

- Node.js (LTS)
- npm

Install:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build and start:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

## Security Tooling

Tools (installed via Homebrew):

- semgrep (code patterns)
- trivy (deps, filesystem, IaC, SBOM)
- gitleaks (secrets)
- owasp-zap (live app scanning)
- nmap (port/service discovery)
- testssl (TLS/SSL checks)
- nikto (web server misconfig checks)
- lynis (host hardening audit)

Install on a new machine:

```bash
brew install semgrep trivy gitleaks nmap testssl nikto lynis
brew install --cask owasp-zap
```

### Pre-commit Hook

This repo uses a local git hooks path at `.githooks`.

On `git commit`, the following checks run and must pass:

- `gitleaks protect --staged --redact`
- `semgrep scan --config p/ci --metrics=off`

If you cloned the repo on a new machine and commits are not being gated, run:

```bash
git config core.hooksPath .githooks
```

### Manual Security Runs

Code + deps (run from repo root):

```bash
npm run security:code
```

Individual scans:

```bash
npm run gitleaks:scan
npm run semgrep:scan
npm run trivy:fs
npm run trivy:config
```

Live app / infra (run against the deployed target):

```bash
testssl.sh yourdomain.com
nmap -sV -Pn yourdomain.com
nikto -h https://yourdomain.com
```

OWASP ZAP:

1. Quick Start scan for a baseline.
2. Manual explore + active scan for deeper checks.

Host hardening (run on the host you control, not on Vercel):

```bash
lynis audit system
```
