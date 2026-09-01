import Link from 'next/link'
import Section from '../ui/Section'
import PageHero from '../blocks/PageHero'
import { footerNav, legalNav } from '../content/navigation'
import { type Locale, localeHref } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/** HTML sitemap — §2.1 utility pages. Also a fast way to audit the IA. */
export default function SitemapView({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const s = dict.pages.sitemap
  const columns = [
    ...footerNav.map((col) => ({
      title: dict.nav.footerTitles[col.titleKey],
      links: col.links.map((l) => ({
        label: dict.nav.items[l.href]?.label ?? l.href,
        href: l.href,
      })),
    })),
    {
      title: s.legalColumn,
      links: [
        ...legalNav.map((l) => ({ label: dict.nav.items[l.href]?.label ?? l.href, href: l.href })),
        { label: s.thisPage, href: '/sitemap' },
      ],
    },
  ]

  return (
    <>
      <PageHero
        dict={dict}
        locale={locale}
        eyebrow={s.hero.eyebrow}
        title={s.hero.title}
        sub={s.hero.sub}
        crumbs={[{ label: s.hero.crumb }]}
        primary={null}
      />

      <Section>
        <div className="grid grid--3">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="h5" style={{ marginBottom: 'var(--space-4)' }}>
                {col.title}
              </h2>
              <ul className="grid" style={{ gap: 'var(--space-2)' }}>
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={localeHref(link.href, locale)} className="link-arrow">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Section>
    </>
  )
}
