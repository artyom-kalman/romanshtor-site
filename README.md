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
- Contact information cards with map integration
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

## Planed Features

- [ ] Section "Наши истории/проекты"
- [ ] Update section Process - make interactive UI with pictures
- [ ] In Portfolio section add filter and picture view (full screen)
- [ ] Add section "Our team"
- [ ] Rework Услуги section 
- [ ] Add social media links
