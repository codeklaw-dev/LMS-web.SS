import Section from '../ui/Section'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import PageHero from '../blocks/PageHero'
import { type Locale } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * Contact — §3.10. Three routes, with the demo signposted as primary.
 * This page channels non-sales enquiries; it does not replace /demo.
 */
export default function ContactView({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const c = dict.pages.contact

  return (
    <>
      <PageHero
        dict={dict}
        locale={locale}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        sub={c.hero.sub}
        crumbs={[{ label: c.hero.crumb }]}
        primary={{ label: dict.ui.bookDemo, href: '/demo' }}
        secondary={{ label: c.hero.secondary, href: '/help' }}
      />

      <Section>
        <div className="grid grid--3">
          {c.routes.map((route, i) => (
            <Reveal key={route.title} delay={i * 0.06}>
              <Card panel style={{ height: '100%' }}>
                <span className={`icon-tile ${route.primary ? '' : 'icon-tile--trust'}`}>
                  <Icon name={route.icon} size={22} />
                </span>
                <h2 className="card__title" style={{ fontSize: 'var(--step-1)' }}>
                  {route.title}
                </h2>
                <p className="card__body">{route.body}</p>
                <div className="card__footer">
                  <Button
                    to={route.ctaHref}
                    href={route.ctaHref.startsWith('mailto:') ? route.ctaHref : undefined}
                    locale={locale}
                    variant={route.primary ? 'primary' : 'secondary'}
                    block
                  >
                    {route.ctaLabel}
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="inset">
        <div className="grid grid--2" style={{ gap: 'clamp(2rem, 1rem + 4vw, 4rem)' }}>
          <Reveal>
            <h2 className="h4">{c.details.title}</h2>
            <div className="prose" style={{ marginTop: 'var(--space-5)' }}>
              <p>
                <strong>{dict.site.legalName}</strong>
                <br />
                {dict.site.address}
                <br />
                {dict.site.engineering}
              </p>
              <p>{c.details.note}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Card panel>
              <span className="icon-tile">
                <Icon name="Clock" size={22} />
              </span>
              <h2 className="card__title" style={{ fontSize: 'var(--step-1)' }}>
                {c.response.title}
              </h2>
              <ul className="checklist" style={{ marginTop: 'var(--space-4)' }}>
                {c.response.items.map((item) => (
                  <li key={item}>
                    <Icon name="Check" size={16} strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
