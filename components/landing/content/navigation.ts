/**
 * Information architecture — structure only (§2.1, §2.2, §2.3).
 * Labels, descriptions and group titles live in dict.nav, keyed so this file
 * contains no English and is identical for both locales.
 */

export interface NavItem {
  href: string
}

export interface NavGroup {
  /** key into dict.nav.groups */
  group: string
  items: NavItem[]
}

export interface NavMenuDef {
  id: 'platform' | 'solutions' | 'resources'
  href: string
  groups: NavGroup[]
  featured?: {
    /** key into dict.nav.featured[menuId] */
    href: string
  }
}

export const platformMenu: NavMenuDef = {
  id: 'platform',
  href: '/platform',
  groups: [
    {
      group: 'teaching',
      items: [
        { href: '/platform/ai-copilot' },
        { href: '/platform/simulations' },
        { href: '/platform/courses' },
        { href: '/platform/playgrounds' },
      ],
    },
    {
      group: 'running',
      items: [
        { href: '/platform/community' },
        { href: '/platform/analytics' },
        { href: '/platform/white-label' },
        { href: '/platform/payments' },
      ],
    },
  ],
  featured: { href: '/platform/ai-copilot' },
}

export const solutionsMenu: NavMenuDef = {
  id: 'solutions',
  href: '/solutions',
  groups: [
    {
      group: 'by-role',
      items: [
        { href: '/solutions/leaders' },
        { href: '/solutions/teachers' },
        { href: '/solutions/students' },
      ],
    },
    {
      group: 'by-org',
      items: [
        { href: '/solutions/trusts' },
        { href: '/curriculum/cambridge' },
        { href: '/curriculum/edexcel' },
      ],
    },
  ],
  featured: { href: '/resources/case-studies' },
}

export const resourcesMenu: NavMenuDef = {
  id: 'resources',
  href: '/resources',
  groups: [
    {
      group: 'learn',
      items: [
        { href: '/resources/case-studies' },
        { href: '/resources/blog' },
        { href: '/resources/events' },
        { href: '/help' },
      ],
    },
  ],
}

/** Centre of the header. Menu-bearing entries render mega-menus. */
export const primaryNav: { labelHref: string; menu?: NavMenuDef }[] = [
  { labelHref: '/platform', menu: platformMenu },
  { labelHref: '/solutions', menu: solutionsMenu },
  { labelHref: '/curriculum' },
  { labelHref: '/pricing' },
  { labelHref: '/resources', menu: resourcesMenu },
]

/** Four footer link columns (§2.3). */
export const footerNav: { titleKey: string; links: NavItem[] }[] = [
  {
    titleKey: 'platform',
    links: [
      { href: '/platform' },
      { href: '/platform/ai-copilot' },
      { href: '/platform/simulations' },
      { href: '/platform/courses' },
      { href: '/platform/playgrounds' },
      { href: '/platform/community' },
      { href: '/platform/analytics' },
      { href: '/platform/white-label' },
      { href: '/platform/payments' },
    ],
  },
  {
    titleKey: 'solutions',
    links: [
      { href: '/solutions/leaders' },
      { href: '/solutions/teachers' },
      { href: '/solutions/students' },
      { href: '/solutions/trusts' },
      { href: '/curriculum/cambridge' },
      { href: '/curriculum/edexcel' },
      { href: '/security' },
      { href: '/pricing' },
    ],
  },
  {
    titleKey: 'resources',
    links: [
      { href: '/resources/case-studies' },
      { href: '/resources/blog' },
      { href: '/resources/events' },
      { href: '/help' },
      { href: '/resources' },
      { href: '/sitemap' },
    ],
  },
  {
    titleKey: 'company',
    links: [
      { href: '/about' },
      { href: '/about#mission' },
      { href: '/about#team' },
      { href: '/about#careers' },
      { href: '/contact' },
      { href: '/demo' },
    ],
  },
]

export const legalNav: NavItem[] = [
  { href: '/privacy' },
  { href: '/terms' },
  { href: '/cookies' },
  { href: '/accessibility' },
  { href: '/safeguarding' },
]
