/** Platform feature slugs and ordering — copy lives in dict.platformPages. */
export const platformOrder = [
  'ai-copilot',
  'simulations',
  'courses',
  'playgrounds',
  'community',
  'analytics',
  'white-label',
  'payments',
] as const

export type PlatformSlug = (typeof platformOrder)[number]

export function isPlatformSlug(slug: string): slug is PlatformSlug {
  return (platformOrder as readonly string[]).includes(slug)
}
