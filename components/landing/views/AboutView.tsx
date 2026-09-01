import Section from '../ui/Section'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import PageHero from '../blocks/PageHero'
import CtaBand from '../blocks/CtaBand'
import { site } from '../content/site'
import { type Locale } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * About — §3.8. The credibility anchor for the whole site: an established
 * UK company, serious about AI, that builds for people rather than instead
 * of them.
 */
export default function AboutView({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const a = dict.pages.about

  return (
    <>
      <PageHero
        dict={dict}
        locale={locale}
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        sub={a.hero.sub}
        crumbs={[{ label: a.hero.crumb }]}
        secondary={{ label: a.hero.secondary, href: site.parentSite }}
      />

      <Section id="mission">
        <div className="grid grid--2" style={{ gap: 'clamp(2rem, 1rem + 4vw, 4rem)' }}>
          <Reveal>
            <p className="eyebrow">{a.mission.eyebrow}</p>
            <h2 className="h3" style={{ marginBlock: 'var(--space-4)' }}>
              {a.mission.title}
            </h2>
            <div className="prose">
              {a.mission.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} id="why-education">
            <Card panel style={{ height: '100%' }}>
              <span className="icon-tile">
                <Icon name="Heart" size={22} />
              </span>
              <h3 className="card__title">{a.mission.cardTitle}</h3>
              <p className="card__body">{a.mission.cardBody}</p>
              <ul className="checklist" style={{ marginTop: 'var(--space-6)' }}>
                {a.mission.cardItems.map((item) => (
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

      <Section tone="inset" id="team">
        <SectionHead eyebrow={a.team.eyebrow} title={a.team.title} sub={a.team.sub} />
        <div className="grid grid--4">
          {a.team.groups.map((group, i) => (
            <Reveal key={group} delay={i * 0.05}>
              <Card panel style={{ height: '100%' }}>
                <span
                  className="skeleton"
                  style={{ width: 56, height: 56, borderRadius: '50%', marginBottom: 'var(--space-5)' }}
                />
                <h3 className="card__title" style={{ fontSize: 'var(--step-0)' }}>
                  {group}
                </h3>
                <p className="card__body">{a.team.cardBody}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid--3">
          <Reveal>
            <Card panel style={{ height: '100%' }}>
              <span className="icon-tile icon-tile--trust">
                <Icon name="Cpu" size={22} />
              </span>
              <h3 className="card__title">{a.cards.engineering.title}</h3>
              <p className="card__body">{a.cards.engineering.body}</p>
              <Button
                href={site.parentSite}
                variant="ghost"
                className="card__footer"
                iconRight="ArrowUpRight"
              >
                racoai.io
              </Button>
            </Card>
          </Reveal>

          <Reveal delay={0.06} id="careers">
            <Card panel style={{ height: '100%' }}>
              <span className="icon-tile icon-tile--warm">
                <Icon name="Briefcase" size={22} />
              </span>
              <h3 className="card__title">{a.cards.careers.title}</h3>
              <p className="card__body">{a.cards.careers.body}</p>
              <Button
                to="/contact"
                locale={locale}
                variant="ghost"
                className="card__footer"
                iconRight="ArrowRight"
              >
                {a.cards.careers.cta}
              </Button>
            </Card>
          </Reveal>

          <Reveal delay={0.12}>
            <Card panel style={{ height: '100%' }}>
              <span className="icon-tile">
                <Icon name="Newspaper" size={22} />
              </span>
              <h3 className="card__title">{a.cards.press.title}</h3>
              <p className="card__body">
                {a.cards.press.body
                  .replace('{legalName}', dict.site.legalName)
                  .replace('{address}', dict.site.address)
                  .replace('{engineering}', dict.site.engineering)}
              </p>
              <Button
                to="/contact"
                locale={locale}
                variant="ghost"
                className="card__footer"
                iconRight="ArrowRight"
              >
                {a.cards.press.cta}
              </Button>
            </Card>
          </Reveal>
        </div>
      </Section>

      <CtaBand dict={dict} locale={locale} />
    </>
  )
}
