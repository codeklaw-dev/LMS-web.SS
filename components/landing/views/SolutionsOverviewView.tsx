import Section from '../ui/Section'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import PageHero from '../blocks/PageHero'
import CtaBand from '../blocks/CtaBand'
import { solutionOrder } from '../content/solutions'
import { type Locale } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

export default function SolutionsOverviewView({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: Locale
}) {
  const s = dict.pages.solutions

  return (
    <>
      <PageHero
        dict={dict}
        locale={locale}
        eyebrow={s.hero.eyebrow}
        title={s.hero.title}
        sub={s.hero.sub}
        crumbs={[{ label: s.hero.crumb }]}
        secondary={{ label: s.hero.secondary, href: '/platform' }}
      />

      <Section>
        <div className="grid grid--2">
          {solutionOrder.map((slug, i) => {
            const page = dict.solutionPages[slug]
            return (
              <Reveal key={slug} delay={i * 0.05}>
                <Card to={`/solutions/${slug}`} locale={locale} style={{ height: '100%' }}>
                  <p className="eyebrow">{page.eyebrow}</p>
                  <h2
                    className="card__title"
                    style={{ fontSize: 'var(--step-2)', marginTop: 'var(--space-3)' }}
                  >
                    {page.h1}
                  </h2>
                  <p className="card__body">{page.sub}</p>
                  <span className="card__footer link-arrow">
                    {dict.ui.explore} <Icon name="ArrowRight" size={15} className="icon-flip" />
                  </span>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section tone="inset">
        <SectionHead
          eyebrow={s.pillars.eyebrow}
          title={s.pillars.title}
          sub={s.pillars.sub}
        />
        <div className="grid grid--4">
          {dict.valuePillars.map((p, i) => (
            <Reveal key={p.pillar} delay={i * 0.05}>
              <Card style={{ height: '100%' }}>
                <h3 className="card__title" style={{ fontSize: 'var(--step-0)' }}>
                  {p.pillar}
                </h3>
                <p className="card__body">{p.promise}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand dict={dict} locale={locale} />
    </>
  )
}
