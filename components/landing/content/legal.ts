/** Legal page slugs — copy lives in dict.pages.legal.pages. */
export const legalSlugs = ['privacy', 'terms', 'cookies', 'accessibility', 'safeguarding'] as const

export type LegalSlug = (typeof legalSlugs)[number]

export function isLegalSlug(slug: string): slug is LegalSlug {
  return (legalSlugs as readonly string[]).includes(slug)
}
