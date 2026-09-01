/**
 * Locale plumbing for the landing tree.
 *
 * Internal hrefs across the landing are always written site-relative
 * ("/platform/ai-copilot"). `localeHref` stamps the mount segment and the
 * Bengali prefix, so views never hardcode either.
 */
export const LANDING_BASE = '/landing-page'

export type Locale = 'en' | 'bn'

export const locales: { code: Locale; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা' },
]

export function localeHref(path: string, locale: Locale): string {
  const suffix = path === '' ? '' : path.startsWith('/') ? path : `/${path}`
  return `${LANDING_BASE}${locale === 'bn' ? '/bn' : ''}${suffix}`
}

/** Site-relative path ("/platform/ai") from a Next pathname inside the tree. */
export function stripLocalePath(pathname: string): string {
  let rest = pathname.startsWith(LANDING_BASE) ? pathname.slice(LANDING_BASE.length) : pathname
  if (rest.startsWith('/bn')) rest = rest.slice(3)
  return rest === '' ? '/' : rest
}

/** Absolute canonical URL for a site-relative path. */
export function canonicalUrl(path: string, locale: Locale): string {
  const href = localeHref(path, locale)
  return `https://racoedu.com${href === LANDING_BASE ? href + '/' : href}`
}
