import { redirect } from 'next/navigation'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import Accordion from '../ui/Accordion'
import PageHero from '../blocks/PageHero'
import CtaBand from '../blocks/CtaBand'
import Testimonials from '../blocks/Testimonials'
import JsonLd from '../layout/JsonLd'
import { isSolutionSlug, solutionOrder } from '../content/solutions'
import { type Locale, localeHref } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/** Persona pages — §3.3. One template, four narratives. */
export default function SolutionView({
  dict,
  locale,
  slug,
}: {
  dict: Dictionary
  locale: Locale
  slug: string
}) {
  if (!isSolutionSlug(slug)) redirect(localeHref('/solutions', locale))
  const page = dict.solutionPages[slug]
  const s = dict.pages.solutions.detail

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
        crumbs={[
          { label: dict.pages.solutions.hero.crumb, href: '/solutions' },
          { label: page.name },
        ]}
        primary={{ label: page.ctaLabel, href: page.ctaHref }}
        secondary={{ label: s.seePlatform, href: '/platform' }}
      />

      <Section tight tone="elevated">
        <dl className="grid grid--3" style={{ textAlign: 'center' }}>
          {page.stats.map((stat) => (
            <div className="stat" key={stat.label} style={{ alignItems: 'center' }}>
              <dt className="visually-hidden">{stat.label}</dt>
              <dd className="stat-value" style={{ margin: 0 }}>
                {stat.value}
              </dd>
              <dd className="stat-label" style={{ margin: 0 }} aria-hidden="true">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
        <p className="tiny center" style={{ color: 'var(--text-subtle)', marginTop: 'var(--space-6)' }}>
          {s.statsNote}
        </p>
      </Section>

      <Section className="section--major">
        <div className="ruled-cols ruled-cols--2">
          {page.sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.05} className="ruled-col">
              <div>
                <span className="ruled-col__kicker">{String(i + 1).padStart(2, '0')}</span>
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

      <Section tone="inset" className="section--major">
        <SectionHead eyebrow={s.testimonialsEyebrow} title={s.testimonialsTitle} />
        <Testimonials dict={dict} locale={locale} />
      </Section>

      {page.faq.length > 0 && (
        <Section>
          <Container size="narrow" style={{ padding: 0 }}>
            <SectionHead eyebrow={s.faqEyebrow} title={s.faqTitle} />
            <Accordion items={page.faq} />
          </Container>
        </Section>
      )}

      <Section tone="inset" tight>
        <SectionHead eyebrow={s.otherRolesEyebrow} title={s.otherRolesTitle} />
        <div className="grid grid--3">
          {solutionOrder
            .filter((s2) => s2 !== slug)
            .map((s2) => (
              <Card to={`/solutions/${s2}`} locale={locale} key={s2} style={{ height: '100%' }}>
                <h3 className="card__title" style={{ fontSize: 'var(--step-0)' }}>
                  {dict.solutionPages[s2].name}
                </h3>
                <p className="card__body">{dict.solutionPages[s2].h1}</p>
              </Card>
            ))}
        </div>
      </Section>

      <CtaBand dict={dict} locale={locale} />
    </>
  )
}
