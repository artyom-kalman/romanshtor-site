# Roman Curtains Salon Website
## Салон Римские Шторы

A professional single-page landing site for a textile design and interior decoration business in Khabarovsk, Russia. Showcasing 20 years of experience in custom curtains, blinds, and textile furnishings.

## Tech Stack

- **Framework**: Next.js 16.1.1 with App Router
- **UI Library**: React 19.2.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with custom theme
- **Package Manager**: Bun
- **Linting**: ESLint 9 with flat config

## About the Project

This is a **single-page landing site** built with modern web technologies to showcase the services and portfolio of "Салон Римские Шторы" (Roman Curtains Salon). The site features:

- Full-height hero section with background imagery
- Company overview and 20-year experience highlight
- Service catalog with 4 main categories
- 5-step process workflow visualization
- Portfolio gallery with 18 project images
- Contact form with validation
- Yandex Maps integration
- Fully responsive design

**Language**: All content is in Russian for the local market.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed on your system

### Installation

```bash
# Install dependencies
bun install
```

### Development Commands

```bash
# Start development server (http://localhost:3000)
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Run ESLint
bun run lint
```

**Note**: All Next.js commands are configured with `bun --bun` flag for optimal Bun compatibility.

## Project Structure

```
romanshtor-site/
├── app/
│   ├── page.tsx          # Main landing page (365 lines, 7 sections)
│   ├── layout.tsx        # Root layout with metadata & fonts
│   ├── globals.css       # Global styles & theme variables
│   └── favicon.ico       # Site favicon
├── components/
│   ├── Header.tsx        # Navigation header (client component)
│   ├── ContactForm.tsx   # Contact form with validation
│   └── PortfolioGallery.tsx  # Image gallery component
├── public/
│   └── images/
│       ├── hero/         # Hero section backgrounds
│       ├── featured/     # About section images
│       ├── gallery/      # Portfolio images (18 files)
│       └── products/     # Additional product images
├── eslint.config.mjs     # ESLint flat config
├── postcss.config.mjs    # PostCSS configuration
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

### Architecture Overview

**Single-Page Application**: All content sections are defined in `app/page.tsx` (365 lines)

**Path Alias**: `@/*` → project root (configured in `tsconfig.json`)
```typescript
import Header from "@/components/Header"
```

## Component Architecture

### Page Sections (app/page.tsx)

The main page consists of 7 functional sections:

1. **HeroSection** - Full-height hero with background image and call-to-action
2. **AboutSection** - Company description with side image (2-column grid layout)
3. **ServicesSection** - 4-column responsive grid of service categories
4. **ProcessSection** - 5-step numbered workflow visualization
5. **PortfolioGallery** - Photo gallery component (imported)
6. **ContactSection** - Contact form, Yandex Maps embed, business information
7. **Footer** - Copyright and legal information

### Reusable Components

#### Header.tsx
- **Type**: Client Component (`'use client'`)
- **Features**: Fixed sticky navigation with mobile hamburger menu
- **State**: Uses React useState for menu toggle
- **Navigation**: Smooth scroll links to page sections
- **Contact**: Phone and WhatsApp integration

#### ContactForm.tsx
- **Type**: Client Component (`'use client'`)
- **Fields**: Name, Email, Phone
- **Validation**: Email format check, phone length validation
- **Feedback**: Success message with 3-second auto-reset
- **Note**: Client-side only (no backend submission endpoint)

#### PortfolioGallery.tsx
- **Type**: Server Component
- **Content**: 18 portfolio images in responsive grid
- **Layout**: 2-4 columns based on screen size
- **Effects**: Hover scale animations
- **Optimization**: Uses Next.js `<Image>` component

### Client vs Server Components

- **Server Components** (default): All static content sections
- **Client Components** (marked with `'use client'`):
  - `Header.tsx` - uses useState for mobile menu
  - `ContactForm.tsx` - uses useState for form state/validation

## Styling Guide

### Tailwind CSS v4 Setup

- **Configuration**: PostCSS-based (`postcss.config.mjs`)
- **Theme Definition**: Custom variables in `app/globals.css`
- **Approach**: Utility-first CSS with custom design tokens

### Custom Theme Variables

```css
--background: #ffffff
--foreground: #171717
--color-primary: #1a1a1a
--color-accent: #d4a373    /* Gold/bronze accent */
--color-muted: #57606a
```

### Typography

- **Primary Font**: Geist Sans (loaded via `next/font`)
- **Monospace Font**: Geist Mono
- **Fallbacks**: System fonts (-apple-system, Segoe UI, Arial)

### Responsive Design

**Mobile-First Approach** using Tailwind breakpoints:
- **Grid Layouts**: 1 column (mobile) → 2-4 columns (desktop)
- **Navigation**: Hamburger menu on mobile, full menu on desktop
- **Images**: Responsive sizing with Next.js Image optimization
- **Smooth Scroll**: Enabled globally via CSS

### Image Optimization

- **Component**: All images use Next.js `<Image>` component
- **Benefits**: Automatic optimization, responsive sizing, lazy loading
- **Organization**: Assets organized by section in `/public/images/`

## Development Notes

### Important Considerations

- **Language**: All content in Russian (maintain for SEO/UX consistency)
- **Architecture**: Static frontend only - no backend or API routes
- **Form Handling**: Contact form is client-side only (no submission endpoint)
- **Maps**: Uses Yandex Maps (Russian market preference)
- **Environment**: No environment variables required
- **Version Control**: Current branch is `master`

### Code Patterns

**Import Pattern** with path alias:
```typescript
import Component from "@/components/Component"
```

**Component Pattern**:
```typescript
// Server component (default)
export default function Section() { ... }

// Client component (interactive)
'use client'
export default function Interactive() { ... }
```

## ESLint Configuration

- **Version**: ESLint 9 with flat config format
- **Config File**: `eslint.config.mjs`
- **Preset**: Next.js core-web-vitals rules
- **Ignored Paths**: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Browser Support

Targets modern browsers with ES6+ support. Next.js handles automatic polyfills and optimizations.

