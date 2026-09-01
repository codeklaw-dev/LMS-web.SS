/**
 * Structural site data — ids, icons, hrefs, tones, ordering.
 * Every human string lives in locales/landing.*.json and is joined at render
 * by key, so this file is safe to read for both locales.
 */

export const site = {
  name: 'RacoLearnHub',
  legalName: 'RACO AI Technologies Ltd',
  parent: 'RACO AI Technologies',
  parentSite: 'https://racoai.io',
  /** Sign-in and "go to platform" cross into the product at racoedu.com. */
  platformUrl: 'https://racoedu.com/',
  primaryCtaHref: '/demo',
  secondaryCtaHref: '/demo#overview',
} as const

/** §3.1 Section 4 — order + iconography for the six capabilities. */
export const capabilities = [
  { id: 'ai-copilot', icon: 'Sparkles', href: '/platform/ai-copilot', tone: 'brand' },
  { id: 'simulations', icon: 'Atom', href: '/platform/simulations', tone: 'trust' },
  { id: 'courses', icon: 'BookOpen', href: '/platform/courses', tone: 'brand' },
  { id: 'playgrounds', icon: 'Blocks', href: '/platform/playgrounds', tone: 'warm' },
  { id: 'analytics', icon: 'LineChart', href: '/platform/analytics', tone: 'trust' },
  { id: 'white-label', icon: 'Palette', href: '/platform/white-label', tone: 'warm' },
] as const

/** §3.1 Section 3 — pain-point icons (copy in dict.painPoints, same order). */
export const painPointIcons = ['Files', 'UserMinus', 'EyeOff'] as const

/** §3.1 Section 7 — persona columns. */
export const personas = [
  { id: 'leaders', icon: 'Building2', ctaHref: '/solutions/leaders' },
  { id: 'teachers', icon: 'GraduationCap', ctaHref: '/solutions/teachers' },
  { id: 'students', icon: 'Users', ctaHref: '/solutions/students' },
] as const

/** §3.1 Section 12 — numerals are structural; copy in dict.howItWorks. */
export const howItWorksSteps = ['01', '02', '03'] as const

/** §3.1 Section 8 — exam boards. */
export const examBoards = [
  { id: 'cambridge', href: '/curriculum/cambridge' },
  { id: 'edexcel', href: '/curriculum/edexcel' },
] as const

/** §3.5 — security pillar icons (copy in dict.securityPillars, same order). */
export const securityPillarIcons = [
  'ShieldCheck', 'Server', 'HeartHandshake', 'KeyRound',
  'Accessibility', 'Activity', 'BrainCircuit', 'FileCheck2',
] as const

/** Footer trust badges. */
export const trustBadges = [
  { icon: 'ShieldCheck', id: 'gdpr' },
  { icon: 'Accessibility', id: 'wcag' },
  { icon: 'GraduationCap', id: 'boards' },
] as const

/** Footer social marks — brand paths live in BrandIcon. */
export const socials = [
  { id: 'linkedin', href: 'https://linkedin.com' },
  { id: 'x', href: 'https://x.com' },
  { id: 'youtube', href: 'https://youtube.com' },
] as const

/** Home hero product-mock URL shown in the browser chrome (brand pass). */
export const mockUrls = {
  hero: 'northgate.racoedu.com',
  copilot: 'stmarys.racoedu.com',
} as const
