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
import { isCurriculumSlug } from '../content/solutions'
import { type Locale, localeHref } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * Exam-board landing pages — §3.4. These carry the credibility hook for
 * this market and capture the long-tail intent identified in §6.
 */
export default function CurriculumView({
  dict,
  locale,
  slug,
}: {
  dict: Dictionary
  locale: Locale
  slug: string
}) {
  if (!isCurriculumSlug(slug)) redirect(localeHref('/curriculum', locale))
  const page = dict.curriculumPages[slug]
  const c = dict.pages.curriculum.detail

  const faq = [
    {
      q: c.faq.levelsQ.replace('{board}', page.board),
      a: `${page.levels.join(', ')} — ${c.faq.levelsA}`,
    },
    { q: c.faq.alignmentQ, a: c.faq.alignmentA },
    { q: c.faq.mixQ, a: c.faq.mixA },
  ]

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }}
      />

      <PageHero
        dict={dict}
        locale={locale}
        eyebrow={page.fullName}
        title={page.h1}
        sub={page.sub}
        crumbs={[{ label: dict.pages.curriculum.hero.crumb, href: '/curriculum' }, { label: page.board }]}
        primary={{ label: page.ctaLabel.replace('{board}', page.board), href: '/demo' }}
        secondary={{ label: page.secondaryLabel, href: '/platform/courses' }}
      />

      <Section>
        <SectionHead
          eyebrow={c.coverage.eyebrow}
          title={c.coverage.title}
          sub={c.coverage.sub.replace('{fullName}', page.fullName)}
        />
        <div className="grid grid--2">
          <Reveal>
            <Card panel style={{ height: '100%' }}>
              <span className="icon-tile">
                <Icon name="Layers" size={22} />
              </span>
              <h3 className="card__title">{c.levelsTitle}</h3>
              <ul className="checklist" style={{ marginTop: 'var(--space-4)' }}>
                {page.levels.map((l) => (
                  <li key={l}>
                    <Icon name="Check" size={16} strokeWidth={2.5} />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={0.06}>
            <Card panel style={{ height: '100%' }}>
              <span className="icon-tile icon-tile--trust">
                <Icon name="BookOpen" size={22} />
              </span>
              <h3 className="card__title">{c.subjectsTitle}</h3>
              <ul className="cluster" style={{ marginTop: 'var(--space-4)' }}>
                {page.subjects.map((s) => (
                  <li className="badge badge--outline" key={s}>
                    {s}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="inset">
        <SectionHead eyebrow={c.alignment.eyebrow} title={c.alignment.title} sub={c.alignment.sub} />
        <div className="grid grid--3">
          {c.alignment.cards.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <Card panel style={{ height: '100%' }}>
                <span className="icon-tile">
                  <Icon name={item.icon} size={22} />
                </span>
                <h3 className="card__title" style={{ fontSize: 'var(--step-1)' }}>
                  {item.title}
                </h3>
                <p className="card__body">{item.body.replace('{board}', page.board)}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow={c.testimonialsEyebrow}
          title={c.testimonialsTitle.replace('{board}', page.board)}
        />
        <Testimonials dict={dict} locale={locale} />
      </Section>

      <Section tone="inset">
        <Container size="narrow" style={{ padding: 0 }}>
          <SectionHead eyebrow={c.faqEyebrow} title={c.faqTitle.replace('{board}', page.board)} />
          <Accordion items={faq} />
        </Container>
      </Section>

      <Reveal>
        <Container style={{ paddingBottom: 'var(--space-9)' }}>
          <p className="note">
            <Icon name="Info" size={15} />
            <span>{c.independenceNote.replace('{fullName}', page.fullName)}</span>
          </p>
        </Container>
      </Reveal>

      <CtaBand
        dict={dict}
        locale={locale}
        title={c.cta.title.replace('{board}', page.board)}
        sub={c.cta.sub}
      />
    </>
  )
}
