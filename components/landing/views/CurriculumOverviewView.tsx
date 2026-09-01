import Section from '../ui/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import PageHero from '../blocks/PageHero'
import CtaBand from '../blocks/CtaBand'
import { curriculumOrder } from '../content/solutions'
import { type Locale } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

export default function CurriculumOverviewView({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: Locale
}) {
  const c = dict.pages.curriculum

  return (
    <>
      <PageHero
        dict={dict}
        locale={locale}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        sub={c.hero.sub}
        crumbs={[{ label: c.hero.crumb }]}
        secondary={{ label: c.hero.secondary, href: '/platform/courses' }}
      />

      <Section>
        <div className="grid grid--2">
          {curriculumOrder.map((slug, i) => {
            const page = dict.curriculumPages[slug]
            return (
              <Reveal key={slug} delay={i * 0.06}>
                <Card to={`/curriculum/${slug}`} locale={locale} style={{ height: '100%' }}>
                  <Badge
                    tone="trust"
                    style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-5)' }}
                  >
                    {c.boardBadge}
                  </Badge>
                  <h2 className="card__title" style={{ fontSize: 'var(--step-2)' }}>
                    {page.fullName}
                  </h2>
                  <p className="card__body">{page.sub}</p>
                  <ul className="cluster" style={{ marginTop: 'var(--space-5)' }}>
                    {page.levels.slice(0, 3).map((l) => (
                      <li className="badge badge--outline" key={l}>
                        {l}
                      </li>
                    ))}
                  </ul>
                  <span className="card__footer link-arrow">
                    {page.linkCue.replace('{board}', page.board)}{' '}
                    <Icon name="ArrowRight" size={15} className="icon-flip" />
                  </span>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section tone="inset">
        <SectionHead
          eyebrow={c.other.eyebrow}
          title={c.other.title}
          sub={c.other.sub}
          align="center"
        />
      </Section>

      <CtaBand dict={dict} locale={locale} />
    </>
  )
}
