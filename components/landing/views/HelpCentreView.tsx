import Section from '../ui/Section'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import PageHero from '../blocks/PageHero'
import HelpSearch from './HelpSearch'
import { type Locale } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/** Help Centre — reassures prospects that support is real (§3.7). */
export default function HelpCentreView({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: Locale
}) {
  const h = dict.pages.help

  return (
    <>
      <PageHero
        dict={dict}
        locale={locale}
        eyebrow={h.hero.eyebrow}
        title={h.hero.title}
        sub={h.hero.sub}
        crumbs={[{ label: h.hero.crumb }]}
        primary={null}
      >
        <HelpSearch dict={dict} />
      </PageHero>

      <Section>
        <SectionHead eyebrow={h.browseEyebrow} title={h.browseTitle} />
        <div className="grid grid--3">
          {h.topics.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.04}>
              <Card to="/help" locale={locale} style={{ height: '100%' }}>
                <span className="icon-tile">
                  <Icon name={t.icon} size={22} />
                </span>
                <h2 className="card__title" style={{ fontSize: 'var(--step-1)' }}>
                  {t.title}
                </h2>
                <p className="card__body">
                  {h.articlesLabel.replace('{count}', String(t.count))}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="inset" tight>
        <Card panel style={{ alignItems: 'center', textAlign: 'center', padding: 'var(--space-9)' }}>
          <h2 className="h4">{h.cantFind.title}</h2>
          <p className="body-muted center" style={{ marginTop: 'var(--space-3)' }}>
            {h.cantFind.body}
          </p>
          <div className="cluster" style={{ justifyContent: 'center', marginTop: 'var(--space-6)' }}>
            <a href={`mailto:${h.cantFind.email}`} className="btn btn--primary">
              {h.cantFind.cta}
            </a>
          </div>
        </Card>
      </Section>
    </>
  )
}
