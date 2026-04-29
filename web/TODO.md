# Reserva Direta — TODO

Backlog of known fixes and follow-ups. Group by priority. Tick as you go.

---

## P1 — High impact

- [ ] **Section pattern monotony.** Five sections in a row (BookingSystem → Services → BlogPreview, plus the bookings inner cards) use the same "header + bordered white card grid" rhythm. At least one needs a structurally different layout (e.g. BlogPreview as a featured-article + 2 secondaries, or Services as an asymmetric mosaic). *Deferred per session decision — revisit when client copy lands.*
- [ ] **Real case-study content.** Replace the anonymous "Quinta no Norte / Apartamento Urbano / Hotel de Charme" titles + teaser copy with real per-property descriptions and metrics once the client provides them.
- [ ] **`NEXT_PUBLIC_FORMSPREE_ID`** env var — wire `.env.local` once client provides the form ID. Form code is already done.
- [ ] **Real blog content.** Replace `picsum.photos` blog images and lorem-style titles with actual articles when ready.

## P2 — Polish

- [x] **Card title hierarchy.** `Services.tsx` and `BlogPreview.tsx` card `h3`s bumped to `text-display-xs` (22px) to match CaseStudies cards.
- [x] **Two "Descobre mais…" CTAs.** BookingSystem CTA relabelled to "Falar connosco sobre reservas diretas" so it reads as a contact action distinct from Services' discovery CTA. Services already points at `/servicos`; BookingSystem keeps `#contacto` until `/sistema-de-reservas` ships.
- [x] **Footer column titles.** Restored uppercase `tracking-label` on "Contacto" and "Navegação".
- [x] **Hero column balance at `lg`.** Added `shadow-card-hover` to the image to give the right column more visual weight.

## P3 — Nice to have

- [x] **Navbar active-section indicator.** Added `useActiveSection` hook (IntersectionObserver, `-40% / -55%` rootMargin band) and an orange underline that draws in under the active nav link. Observes `#servicos` and `#blog`; `#quem-somos` is gracefully ignored on the landing page until the route exists.
- [x] **Hover translate timidity.** Bumped all card hover translates from `-translate-y-0.5` (2px) → `-translate-y-1` (4px) across `Services`, `BlogPreview`, `Problem` panels; CaseStudies was already at `-1`. DESIGN_SYSTEM.md updated.

---

## New pages (from CLAUDE.md week-of-26 roadmap)

- [ ] `/sistema-de-reservas` — deep dive on the booking engine (CultBooking detail, 4-step "Como funciona", 6 feature cards, Channel Manager note, "Tecnologia de confiança" with Booking.com Premier Partner / Cultuzz / 450+ channels). Will replace the current `#contacto` stub link.
- [ ] `/quem-somos` — about page. Team: João Brazão (JB), Sebastião Gomes (SG). Awaiting team photos.
- [ ] `/servicos/[slug]` — 5 service detail pages (branding, website, marketing-digital, tecnologia, fidelizacao). Pattern: hero · what's included · how it works · pricing (if applicable) · FAQ · contact CTA.
- [ ] `/blog` — listing page (3-col grid).
- [ ] `/blog/[slug]` — article template.

---

## Phase 2 (after this week)

- [ ] **Connect to GitHub.** Project root isn't a git repo yet (`git status` returns "fatal: not a git repository"). Decide: init at root or just inside `web/`? Create new GitHub repo or push to existing one? Needs `gh auth login` interactively first.
- [ ] **Sanity CMS** for blog + case studies.
- [ ] **Vercel deployment** + custom domain.
- [ ] **Analytics** (Vercel Analytics or GA).

---

**Last updated:** 2026-04-27
