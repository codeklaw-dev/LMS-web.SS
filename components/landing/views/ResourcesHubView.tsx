import Section from '../ui/Section'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import PageHero from '../blocks/PageHero'
import CtaBand from '../blocks/CtaBand'
import { type Locale } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * Resources hub — §3.7. The content engine (Phase 3 of the roadmap);
 * CMS-driven later. The skeleton renders the grids against placeholder
 * data so the shape is settled before content arrives.
 */
export default function ResourcesHubView({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: Locale
}) {
  const r = dict.pages.resources

  return (
    <>
      <PageHero
        dict={dict}
        locale={locale}
        eyebrow={r.hero.eyebrow}
        title={r.hero.title}
        sub={r.hero.sub}
        crumbs={[{ label: r.hero.crumb }]}
        primary={{ label: r.hero.primary, href: '/resources' }}
        secondary={{ label: dict.ui.bookDemo, href: '/demo' }}
      />

      <Section>
        <div className="grid grid--4">
          {r.sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <Card to={s.href} locale={locale} style={{ height: '100%' }}>
                <span className="icon-tile">
                  <Icon name={s.icon} size={22} />
                </span>
                <h2 className="card__title" style={{ fontSize: 'var(--step-1)' }}>
                  {s.title}
                </h2>
                <p className="card__body">{s.body}</p>
                <span className="card__footer link-arrow">
                  {r.browse} <Icon name="ArrowRight" size={15} className="icon-flip" />
                </span>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="inset">
        <div className="grid grid--2" style={{ gap: 'clamp(2rem, 1rem + 4vw, 4rem)', alignItems: 'center' }}>
          <Reveal>
            <p className="eyebrow">{r.brochure.eyebrow}</p>
            <h2 className="h3" style={{ marginBlock: 'var(--space-4)' }}>
              {r.brochure.title}
            </h2>
            <p className="body-muted">{r.brochure.body}</p>
            <div className="cluster" style={{ marginTop: 'var(--space-7)' }}>
              <Button icon="Download">{r.brochure.download}</Button>
              <Button to="/demo" locale={locale} variant="secondary">
                {r.brochure.demo}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <Card panel style={{ aspectRatio: '4 / 3', justifyContent: 'center', alignItems: 'center' }}>
              <span className="icon-tile" style={{ width: 64, height: 64 }}>
                <Icon name="FileText" size={30} />
              </span>
              <p className="card__body center">{r.brochure.preview}</p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <CtaBand dict={dict} locale={locale} />
    </>
  )
}
