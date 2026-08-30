# RacoLearnHub — Marketing Website (React skeleton)

A production-shaped skeleton of the RacoLearnHub enterprise marketing site, built
to the *Enterprise Website Blueprint (Schools)* — every route, section order and
piece of copy traces back to a numbered section of that document.

**Primary goal:** booked live demos with school decision-makers. Every page
carries the demo CTA in the header and ends in a conversion band.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
npm run lint
```

---

## Stack, and one deviation from the blueprint

| Layer | Blueprint (§7) | Here | Why |
|---|---|---|---|
| Framework | Next.js App Router + TypeScript | **React 19 + Vite + React Router 7, JSX** | You asked for React JS. Everything else is structured to port to Next cleanly — see *Porting to Next.js* below. |
| Styling | Tailwind + token layer + shadcn | **Hand-built CSS token layer + components** | Same idea, no build config. The token layer in `src/styles/tokens.css` is the contract; swapping in Tailwind means pointing its theme at those variables. |
| Animation | Framer Motion, reduced-motion aware | Framer Motion, reduced-motion aware | As specified. |
| Forms | React Hook Form + Zod | Local state + hand validation | Kept dependency-free for a skeleton; the accessible error contract (see below) is what matters and is already in place. |
| i18n | next-intl + hreflang | Locale switcher + `lang`/`dir` wiring, copy externalised | Direction-aware from day one (§4.8); message catalogues are the next step. |
| CMS | Headless (Sanity/Contentful) | `src/content/*.js` | Same shape, ready to lift. |

---

## Architecture

```
src/
├── content/          All copy and data — the CMS boundary
│   ├── site.js         Brand, trust bar, capabilities, personas, pricing, security
│   ├── navigation.js   Sitemap, mega-menus, footer columns, legal links
│   ├── platform.js     Eight feature pages (§3.2)
│   └── solutions.js    Four persona pages + two exam-board pages (§3.3, §3.4)
├── styles/
│   ├── tokens.css      Colour, type scale, spacing, radii, elevation, motion, dark mode
│   ├── base.css        Reset, elements, layout primitives, a11y helpers, RTL
│   └── components.css  Buttons, cards, badges, tables, forms, prose
├── components/
│   ├── ui/             Button, Card, Badge, Section, Container, Accordion, Icon, Reveal…
│   ├── blocks/         TrustBar, CtaBand, CapabilityGrid, FeatureSpotlight,
│   │                   PersonaColumns, Testimonials, PricingTable, HowItWorks,
│   │                   PageHero, CopilotMock
│   └── layout/         Header + mega-menu, Footer, LanguageSwitcher,
│                       ThemeToggle, CookieBanner, Layout shell
├── pages/              One file per route; platform/solutions/curriculum are
│                       parameterised templates driven by `content/`
├── lib/                motion variants, hooks, useMeta
└── App.jsx             Route table — mirrors the sitemap in §2.1 exactly
```

**Content is the extension point.** Adding a ninth feature page means adding an
entry to `src/content/platform.js`. No new component, no new route.

---

## Design system

Anchored on the RACO purple, warmed with amber, grounded in paper-like neutrals
rather than cold greys (§4.1). Two external sources shape the craft layer:
Apple's Human Interface Guidelines (Layout, Typography) and the Vercel Web
Interface Guidelines — see *Craft references* below.

- **Colour** — `--brand-700 #4B2E83` primary · `--brand-500 #6D4AE0` bright ·
  `--warm-500 #F5A524` human accent · `--trust-500 #1F9D77` proof cues.
  Semantic colours are reserved for state, never decoration.
- **Type** — two families only (§4.2): Fraunces for display, Inter for everything
  else. Following Apple's HIG, a *text style* binds size, weight, leading and
  tracking together rather than varying size alone, tracking tightens as type
  grows, and Fraunces' `opsz` axis is driven so letterforms are redrawn per size
  rather than scaled. Body 16→18px, line length 60–75 characters, tabular
  numerals on every stat, price and table.
- **Spacing** — 8px base, 1240px container, and a *semantic* section rhythm.
  The gap is a sentence: `hero` opens, `major` starts a new movement, `section`
  is the default, `tight`/`leads`/`continues` mark two halves of one thought.
  Uniform padding everywhere is what makes a long page read as a list rather
  than an argument.
- **Radii & elevation** — 12–16px radii, purple-tinted shadows, never black.
- **Section archetypes** — statement, ruled columns, bento, spotlight, dark
  band, editorial pair, numbered steps, pull quote. Home rotates through eight
  of them. See *Why the page stopped looking generated*.
- **Dark mode** — full parity, not an afterthought. The product supports it and
  schools expect it.
- **Motion** — 150–250ms, ease-out on enter; scroll-reveal guides rather than
  performs. `Reveal` renders plain content under `prefers-reduced-motion`.

---

## Why the page stopped looking generated

The first pass was legible and on-brief, and it still looked machine-made. The
diagnosis was countable, not aesthetic: **43 bordered cards, 42 card grids, and
8 sections on the home page that all opened with the same eyebrow → headline →
sub-head stack.** Every section was the same shape. That sameness — not the
palette, not the copy — is the tell.

Three changes fixed it.

**1. Cards stopped being the default.** `.card` now has no border, no shadow and
no padding; it is a column of content separated from its neighbours by space.
Chrome is opt-in: `.card--panel` for content that is genuinely grouped,
`.card--interactive` for surfaces that navigate somewhere. This follows Apple's
Layout guidance, which lists negative space *before* background shapes and
separator lines as the way to group related items.

**2. Section shapes rotate.** Home now runs statement → ruled columns → bento →
spotlight → flipped spotlight → dark band → editorial pair → spotlight → split
head → pull quote → numbered steps → centred statement → CTA. Same information,
thirteen different silhouettes.

**3. Spacing carries meaning.** Rather than one section padding everywhere, the
rhythm tokens say whether a section opens a new argument or finishes the
previous one — so the problem statement and its three supporting columns read as
one unit, while the movement between them and the platform section reads as a
break.

A supporting fix: `max-width` in `ch` had been set on *wrappers*, where `ch`
resolves against the wrapper's own font (body Inter) rather than the heading's.
Every section head was silently clamped to ~200px. Measures now live on the text
elements themselves.

---

## Craft references

**Apple Human Interface Guidelines** — *Layout* and *Typography*, read directly
rather than paraphrased:

- Group related items with negative space before reaching for borders.
- "Make essential information easy to find by giving it sufficient space… don't
  obscure it by crowding it with nonessential details."
- A text style is a combination of weight, size and leading — hierarchy comes
  from all three, not size alone.
- Variable fonts support dynamic optical sizing; let the design adapt per size.
- Avoid light font weights. Nothing in this system goes below 400.

**Vercel Web Interface Guidelines** (`vercel-labs/agent-skills@web-design-guidelines`,
installed via `npx skills`) — audited against, with these fixes applied:

| Rule | Fix |
|---|---|
| URL reflects filter state | Case-study filter moved to `?filter=` via `useSearchParams` (also fixed a real bug where "Both"-curriculum schools leaked through school-type filters) |
| `inputmode`, `spellcheck`, `autocapitalize` on email | Applied to the demo form and newsletter |
| `autocomplete="off"` on non-auth fields | Applied to the free-text field |
| `overscroll-behavior: contain` on drawers | Applied to the mobile nav |
| `touch-action: manipulation` | Applied to all interactive elements |
| `env(safe-area-inset-*)` on full-bleed layouts | Applied to the container and mobile nav |
| `translate="no"` on brand tokens | Applied to both wordmarks |
| Placeholders end with `…` | Applied |
| No `transition: all` | Verified — every transition lists its properties |

## Accessibility (non-negotiable for schools, §4.7)

- Semantic HTML first; ARIA only where semantics don't exist.
- Visible focus rings everywhere — `:focus-visible` is never removed.
- Skip link to `#main`; `<main>` is focusable and scroll resets on navigation.
- Mega-menu: `aria-expanded` / `aria-controls`, Escape and outside-click dismiss.
- Accordion: native buttons with `aria-expanded` and region association.
- Demo form: labels bound to inputs, `aria-invalid`, errors associated via
  `aria-describedby`, focus moved to the first invalid field, and **fields are
  never cleared on error** (RACO form rule).
- Tables carry captions; icon-only meaning is mirrored in visually-hidden text.
- Consent is explicit and nothing is pre-ticked; declining is as easy as accepting.
- Layouts are direction-aware, with RTL locales (Arabic, Urdu) in the switcher.
- **Contrast is measured, not eyeballed.** Every text/background pair was
  computed in-browser. One real failure was found and fixed: `--text-subtle`
  sat at 3.71:1 behind 12px eyebrows and captions. It is now `#6F6B80`, verified
  against the *darkest* light surface (4.67:1 on `--surface-2`, 4.89:1 on
  `--paper`) rather than the page ground, because captions also appear on inset
  bands. Do not lighten it — 12px counts as normal text, so 4.5:1 is the floor.

---

## Performance

Route-level code splitting keeps the LCP budget in §7 reachable.

| | Size | Gzip |
|---|---|---|
| Main bundle (Home + Demo + shell) | 364 kB | 115 kB |
| CSS | 37 kB | 8 kB |
| Typical route chunk | 1–6 kB | <2 kB |

Home and `/demo` stay in the main bundle because they carry conversion.
Icons are imported by name through `components/ui/Icon.jsx` — the lucide barrel
import costs ~630 kB on its own, so **add new icons to that registry rather than
importing the barrel**.

---

## Porting to Next.js (App Router)

The blueprint's target stack. The seams are already in the right places:

1. `src/pages/*` → `app/**/page.jsx`; the `App.jsx` route table is the map.
2. Replace `useMeta` with route `metadata` exports — this is the one thing that
   genuinely needs server rendering, for SEO and Core Web Vitals (§6).
3. Mark only the interactive leaves `'use client'`: `Header`, `LanguageSwitcher`,
   `ThemeToggle`, `CookieBanner`, `Accordion`, `Reveal`, `Demo`, the resource
   filters. Everything else is already server-safe.
4. Point `src/content/*` at the headless CMS.
5. Add `next-intl` with the locales already declared in `content/site.js`, plus
   per-locale hreflang.

---

## Placeholders — replace before launch

Marked in the UI wherever they appear, so nothing fictional ships by accident.

- **Testimonials and case studies** carry a visible "Placeholder" badge.
- **Stats** (6.5h saved, +18% completion, 12 countries) are illustrative.
- **Pricing tiers** are illustrative pending confirmed commercials (§9).
- **Legal pages** (`/privacy`, `/terms`, `/cookies`, `/accessibility`,
  `/safeguarding`) are structural scaffolds only. No legal text has been drafted —
  that must come from RACO's legal and data protection leads.
- **Exam-board naming** — a disclaimer notes that endorsement and trademark usage
  need confirming with Cambridge and Pearson.
- **Imagery** — product mocks are built from live DOM, not screenshots. Swap for
  real product shots in soft device frames (§4.4). Avoid "AI robot" imagery: the
  AI is shown through the interface.
- **Brochure download, video overview and the embedded scheduler** are wired as
  UI but not connected.

Open questions from §9 that block content, not build: final go-to-market name,
real commercial model, reference schools, exact compliance posture, which
capabilities are live versus roadmap, scheduling/CRM tooling, and whether
students and parents can buy directly.

---

## Roadmap position (§8)

Phases 0–2 are covered structurally: design language and component library,
core conversion pages (Home, Demo, Platform, Security, Pricing, global
header/footer), and full capability, persona and curriculum coverage. Phase 3
(content engine) is scaffolded with placeholder data awaiting a CMS; phase 4
(20+ language rollout, A/B testing, analytics maturity, accessibility audit) has
its hooks in place — locale switching, direction-aware layouts and externalised
copy — but needs message catalogues and an analytics provider.
