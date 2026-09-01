# RacoLearnHub landing — drop-in guide for the platform repo

This repo mirrors the platform's stack (Next.js 16 App Router, TypeScript,
`@components/*` path aliases) so the marketing site can be dropped into
`apps/web` as a route tree and serve at **https://racoedu.com/landing-page**
(English) and **/landing-page/bn** (Bengali), while the product keeps the apex
root at racoedu.com.

## 1 · What to copy

Copy exactly these three trees into `apps/web/` (path-identical):

```
app/landing-page/**        → apps/web/app/landing-page/**
components/landing/**      → apps/web/components/landing/**
locales/landing.en.json    → apps/web/locales/landing.en.json
locales/landing.bn.json    → apps/web/locales/landing.bn.json
```

**Not** copied (local-dev stand-ins that exist only so this mirror runs alone):
`app/layout.tsx`, `app/landing-page/(en)/…` is copied but the root
`app/layout.tsx` of this repo is NOT — the platform's own root layout renders
`<html>`/`<body>`, the Wix Madefor font variable, Providers and its
`globals.css`. Nothing under `app/landing-page/**` depends on anything in this
repo's root layout. Also not copied: `next.config.js`, `postcss.config.js`,
`styles/globals.css`, `scripts/`, `tsconfig.json` (see §6 for one tsconfig
note), `SS-edits/` (the original SPA, kept for reference).

Dependencies used by the landing tree — all already in `apps/web`'s
package.json: `next`, `react`, `motion`, `lucide-react`, `clsx`,
`tailwind-merge`. No new dependencies.

## 2 · proxy.ts patch — apex-only bypass

Without a patch, the platform proxy's catch-all (§11, the `/orgs/{slug}`
rewrite) swallows `/landing-page`. Add the bypass in section 2
("Standard out-of-org paths", beside the `/home` check at :355), **before**
the catch-all.

Scope decision (confirmed): the bypass is **apex-only** — it must fire on
racoedu.com and localhost, but *not* on tenant subdomains or white-label
custom domains, which keep the normal tenant rewrite. Reuse the same host
helpers §10 (apex picker) uses; adapt the condition to the actual helper
names in proxy.ts:

```ts
// -------------------------------------------------------------------------
// 2b. Landing marketing site — apex-only bypass.
//     Tenant subdomains and custom domains keep the /orgs/{slug} rewrite,
//     so white-label schools never serve (or advertise) the marketing site.
// -------------------------------------------------------------------------
if (
  (pathname === '/landing-page' || pathname.startsWith('/landing-page/'))
  && isApexHost // ← build from proxy.ts's own helpers:
                //   (!fullhost || isLocalhostCheck(fullhost))
                //   && !(await hostIsCustomDomain(fullhost, instance))
                //   && no tenant subdomain detected on fullhost
) {
  return NextResponse.rewrite(new URL(`${pathname}${search}`, req.url), cleanRequest)
}
```

The intent: `/landing-page` serves exactly where the §10 apex picker would
serve `/home` — the primary apex and localhost. Regression check after
applying: a tenant subdomain and a custom domain must still route
`/landing-page` into the org rewrite (404 there), not the marketing site.

`robots.txt` already allows the path; no change needed.

## 3 · Redirects

This mirror's `next.config.js` carries these redirects; replicate them in the
platform's `next.config.js`:

```js
async redirects() {
  return [
    { source: '/landing-page/book-a-demo', destination: '/landing-page/demo', permanent: true },
    { source: '/landing-page/platform/ai', destination: '/landing-page/platform/ai-copilot', permanent: true },
    { source: '/landing-page/bn/book-a-demo', destination: '/landing-page/bn/demo', permanent: true },
    { source: '/landing-page/bn/platform/ai', destination: '/landing-page/bn/platform/ai-copilot', permanent: true },
  ]
}
```

## 4 · Sitemap patch — absolute apex URLs

`apps/web/app/api/sitemap/route.ts` (`case 'pages'`, the array at :41–47).
The proxy rewrites `/sitemap.xml` to this handler, so a standalone
`app/landing-page/sitemap.ts` would be unreachable — patch the handler
instead. Because that handler also serves tenant hosts, the landing URLs are
**absolute** to the apex so tenant sitemaps simply carry ignorable extra
entries (never baseUrl-relative, which would advertise a path tenants don't
serve):

```ts
case 'pages': {
  // Landing marketing pages — apex only, absolute URLs by design.
  const LANDING = 'https://racoedu.com/landing-page'
  const landingRoutes = [
    ['', 0.9], ['/bn', 0.9],
    ['/platform', 0.8], ['/bn/platform', 0.8],
    ['/platform/ai-copilot', 0.7], ['/platform/simulations', 0.7],
    ['/platform/courses', 0.7], ['/platform/playgrounds', 0.7],
    ['/platform/community', 0.7], ['/platform/analytics', 0.7],
    ['/platform/white-label', 0.7], ['/platform/payments', 0.7],
    ...8× '/bn/platform/…',
    ['/solutions', 0.8], ['/bn/solutions', 0.8],
    ['/solutions/leaders', 0.7], ['/solutions/teachers', 0.7],
    ['/solutions/students', 0.7], ['/solutions/trusts', 0.7],
    ...4× '/bn/solutions/…',
    ['/curriculum', 0.8], ['/bn/curriculum', 0.8],
    ['/curriculum/cambridge', 0.8], ['/curriculum/edexcel', 0.8],
    ...2× '/bn/curriculum/…',
    ['/pricing', 0.8], ['/bn/pricing', 0.8],
    ['/demo', 0.9], ['/bn/demo', 0.9],
    ['/security', 0.7], ['/bn/security', 0.7],
    ['/about', 0.6], ['/bn/about', 0.6],
    ['/contact', 0.6], ['/bn/contact', 0.6],
    ['/help', 0.5], ['/bn/help', 0.5],
    ['/resources', 0.6], ['/bn/resources', 0.6],
    ['/resources/case-studies', 0.6], ['/resources/blog', 0.5],
    ['/resources/events', 0.5],
    ...3× '/bn/resources/…',
  ]
  sitemapUrls = [
    { loc: baseUrl, priority: 1.0, changefreq: 'daily' },
    { loc: `${baseUrl}courses`, priority: 0.9, changefreq: 'weekly' },
    // … existing entries unchanged …
    ...landingRoutes.map(([p, pr]) => ({
      loc: `${LANDING}${p}`, priority: pr, changefreq: 'monthly',
    })),
  ]
  break
}
```

(Spell the array out literally in the patch — the `…×` shorthand above is
only to keep this README readable.)

## 5 · Flags for the platform repo

- **`<html lang="en"` is hardcoded** in the platform root layout. A nested
  layout cannot change it, so the Bengali tree sets `lang="bn"` on the
  `.landing` wrapper div (which also drives the Hind Siliguri font remap in
  `components/landing/styles/tokens.css`) and every bn page's metadata
  declares `og:locale bn_BD`. If the platform ever wants `<html lang>` to
  follow the locale, hoist the landing shell into a route-level layout that
  renders the wrapper and set the attribute from middleware/headers instead.
- **Fonts**: `app/landing-page/layout.tsx` loads Playfair Display, Inter and
  Hind Siliguri via `next/font/google` and mounts their variables on a plain
  div; the landing's `.landing` token layer consumes them. This coexists with
  the platform's `--font-default` (Wix Madefor) — the landing never reads it.
- **Theme**: the landing owns light/dark via `.landing[data-theme="dark"]`
  and a `localStorage['rlh:theme']` boot script inside the wrapper. It never
  touches `<html>`, Tailwind's `.dark`, or the platform's token layer — a
  future platform-wide theme provider cannot fight it.
- **Sentry / runtime-config**: nothing in the shipped tree reads
  `window.__RUNTIME_CONFIG__` or Sentry; safe behind either wrapper.

## 6 · tsconfig note

This mirror's tsconfig sets `"ignoreDeprecations": "6.0"` (TS 6 deprecates
`baseUrl`, which both configs use for the `@components/*` aliases). If the
platform's tsconfig does not yet have it, add the same flag when the TS
version is ≥ 6. `resolveJsonModule` must also be enabled (it usually is) —
the landing imports `locales/landing.*.json` directly.

## 7 · What the landing tree assumes

- Mount path is `/landing-page` (see `LANDING_BASE` in
  `components/landing/lib/locale.ts`). All internal links are written
  site-relative (`/platform/ai-copilot`) and stamped with the mount + locale
  prefix by `localeHref` — changing the mount is a one-line change.
- Sign-in links and "go to platform" CTAs cross to `https://racoedu.com/`
  (`components/landing/content/site.ts → site.platformUrl`). Product-mock
  browser chrome uses `*.racoedu.com` domains.
- Everything server-renders its copy; both language trees are indexable and
  carry hreflang (en ↔ bn + x-default), canonicals under
  `https://racoedu.com/landing-page…`, Organization/WebSite/SoftwareApplication/FAQPage/BreadcrumbList
  JSON-LD, and convention-based OG images per locale.

## 8 · Local development in this mirror

```
npm install
npm run dev        # http://localhost:3000 → redirects to /landing-page
npm run build      # 72 routes (26 EN + 26 BN + legal/dynamic params + OG images)
node scripts/contrast.mjs   # WCAG audit of the token pairs
```
