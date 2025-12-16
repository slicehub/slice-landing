# Repository Guidelines

## Project Structure & Module Organization
- Next.js App Router lives in `app/` (`layout.tsx`, `page.tsx`) with global styles in `app/globals.css` (Tailwind v4 + `tw-animate-css`). `styles/globals.css` mirrors tokens; keep one source of truth if you adjust design tokens.
- Shared React components sit in `components/` (`components/ui` for primitives like `Button`, `Card`; `theme-provider.tsx` for theming). Utilities live in `lib/utils.ts`.
- Static assets are served from `public/`; configuration is in root (`next.config.mjs`, `tsconfig.json`, `components.json`, PostCSS/Tailwind configs). Keep new assets optimized and named descriptively (e.g., `public/wallet-dashboard.png`).

## Build, Test, and Development Commands
- Install deps with `pnpm install` (pnpm is preferred; lockfile is `pnpm-lock.yaml`).
- Local dev server: `pnpm dev` (Next.js with hot reload).
- Production build: `pnpm build`; serve locally via `pnpm start`.
- Linting: `pnpm lint` (ESLint over the entire repo).

## Coding Style & Naming Conventions
- TypeScript + React functional components; default to server components unless client hooks are needed (`"use client"` at top when required).
- Use Tailwind utility classes and the design tokens defined in `app/globals.css`; avoid hard-coding colors that bypass the CSS vars.
- File naming: components and React files in PascalCase, helpers/utilities in camelCase. Keep indentation at 2 spaces and prefer concise, typed props/exports.
- Reuse `cn` from `lib/utils.ts` for className composition; keep components small and composable.

## Testing Guidelines
- No automated test suite exists yet; at minimum run `pnpm lint` before pushing.
- When adding tests, colocate them with the feature (e.g., `component.test.tsx`) and favor React Testing Library for UI behavior. Aim to cover props branching and accessibility behaviors.

## Commit & Pull Request Guidelines
- Git history is light and mixed (e.g., `chore: …`); prefer Conventional Commit prefixes (`feat:`, `fix:`, `chore:`) with short, imperative summaries (~72 chars).
- PRs should include: purpose/issue link, summary of changes, screenshots or gifs for UI updates, and notes on breaking changes or migrations. If touching UX, include mobile + desktop screenshots. Mention `pnpm lint`/`pnpm build` results.

## Security & Configuration
- Keep secrets out of the repo; use environment variables for any future API keys and document required vars in the PR description.
- The app targets modern Next.js (v16); use Node 18+ locally to match runtime expectations.
