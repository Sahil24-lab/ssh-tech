# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog and this project follows Semantic Versioning.

## [Unreleased]

### Added

- Monorepo workspace structure.
- `apps/new-site` workspace for the app.
- `packages/brand-ui` workspace for reusable theme, components, and templates.
- Storybook setup using `@storybook/nextjs` and Storybook 10.
- Visual regression testing with Playwright against Storybook stories.
- CI workflow for visual regression at `.github/workflows/visual-regression.yml` to fail PRs on visual diffs.
- Brand UI package guide at `docs/brand-ui-package.md`.

### Changed

- Root scripts now route primary app lifecycle commands (`dev`, `build`, `start`) through `apps/new-site`.
- Added visual scripts `npm run visual:test` and `npm run visual:baseline`.
- Updated README with monorepo runbook and CI/visual-test instructions.

### Fixed

- Resolved Storybook + Next.js compatibility issues by standardizing on `@storybook/nextjs` and aligned Storybook package versions.
- Stabilized visual snapshot naming for CI portability.
