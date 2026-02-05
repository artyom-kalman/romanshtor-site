# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a website for "Салон Римские Шторы" (Roman Curtains Salon) - a textile design and interior decoration business in Khabarovsk, Russia.

**Tech Stack:**
- Next.js 16.1.1 with App Router
- React 19.2.3
- TypeScript 5
- Tailwind CSS v4
- Bun (package manager)

## Common Commands

**All commands use Bun as the package manager:**

```bash
# Development server (http://localhost:3000)
bun run dev

# Production build
bun run build

# Start production server
bun run start

# Run ESLint
bun run lint
```

Note: All Next.js commands are configured with `bun --bun` flag for optimal Bun compatibility.

## Image Assets

Static assets are organized in `public/`:
- `public/images/hero/` - Hero section backgrounds
- `public/images/featured/` - About section images
- `public/images/gallery/` - Portfolio images (18 files)
- `public/images/products/` - Additional product images

Always use Next.js `<Image>` component for optimal performance.

## Language and Content

- All content is in **Russian language**
- Metadata, navigation, and user-facing text should maintain Russian
- SEO metadata is already configured in `app/layout.tsx`

## Troubleshooting

- **"Can't resolve 'tailwindcss'" error**: Delete the `.next` cache and rebuild:
  ```bash
  rm -rf .next
  bun run build
  bun run dev
  ```
  This happens when the `.next` cache contains stale build artifacts with incorrect path references.
