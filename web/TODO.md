# Reserva Direta — TODO

Backlog of known fixes and follow-ups. Group by priority. Tick as you go.

---

## P0 — Blockers

- [x] **Mobile navigation.** Hamburger button (md:hidden) + drop-down panel below the 72px bar containing the four navItems and the "Agendar Reunião" CTA. `aria-expanded` / `aria-controls`, Escape closes + returns focus to toggle, click-outside closes, body scroll locked while open, panel auto-closes on `pathname` change. Desktop CTA bumped from `sm:` → `md:` so the 640–768 dead zone is gone.

## P1 — High impact

- [x] **`/a-nossa-solucao` repeats the home BookingSystem.** Home `BookingSystem` demoted to a 1-screen teaser (heading + mockup + CTA → `/a-nossa-solucao`). Stats + 6 feature cards live exclusively on the sub-page (`SolucaoStats`, `SolucaoFeatures`).
- [x] **Section pattern monotony.** Declared resolved.
- [x] **Real case-study content.** Declared resolved.
- [x] **Real blog content.** Declared resolved.
- [x] **Real images for new pages.** Declared resolved.
- [x] **`NEXT_PUBLIC_FORMSPREE_ID`** env var — wired in `.env.local` (`mvzloknk`). Also added to Vercel.

## P2 — Polish

- [x] **Form a11y + recovery.** `aria-live="polite"` status region, email fallback (`agenciareservadireta@gmail.com`) in error state, `+351 XXX XXX XXX` mask on phone, orange asterisks on all four required labels, `comentario` now required, Formspree `_gotcha` honeypot. WhatsApp fallback deferred — no number available.
- [~] **CTAs differentiation.** BookingSystem CTA → `/a-nossa-solucao` ✓. Service cards → `/servicos` (navy CTA card) ✓. "Agendar Reunião" → Calendly still blocked: no Calendly URL.
- [x] **Footer Navegação column missing pages.** Added `/a-nossa-solucao` (`/quem-somos` was already present).
- [x] **Footer "Lisboa, Portugal" link is `href="#"`** (dead). Now rendered as plain text via a `text[]` field on the Contacto column.
- [x] **Orange label contrast (systemic).** Introduced `--color-orange-text: #A8580A` (4.95:1 on white, passes WCAG AA). Renamed all `text-orange` → `text-orange-text` site-wide (18 files, includes section eyebrows, navbar active state, link CTAs, checkmark icons, FAQ accordion glyphs, stat cards). Brand `--color-orange` (`bg-orange`) preserved for fills, button surfaces, focus rings, and the `.text-highlight` decorative sweep.
- [x] **Add tooltips/glossary for jargon.** Shipped via `Tooltip` + `lib/glossary.ts` `withGlossary()` helper (PCI Compliant, Channel Manager, OTAs, Premier Connectivity Partner, etc.).
- [x] **Human element before the form.** `FoundersIntro` strip inside `ContactCTA` above the form: João + Sebastião avatars, "respondem pessoalmente em 24 horas", direct mailto link.
- [x] **Card title hierarchy.** `Services.tsx` and `BlogPreview.tsx` card `h3`s bumped to `text-display-xs` (22px) to match CaseStudies cards.
- [x] **Two "Descobre mais…" CTAs.** BookingSystem CTA relabelled to "Falar connosco sobre reservas diretas" so it reads as a contact action distinct from Services' discovery CTA.
- [x] **Footer column titles.** Restored uppercase `tracking-label` on "Contacto" and "Navegação".
- [x] **Hero column balance at `lg`.** Added `shadow-card-hover` to the image.

## P3 — Nice to have

- [x] **`bookingSystem.heading` split via `<br />`** — collapsed to a single string with `text-balance` on the h2.
- [x] **BookingWidget mockup polish.** Check-In `26 Sex 2026` / Check-Out `30 Ter 2026` (PT day abbreviations, 4-night span).
- [x] **`focus-visible` ring on the FAQ trigger button.** Orange ring with white offset.
- [x] **Skip-to-content link in `layout.tsx`.** Targets `#main`; each page's existing `<main>` got `id="main"` + `tabIndex={-1}`.
- [x] **`text-display-xs` double duty** — added `--text-card-title: 19px` token. Card titles in Services/BlogPreview/CaseStudies/AboutValues/AboutTeam/SolucaoFeatures/ServicesPageGrid bumped to `text-card-title`; sub-headings keep `text-display-xs` (22px).
- [x] **Scroll-progress indicator on long sub-pages.** `ScrollProgress` (thin orange bar, top-fixed) wired on `/a-nossa-solucao`.
- [x] **Anchored TOC on long sub-pages.** `PageTOC` (fixed left rail, 2xl-only) wired on `/a-nossa-solucao` with 6 section anchors and active-section highlight.
- [x] **"Expand all" on FAQ.** Multi-open accordion with "Expandir todas / Recolher todas" toggle.
- [x] **`schema.org` markup.** `LocalBusiness` JSON-LD in `app/layout.tsx` (name, url, email, address, areaServed, sameAs socials).
- [x] **OG image set** via `app/opengraph-image.tsx` (1200×630 navy gradient + orange accent, generated with `next/og` `ImageResponse`). `metadata.openGraph` + Twitter card wired in `app/layout.tsx`.
- [x] **Navbar active-section indicator.** Added `useActiveSection` hook + orange underline.
- [x] **Hover translate timidity.** Bumped card hover translates from `-translate-y-0.5` → `-translate-y-1`.

---

## New pages

- [x] `/quem-somos` — about page (AboutHero, **AboutTeamValues** [united section], ContactCTA, Footer). Team photos shipped.
- [x] `/politica-privacidade` — RGPD-compliant privacy policy. Linked from Footer + CookieBanner.
- [x] `/servicos` — services overview page (ServicesPageHero, ServicesPageGrid).
- [x] `/a-nossa-solucao` — booking-engine deep dive (SolucaoHero, SolucaoStats, SolucaoSteps, SolucaoFeatures, SolucaoTrust).
- [x] `/casos-de-uso` — real client showcase (UseCasesGoogle 3-col grid + UseCasesBooking vertical stack), each ending in a `StatCard` with count-up stat (−€10 / 1–2 weeks) and `text-highlight` punchline. Uses real screenshots in `public/use-cases/` (compressed to ~280–390 KB).
- [x] `/servicos/[slug]` — ~~5 service detail pages~~ **Deleted 2026-05-11** — content consolidated into `/servicos` as alternating sections (`ServicesPageSections`).
- [x] `/blog` — listing page (3-col grid). Powered by Sanity CMS.
- [x] `/blog/[slug]` — article template. 780px centered column, contained image, PortableText body.

---

## Phase 2

- [x] **Sanity CMS** for blog. Project `vsbvopiy`, dataset `blog-post` (public). Case studies CMS integration still pending.
- [ ] **Sanity CMS** for case studies.
- [ ] **Cloudflare Pages deployment** + custom domain. Site is already configured for it: `next.config.ts` `images.unoptimized: true`, `public/_headers` with HSTS + CSP + frame-deny, `CloudflareAnalytics` script wired but env-gated on `NEXT_PUBLIC_CF_BEACON_TOKEN`.
- [ ] **Cloudflare Web Analytics** — flip the env var once a CF beacon token is provisioned.
- [x] **Connect to GitHub.** Repo: `github.com/Daniel-Grita/Reserva-Directa`.
- [x] **Vercel deployment.** Auto-deploys on push to `main` (current). Migrating to Cloudflare Pages.

---

## Open follow-ups (out-of-band, can't be fixed in code)

- [x] **Storyblok token** — never used, no rotation needed. Storyblok dropped in favour of Sanity.
- [ ] **Confirm spam protection on Formspree form `mvzloknk`** (CAPTCHA / Akismet in Formspree dashboard).
- [ ] **Replace placeholder images** with real client art: 4× Hero floating cards (Unsplash hotel rooms in `constants.ts` `floatingImages`), `SolucaoHero` photo (picsum), 2 blog covers (Unsplash), `AboutHero` photo (Unsplash). Drop into `/public/...` and update `lib/constants.ts`.
- [ ] **Calendly URL** — "Agendar Reunião" still posts to `#contacto`; swap when client provides URL.

---

## 2026-05-10 batch (this session)

Big audit + content + Cloudflare prep + security pass. Highlights:

- **Audit fixes:** P0/P1 backlog cleared. Removed framer-motion (~80 KB). Hero/SolucaoHero/AboutHero/BlogPreview/CaseStudies converted to `next/image` or got proper `sizes` attrs. PNG → WebP across `/public` (4.6 MB → 327 KB, 93% reduction). 44 px touch targets on Footer socials + mobile nav. Stable list keys throughout. ESLint set-state-in-effect cleared with justified disables. `text-orange` → `text-orange-text` site-wide for AA contrast on body text.
- **SEO + legal:** `app/robots.ts`, `app/sitemap.ts`, branded `not-found` / `error` / `global-error` pages. JSON-LD: `LocalBusiness` (layout), `Service` (`/servicos/[slug]`), `BreadcrumbList` (`Breadcrumbs` auto-prepends Início), `FAQPage` (FAQ). `/politica-privacidade` page + dismissible `CookieBanner`.
- **Cloudflare prep:** `next.config.ts` `images.unoptimized: true`, `CloudflareAnalytics` (`next/script` + env-gated), `public/_headers` with HSTS + frame-deny + nosniff + Referrer-Policy + Permissions-Policy + CSP scoped to self/Formspree/CF Insights/Google Fonts.
- **Security hardening:** `lib/jsonLd.ts` `safeJsonLd()` escapes `<` so JSON-LD strings can't break out of `<script>` — applied at all four call sites. Audit confirmed: no high-entropy secrets in repo, `.env.local` never tracked, no XSS surface beyond JSON-LD (now defended).
- **Content + sub-page polish:**
  - `/quem-somos` — `AboutTeam` + `AboutValues` united into `AboutTeamValues` (founders left, values as numbered manifesto right with hover/focus tie-line).
  - `/servicos` — hero promoted with label eyebrow, soft radial blobs in the background, and clickable service-tag pills that anchor-scroll to cards.
  - `/servicos/[slug]` — `ServiceProcess` rebuilt to mirror home `HowItWorks` (PROCESSO eyebrow + gradient connector rail + ring-cream circles); `ServiceIncluded` converted from flat checklist to 3-up `bg-light-blue` card grid with white check tiles.
  - `BookingSystem` teaser — CTA moved below the widget; `BookingWidget` extracted to `components/ui/BookingWidget.tsx` and reused by `BookingSystem` + `SolucaoHero` (which floats it over the hero photo).
  - `BlogPreview` — reduced to 2 articles with real titles + Unsplash covers; cards now carry `image: { src, alt }`.
  - Site-wide copy: replaced Booking.com / Airbnb mentions with neutral "OTAs"; team cards trimmed to name + Fundador; Problem cards refactored to `− Receitas` / `+ Receitas`; Services swap CultBooking → Motor de Reserva.
  - Footer Navegação column auto-grids to 2 cols when `> 4` links.

---

## 2026-05-11 batch (this session)

Hero rework + `/servicos` consolidation + component inventory:

- **Hero floating cards**: Two responsive layouts. ≥1440px: 4 asymmetric absolute cards (`hero-floats`) with CSS dual-animation (entrance + float loop, hover pauses). <1440px: 2 overlapping 16:9 cards (`hero-stack`) below the CTAs, `w-full max-w-[420px]`, entrance-only animation. Ambient blob drift. Reduced-motion safe. Shared `FloatCard` helper.
- **`/servicos/[slug]` routes deleted**: 5 detail pages merged into `/servicos` alternating sections (`ServicesPageSections`). Deleted `ServicesPageGrid`, `ServiceDetailHero`, `ServiceIncluded`, `ServiceProcess`, `/servicos/[slug]/page.tsx`. Sitemap simplified to 5 static pages.
- **Service cards on home page**: 5 white cards converted `<Link>` → `<div>` (no link). Only navy CTA card links to `/servicos`.
- **`LinkButton` `external` prop**: renders `target="_blank" rel="noopener noreferrer"`.
- **Button variant rule**: use `variant="dark"` on `bg-light-blue` backgrounds.
- **Component inventory**: `DESIGN_SYSTEM.md` Section 13 — 35 components tagged + Quick decision guide.

---

---

## 2026-05-13 batch — audit fixes (this session)

Code audit (15→16/20 corrected after finding skip link already existed). All P1/P2 findings fixed:

- **Hero LCP priority**: `FloatCard` now accepts `priority` prop. Passed to first 2 floating images (desktop) + first stack image (mobile) — browser now emits `<link rel="preload">` for the LCP candidate.
- **Hamburger touch target**: `w-10 h-10` (40px) → `w-11 h-11` (44px) in `Navbar.tsx`. Meets WCAG 2.5.5.
- **`transition-all` → targeted**: `BlogPreview.tsx` card now uses `transition-[transform,box-shadow]`, matching every other card on the site.
- **`text-body` undefined token**: `AboutTeamValues.tsx:58` — corrected to `text-body-base`.
- **Hero blob animations on mobile**: Disabled via `@media (max-width: 1023px)` in `globals.css` — stops continuous `blur-3xl` GPU repaint on phones where the float layout is hidden anyway.
- **FoundersIntro glassmorphism**: `bg-white/5 border border-white/10` glass box replaced with a clean `border-b border-white/15 pb-8` separator in `ContactCTA.tsx`.
- **CLAUDE.md section order**: Corrected to match actual `page.tsx` order (FAQ → BlogPreview).

---

## 2026-05-13 batch — Sanity + redesign (this session)

Sanity CMS blog integration + Quem Somos redesign + card animations:

- **Sanity CMS live** for `/blog` + `/blog/[slug]`. Dataset was private — fixed to public. `React.cache()` deduplicates Sanity fetches. Custom `PortableText` renderer (h1–h3, blockquote, inline marks, images). `estimateReadTime()` util for read-time meta.
- **`/blog` listing page**: navy hero strip, cream 3-col grid, orange date labels, hover cards. Graceful empty/error states.
- **`/blog/[slug]` article page**: 780px centered column, contained `aspect-[16/9]` image with `rounded-card-lg`, category pills, title, meta strip, body, `ScrollProgress` bar.
- **`AboutTeamValues` redesigned**: founders in horizontal 2-col row (`aspect-[5/4]`, `bg-white p-2` frame matching Hero FloatCard style); values in horizontal 3-col card row. Hover tie-line and numbered values removed.
- **Card hover lift**: `hover:-translate-y-1 hover:shadow-card-hover` added to all 5 service cards on home landing page + 3 value cards on `/quem-somos`.

**Last updated:** 2026-05-13 (post-audit)
