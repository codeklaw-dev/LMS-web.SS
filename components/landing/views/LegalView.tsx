import Link from 'next/link'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Icon from '../ui/Icon'
import PageHero from '../blocks/PageHero'
import { legalNav } from '../content/navigation'
import { legalSlugs } from '../content/legal'
import { type Locale, localeHref } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * Utility & legal pages — §2.1. Structural skeletons only.
 *
 * Legal copy is deliberately not drafted here: privacy, terms, cookies,
 * safeguarding and the accessibility statement must be written and approved
 * by the people accountable for them. What this provides is the route, the
 * page furniture and a contents structure for that copy to land into.
 * Headings are translated; section bodies are stubs in both locales.
 */
export default function LegalView({
  dict,
  locale,
  slug,
}: {
  dict: Dictionary
  locale: Locale
  slug: string
}) {
  const page = dict.pages.legal.pages[slug] ?? dict.pages.legal.pages.privacy
  const l = dict.pages.legal

  return (
    <>
      <PageHero
        dict={dict}
        locale={locale}
        eyebrow={l.eyebrow}
        title={page.title}
        sub={page.sub}
        crumbs={[{ label: page.title }]}
        primary={null}
      />

      <Section>
        <Container size="prose" style={{ padding: 0 }}>
          <p className="note" style={{ marginBottom: 'var(--space-8)' }}>
            <Icon name="TriangleAlert" size={16} />
            <span>
              <strong>{l.note.strong}</strong> {l.note.body}
            </span>
          </p>

          <nav aria-label={l.contentsLabel} style={{ marginBottom: 'var(--space-9)' }}>
            <p className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
              {l.contentsTitle}
            </p>
            <ol className="grid" style={{ gap: 'var(--space-2)' }}>
              {page.sections.map((section, i) => (
                <li key={section}>
                  <a href={`#s-${i}`} className="link-arrow">
                    <span>
                      {i + 1}. {section}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="prose">
            {page.sections.map((section, i) => (
              <section key={section} id={`s-${i}`}>
                <h2>
                  {i + 1}. {section}
                </h2>
                <p style={{ color: 'var(--text-subtle)' }}>
                  {l.sectionStub.replace('{section}', section.toLowerCase())}
                </p>
              </section>
            ))}
          </div>

          <hr className="rule" style={{ marginBlock: 'var(--space-9)' }} />

          <nav aria-label={l.relatedLabel}>
            <p className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
              {l.relatedTitle}
            </p>
            <ul className="cluster">
              {legalNav
                .filter((item) => item.href !== `/${slug}`)
                .map((item) => (
                  <li key={item.href}>
                    <Link href={localeHref(item.href, locale)} className="badge badge--outline">
                      {dict.nav.items[item.href]?.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </Container>
      </Section>
    </>
  )
}
