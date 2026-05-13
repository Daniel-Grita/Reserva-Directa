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

## Current state (2026-05-13)

All 10 landing-page sections built + 6 sub-pages live (`/quem-somos`, `/servicos`, `/a-nossa-solucao`, `/casos-de-uso`, `/blog`, `/blog/[slug]`). The `/servicos/[slug]` per-service detail pages were consolidated into full-page alternating sections on `/servicos` (2026-05-11). Sanity CMS is live and powering the blog. Code audit completed (16/20) — all P1/P2 findings resolved (see `TODO.md` 2026-05-13 audit batch for details). Remaining open work: replace placeholder images, Calendly URL, Formspree spam check, Cloudflare Pages migration, Sanity for case studies.

| # | Section | File | Notes |
|---|---|---|---|
| 0 | Navbar | `components/Navbar.tsx` | Fixed, 72px, shadow-nav. 3 links + primary CTA "Agendar Reunião". `useActiveSection` orange underline. |
| 1 | Hero | `components/sections/Hero.tsx` | Light-blue bg, `h-[88vh]`. **Two layouts:** ≥1440px — 4 absolute floating image cards (`hero-floats`) with entrance + continuous float + hover-pause; <1440px — 2 overlapping 16:9 cards (`hero-stack`) below the CTAs, width-matched to button row. Unsplash hotel rooms — replace with real client photos. Heading split across `hero.heading` + `hero.headingSecondary`. Ambient blob drift. All animations CSS-only, reduced-motion safe. |
| 2 | Problem | `components/sections/Problem.tsx` | White bg, 2-col comparison panels. Count-up `−0% → −25%` snap on enter (`useCountUp`). |
| 3 | BookingSystem | `components/sections/BookingSystem.tsx` | **Now a teaser** — single column: heading + 1-line copy + shared `BookingWidget` mockup + "Ver como funciona" CTA below the widget → `/a-nossa-solucao`. Trust badges + 6 feature cards moved exclusively to `/a-nossa-solucao`. |
| 4 | Services | `components/sections/Services.tsx` | Cream bg. 6-tile 3-col grid: 5 white `<div>` cards (no link) + 1 navy CTA card `<Link>` → `/servicos`. All cards have `hover:-translate-y-1 hover:shadow-card-hover` lift animation. |
| 5 | HowItWorks | `components/sections/HowItWorks.tsx` | White bg. Horizontal stepper, orange gradient rail. |
| 6 | CaseStudies | `components/sections/CaseStudies.tsx` | Light-blue bg. Image-led cards, real anonymous property photos. |
| 7 | FAQ | `components/sections/FAQ.tsx` | White bg. 7-item accordion, multi-open with "Expandir todas / Recolher todas". Full a11y. |
| 8 | BlogPreview | `components/sections/BlogPreview.tsx` | Cream bg. 2 article cards in a 2-up grid with Unsplash cover photos (16/9). Cards carry `image: { src, alt }` in `lib/constants.ts`; CTA links to /blog (Sanity-powered). |
| 9 | ContactCTA | `components/sections/ContactCTA.tsx` | Navy bg. **`FoundersIntro` strip** above the form (founder avatars + names + mailto). White card, gray inputs, orange submit. Posts to Formspree. |
| 10 | Footer | `components/Footer.tsx` | Footer-bg, 3-column horizontal. |

Section order in `app/page.tsx`: Navbar → Hero → Problem → BookingSystem → Services → HowItWorks → CaseStudies → FAQ → BlogPreview → ContactCTA → Footer.

### Sub-page details

- `/a-nossa-solucao` — `SolucaoHero` → `SolucaoStats` → `SolucaoSteps` → `SolucaoFeatures` → `SolucaoTrust` → `ContactCTA`. Section IDs: `hero`, `resultados`, `como-funciona`, `funcionalidades`, `confianca`, `contacto`. Wires `<ScrollProgress />` (top orange bar, rAF-throttled, ref-based) + `<PageTOC items={...} />` (fixed left rail, `2xl`-only, consumes `useActiveSection`).
- `/servicos` — `ServicesPageHero` (label eyebrow + heading + intro + clickable service-tag pills) → **`ServicesPageSections`** (alternating `bg-white`/`bg-light-blue` full-width sections, one per service, with `id={slug}` + `scroll-mt-24`, included items grid, FAQ accordion, branding-only portfolio teaser) → `ContactCTA`. **Deleted:** `ServicesPageGrid`, `ServiceDetailHero`, `ServiceIncluded`, `ServiceProcess`, `/servicos/[slug]/page.tsx`.
- `/casos-de-uso` — `UseCasesGoogle` (3-col) + `UseCasesBooking` (vertical stack). Real screenshots in `public/use-cases/`.
- `/quem-somos` — `AboutHero` · `AboutTeamValues` (founders in a horizontal 2-col row with `bg-white p-2` framed photos at `aspect-[5/4]`; values as 3 horizontal white cards with icon + title + description, `hover:-translate-y-1` lift) · `ContactCTA` · `Footer`.
- `/blog` — navy hero strip + cream 3-col card grid pulling from Sanity (`POSTS_QUERY`). Empty state gracefully handled.
- `/blog/[slug]` — contained `aspect-[16/9]` image with `rounded-card-lg`, 780px centered column, category pills, title, meta strip (date · read time · author), `PortableText` body, `ScrollProgress` bar. Static params via `generateStaticParams`.
- `/politica-privacidade` — RGPD-compliant privacy policy. Linked from Footer + `CookieBanner`.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | **Tailwind v4** (`@tailwindcss/postcss`) |
| Fonts | `next/font/google` — Bricolage Grotesque (display) + Figtree (body) |
| Forms | Formspree (env var `NEXT_PUBLIC_FORMSPREE_ID`) |
| Deployment | Cloudflare Pages (planned). `next.config.ts` sets `images.unoptimized: true` (no Vercel image optimizer). `public/_headers` ships HSTS + CSP + frame-deny. `CloudflareAnalytics` script is wired but env-gated on `NEXT_PUBLIC_CF_BEACON_TOKEN`. |

> **Important:** No `tailwind.config.ts` — Tailwind v4 ignores it. **All design tokens live in `app/globals.css` inside `@theme { ... }`.** See `DESIGN_SYSTEM.md` for the canonical token list.

> **Framer Motion was removed** because `whileInView` caused SSR hydration mismatches. Don't reintroduce without an SSR-safe pattern (CSS keyframes triggered by IntersectionObserver inside a Client Component).

---

## Design system (short reference)

Full spec: `DESIGN_SYSTEM.md`. The most-used tokens:

- **Colors:** `navy #002F6D`, `orange #FF9202`, `cream #FAEFE0`, `light-blue #F0F4FF`, `footer-bg #0F1015`, `booking-blue #3F7EE8` (BookingSystem widget mockup only). Neutrals `n-100`/`n-150`/`n-200`/`n-300`/`n-400`/`n-600`/`n-900`. Status `success-bg/fg`, `error-bg/fg`.
- **Type:** `text-display-xl/lg/md/sm/xs` (display/headings), `text-card-title` (19px — card h3s only, distinct from sub-heading display-xs at 22px), `text-body-lg/base/sm`, `text-label`, `text-button`, `text-caption`. Use `font-display` (Bricolage) on headings, `font-body` (Figtree) inherited via `<body>`.
- **Spacing:** `py-section-y` (64px), `py-section-y-lg` (80px), `py-section-y-sm` (56px), `px-section-x` (120px).
- **Radius:** `rounded-input` (6), `rounded-btn` (8), `rounded-faq` (8), `rounded-card` (12), `rounded-card-lg` (16).
- **Shadows:** `shadow-card`, `shadow-card-hover`, `shadow-cta`, `shadow-nav`.
- **Tracking:** `tracking-label` (0.15em).

### Reusable primitives (`components/ui/`)

- `Button` / `LinkButton` — variants: `primary` | `dark` | `secondary` | `accent` | `ghost`. `LinkButton` accepts `external?: boolean` → renders `target="_blank" rel="noopener noreferrer"`. **Rule:** use `variant="dark"` on `bg-light-blue` section backgrounds.
- `SectionHeader` — label + heading + intro pattern; supports `align="center"` and `onDark`.
- `ServiceIcon` — SVG icons keyed by `IconName` (`palette`, `globe`, `phone`, `bolt`, `tools`, `handshake`, `eye`, `trendingUp`, `monitor`, `lock`, `calendar`, `star`, `check`).
- `Tooltip` — dotted-underline term + navy popover; combine with `lib/glossary.ts` `withGlossary(text)` to auto-wrap known jargon (PCI Compliant, Channel Manager, OTAs, Premier Connectivity Partner, etc.).
- `StatTile` — count-up stat card used by `SolucaoStats`/`StatCard` and was used by home `BookingSystem` before the teaser refactor.
- `ScrollProgress` — fixed top orange bar, rAF-throttled, ref-based DOM write (no React state). Mount once per long sub-page.
- `PageTOC` — fixed left-rail TOC at `2xl`; consumes `useActiveSection`; takes `items: TOCItem[] = { id, label }[]`.

### Reveal / motion system

Site-wide scroll-reveal pattern. SSR-safe, no Framer Motion.

- **Hook:** `lib/useInView.ts` — Client-side `useInView<T>()` returns `[ref, inView]`. Observer disconnects after first hit (animations don't replay).
- **Section pattern:** root has `data-reveal={inView}`. Inside, mark elements with:
  - `.reveal-up` — single fade-up element
  - `.reveal-stagger` — children stagger in (60ms cadence, up to 8 children, then a flat tail)
- **Hero exception:** `.hero-stagger` runs on initial page load (no observer needed — above the fold).
- **Hero floating images:** `.hero-floats > *` (≥1440px) composes two CSS animations: `hero-card-in` (800ms entrance) + `hero-float` (6s infinite drift). Fill-modes `both, none` sequence them without transform conflicts. Per-card delays via `nth-child`. `.hero-floats > *:hover` pauses only the float. `.hero-stack > *` (<1440px) runs only `hero-card-in` — no float loop. Ambient blobs use `.hero-blob-a/b` for slow opposing drift (14s / 16s).
- **Reduced-motion:** `@media (prefers-reduced-motion: reduce)` disables all of it; everything renders static.
- **Highlight system:** `.text-highlight` (CSS in `globals.css`) is an orange highlighter sweep keyed off `[data-reveal="true"]` for observer-driven sections, and statically full inside `.hero-stagger` for the above-the-fold Hero. Use the `withHighlight(text, phrase)` helper from `lib/highlight.tsx` to wrap a substring. Apply one phrase per main paragraph per section (see Hero, Problem 3 paragraphs, BookingSystem, Services, CaseStudies, BlogPreview, FAQ).
- **Count-up:** shared hook at `lib/useCountUp.ts` — `useCountUp(target, run, { duration?, startDelay? })`. Used by Problem (signature `−0% → −25%` snap) and BookingSystem (4 stat tiles, sequenced with `startDelay = 700 + index * 140`). Ease-out cubic, respects `prefers-reduced-motion`.
- **Active-section tracking:** `lib/useActiveSection.ts` — `useActiveSection(ids: string[])` returns the topmost intersecting section id. IntersectionObserver `-40% / -55%` rootMargin. Used by Navbar (orange underline) and `PageTOC` (orange border-l on the active item). Don't reinvent this — pass section ids and consume the result.

All CSS lives in `app/globals.css` under "Reveal system" / "Hero on-load reveal" / "Problem section bespoke delight" / "Hero floating image cards" / "Hero ambient blobs" sections.

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

## Active scope — 2026-05-11

Landing page + 4 sub-pages live (`/servicos/[slug]` routes deleted — content merged into `/servicos`). **See `web/TODO.md` for the live backlog.**

### A. Open follow-ups (unblocked)
- **Calendly URL** — "Agendar Reunião" still posts to `#contacto`; swap to Calendly when client provides URL.
- **Real client images** — Hero floating cards (4 × Unsplash hotel rooms), `SolucaoHero` photo (picsum), blog covers (Unsplash), `AboutHero` photo (Unsplash) all flagged with TODO. Replace into `/public/...` and update `lib/constants.ts` when client supplies.
- ~~Storyblok token~~ — dropped in favour of Sanity, no rotation needed.
- **Confirm spam protection on Formspree form `mvzloknk`** (CAPTCHA / Akismet in Formspree dashboard).

### B. New pages remaining
~~1. `/blog` — listing page.~~
~~2. `/blog/[slug]` — article template.~~
Both shipped (2026-05-13). Powered by Sanity CMS (`web/sanity/`).

### C. Phase 2
~~Sanity CMS for blog~~ — **done**. Case studies CMS integration still pending. Custom domain + Cloudflare Pages deployment; Cloudflare Web Analytics (just set the `NEXT_PUBLIC_CF_BEACON_TOKEN` env var to activate the already-wired script).

---

## Recent session highlights

**2026-05-11 — Hero rework + /servicos consolidation + component inventory + button rules**
- **Hero section rebuilt** (`components/sections/Hero.tsx`): light-blue bg, `h-[88vh] min-h-[640px]`. Two responsive layouts:
  - **≥1440px** — 4 asymmetric absolute cards (`hero-floats`). CSS dual-animation: `hero-card-in` entrance (800ms) then `hero-float` (6s loop), `animation-fill-mode: both, none` sequences them without transform conflict. Hover pauses float. Cards use `group`/`group-hover` for nested lift + shadow.
  - **<1440px** — 2 overlapping 16:9 cards (`hero-stack`) below the CTAs. Width-matched to the button row via `w-full max-w-[420px]`. `aspect-[20/7]` container creates a diagonal stagger (`top-0 left-0` / `bottom-0 right-0`). Entrance-only `hero-card-in` — no continuous float.
  - Two ambient blobs (`hero-blob-a/b`) drift in opposite directions (14s/16s). All CSS-only, reduced-motion safe.
  - Heading split: `hero.heading` (with `whitespace-pre-line`) + `hero.headingSecondary` as two `<span className="block">`. Subtitle in 3 lines via `\n`.
  - Shared `FloatCard` helper handles both layouts. Per-card layout data collapsed into a single `classes` field on `floatingImages`.
- **`/servicos/[slug]` routes deleted** — 5 dynamic detail pages collapsed into alternating sections directly on `/servicos`. `ServicesPageGrid` replaced by `ServicesPageSections` (one `<section id={slug}>` per service, alternating `bg-white`/`bg-light-blue`, included items grid, inline FAQ accordion). Deleted: `ServicesPageGrid.tsx`, `ServiceDetailHero.tsx`, `ServiceIncluded.tsx`, `ServiceProcess.tsx`, `app/servicos/[slug]/page.tsx`. `app/sitemap.ts` simplified to 5 static pages.
- **Service cards on home page unlinked** — 5 white cards converted from `<Link>` to `<div>` (no hover arrow). Only the navy CTA card remains clickable (`/servicos`).
- **Branding portfolio teaser** — only the branding service section gets a portfolio CTA. Text: "Curioso para ver exemplos? Dê uma vista de olhos ao portfólio do nosso parceiro de design." Uses `external` prop on `LinkButton`.
- **`LinkButton` `external` prop** — new `external?: boolean` on `LinkButtonProps`; renders `target="_blank" rel="noopener noreferrer"` when set.
- **Button variant rule established** — on `bg-light-blue` section backgrounds, use `variant="dark"` (navy). Applied to `ServicesPageSections` branding CTA.
- **Component inventory** — `web/DESIGN_SYSTEM.md` Section 13 added: 35 components listed with `REUSABLE`/`LAYOUT`/`PAGE-SECTION`/`CROSS-PAGE`/`SECTION HELPER` tags and a Quick decision guide (§13.8).
- **`/simplify` passes** — `transition-all` → `transition-[transform,box-shadow]` on service items; `brandingPortfolio` hoisted to module scope; per-service CTAs removed; `will-change` dropped from one-shot stack animation; `position`/`size`/`layer` className fields collapsed to single `classes`.

**2026-05-10 — Audit fixes + SEO/legal + Cloudflare prep + service page polish + security hardening**
- Site-wide `/audit` pass cleared the P0/P1 backlog: framer-motion removed; `next/image` + WebP conversion (4.6 MB → 327 KB across hero/team/case-studies); 44 px touch targets on Footer socials and mobile nav; stable list keys; inline-style cleanup; `text-orange` → `text-orange-text` for AA contrast on body; full ESLint set-state-in-effect cleanup with justified disables.
- SEO + legal: `app/robots.ts`, `app/sitemap.ts`, branded `not-found` / `error` / `global-error` pages, `LocalBusiness` / `Service` / `BreadcrumbList` / `FAQPage` JSON-LD (`Breadcrumbs` auto-prepends Início), `/politica-privacidade` RGPD page, dismissible `CookieBanner`.
- Cloudflare Pages prep: `next.config.ts` `images.unoptimized: true`, `CloudflareAnalytics` (`next/script`, env-gated), `public/_headers` with HSTS + frame-deny + CSP scoped to self/Formspree/CF Insights/Google Fonts.
- Security hardening: `lib/jsonLd.ts` `safeJsonLd()` helper escapes `<` so JSON-LD strings can't break out of `<script>` tags — swapped at all four call sites. Confirmed `.env.local` never tracked, no high-entropy secrets in repo, no XSS surface beyond JSON-LD (now defended).
- Sub-page changes:
  - `/quem-somos` — `AboutTeam` + `AboutValues` united into one `AboutTeamValues` section: founders left (figure-style, no card chrome), values as a numbered manifesto on the right with hover/focus tie-line (matching founder gets ring + lift, value gets orange left bar + icon flip).
  - `/servicos` — hero promoted: label eyebrow, soft orange/navy radial blobs in the background, clickable service-tag pills under the intro that anchor-scroll to cards.
  - `/servicos/[slug]` — `ServiceProcess` rebuilt to mirror home `HowItWorks` (PROCESSO eyebrow + gradient connector rail + ring-cream circles); `ServiceIncluded` converted from flat checklist to 3-up `bg-light-blue` card grid with white check tiles.
  - `BookingSystem` teaser — CTA moved below the widget.
  - `BookingWidget` extracted to `components/ui/BookingWidget.tsx` and reused by `BookingSystem` and `SolucaoHero` (which now floats it over the hero photo).
  - `BlogPreview` — reduced to 2 articles with real titles + Unsplash covers; cards now carry `image: { src, alt }` in `constants.ts`.
- Footer: Navegação column auto-grids to 2 cols when `> 4` links.

**2026-05-08 — CMS wiring removed + BookingSystem teaser polish**
- Deleted all CMS wiring (previously Storyblok, previously Sanity). Phase 2 will use **Sanity** — start fresh inside `web/` when ready.
- Also re-deleted the orphan root scaffold that had reappeared (`/node_modules`, `/package.json`, `/package-lock.json`).
- `BookingSystem` teaser stays single-column at all breakpoints (text → CTA → widget). Earlier 2-col attempts at `lg`/`xl` cramped the heading and date fields; reverted. Added `whitespace-nowrap` to `DateField` values defensively.

**2026-05-06 — landing-page polish + sub-page UX**
- Demoted home `BookingSystem` to a teaser (heading + 1-line copy + CTA → `/a-nossa-solucao` ‖ widget mockup); stats + 6 feature cards now live exclusively on `/a-nossa-solucao`.
- `ContactCTA` got a `FoundersIntro` strip (avatars + names from `aboutPage.team.members`, mailto link).
- New `ScrollProgress` (rAF-throttled, no state) + `PageTOC` (consumes `useActiveSection`) wired on `/a-nossa-solucao`. Section IDs added.
- Type token split: `--text-card-title: 19px` for card h3s; `--text-display-xs: 22px` keeps sub-heading duty.
- Service home cards now `<Link href="/servicos/${slug}">`. `services` exported `as const` so `card.icon` types narrow without casts.
- `app/opengraph-image.tsx` (1200×630, navy gradient + orange accent) + `metadata.openGraph` + Twitter card. Static at build time (dropped edge runtime).

**2026-05-13 — Sanity CMS blog + Quem Somos redesign + card animations**
- **Sanity CMS integrated** (`web/sanity/`). Project ID `vsbvopiy`, dataset `blog-post` (public). Client in `sanity/lib/client.ts`, GROQ queries + types in `sanity/lib/queries.ts`. `React.cache()` deduplicates fetches across `generateMetadata` + page component.
- **`/blog` listing page** — navy hero strip (`bg-navy pt-page-top`), cream 3-col card grid, orange-text date labels, editorial hover cards. Graceful empty + error states.
- **`/blog/[slug]` article page** — 780px centered column, contained `aspect-[16/9]` hero image with `rounded-card-lg` (white-framed pattern dropped in favour of contained layout), category pills, Bricolage Grotesque title, meta strip, `PortableText` body, `ScrollProgress` bar, `ContactCTA` + `Footer`.
- **`PortableText` component** (`components/seo/PortableText.tsx`) — custom renderer supporting h1/h2/h3, blockquote (cream bg + decorative quote mark — no banned `border-left`), inline strong/em, images.
- **`AboutTeamValues` redesigned** (`/quem-somos`) — layout changed from left/right split to full-width vertical stacks: 2 founder figures in a horizontal row (`max-w-[860px]`, `aspect-[5/4]`, `bg-white p-2` frame), 3 value cards in a horizontal row (white `rounded-card`, icon + title row, description, hover lift). Numbers removed from value cards. Hover tie-line interaction removed.
- **Card hover animations** — `hover:-translate-y-1 hover:shadow-card-hover transition-[transform,box-shadow] duration-slow` added to all service cards on landing page (previously only the navy CTA card had it). Same on value cards in `/quem-somos`.

**Last updated:** 2026-05-13
