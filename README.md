# Roman Curtains Salon website

Russian-language website for «Римские шторы», a custom curtains and interior textiles salon in Khabarovsk.

- Website: https://rimskiestory.ru/
- Pages: homepage, `/contacts/`, `/privacy/`.
- Stack: Next.js App Router, React, TypeScript, Tailwind CSS.
- Hosting: Timeweb Cloud, static files from `out/`.
- [Project information in Notion](https://www.notion.so/3e9252aaf7ec819aaf21df53c3a8a19f)
- [Maintenance issue](https://www.notion.so/3e9252aaf7ec819f8615d0dca5caa7b5)

## Setup

Use Node.js 24 LTS, as specified in `.node-version`, and pnpm 10.28.2, pinned in `package.json`. The test runner requires Node.js 22.18 or newer. No environment variables are required for the site.

Install the pinned package manager if needed:

```sh
npm install --global pnpm@10.28.2
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. Commit dependency changes with `pnpm-lock.yaml`; use `pnpm add` and `pnpm remove` to manage dependencies.

The pnpm configuration limits dependency install scripts to `sharp` and `unrs-resolver`. Newly resolved package versions must be at least seven days old, and updates must not weaken package trust signals. Review urgent exceptions individually rather than disabling these settings globally.

npm was previously used because Timeweb did not support Bun. The pnpm lockfile was imported from the npm lockfile, preserving the existing direct dependency versions. Bun is no longer required.

## Checks

```sh
pnpm check            # ESLint, route types + TypeScript, and business helper tests
pnpm test:watch       # Rerun unit tests as files change
pnpm test:coverage    # Node's test coverage report
pnpm build           # Production static export
pnpm exec playwright install chromium
pnpm test:e2e         # Browser checks against the exported site
```

The browser suite starts its own server on port 3000. Stop other local servers on that port first. It replaces Metrica with a stub and blocks other external requests, so test visits do not enter production analytics. CI runs these checks on pushes and pull requests.

## Preview and deployment

```sh
pnpm build
pnpm preview
```

Preview at http://127.0.0.1:3000. This is a static export; `next start` does not serve this build. The build fetches the configured Google Fonts and needs network access.

Timeweb supports pnpm for Next.js projects and selects a package manager from repository files. Use the following settings when deploying this migration:

| Setting | Value |
| --- | --- |
| Application | Next.js frontend, static export |
| Project directory | Repository root |
| Node.js | 24 LTS recommended; at least 22.18 for the full check suite |
| Package manager | pnpm 10.28.2 |
| Dependency installation | `pnpm install --frozen-lockfile` |
| Build command | `pnpm run build` |
| Output directory | `out` |

Before the first pnpm deployment, check `node --version` and `pnpm --version` in the Timeweb build environment and replace any custom `npm install` commands. The public docs do not state the pnpm version used by this app, so these settings still need confirmation in the Timeweb panel/build log. Keep trailing-slash export enabled so `/contacts/` and `/privacy/` resolve to their `index.html` files.

After deployment, check all three pages directly, the footer links, `/robots.txt`, `/sitemap.xml`, and the analytics checks below. A successful local build does not confirm a hosted deployment.

[Timeweb Next.js deployment documentation](https://timeweb.cloud/docs/apps/deploying-frontend-apps/nextjs)

## Content and analytics

Business details, opening hours, founding date, site URL, and map URL live in `lib/business.ts`. Keep public copy in Russian. Years in business use the salon's timezone. Because the site is exported statically, rebuild after the July 7 anniversary to refresh generated copy and metadata.

Yandex Metrica counter `109390723` runs in production builds only. The existing phone, email, and messenger goals are configured in Metrica. See [analytics verification](docs/analytics.md) for the confirmed baseline and remaining live checks. Opening a production preview can send real analytics; use the automated browser tests for isolated checks.

Contributor guidance is in [AGENTS.md](AGENTS.md). Project decisions and current maintenance work are tracked in the linked Notion project and issue.
