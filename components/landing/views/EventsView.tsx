import Section from '../ui/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Reveal from '../ui/Reveal'
import PageHero from '../blocks/PageHero'
import CtaBand from '../blocks/CtaBand'
import { type Locale } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/** Webinars & events — registration doubles as lead capture (§3.7). */
export default function EventsView({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const e = dict.pages.events

  return (
    <>
      <PageHero
        dict={dict}
        locale={locale}
        eyebrow={e.hero.eyebrow}
        title={e.hero.title}
        sub={e.hero.sub}
        crumbs={[{ label: dict.pages.resources.hero.crumb, href: '/resources' }, { label: e.hero.crumb }]}
        primary={null}
      />

      <Section>
        <div className="grid grid--3">
          {e.items.map((event, i) => (
            <Reveal key={event.title} delay={i * 0.05}>
              <Card panel style={{ height: '100%' }}>
                <Badge
                  tone={event.upcoming ? 'warm' : 'outline'}
                  style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-4)' }}
                >
                  {event.status}
                </Badge>
                <h2 className="card__title" style={{ fontSize: 'var(--step-1)' }}>
                  {event.title}
                </h2>
                <p className="card__body">{event.body}</p>
                <p className="tiny" style={{ color: 'var(--text-subtle)', marginTop: 'var(--space-4)' }}>
                  {event.date}
                </p>
                <div className="card__footer">
                  <button type="button" className="btn btn--secondary btn--block">
                    {event.upcoming ? e.register : e.watchOnDemand}
                  </button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand dict={dict} locale={locale} />
    </>
  )
}
