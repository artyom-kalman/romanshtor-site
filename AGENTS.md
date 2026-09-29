# Project guidance

Russian-language website for «Римские шторы», a curtain and interior textiles salon in Khabarovsk. Built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Development

Use Node.js 24 LTS from `.node-version` and pnpm 10.28.2 from `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
pnpm exec playwright install chromium
pnpm test:e2e
```

Run `pnpm check` and `pnpm build` after changes, plus browser tests for analytics or navigation changes. Builds fetch Google Fonts and need network access. Browser tests serve `out/`, replace analytics with a stub, and block other external requests.

Use pnpm for dependency changes and commit `pnpm-lock.yaml`; do not introduce npm, Yarn, or Bun lockfiles. Unit tests use Node's built-in test runner with explicit `.ts` imports.

## Application constraints

- Timeweb Cloud serves the static export in `out/`. Preserve `output: "export"`, `trailingSlash: true`, and `images.unoptimized` in `next.config.ts`.
- Use `pnpm preview` to serve the export; `next start` is not supported. See `README.md` for deployment settings.
- Routes are `/`, `/contacts/`, and `/privacy/`. Keep user-facing copy and metadata in Russian.
- Business details, hours, founding date, site URL, and map URL belong in `lib/business.ts`. Years in business use the salon's timezone; static anniversary copy requires a rebuild.
- Use Next.js `Image` for site images. Preserve unused photos for future use unless their removal is explicitly requested. Gallery filenames are referenced dynamically from the portfolio data. Hero assets may also be used by metadata and structured data.
- Analytics runs only in production. Preserve Metrica counter `109390723` and the existing contact goals. Review the linked Notion project and maintenance issue before changing tracking. Manual production previews can send real analytics.

## Documentation

Keep setup and deployment instructions in `README.md`. Keep analytics verification, project decisions, and maintenance status in the linked Notion project and issue. Do not retain obsolete prototypes or duplicate task reports in the repository.
