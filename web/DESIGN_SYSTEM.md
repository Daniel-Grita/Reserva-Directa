# Reserva Direta — Design System

Source of truth for tokens and component variants. **Tailwind v4** — there is no `tailwind.config.ts`; all tokens live in the `@theme {}` block in `app/globals.css`. **Every value in code should map to a token below.** No hex literals, no inline `fontFamily` styles, no magic numbers in section components.

---

## 1. Color tokens

### Primitives — exact hex, defined once
| Token | Hex | Tailwind class | CSS var |
|---|---|---|---|
| `navy` | `#002F6D` | `bg-navy` `text-navy` | `--navy` |
| `orange` | `#FF9202` | `bg-orange` (fills only) | `--orange` |
| `orange-text` | `#A8580A` | `text-orange-text` (text/icons on light bg, ≥4.5:1 vs white) | `--orange-text` |
| `cream` | `#FAEFE0` | `bg-cream` | `--cream` |
| `light-blue` | `#F0F4FF` | `bg-light-blue` | `--light-blue` |
| `footer-bg` | `#0F1015` | `bg-footer-bg` | `--footer-bg` |
| `booking-blue` | `#3F7EE8` | `bg-booking-blue` | `--booking-blue` |
| `n-100` | `#F0F2F5` | `bg-n-100` | `--n-100` |
| `n-150` | `#F8F9FA` | `bg-n-150` | `--n-150` *(NEW — replaces hardcoded `#F8F9FA` in BookingSystem/FAQ)* |
| `n-200` | `#E4E6EB` | `border-n-200` | `--n-200` |
| `n-300` | `#D1D5DB` | `bg-n-300` | `--n-300` *(NEW — placeholder image background)* |
| `n-400` | `#BEC3CC` | `text-n-400` | `--n-400` |
| `n-600` | `#65676B` | `text-n-600` | `--n-600` |
| `n-900` | `#1C1E21` | `text-n-900` | `--n-900` |
| `white` | `#FFFFFF` | `bg-white` | `--white` |
| `success-bg` | `#DCFCE7` | `bg-success-bg` | `--success-bg` |
| `success-fg` | `#166534` | `text-success-fg` | `--success-fg` |
| `error-bg` | `#FEE2E2` | `bg-error-bg` | `--error-bg` |
| `error-fg` | `#991B1B` | `text-error-fg` | `--error-fg` |

### Semantic aliases — what to actually use in components
| Role | Token | Use case |
|---|---|---|
| **Brand primary** | `navy` | Headings, logo, primary text emphasis, dark surfaces |
| **Brand accent** | `orange` | CTAs, links, section labels, numbered steps, focus ring, comparison-panel positive number |
| **Surface / page** | `white` | Default page background (Problem, HowItWorks, FAQ) |
| **Surface / cream** | `cream` | Services, BlogPreview |
| **Surface / cool** | `light-blue` | Hero, BookingSystem, CaseStudies, Problem comparison panel (negative) |
| **Surface / sunken** | `n-150` | FAQ open panel, ContactCTA form inputs |
| **Surface / dark** | `navy` | ContactCTA, Services CTA card, Problem comparison panel (positive), social-icon hover bg |
| **Surface / footer** | `footer-bg` | Footer only |
| **Surface / accent** | `booking-blue` | BookingSystem widget mockup background only |
| **Text / primary** | `n-900` | Body copy on light surfaces |
| **Text / secondary** | `n-600` | Subtitles, descriptions, fine print |
| **Text / on-dark** | `white` | Body on navy/footer-bg |
| **Text / on-dark muted** | `white/60` – `white/70` | Subtitles, secondary text on navy / footer-bg |
| **Border / default** | `n-200` | Cards, inputs, dividers |
| **Placeholder image** | `n-300` | Image-not-yet boxes (rare now) |

### Rules
- **No hex literals in JSX/CSS classes.** Always use the Tailwind class or CSS var. Replace every `bg-[#F0F4FF]`, `text-[#65676B]`, `border-[#E4E6EB]`, `bg-[#F8F9FA]`, `bg-[#D1D5DB]` with the equivalent token.
- Opacity uses Tailwind's `/N` syntax: `text-white/70`, `bg-orange/50`.

---

## 2. Typography

### Font families
| Variable | Family | Tailwind class | Use |
|---|---|---|---|
| `--font-bricolage` | Bricolage Grotesque | `font-display` | All headings, numbers, accents |
| `--font-figtree` | Figtree | `font-body` | Body, labels, buttons, inputs |

> **Stop using `style={{ fontFamily: 'var(--font-bricolage)' }}` everywhere.** Use `font-display` and `font-body` Tailwind classes. Set `font-body` on `<body>` once as the default; only add `font-display` where needed.

### Type scale
| Token | Size | Line-height | Weight | Tailwind | Use |
|---|---|---|---|---|---|
| `display-xl` | 64px (4rem) | 1.05 | 800 | `text-display-xl font-display` | Hero H1 (lg+) |
| `display-lg` | 48px | 1.1 | 800 | `text-display-lg font-display` | Hero H1 (mobile), Section H2 (lg+) |
| `display-md` | 40px | 1.15 | 700 | `text-display-md font-display` | Section H2 (mobile) |
| `display-sm` | 28px | 1.25 | 700 | `text-display-sm font-display` | H3 (large cards, process steps) |
| `display-xs` | 22px | 1.3 | 700 | `text-display-xs font-display` | H4 (card titles) |
| `body-lg` | 18px | 1.6 | 400 | `text-body-lg font-body` | Hero subtitle, ContactCTA subtitle |
| `body-base` | 16px | 1.6 | 400 | `text-body-base font-body` | Default paragraph |
| `body-sm` | 14px | 1.55 | 400 | `text-body-sm font-body` | Card descriptions, fine print |
| `label` | 12px | 1.5 | 700 | `text-label font-body uppercase tracking-label` | Section eyebrow ("O PROBLEMA") |
| `button` | 14px | 1 | 700 | `text-button font-body` | Buttons, nav links |
| `caption` | 12px | 1.5 | 400 | `text-caption font-body` | Footer copyright, microcopy |

### Letter spacing
- `tracking-label` = `0.15em` (uppercase eyebrow only)
- All other text: default tracking

### Hierarchy rule
- One H1 per page (Hero only).
- Each section gets one H2 + optional eyebrow `label`.
- Cards use H3/H4 — never H2.

---

## 3. Spacing scale

Use Tailwind defaults (`p-2` = 8px, `p-4` = 16px, etc.) but follow these semantic patterns:

### Section rhythm
| Token | Value | Use |
|---|---|---|
| `section-y` | 64px | Default section vertical padding |
| `section-y-lg` | 80px | Hero, ContactCTA, Footer |
| `section-y-sm` | 56px | Compact sections (rare) |
| `section-x` | 120px | Section horizontal padding (desktop) |
| Container max-width | 1200px | Inner content cap |

Responsive section-x: 120px ≥ 1024px → 64px ≥ 768px → 32px ≥ 640px → 24px (mobile).

### Within-section vertical spacing
- Between section header (label/heading/intro) and content grid: **64px** (`mb-16`)
- Between H2 and intro paragraph: **24px** (`mb-6`)
- Between eyebrow label and H2: **16px** (`mb-4`)
- Between cards in a grid: **32px** (`gap-8`)
- Between paragraphs in body copy: **16px** (`space-y-4`)

### Card internals
- Card padding: **32px** (`p-8`)
- Compact card padding: **24px** (`p-6`)
- Between card emoji/icon and title: **16px** (`mb-4`)
- Between title and description: **12px** (`mb-3`)

---

## 4. Border radius

| Token | Value | Use |
|---|---|---|
| `rounded-input` | 6px | Form inputs, status alerts |
| `rounded-btn` | 8px | Buttons |
| `rounded-faq` | 8px | FAQ items |
| `rounded-card` | 12px | Cards (service, blog, case study, feature) |
| `rounded-card-lg` | 16px | Large hero card / form card *(NEW)* |
| `rounded-full` | 9999px | Avatars, badges, icon circles |

---

## 5. Shadows *(new — currently undefined)*

| Token | Value | Use |
|---|---|---|
| `shadow-card` | `0 1px 2px rgba(28,30,33,0.04)` | Resting card |
| `shadow-card-hover` | `0 8px 24px rgba(28,30,33,0.08)` | Card hover |
| `shadow-cta` | `0 4px 14px rgba(255,146,2,0.25)` | Primary button hover |
| `shadow-nav` | `0 1px 0 rgba(0,0,0,0.04)` | Sticky navbar |

Use sparingly — flat surfaces are preferred. Reserve elevation for hover and the navbar.

---

## 6. Motion

| Token | Duration | Easing | Use |
|---|---|---|---|
| `duration-fast` | 150ms | `ease-out` | Hover color change |
| `duration-base` | 200ms | `ease-out` | Button hover, link underline |
| `duration-slow` | 400ms | `ease-out` | Card hover lift, accordion expand |
| `duration-reveal` | 600ms | `cubic-bezier(0.16,1,0.3,1)` | On-scroll fade-up |

Animations:
- `animate-fade-up` — opacity 0 → 1, translateY(20px → 0), duration-reveal.
- Use only `transform` and `opacity` (GPU-friendly, no layout thrash).

**SSR-safe rule:** any `animate-on-scroll` behavior MUST be implemented as a CSS-only `@keyframes` triggered by `IntersectionObserver` inside a Client Component. Do NOT use Framer Motion `whileInView` (caused hydration mismatch — see CLAUDE.md).

---

## 7. Focus & interaction states

| State | Style |
|---|---|
| Focus ring | `focus:outline-none focus:ring-2 focus:ring-orange/50 focus:ring-offset-2` |
| Disabled | `opacity-50 cursor-not-allowed` |
| Hover (links) | `hover:underline` (always) — never just color shift on links |
| Hover (cards) | `hover:shadow-card-hover hover:-translate-y-1` |
| Active (buttons) | `active:scale-[0.98]` |

---

## 8. Z-index scale

| Token | Value | Use |
|---|---|---|
| `z-base` | 0 | Default |
| `z-sticky` | 30 | Navbar |
| `z-overlay` | 40 | Backdrops |
| `z-modal` | 50 | Modals (future) |
| `z-toast` | 60 | Toasts (future) |

---

## 9. Layout

### Container
- Max width: **1200px** (`max-w-container`)
- Centered with auto margins
- Responsive horizontal padding (see Spacing § Section rhythm)

### Grid breakpoints (Tailwind defaults, used consistently)
| Breakpoint | Width | Behavior |
|---|---|---|
| `sm` | 640px | Tablet portrait |
| `md` | 768px | Tablet landscape — 2-col grids appear |
| `lg` | 1024px | Desktop — 3/4-col grids appear, full section-x kicks in |
| `xl` | 1280px | Large desktop |

### Standard grids
- 2-col split (Hero, Problem): `grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`
- 3-col cards (Services, BlogPreview, CaseStudies): `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- 4-col stepper (HowItWorks): `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12` — items left-aligned, connected by an orange gradient rail (not a card grid)
- 4-col stat row (BookingSystem trust badges): `grid-cols-2 lg:grid-cols-4 gap-4`
- 3-col footer: `grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12`

---

## 10. Component variants

### 10.1 Buttons (Pencil: `Button/*`)

| Variant | Background | Text | Border | Use |
|---|---|---|---|---|
| **Primary / Orange** | `orange` | `n-900` | none | Main CTA ("Agendar Reunião Gratuita") |
| **Primary / Dark** | `navy` | `white` | none | Secondary CTA on light bg ("Ver Todos os Artigos") |
| **Secondary** | `white` | `navy` | `2px solid navy` | Hero second CTA ("Ver Como Funciona") |
| **Accent** | `orange` | `white` | none | Submit form (alternative — rarely used) |
| **Ghost** | transparent | `navy` | none | Nav links |

**Shared:** `px-6 py-3` · `rounded-btn` · `text-button font-body font-bold` · `transition-all duration-base` · `hover:opacity-90 active:scale-[0.98]`

### 10.2 Service Card (Pencil: `qQPM8`, ×5)

```
[bg-white border border-n-200 rounded-card p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-slow]
  [emoji/icon — text-4xl mb-4]
  [title — text-display-xs font-display text-navy mb-3]
  [description — text-body-sm font-body text-n-600 mb-4 leading-relaxed]
  [link — text-button font-body font-bold text-orange hover:underline]
    "Saber mais →"
```

### 10.3 Feature Card (BookingSystem inner cards)

```
[bg-n-150 rounded-card p-6]   ← no border, sunken surface
  [title — text-display-xs font-display text-navy mb-3]
  [description — text-body-sm font-body text-n-600]
```

### 10.4 Process Step Card (BookingSystem "Como funciona")

```
[bg-white border border-n-200 rounded-card p-6]
  [title — text-display-xs font-display text-navy mb-3]
  [description — text-body-sm font-body text-n-600]
```

### 10.5 Horizontal Stepper Item (HowItWorks 01–04)

Not a card — a left-aligned column on a horizontal rail.

```
[<ol> grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12, with absolute orange-gradient rail at top-5 left-5 right-5]
  for each step:
    [<li> flex flex-col items-start text-left]
      [badge — w-10 h-10 rounded-full bg-navy text-white text-body-sm font-display font-bold ring-8 ring-white shadow-card mb-5]
        "01" / "02" / "03" / "04"
      [title — text-display-xs font-display font-bold text-navy mb-2 leading-tight]
      [description — text-body-base font-body text-n-600 max-w-xs]
```

### 10.6 FAQ Item (Pencil: `IJiUH`, ×7)

```
[border border-n-200 rounded-faq overflow-hidden]
  [button — w-full px-6 py-4 flex justify-between hover:bg-n-100]
    [question — text-body-base font-display font-bold text-navy]
    [icon — text-orange font-bold text-xl: "+" closed, "−" open]
  [panel (when open) — px-6 py-4 bg-n-150 border-t border-n-200]
    [answer — text-body-sm font-body text-n-600]
```

### 10.7 Blog Card (Pencil: `KpIMg`, ×3)

```
[bg-white border border-n-200 rounded-card overflow-hidden hover:shadow-card-hover transition-all duration-slow]
  [image — h-40 bg-n-300]   ← placeholder only until client provides
  [content — p-6]
    [title — text-display-xs font-display text-navy mb-4]
    [link — text-button font-body font-bold text-orange hover:underline]
      "Ler artigo →"
```

### 10.8 Case Study Card (image-led)

```
[<article> group bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-slow flex flex-col]
  [image wrapper — relative aspect-[4/3] bg-n-200 overflow-hidden]
    [<img> w-full h-full object-cover transition-transform duration-slow group-hover:scale-[1.03]]
    [category pill — absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-navy text-label uppercase tracking-label px-3 py-1.5 rounded-full]
      "Turismo Rural" / "Alojamento Local" / "Hotel Boutique"
  [content — p-6 flex-1 flex flex-col]
    [title — text-display-xs font-display font-bold text-navy mb-2 leading-tight]
    [teaser — text-body-sm font-body text-n-600 flex-1]
```

### 10.9 Trust Badge (BookingSystem stats row)

```
[text-center]
  [number — text-display-md font-display font-bold text-navy mb-2]
  [label — text-body-sm font-body text-n-600]
```

Container: `grid lg:grid-cols-4 gap-8 py-12 border-y border-n-200`

### 10.10 Form Field (Pencil: `8dfHv`, ×4)

```
[label — block text-body-sm font-body font-bold text-navy mb-2]
[input/textarea — w-full px-4 py-3 border border-n-200 rounded-input
                  text-body-base font-body text-n-900
                  focus:outline-none focus:ring-2 focus:ring-orange/50]
```

### 10.11 Status Alert

```
Success: [p-4 bg-success-bg border border-success-bg rounded-input text-body-sm text-success-fg]
Error:   [p-4 bg-error-bg   border border-error-bg   rounded-input text-body-sm text-error-fg]
```

### 10.12 Section header (label + heading + intro)

Standard pattern at the top of every content section:

```
[max-w-3xl mb-16]
  [label — text-label font-body uppercase tracking-label text-orange mb-4]
  [h2 — text-display-md lg:text-display-lg font-display font-bold text-navy mb-6]
  [intro (optional) — text-body-base font-body text-n-600]
```

Extract this into a `<SectionHeader>` component to enforce consistency.

### 10.13 Comparison Panel (Problem section)

Two stacked panels with a thin neutral hairline between them. Brand-coherent dark/light contrast (no red/green stoplight).

```
Negative panel ("Com OTAs"):
[group rounded-card-lg p-6 bg-light-blue text-navy transition-all duration-slow hover:-translate-y-1 hover:shadow-card-hover]
  [eyebrow row — flex items-center gap-2 mb-4]
    [tone icon (down) — w-3 h-3 stroke-[2.4] text-n-600 transition-transform group-hover:-translate-y-px]
    [label — text-label uppercase tracking-label text-n-600]  "Com OTAs"
  [number — text-display-md font-display leading-none mb-3 whitespace-nowrap tabular-nums text-navy]
    "−15-25%"  ← animated count-up: −0% → −25% then snap to "−15-25%"
  [caption — text-body-base text-n-900 mb-2]  "em comissões por reserva"
  [note — text-body-sm text-n-600]

Divider: [my-3 h-px bg-n-200]

Positive panel ("Reservas Diretas"):
[group rounded-card-lg p-6 bg-navy text-white ...]
  [eyebrow row]
    [tone icon (up) — text-white/60]
    [label — text-label uppercase tracking-label text-white/60]  "Reservas Diretas"
  [number — text-display-md text-orange]  "0%"
  [caption — text-body-base text-white]  "comissão. Controlo total."
  [note — text-body-sm text-white/60]
```

The count-up uses a local `useCountUp(target, run)` hook in `Problem.tsx`, ease-out cubic, 900ms, and respects `prefers-reduced-motion` (snaps to final).

### 10.14 Navbar

```
[fixed top-0 inset-x-0 z-sticky h-[72px] bg-white shadow-nav]
  [container — max-w-container px-6 lg:px-section-x flex items-center justify-between]
    [logo — text-xl font-display font-bold text-navy]
    [nav links (lg+ only) — gap-8 text-button font-body text-n-900 hover:text-navy]
    [cta — Button/PrimaryOrange]
```

Body must add `pt-[72px]` to offset.

### 10.15 Footer

```
[<footer> bg-footer-bg text-white py-section-y-sm]
  [container — grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12 mb-12]
    Col 1: brand + tagline + social row
      [<h3> text-display-xs font-display text-white mb-2]  "Reserva Direta"
      [<p>  text-body-sm text-white/60 max-w-xs mb-6]      tagline
      [<div> flex items-center gap-3]
        for each social (Facebook / Instagram / YouTube):
          [<a> w-9 h-9 rounded-full bg-white/5 hover:bg-orange flex items-center justify-center text-white/70 hover:text-white transition-colors duration-base
              target="_blank" rel="noopener noreferrer" aria-label]
            [SVG icon, 16×16, fill="currentColor"]
    Col 2: Contacto
    Col 3: Navegação
    Each link col:
      [<h4> text-body-sm font-body text-white mb-4]  title
      [<ul> space-y-2]
        [<Link> text-body-sm text-white/60 hover:text-white]
  [bottom row — border-t border-white/10 pt-8 text-caption text-white/50]
    "© 2026 Reserva Direta. Todos os direitos reservados."
```

---

## 11. Section background palette (current page rhythm)

Order in `app/page.tsx`. Backgrounds alternate light-blue / white / cream to prevent monotony.

| # | Section | Background | Notes |
|---|---|---|---|
| 0 | Navbar | `white` | Sticky, h-72px |
| 1 | Hero | `light-blue` | Visual entry |
| 2 | Problem | `white` | Comparison panels carry the color contrast |
| 3 | BookingSystem | `light-blue` | Booking-blue widget mockup inside |
| 4 | Services | `cream` | Warm card grid |
| 5 | HowItWorks | `white` | Stepper on neutral surface so the orange rail reads |
| 6 | CaseStudies | `light-blue` | Image-led cards |
| 7 | BlogPreview | `cream` | Warm closer before FAQ |
| 8 | FAQ | `white` | Accordion |
| 9 | ContactCTA | `navy` | Strong final CTA |
| 10 | Footer | `footer-bg` | End |

---

## 12. Asset state

| Asset | Status | Path / notes |
|---|---|---|
| Hero image | ✅ delivered | `/public/hero/hero-bedroom.png`. Responsive: `aspect-[3/4]` + `max-w-md` on `lg`, full-width `aspect-[4/3]` below. |
| Case study photos (×3) | 🟡 anonymous | `/public/case-studies/case-{1,2,3}.png` — temporary anonymous shots. Awaiting permission for real names + per-property metrics. |
| Blog featured images (×3) | ❌ placeholder | Still `picsum.photos`. Awaiting client. |
| Team photos (Quem Somos) | ❌ pending | Awaiting client. |

See `web/TODO.md` for the live backlog.

---

**Last reviewed:** 2026-04-27
