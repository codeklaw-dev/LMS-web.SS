import Section from '../ui/Section'
import Container from '../ui/Container'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import Accordion from '../ui/Accordion'
import PageHero from '../blocks/PageHero'
import CtaBand from '../blocks/CtaBand'
import JsonLd from '../layout/JsonLd'
import { securityPillarIcons } from '../content/site'
import { type Locale } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * Security & Compliance — §3.5.
 * This page clears the IT/DPO gate and is designed to be linked directly
 * into a procurement pack, so it stands on its own without the sales
 * journey.
 */
export default function SecurityView({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const s = dict.pages.security

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: s.faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }}
      />

      <PageHero
        dict={dict}
        locale={locale}
        eyebrow={s.hero.eyebrow}
        title={s.hero.title}
        sub={s.hero.sub}
        crumbs={[{ label: s.hero.crumb }]}
        primary={{ label: s.hero.primary, href: '/contact' }}
        secondary={{ label: dict.ui.bookDemo, href: '/demo' }}
      />

      <Section className="section--major">
        <SectionHead
          eyebrow={s.essentials.eyebrow}
          title={s.essentials.title}
          sub={s.essentials.sub}
        />
        {/* An icon per pillar earns its place here: procurement readers scan
            this page for a specific control rather than reading it through. */}
        <div className="ruled-cols ruled-cols--2">
          {dict.securityPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.04} className="ruled-col">
              <div>
                <Icon name={securityPillarIcons[i] ?? 'ShieldCheck'} size={22} className="icon-bare icon-bare--trust" />
                <h2 className="ruled-col__title">{pillar.title}</h2>
                <p className="ruled-col__body">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="inset">
        <div className="grid grid--2" style={{ gap: 'clamp(2rem, 1rem + 4vw, 4rem)', alignItems: 'center' }}>
          <Reveal>
            <p className="eyebrow">{s.pack.eyebrow}</p>
            <h2 className="h3" style={{ marginBlock: 'var(--space-4)' }}>
              {s.pack.title}
            </h2>
            <p className="body-muted">{s.pack.body}</p>
            <div className="cluster" style={{ marginTop: 'var(--space-7)' }}>
              <Button to="/contact" locale={locale} iconRight="ArrowRight">
                {s.pack.cta}
              </Button>
              <Button to="/accessibility" locale={locale} variant="secondary">
                {s.pack.accessibility}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Card panel>
              <h3 className="card__title" style={{ fontSize: 'var(--step-1)' }}>
                {s.pack.cardTitle}
              </h3>
              <ul className="checklist" style={{ marginTop: 'var(--space-4)' }}>
                {s.pack.cardItems.map((item) => (
                  <li key={item}>
                    <Icon name="FileCheck2" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="note" style={{ marginTop: 'var(--space-6)' }}>
                <Icon name="Info" size={15} />
                <span>{s.pack.note}</span>
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Container size="narrow" style={{ padding: 0 }}>
          <SectionHead eyebrow={s.faqEyebrow} title={s.faqTitle} />
          <Accordion items={s.faq} />
        </Container>
      </Section>

      <CtaBand
        dict={dict}
        locale={locale}
        title={s.cta.title}
        sub={s.cta.sub}
        secondary={{ label: s.pack.cta, href: '/contact' }}
      />
    </>
  )
}
