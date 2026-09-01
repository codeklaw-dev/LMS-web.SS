import type { Metadata } from 'next'
import { Hind_Siliguri, Inter, Playfair_Display } from 'next/font/google'
import JsonLd from '@components/landing/layout/JsonLd'
import { site } from '@components/landing/content/site'
import '@components/landing/styles/landing.css'

/**
 * Landing root layout — everything the tree shares across both locales:
 * the stylesheet, the three fonts (Playfair display / Inter sans / Hind
 * Siliguri Bengali), default metadata, and the sitewide JSON-LD.
 *
 * The locale shells (route group (en) and bn/) own the `.landing` wrapper,
 * its language, and the anti-FOUC theme script. Nothing here renders DOM
 * beyond the font-variable div — the platform's root layout owns <html>.
 */

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const hind = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-hind',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://racoedu.com'),
  title: {
    default: 'RacoLearnHub — The AI-native learning platform for schools',
    template: '%s',
  },
}

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${playfair.variable} ${inter.variable} ${hind.variable}`}>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: site.name,
          legalName: site.legalName,
          url: 'https://racoedu.com/',
          logo: 'https://racoedu.com/landing-page/og-en.png',
          parentOrganization: { '@type': 'Organization', name: site.parent, url: site.parentSite },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: site.name,
          url: 'https://racoedu.com/landing-page',
          publisher: { '@type': 'Organization', name: site.parent },
          inLanguage: ['en', 'bn'],
        }}
      />
      {children}
    </div>
  )
}
