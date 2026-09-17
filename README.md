# Generic Drug

Frontend foundation for Generic Drug. Phase 1 is frontend only; backend API and database integration will follow.

## Stack

React, TypeScript, Vite, Tailwind CSS, React Router, TanStack Query, Swiper, and Lucide React.

## Run locally

Requires Node.js and npm.

```bash
npm install
cp .env.example .env
npm run dev
```

On Windows PowerShell, use `Copy-Item .env.example .env` instead of `cp` if needed. If PowerShell blocks `npm.ps1`, run the same commands with `npm.cmd`. The API URL may remain blank during Phase 1.

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

## Structure

- `src/app`: application providers and centralized routing.
- `src/pages` and `src/layouts`: route pages and shared layouts.
- `src/components/ui` and `src/components/shared`: generic and project-level reusable components.
- `src/features`: domain-specific frontend code.
- `src/services/api` and `src/services/endpoints`: API configuration/client and future endpoint functions.
- `src/mocks`: temporary frontend data while the API is unavailable.
- `src/assets`, `src/styles`, `src/hooks`, `src/types`, `src/constants`, and `src/utils`: supporting code and assets.

The frontend will call a backend API, which will own database access. Set `VITE_API_BASE_URL` in a local `.env` file when the API is available. No API URL belongs in a component.

The root route currently contains only a minimal setup check. The Figma design will define the UI in a later phase.
