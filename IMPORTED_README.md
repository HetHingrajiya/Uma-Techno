# Uma-Techno import

The uploaded `Uma-Techno-main` repo was cloned verbatim into this project.
Because this project runs on **TanStack Start** (SSR, file-based routing,
Cloudflare Worker runtime) while the source repo is a client-only Vite SPA
with an Express/Prisma backend, the copied files are stored as reference
only. Nothing is wired into the live app yet.

## Where things landed

- `src/_legacy/app/**` — Next-style `app/(site)/...` pages, `[slug]` routes, and admin pages.
- `src/_legacy/components/**` — `layout`, `ui`, `admin`, `auth`, `utils`, `ThemeProvider`.
- `src/_legacy/lib/api.ts` — original API client.
- `src/_legacy/App.tsx`, `main.tsx`, `vite-env.d.ts` — original SPA entry.
- `src/_legacy/uma-index.css` — original Tailwind v4 stylesheet and theme tokens.
- `reference/backend/**` — Express 5 + Prisma + JWT/bcrypt/nodemailer backend.
- `reference/database/schema.prisma` — Prisma schema.
- `public/**` — any files from the original `frontend/public/` were merged in.

`src/_legacy` is excluded from TypeScript (`tsconfig.json` `exclude`) so the
broken imports (`react-router-dom`, `framer-motion`, `next-themes`, etc.)
don't fail the build.

## Why nothing renders

- `src/routes/__root.tsx` and `src/routes/index.tsx` are the active app —
  they still show the Lovable placeholder home page.
- The copied `App.tsx` uses `react-router-dom` `<BrowserRouter>` + `<Routes>`,
  which conflicts with TanStack Router and is not mounted.
- The copied CSS defines its own theme tokens that would clash with
  `src/styles.css`; it is not imported.
- The Express backend cannot run on Cloudflare Workers (native Prisma
  engine, nodemailer, bcryptjs, long-lived JWT signing all need Node).

## Next steps (pick one)

**A. Make it actually run** — port each `src/_legacy/app/(site)/*/page.tsx`
to a TanStack route under `src/routes/`, swap `react-router-dom` for
`@tanstack/react-router`, merge the CSS tokens into `src/styles.css`, and
rebuild the backend as TanStack server functions + Lovable Cloud tables
mirroring `schema.prisma`.

**B. Rebuild visually** — use `src/_legacy` as a design/content reference
and build the site fresh on TanStack Start.

Ask me to do A or B (and I can do it page-by-page).