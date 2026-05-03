# Reserva Direta — TODO

Backlog of known fixes and follow-ups. Group by priority. Tick as you go.

---

## P0 — Blockers

- [x] **Mobile navigation.** Hamburger button (md:hidden) + drop-down panel below the 72px bar containing the four navItems and the "Agendar Reunião" CTA. `aria-expanded` / `aria-controls`, Escape closes + returns focus to toggle, click-outside closes, body scroll locked while open, panel auto-closes on `pathname` change. Desktop CTA bumped from `sm:` → `md:` so the 640–768 dead zone is gone.

## P1 — High impact

- [ ] **`/a-nossa-solucao` repeats the home BookingSystem.** `SolucaoStats` reuses `bookingSystem.trustBadges`, `SolucaoFeatures` reuses `bookingSystem.features.cards`, `SolucaoSteps` reuses `bookingSystem.process.steps`. Demote home `BookingSystem` to a 1-screen teaser linking to `/a-nossa-solucao`; move stats + 6 feature cards exclusively to the sub-page.
- [ ] **Section pattern monotony.** Six sections (Services, AboutValues, SolucaoFeatures, BlogPreview, CaseStudies, ServicesPageGrid) all run the same icon-square-title-body recipe in `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`. Differentiate at least two with asymmetric/editorial layouts (e.g. AboutValues as a horizontal row of icon+text without tinted cards; SolucaoFeatures as a 2-col split with a featured first card; BlogPreview as featured article + 2 secondaries).
- [ ] **Real case-study content.** Replace the anonymous "Quinta no Norte / Apartamento Urbano / Hotel de Charme" titles + teaser copy with real per-property descriptions and metrics once the client provides them.
- [ ] **Real blog content.** Replace `picsum.photos` blog images and placeholder titles with actual articles when ready.
- [ ] **Real images for new pages.** Swap picsum/Unsplash placeholders in `servicesPage.cards[].image`, `solucaoPage.hero.image`, `aboutPage.hero.image` with real photos when client delivers.
- [x] **`NEXT_PUBLIC_FORMSPREE_ID`** env var — wired in `.env.local` (`mvzloknk`). Also added to Vercel.

## P2 — Polish

- [x] **Form a11y + recovery.** `aria-live="polite"` status region, email fallback (`agenciareservadireta@gmail.com`) in error state, `+351 XXX XXX XXX` mask on phone, orange asterisks on all four required labels, `comentario` now required, Formspree `_gotcha` honeypot. WhatsApp fallback deferred — no number available.
- [~] **CTAs differentiation.** BookingSystem CTA → `/a-nossa-solucao#contacto`. Remaining: Service "Saber mais" → `/servicos/[slug]` (blocked: routes don't exist yet); "Agendar Reunião" → Calendly (blocked: no Calendly URL).
- [x] **Footer Navegação column missing pages.** Added `/a-nossa-solucao` (`/quem-somos` was already present).
- [x] **Footer "Lisboa, Portugal" link is `href="#"`** (dead). Now rendered as plain text via a `text[]` field on the Contacto column.
- [x] **Orange label contrast (systemic).** Introduced `--color-orange-text: #A8580A` (4.95:1 on white, passes WCAG AA). Renamed all `text-orange` → `text-orange-text` site-wide (18 files, includes section eyebrows, navbar active state, link CTAs, checkmark icons, FAQ accordion glyphs, stat cards). Brand `--color-orange` (`bg-orange`) preserved for fills, button surfaces, focus rings, and the `.text-highlight` decorative sweep.
- [ ] **Add tooltips/glossary for jargon.** "PCI Compliant", "Channel Manager", "OTAs", "Premier Connectivity Partner" need translation for non-technical owners (Sofia persona).
- [ ] **No human element before the form.** Surface a face/name/phone/WhatsApp on the landing page before the contact section. Sofia's biggest fear is "another vendor that doesn't return calls".
- [x] **Card title hierarchy.** `Services.tsx` and `BlogPreview.tsx` card `h3`s bumped to `text-display-xs` (22px) to match CaseStudies cards.
- [x] **Two "Descobre mais…" CTAs.** BookingSystem CTA relabelled to "Falar connosco sobre reservas diretas" so it reads as a contact action distinct from Services' discovery CTA.
- [x] **Footer column titles.** Restored uppercase `tracking-label` on "Contacto" and "Navegação".
- [x] **Hero column balance at `lg`.** Added `shadow-card-hover` to the image.

## P3 — Nice to have

- [x] **`bookingSystem.heading` split via `<br />`** — collapsed to a single string with `text-balance` on the h2.
- [x] **BookingWidget mockup polish.** Check-In `26 Sex 2026` / Check-Out `30 Ter 2026` (PT day abbreviations, 4-night span).
- [x] **`focus-visible` ring on the FAQ trigger button.** Orange ring with white offset.
- [x] **Skip-to-content link in `layout.tsx`.** Targets `#main`; each page's existing `<main>` got `id="main"` + `tabIndex={-1}`.
- [ ] **`text-display-xs` (22px) double duty** as both card title and section sub-heading. Introduce a distinct token or bump cards down a step.
- [ ] **No scroll-progress indicator on long sub-pages** (`/a-nossa-solucao` is ~6 sections).
- [ ] **No anchored TOC on long sub-pages.**
- [x] **"Expand all" on FAQ.** Multi-open accordion with "Expandir todas / Recolher todas" toggle.
- [x] **`schema.org` markup.** `LocalBusiness` JSON-LD in `app/layout.tsx` (name, url, email, address, areaServed, sameAs socials).
- [ ] **OG image not set** in `layout.tsx`. Add for social sharing previews.
- [x] **Navbar active-section indicator.** Added `useActiveSection` hook + orange underline.
- [x] **Hover translate timidity.** Bumped card hover translates from `-translate-y-0.5` → `-translate-y-1`.

---

## New pages

- [x] `/quem-somos` — about page (AboutHero, AboutTeam, AboutValues, ContactCTA, Footer). Team photos shipped.
- [x] `/servicos` — services overview page (ServicesPageHero, ServicesPageGrid).
- [x] `/a-nossa-solucao` — booking-engine deep dive (SolucaoHero, SolucaoStats, SolucaoSteps, SolucaoFeatures, SolucaoTrust).
- [x] `/casos-de-uso` — real client showcase (UseCasesGoogle 3-col grid + UseCasesBooking vertical stack), each ending in a `StatCard` with count-up stat (−€10 / 1–2 weeks) and `text-highlight` punchline. Uses real screenshots in `public/use-cases/` (compressed to ~280–390 KB).
- [ ] `/servicos/[slug]` — 5 service detail pages (branding, website, marketing-digital, tecnologia, fidelizacao). Pattern: hero · what's included · how it works · pricing (if applicable) · FAQ · contact CTA.
- [ ] `/blog` — listing page (3-col grid).
- [ ] `/blog/[slug]` — article template.

---

## Phase 2

- [ ] **Sanity CMS** for blog + case studies.
- [ ] **Custom domain** on Vercel.
- [ ] **Analytics** (Vercel Analytics or GA).
- [x] **Connect to GitHub.** Repo: `github.com/Daniel-Grita/Reserva-Directa`.
- [x] **Vercel deployment.** Auto-deploys on push to `main`.

---

**Last updated:** 2026-05-03
