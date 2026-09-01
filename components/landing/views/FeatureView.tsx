import { redirect } from 'next/navigation'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import PageHero from '../blocks/PageHero'
import FeatureSpotlight from '../blocks/FeatureSpotlight'
import CtaBand from '../blocks/CtaBand'
import Accordion from '../ui/Accordion'
import CopilotMock from '../blocks/CopilotMock'
import JsonLd from '../layout/JsonLd'
import { isPlatformSlug, platformOrder } from '../content/platform'
import { capabilities } from '../content/site'
import { type Locale, localeHref } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * One template, eight feature pages — Blueprint §3.2.
 *
 * Keeping these on a shared template is a deliberate call: the pages share
 * a structure (hero → copy pillars → alternating sections → related → FAQ →
 * CTA), so the difference between them should live in content, not in eight
 * near-identical components that drift apart the first time the design
 * changes.
 */
export default function FeatureView({
  dict,
  locale,
  slug,
}: {
  dict: Dictionary
  locale: Locale
  slug: string
}) {
  if (!isPlatformSlug(slug)) redirect(localeHref('/platform', locale))
  const page = dict.platformPages[slug]
  const f = dict.pages.platform.feature

  const related = platformOrder.filter((s) => s !== slug).slice(0, 3)

  return (
    <>
      {page.faq.length > 0 && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: page.faq.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }}
        />
      )}

      <PageHero
        dict={dict}
        locale={locale}
        eyebrow={page.eyebrow}
        title={page.h1}
        sub={page.sub}
        crumbs={[{ label: dict.pages.platform.hero.crumb, href: '/platform' }, { label: page.name }]}
        primary={{ label: page.ctaLabel, href: page.ctaHref }}
        secondary={{ label: f.allCapabilities, href: '/platform' }}
      >
        <div className="cluster" style={{ marginTop: 'var(--space-7)' }}>
          {page.pillars.map((pillar) => (
            <Badge key={pillar} tone="outline">
              {pillar}
            </Badge>
          ))}
        </div>
      </PageHero>

      {/* The first section gets a visual; the rest are copy-led, which keeps
          the page from becoming a wall of identical two-column blocks. */}
      <Section className="section--major">
        <FeatureSpotlight
          locale={locale}
          title={page.sections[0].title}
          body={page.sections[0].body}
          points={page.sections[0].points}
          media={<CopilotMock dict={dict} url={`${slug}.racoedu.com`} />}
        />
      </Section>

      <Section tone="inset" className="section--major">
        <div className="ruled-cols ruled-cols--3">
          {page.sections.slice(1).map((section, i) => (
            <Reveal key={section.title} delay={i * 0.06} className="ruled-col">
              <div>
                <h2 className="ruled-col__title">{section.title}</h2>
                <p className="ruled-col__body">{section.body}</p>
                <ul className="checklist" style={{ marginTop: 'var(--space-5)' }}>
                  {section.points.map((point) => (
                    <li key={point}>
                      <Icon name="Check" size={16} strokeWidth={2.5} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {page.faq.length > 0 && (
        <Section>
          <Container size="narrow" style={{ padding: 0 }}>
            <SectionHead eyebrow={f.faqEyebrow} title={`${page.name} — ${f.faqTitle}`} />
            <Accordion items={page.faq} />
          </Container>
        </Section>
      )}

      <Section tone="inset">
        <SectionHead eyebrow={f.exploreEyebrow} title={f.exploreTitle} />
        <div className="grid grid--3">
          {related.map((relSlug) => {
            const rel = dict.platformPages[relSlug]
            const meta = capabilities.find((c) => c.href.endsWith(relSlug))
            return (
              <Card to={`/platform/${relSlug}`} locale={locale} key={relSlug} style={{ height: '100%' }}>
                <span className="icon-tile">
                  <Icon name={meta?.icon ?? 'Circle'} size={22} />
                </span>
                <h3 className="card__title">{rel.name}</h3>
                <p className="card__body">{rel.sub}</p>
                <span className="card__footer link-arrow">
                  {dict.ui.explore} <Icon name="ArrowRight" size={15} className="icon-flip" />
                </span>
              </Card>
            )
          })}
        </div>
      </Section>

      <CtaBand dict={dict} locale={locale} />
    </>
  )
}
