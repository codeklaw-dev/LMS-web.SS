# RacoLearnHub Landing — Next.js Port, Palette Redesign, EN/BN Localization, SEO

Execution plan for porting the marketing site (`SS-edits/`, React 19 + Vite + React Router SPA, ~6.7k lines) to the platform's stack (Next.js 16 App Router) as a drop-in route tree at `racoedu.com/landing-page`, re-skinned to the deep-purple/almond-oil palette, localized EN/BN, and made crawlable. **Content is preserved as-is — this is a re-skin, a port and a translation, not a rewrite.**

## Current state (verified)

Already done in this repo (untracked files, deps installed):
- **Phase 1 complete**: `package.json` (pins match platform: next ^16.2.6, react 19.2.7, motion ^12.34.3, lucide-react ^1.0.0, tailwind v4), `next.config.js` (incl. dev redirects `/`→`/landing-page`, `book-a-demo`→`demo`, `platform/ai`→`platform/ai-copilot`), `postcss.config.js`, `tsconfig.json` (aliases `@components/*`, `@styles/*`, `@lib/*`, `@/*`; `SS-edits` excluded), `app/layout.tsx` + `styles/globals.css` (local-dev stand-ins, NOT shipped), `scripts/scope-css.mjs` (scopes CSS under `.landing`).
- **Phase 2 partial**: `components/landing/styles/tokens.css` is written — new palette ramps, role aliases on `.landing` (never `:root`), dark block `[data-theme="dark"]`, contrast-verified (see header comment). **Gap: the `[lang="bn"]` font-remap block it references does not exist yet.**

Not started: remaining CSS port, route tree, dictionaries, Bengali, SEO, README-DROP-IN.

## Decisions (all confirmed)

| Topic | Decision |
|---|---|
| Stack / location | Next.js App Router mirroring `apps/web` conventions; mirror tree at landing repo root — `app/landing-page/**`, `components/landing/**`, `locales/landing.*.json` |
| Shipped bundle | Only `app/landing-page/**`, `components/landing/**`, `locales/landing.*.json` + `README-DROP-IN.md`. Root `app/layout.tsx`, `styles/globals.css`, `next.config.js` are dev stand-ins |
| Light mode | ground `#ECE9BE` · surface `#F3F1CE` · text `#320B35` · muted `#5C3A5E` · border `#D9D5A8` |
| Dark mode | `#320B35` edge-to-edge, one continuous surface · text `#ECE9BE` · muted `#C4B8C6` · border `#4A2050` |
| Accent | ultraviolet: `#6D28D9` text / `#7C3AED` fill (light); `#C084FC` text / `#A855F7` fill-only (dark). **`#A855F7`/`#7C3AED` are never text** (fail AA) |
| Type | Playfair Display (display, italic for emphasis) · Inter (sans) · Hind Siliguri (all Bengali — remaps both roles under `[lang="bn"]`) |
| i18n | Locale-prefixed server routes `/landing-page/**` (en) + `/landing-page/bn/**`; JSON dictionaries, hreflang both ways; **no react-i18next** |
| Bengali scope | Everything except legal-page bodies (heading-only scaffolds; headings translated). Judgement, not literal ("Cambridge International" stays Latin; "20+ languages" → "২০+ ভাষা") |
| Theme | `.landing[data-theme="dark"]` keyed off a wrapper div with inline anti-FOUC script (reads `localStorage['rlh:theme']`, falls back `prefers-color-scheme`); independent of Tailwind `.dark` and platform `<html>` |
| Brand | Name stays RacoLearnHub; sign-in + platform CTAs → `https://racoedu.com/`; JSON-LD url → `https://racoedu.com/`; canonicals under `https://racoedu.com/landing-page`; parent racoai.io link stays |
| **Proxy bypass** | **Apex-only** (resolved): bypass fires only on the apex/default host (racoedu.com, localhost) — tenant subdomains and white-label custom domains keep the normal `/orgs/{slug}` rewrite |
| **Root path** | **Sub-path only** (resolved): `/landing-page` is canonical; apex root behaviour unchanged |
| **GSC token** | **Out of scope** (resolved): DNS verification at deploy time; token can be added later |

## Phase 2 — finish design system

1. Port the six remaining stylesheets from `SS-edits/src/` into `components/landing/styles/` using `scripts/scope-css.mjs` (pipe each file through it), then hand-edit:
   - `base.css` (250 ln), `components.css` (292 ln) from `src/styles/`; `blocks.css` (555), `header.css` (289), `footer.css` (145), `accordion.css` (41), `demo.css` (29).
2. Create `components/landing/styles/landing.css` importing tokens + base + components + the component sheets; imported by `app/landing-page/layout.tsx`.
3. **Kill the band system**: `.band-dark` (blocks.css:444–456) becomes typographic emphasis — inverted only in light mode, transparent in dark. Same for the three surfaces that break the seamless dark ground: footer (`footer.css:3` bg `--band-ink`), CTA band gradient (`--brand-800→--brand-500` + amber radial overlay), amber overlay — in dark they resolve to page ground + hairline top rule; CTA band gets a low-opacity ultraviolet wash, not a colour change. Light mode keeps cream/deep-purple contrast.
4. **Inset sections** (`tone="inset"`): in dark `--bg-inset` = page ground (already in tokens); ensure no residual fill — separation via hairline `--border` + section rhythm. Light keeps cream/raised-cream.
5. Replace hardcoded colours with tokens at: components.css:94 · blocks.css:103,168,175,397,407,446,448,552 · footer.css:4,27,42,62,73,106,117 · header.css:44,181,189 · base.css:79,207 (`.text-gradient`) · `Home.jsx:120` inline `color:'#fff'`.
6. Add the missing Bengali block to `tokens.css`: `.landing[lang="bn"] { --font-display/--font-sans → var(--font-hind), … }`.
7. Add `scripts/contrast.mjs`: compute WCAG ratios for the token pairs (prints table; asserts ≥4.5 for text pairs). Run at checkpoint.

**Checkpoint**: `npm run dev`, `/landing-page` renders Home in both themes with the new palette, no unscoped selectors (`grep -r ':root' components/landing/styles/` → none outside comments).

## Phase 3 — route port

One implementation module per page; thin `page.tsx` wrappers. Client boundary (`'use client'`) ONLY on: Header (+MegaMenu, mobile sheet), LanguageSwitcher, ThemeToggle, CookieBanner, Accordion, Reveal, demo form, newsletter form. Everything else server components.

| Source (SS-edits) | Target under `app/landing-page/` (+ mirrored under `bn/`) |
|---|---|
| `/` (Home.jsx) | `page.tsx` |
| `/platform`, `/platform/:slug` | `platform/page.tsx`, `platform/[slug]/page.tsx` + `generateStaticParams` (8 slugs from `content/platform.js`) |
| `/solutions`, `/solutions/:slug` | same shape (4 slugs from `content/solutions.js`) |
| `/curriculum`, `/curriculum/:board` | same shape (2 boards: cambridge, edexcel) |
| `/pricing /demo /security /about /contact /help /sitemap` | one `page.tsx` each |
| `/resources` + `/resources/{case-studies,blog,events}` | `resources/page.tsx` + three children (split `Resources.jsx` multi-export) |
| `/privacy /terms /cookies /accessibility /safeguarding` | `legal/[slug]/page.tsx` driven by existing LEGAL map (in `LegalPage.jsx`) + `generateStaticParams` |
| `*` | `not-found.tsx` |
| `/book-a-demo`, `/platform/ai` | already handled by `next.config.js` redirects (dev); document for platform in README |

Port mechanics:
- `Link to=` → `next/link href=` via `localeHref(path, locale)` (prefixes `/bn`); `useParams` → `params` props; `<Navigate>` → `notFound()`; case-study filter `useSearchParams` → server `searchParams` prop + `<Link>` filter chips (stays crawlable).
- `Reveal`: framer-motion → `motion/react`. `Icon.tsx` registry ports unchanged (named lucide imports). Drop SPA-only: `Layout.jsx` scroll effect (Next does this), `PageLoading.jsx`/Suspense, `useMeta.js` (→ `generateMetadata`), and unreferenced blocks — verify then drop `PersonaColumns.jsx`, `HowItWorks.jsx` (block) if unreferenced.
- Layout shell (`app/landing-page/layout.tsx`): renders `.landing` wrapper with `lang`/`dir`, inline anti-FOUC `data-theme` script, fonts via `next/font/google` (`Playfair_Display`→`--font-playfair`, `Inter`→`--font-inter`, `Hind_Siliguri`→`--font-hind`), skip link, Header, `<main id="main">`, Footer, CookieBanner.

**Checkpoint**: all 26 English routes build clean (`npm run build`).

## Phase 4 — dictionaries and Bengali

1. `locales/landing.en.json` / `landing.bn.json` — namespaces: `site.* trustBar.* capabilities[] valuePillars[] painPoints howItWorks[] testimonials[] featuredCaseStudy.* pricingTiers[] pricingFaq[] examBoards[] securityPillars[] nav.* platformPages.<slug>.* solutionPages.<slug>.* curriculumPages.* pages.<route>.* meta.<route>.{title,description} ui.*` (sources: `content/site.js`, `navigation.js`, `platform.js`, `solutions.js`, inline JSX copy, each `useMeta()` call).
2. `components/landing/lib/dictionary.ts`: `getDictionary(locale)` (typed from the EN file, `import()`ed) + `localeHref(path, locale)`. Structural data (icons, slugs, hrefs, tones) stays in TS under `components/landing/content/`, merged at render.
3. Language switcher → two-item `<Link>` pair preserving the current path across locales.
4. Bengali: translate everything except legal bodies per the scope rule above; Bengali numerals where natural.
5. `<html lang>` cannot be set from a nested layout → wrapper carries `lang`/`dir`; each page's `metadata` declares the correct language. Flag the platform's hardcoded `lang="en"` in README.

**Checkpoint**: `/landing-page/bn` tree complete; spot-check Home, Pricing, Demo.

## Phase 5 — SEO

- `generateMetadata` on every page: title + description from `meta.*`, `alternates.canonical` → `https://racoedu.com/landing-page/…`, `alternates.languages` (en ↔ bn + `x-default`), OpenGraph (type, url, siteName, locale, image), Twitter `summary_large_image`.
- `app/landing-page/opengraph-image.tsx` (`next/og`, wordmark on deep purple) + Bengali variant for the `bn/` tree.
- `<JsonLd>` under `components/landing/` (mirror platform's `components/SEO/JsonLd.tsx`): Organization + WebSite on layout, SoftwareApplication on `/platform`, FAQPage on the six FAQ sections, BreadcrumbList where PageHero renders crumbs.
- Sitemap: platform patch only (below). Do NOT create `app/landing-page/sitemap.ts` — unreachable under the platform proxy.

## Phase 6 — link and brand pass

Sign-in (Header desktop + mobile) → `https://racoedu.com/`; "Go to platform" CTAs → `https://racoedu.com/`; JSON-LD url → `https://racoedu.com/`; product-mock subdomains → `*.racoedu.com`; parent link racoai.io and name "RacoLearnHub" unchanged.

## README-DROP-IN.md

Copy list (`app/landing-page/`, `components/landing/`, `locales/landing.*.json`), the two platform patches, the redirects to replicate, the `lang="en"` root-layout flag, fonts note. Patches:

**1. proxy.ts** — insert in section 2 ("Standard out-of-org paths", beside the `/home` check at :355, before the §11 catch-all at :499), **apex-only** (reuse the same condition shape as the §10 apex picker so `/landing-page` serves exactly where the picker would — apex + localhost, never tenant subdomains or custom domains):

```ts
// Landing marketing site — apex-only bypass (tenant hosts keep the org rewrite)
if (
  (pathname === '/landing-page' || pathname.startsWith('/landing-page/')) &&
  (!fullhost || isLocalhostCheck(fullhost) || !(await hostIsCustomDomain(fullhost, instance))) &&
  !fullhost?.includes('.') // no subdomain — adjust to the repo's actual subdomain check
) {
  return NextResponse.rewrite(new URL(`${pathname}${search}`, req.url), cleanRequest)
}
```

(Final condition wording to be adapted to proxy.ts's existing host helpers during the drop-in rehearsal — the intent is: apex/default host only.)

**2. sitemap route** (`apps/web/app/api/sitemap/route.ts`, `case 'pages'` :41–47) — append landing URLs as **absolute** apex URLs so tenant sitemaps are unaffected:

```ts
// Landing marketing pages (apex only — absolute URLs, not baseUrl)
...LANDING_ROUTES.map(r => ({ loc: `https://racoedu.com/landing-page${r.loc}`, priority: r.priority, changefreq: 'monthly' })),
```

covering both locales (`''`, `/bn`, platform×9, solutions×5, curriculum×3, pricing, demo, security, about, contact, help, resources×4 — en + bn).

## Sequencing & checkpoints

1. Phase 2 → Home renders both themes (confirm look before 25 pages inherit it)
2. Phase 3 → 26 EN routes build clean
3. Phase 4 → BN tree complete, spot-check
4. Phases 5–6 → metadata rendered, patches ready
5. Drop-in rehearsal (below)

## Verification

1. `npm run dev`; walk all 26 routes × 2 locales × 2 themes at 375/768/1440 px.
2. Dark mode: no section boundaries — continuous `#320B35`, no residual band inversion.
3. Theme toggle → reload → cross-navigate: no FOUC, preference persists.
4. Language switch on a deep route (e.g. `/landing-page/platform/ai-copilot` ↔ `/bn`): path preserved, `lang`/`dir` update, Bengali in Hind Siliguri.
5. `curl` a BN page: Bengali copy present in the HTML response (server-rendered).
6. `npm run build`: no client/server boundary errors; route-level code splitting holds; no page pulls the lucide barrel.
7. `node scripts/contrast.mjs`: all text pairs ≥ 4.5:1 on both grounds.
8. **Drop-in rehearsal**: copy the three trees into a scratch copy of `apps/web`, apply both patches, adapt the apex condition to proxy.ts's real helpers, `next build`, hit `/landing-page`. Also verify a tenant subdomain/custom-domain host still routes `/landing-page` through the org rewrite (apex-only behaviour). Report to the platform repo.

## Risks / notes

- Mirror `next.config.js` has no Sentry wrapper / runtime-config writer — shipped routes must not depend on either.
- Platform root layout already renders `<html>`/`<body>`, `--font-default`, Providers, and imports its globals — nothing in `app/landing-page/**` may assume it owns `<html>`.
- `tokens.css` header documents the contrast table; `#A855F7` (dark) and `#7C3AED` (light) are fill/decoration only.
- `vercel.json` at repo root belongs to the old SPA deploy — superseded by the platform drop-in; leave untouched.

## Out of scope

- GSC verification token (DNS at deploy time)
- Serving the landing at `/` root
- Translating legal-page bodies; locales beyond EN/BN
- Changes to the product app (`apps/web`) beyond the two documented patches
