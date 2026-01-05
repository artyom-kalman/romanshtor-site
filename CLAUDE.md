# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional business website for "Салон Римские Шторы" (Roman Curtains Salon) - a textile design and interior decoration business in Khabarovsk, Russia. The site is a single-page landing page showcasing 20 years of experience in custom curtains, blinds, and textile furnishings.

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

## Architecture Overview

### App Structure

This is a **single-page landing site** with a section-based architecture. All major content sections are defined as functional components within `app/page.tsx` (365 lines):

1. **HeroSection** - Full-height hero with background image
2. **AboutSection** - Company description with side image (2-column grid)
3. **ServicesSection** - 4-column grid of service categories
4. **ProcessSection** - 5-step numbered workflow
5. **PortfolioGallery** - Photo gallery (imported component)
6. **ContactSection** - Contact information cards, map embed
7. **Footer** - Copyright and legal information

### Component Architecture

**Reusable Components** (`components/` directory):

- **Header.tsx** - Fixed sticky navigation
  - Client component (`'use client'`)
  - Responsive hamburger menu for mobile
  - Desktop navigation with smooth scroll links
  - Contact links (phone, WhatsApp)
  - Uses React useState for menu toggle

- **PortfolioGallery.tsx** - Image gallery
  - 18 portfolio images in responsive grid (2-4 columns)
  - Hover scale animations
  - Uses Next.js Image component for optimization

### Layout Pattern

- **Root Layout** (`app/layout.tsx`):
  - Configures metadata (title, description)
  - Loads Geist fonts (Sans and Mono)
  - Sets language to Russian (`lang="ru"`)
  - Renders Header globally
  - Applies global styles from `globals.css`

### Styling Approach

- **Tailwind CSS v4** with PostCSS
- **Custom theme variables** in `app/globals.css`:
  - Colors: background, foreground, primary, accent (#d4a373), muted
  - Fonts: Geist Sans, Geist Mono
- **Responsive design**: Mobile-first with Tailwind breakpoints
- **Smooth scroll**: Enabled globally via CSS

### Path Aliases

TypeScript path alias configured in `tsconfig.json`:
```typescript
"@/*" → project root
```

Example import: `import Header from "@/components/Header"`

## Image Assets

Static assets are organized in `public/`:
- `public/images/hero/` - Hero section backgrounds
- `public/images/featured/` - About section images
- `public/images/gallery/` - Portfolio images (18 files)
- `public/images/products/` - Additional product images

Always use Next.js `<Image>` component for optimal performance.

## Client vs Server Components

- **Default**: All components are Server Components (static content)
- **Client Components** (marked with `'use client'`):
  - `Header.tsx` - uses useState for mobile menu
  - Any component using React hooks, browser APIs, or interactivity

## Language and Content

- All content is in **Russian language**
- Metadata, navigation, and user-facing text should maintain Russian
- SEO metadata is already configured in `app/layout.tsx`

## ESLint Configuration

Uses ESLint 9 with flat config (`eslint.config.mjs`):
- Next.js core-web-vitals preset
- TypeScript rules enabled
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Development Notes

- **Current branch**: master (no other branches configured)
- **No environment variables** in use (no .env file)
- **No backend/API routes** - purely static frontend
- **Contact display** uses static cards with phone, email, and WhatsApp links
- **Map integration**: Uses Yandex Maps embed (Russian map service)
