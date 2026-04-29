# Reserva Direta — Landing Page

Marketing landing page for **Reserva Direta**, a Portuguese agency helping hotels/alojamentos increase direct bookings.

- Code: `web/` (Next.js 16 + React 19 + TypeScript + Tailwind v4)
- Live dev: `npm run dev` → http://localhost:3000
- Source of truth for copy: `lib/constants.ts`
- Source of truth for design tokens: `app/globals.css` `@theme {}` block
- Section spec: `web/DESIGN_SYSTEM.md`
- Open follow-ups / known fixes: `web/TODO.md`
- Content draft (with PENDENTE markers and CultBooking research): `../reserva_direta_draft.html`

---

## Current state (2026-04-27)

All 10 sections built. The landing page has been through a /critique pass + targeted redesigns on Problem, HowItWorks, CaseStudies, and Footer.

| # | Section | File | Notes |
|---|---|---|---|
| 0 | Navbar | `components/Navbar.tsx` | Fixed, 72px, shadow-nav. 3 links + primary CTA "Agendar Reunião". |
| 1 | Hero | `components/sections/Hero.tsx` | Light-blue bg, 2-col. Real bedroom photo at `/hero/hero-bedroom.png`. Image is `aspect-[3/4]` + `max-w-md` on `lg`, full-width `aspect-[4/3]` below. |
| 2 | Problem | `components/sections/Problem.tsx` | White bg, 2-col. **Comparison panels** ("Com OTAs" light-blue/navy vs "Reservas Diretas" navy/orange) replace the old 3-card stack. Signature animation: count-up `−0% → −25%` then snap to `−15-25%` when in view (`useCountUp` hook, ease-out cubic, respects `prefers-reduced-motion`). Orange highlighter sweep on `15-25% de cada reserva` in the body copy is preserved. |
| 3 | BookingSystem | `components/sections/BookingSystem.tsx` | Light-blue bg. Booking-widget mockup uses `bg-booking-blue` token (was hardcoded `#3F7EE8`). Labels: "Check In / Check Out / Procurar / Tem um código promocional?". 4 trust badges + CTA. |
| 4 | Services | `components/sections/Services.tsx` | Cream bg. 6-tile 3-col grid: 5 white service cards + 1 navy CTA card linking to `/servicos`. |
| 5 | HowItWorks | `components/sections/HowItWorks.tsx` | White bg. **Horizontal stepper**: 4 numbered navy badges connected by a thin orange gradient rail, each with title + description below, left-aligned, `gap-12` on desktop. (Was 4 identical card grid.) |
| 6 | CaseStudies | `components/sections/CaseStudies.tsx` | Light-blue bg. **Image-led cards** (no more PENDENTE): real anonymous property photos at `/case-studies/case-{1,2,3}.png`, category pill (Turismo Rural / Alojamento Local / Hotel Boutique) over a 4:3 image, display-xs title, short teaser. Real names + metrics still TBD. |
| 7 | BlogPreview | `components/sections/BlogPreview.tsx` | Cream bg. 3 article cards (still picsum images) + "Ver Todos os Artigos" CTA. |
| 8 | FAQ | `components/sections/FAQ.tsx` | White bg. 7-item accordion. Full a11y: `aria-expanded`, `aria-controls`, paired `id`s, `role="region"` + `aria-labelledby` on panels, `hidden` instead of unmount, `aria-hidden` on +/− glyph. |
| 9 | ContactCTA | `components/sections/ContactCTA.tsx` | Navy bg. White card, gray-fill inputs, full-width orange "Enviar Mensagem". Posts to Formspree. |
| 10 | Footer | `components/Footer.tsx` | Footer-bg. **3-column horizontal**: brand+tagline+social icons (FB / IG / YT) · Contacto · Navegação. `gap-x-16`. Copyright "© 2026 …". |

Section order in `app/page.tsx`: Navbar → Hero → Problem → BookingSystem → Services → HowItWorks → CaseStudies → BlogPreview → FAQ → ContactCTA → Footer.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | **Tailwind v4** (`@tailwindcss/postcss`) |
| Fonts | `next/font/google` — Bricolage Grotesque (display) + Figtree (body) |
| Forms | Formspree (env var `NEXT_PUBLIC_FORMSPREE_ID`) |
| Deployment | Vercel (planned) |

> **Important:** No `tailwind.config.ts` — Tailwind v4 ignores it. **All design tokens live in `app/globals.css` inside `@theme { ... }`.** See `DESIGN_SYSTEM.md` for the canonical token list.

> **Framer Motion was removed** because `whileInView` caused SSR hydration mismatches. Don't reintroduce without an SSR-safe pattern (CSS keyframes triggered by IntersectionObserver inside a Client Component).

---

## Design system (short reference)

Full spec: `DESIGN_SYSTEM.md`. The most-used tokens:

- **Colors:** `navy #002F6D`, `orange #FF9202`, `cream #FAEFE0`, `light-blue #F0F4FF`, `footer-bg #0F1015`, `booking-blue #3F7EE8` (BookingSystem widget mockup only). Neutrals `n-100`/`n-150`/`n-200`/`n-300`/`n-400`/`n-600`/`n-900`. Status `success-bg/fg`, `error-bg/fg`.
- **Type:** `text-display-xl/lg/md/sm/xs` (display/headings), `text-body-lg/base/sm`, `text-label`, `text-button`, `text-caption`. Use `font-display` (Bricolage) on headings, `font-body` (Figtree) inherited via `<body>`.
- **Spacing:** `py-section-y` (64px), `py-section-y-lg` (80px), `py-section-y-sm` (56px), `px-section-x` (120px).
- **Radius:** `rounded-input` (6), `rounded-btn` (8), `rounded-faq` (8), `rounded-card` (12), `rounded-card-lg` (16).
- **Shadows:** `shadow-card`, `shadow-card-hover`, `shadow-cta`, `shadow-nav`.
- **Tracking:** `tracking-label` (0.15em).

### Reusable primitives (`components/ui/`)

- `Button` / `LinkButton` — variants: `primary` | `dark` | `secondary` | `accent` | `ghost`.
- `SectionHeader` — label + heading + intro pattern; supports `align="center"` and `onDark`.
- `ServiceIcon` — SVG icons keyed by name (`palette`, `globe`, `phone`, `bolt`, `tools`, `handshake`).

### Reveal / motion system

Site-wide scroll-reveal pattern. SSR-safe, no Framer Motion.

- **Hook:** `lib/useInView.ts` — Client-side `useInView<T>()` returns `[ref, inView]`. Observer disconnects after first hit (animations don't replay).
- **Section pattern:** root has `data-reveal={inView}`. Inside, mark elements with:
  - `.reveal-up` — single fade-up element
  - `.reveal-stagger` — children stagger in (60ms cadence, up to 8 children, then a flat tail)
- **Hero exception:** `.hero-stagger` runs on initial page load (no observer needed — above the fold).
- **Reduced-motion:** `@media (prefers-reduced-motion: reduce)` disables all of it; everything renders static.
- **Highlight system:** `.text-highlight` (CSS in `globals.css`) is an orange highlighter sweep keyed off `[data-reveal="true"]` for observer-driven sections, and statically full inside `.hero-stagger` for the above-the-fold Hero. Use the `withHighlight(text, phrase)` helper from `lib/highlight.tsx` to wrap a substring. Apply one phrase per main paragraph per section (see Hero, Problem 3 paragraphs, BookingSystem, Services, CaseStudies, BlogPreview, FAQ).
- **Count-up:** shared hook at `lib/useCountUp.ts` — `useCountUp(target, run, { duration?, startDelay? })`. Used by Problem (signature `−0% → −25%` snap) and BookingSystem (4 stat tiles, sequenced with `startDelay = 700 + index * 140`). Ease-out cubic, respects `prefers-reduced-motion`.
- **Navbar active section:** `lib/useActiveSection.ts` — IntersectionObserver with `-40% / -55%` rootMargin band. Active link gets `text-navy` + an orange `scale-x` underline.

All CSS lives in `app/globals.css` under "Reveal system" / "Hero on-load reveal" / "Problem section bespoke delight" sections.

---

## How to work on this project

### Editing copy
All Portuguese copy lives in `lib/constants.ts`. Edit that file, never hardcode in components.

### Editing tokens
Edit the `@theme {}` block in `app/globals.css`. Don't create a `tailwind.config.ts`.

### Adding a section
1. New file in `components/sections/SectionName.tsx`.
2. Pull copy from `lib/constants.ts`.
3. Use `<SectionHeader>` for the header pattern.
4. Use token classes only (no `[#hex]` literals, no inline `style={{ fontFamily }}`).
5. Import in `app/page.tsx`.

### Commands
```bash
npm run dev      # Dev server (Turbopack)
npm run build    # Type-check + build
npm run lint     # ESLint
```

---

## Active scope — week of 2026-04-27

Landing page is functionally complete; remaining work split between asset pickup, polish carry-overs from the /critique pass, and new pages.

**See `web/TODO.md` for the live backlog.** High-level summary:

### A. Landing-page carry-overs
- Replace remaining placeholder assets as client delivers (per-property names + metrics for case studies; real blog titles + images).
- Wire `.env.local` `NEXT_PUBLIC_FORMSPREE_ID` once client provides it.
- P2 polish: bump card-title hierarchy in Services / BlogPreview to `text-display-xs`; restore footer column-title `tracking-label` if desired; differentiate the two "Descobre mais…" CTAs (BookingSystem + Services, both currently → `#contacto`).

### B. New pages
1. **`/sistema-de-reservas`** — deep dive on the booking engine (v3 draft section 3: CultBooking detail, 4-step "Como funciona", 6 feature cards, Channel Manager, Booking.com Premier Partner / Cultuzz / 450+ channels). Repoint the landing CTA from `#contacto` once built.
2. **`/quem-somos`** — about page. Team: João Brazão (JB), Sebastião Gomes (SG). Awaiting team photos.
3. **`/servicos/[slug]`** — 5 service detail pages (branding, website, marketing-digital, tecnologia, fidelizacao).
4. **`/blog`** + **`/blog/[slug]`** — listing + article template.

### C. Phase 2
Sanity CMS for blog + case studies; Vercel deployment + custom domain; Analytics.

---

**Last updated:** 2026-04-27
