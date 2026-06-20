# Implementation Plan: Faithful port of `docs/design` into the Next.js site

## Overview
Reproduce the `docs/design/index.html` mockup (style **Direction C — Ателье**) as the live
Next.js homepage, pixel-faithful in layout/typography/color, while keeping the existing
**real content** (`lib/business.ts`), **SEO metadata**, **JSON-LD**, **analytics**, the
**portfolio lightbox**, and the **real Yandex map**. The mockup's placeholder copy and the
`<image-slot>` / tweak-panel mockup tooling are NOT carried over.

## Architecture Decisions
- **Keep the design's plain CSS as the styling layer.** Port `styles.css` into the app as a
  global stylesheet, hard-pinned to Direction C (resolve `html[data-direction="c"]` tokens into
  `:root`; drop the a/b variants, `image-slot`, and tweak-panel rules). Use the design's class
  names in JSX. Rationale: it's the design's own output → guarantees the look and avoids the
  visual drift that re-deriving everything in Tailwind utilities would invite.
- **Fonts via `next/font/google`:** Tenor Sans (display), Manrope (body), JetBrains Mono (mono).
  Drop Geist. **Must include the `cyrillic` subset** — all copy is Russian.
- **Real data over mockup copy.** Phone, email, реквизиты, address, hours come from
  `lib/business.ts`. Ignore the mockup's wrong placeholders.
- **Reuse existing components' logic**, restyle their markup: Header (mobile menu), Footer,
  ContactSection (Yandex iframe), PortfolioGallery (lightbox). Keep `layout.tsx` shell
  (JsonLd, FloatingWhatsApp, AnalyticsScripts).
- **Images:** `next/image` against existing `public/images/*`. No `<image-slot>`.

## Task List

### Phase 1: Foundation

#### Task 1: Stylesheet + fonts wired, pinned to Direction C
**Description:** Bring the design CSS into the app pinned to Direction C, and swap fonts to
Tenor Sans / Manrope / JetBrains Mono with the Cyrillic subset.
**Acceptance criteria:**
- [ ] Design tokens/classes available globally; a/b variants, `image-slot`, tweak-panel CSS removed
- [ ] `--font-display`/`--font-body`/`--font-mono` map to the next/font variables
- [ ] Cyrillic renders in Tenor Sans headings (no tofu / fallback)
**Verification:** `bun run build` clean; `bun run dev`; probe a `.display-h2` + `.eyebrow` render with correct font/case/color.
**Dependencies:** None
**Files:** `app/layout.tsx`, `app/globals.css` (+ maybe `app/design.css`)
**Scope:** Medium

### Checkpoint: Foundation
- [ ] Build clean, fonts load with Cyrillic, design tokens live. **Resolve font risk before continuing.**

### Phase 2: Section slices (each = design markup + real content, verified in browser)

#### Task 2: Header (`.hdr`)
Restyle to the design header (brand mark, nav, phone, WhatsApp btn); keep mobile menu + `business.ts` links/numbers.
**Accept:** matches design desktop + working mobile menu; real phone `45-41-54`. **Verify:** visual + toggle menu. **Files:** `components/Header.tsx`. **Scope:** S

#### Task 3: Hero (`.hero`)
`.hero-grid` + `.hero-marquee` + `.hero-badge`; real hero photo via `next/image`; real lede copy.
**Accept:** two-column hero, animated marquee, badge, CTAs to `#contact`/`#portfolio`. **Verify:** visual + marquee loops + responsive collapse. **Files:** `app/page.tsx`. **Scope:** M

#### Task 4: About (`.about`)
Two-column + `.about-stats` (20 / 600+ / ∞); keep real About copy + featured image.
**Accept:** stats row, real text, image. **Verify:** visual. **Files:** `app/page.tsx`. **Scope:** M

#### Task 5: Services (`.services-grid`)
4 bordered cells with numbers `01–04` + service lists (reconcile mockup vs current; keep current's "Лондонские" etc. or mockup's — flag diffs).
**Accept:** 4-col bordered grid, hover, responsive 2→1 col. **Verify:** visual. **Files:** `app/page.tsx`. **Scope:** S

#### Task 6: Process (`.process`)
5-step timeline with connector line + dots; keep real step copy.
**Accept:** timeline line desktop, 5 steps, CTA. **Verify:** visual + responsive. **Files:** `app/page.tsx`. **Scope:** S

### Checkpoint: Tasks 2–6
- [ ] Header + Hero/About/Services/Process render faithfully at desktop + mobile; real data; build clean.

#### Task 7: Portfolio (`.portfolio-grid` bento)
Asymmetric bento (t-lg/t-md/t-sm/t-tall) filled with real `public/images/gallery` photos; **keep the lightbox** behavior.
**Accept:** bento layout, hover `.tile-meta`, click → lightbox prev/next/close. **Verify:** visual + open/navigate/close lightbox. **Files:** `components/PortfolioGallery.tsx`. **Scope:** M

#### Task 8: Contact (`.contact`)
`.contact-cards` (Адрес / Телефоны / Мессенджеры / Email from `business.ts`) + keep real Yandex iframe in the styled `.contact-map` container.
**Accept:** card grid + map; real NAP. **Verify:** visual + map loads + links work. **Files:** `components/ContactSection.tsx`. **Scope:** M

#### Task 9: Footer (`.ftr`)
Design 4-col dark footer (brand / nav / contacts / реквизиты) from `business.ts`; keep /contacts + /privacy links.
**Accept:** 4-col → responsive collapse; real реквизиты (ИП Калашников, ИНН, ОГРНИП). **Verify:** visual. **Files:** `components/Footer.tsx`. **Scope:** S

### Checkpoint: Tasks 7–9
- [ ] Full page top-to-bottom matches design; all real data; lightbox + map functional.

### Phase 3: Polish

#### Task 10: Responsive + cleanup
Cross-check all breakpoints (900/720/600/500), reconcile Tailwind-v4 ↔ plain-CSS conflicts, remove dead code (unused Geist, old section classes, AnimatedSection if replaced), `bun run lint`.
**Accept:** no console errors, no lint errors, no leftover mockup classes. **Verify:** `bun run lint` + manual breakpoint sweep. **Files:** `app/page.tsx`, components, css. **Scope:** M

#### Task 11: Final verification
Build, visual diff vs `docs/design/index.html` across breakpoints, confirm SEO/JSON-LD/analytics intact, sub-routes (/contacts, /privacy) still styled OK.
**Accept:** all acceptance criteria met. **Verify:** `bun run build` + diff. **Files:** — **Scope:** S

### Checkpoint: Complete
- [ ] Pixel-faithful Direction C, real content, build+lint clean, SEO intact. Ready for review.

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| **Tenor Sans lacks full Cyrillic** (uppercase RU headings) | High | Verify in Task 1; if tofu, substitute a Cyrillic-capable display face keeping the caps/tracking feel |
| Tailwind v4 global utilities clash with ported plain CSS | Med | Rewritten sections drop Tailwind classes; scope/keep specificity; remove unused utilities |
| `color-mix()`/`oklab`/`backdrop-filter` support | Low | Modern browsers OK; acceptable for target audience |
| Marquee animation jank / duplicated track | Low | Keep design's duplicated-track + `translateX(-50%)` approach |
| Sub-routes (/contacts, /privacy) styled by old assumptions | Med | Check in Task 11; restyle if broken |

## Resolved Decisions
- **Keep the existing scroll-reveal** (`AnimatedSection` fade-up) — wrap the new design sections
  with it; it's subtle and additive.
- **Keep current/real service wording** (e.g. "Лондонские", not the mockup's "Французские").
  When mockup copy and current copy disagree, current wins.
