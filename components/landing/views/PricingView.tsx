import Section from '../ui/Section'
import Container from '../ui/Container'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import Accordion from '../ui/Accordion'
import PageHero from '../blocks/PageHero'
import PricingTable from '../blocks/PricingTable'
import CtaBand from '../blocks/CtaBand'
import TrustBar from '../blocks/TrustBar'
import JsonLd from '../layout/JsonLd'
import { type Locale } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * Pricing — §3.6. Every plan routes to a demo, not a checkout.
 * Tiers are illustrative until commercials are confirmed (§9).
 */
export default function PricingView({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const p = dict.pages.pricing

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: dict.pricingFaq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }}
      />

      <PageHero
        dict={dict}
        locale={locale}
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        sub={p.hero.sub}
        crumbs={[{ label: p.hero.crumb }]}
        secondary={{ label: p.hero.secondary, href: '/contact' }}
      />

      <Section tight>
        <PricingTable dict={dict} locale={locale} />
        <Reveal style={{ marginTop: 'var(--space-8)' }}>
          <p className="note">
            <Icon name="Info" size={15} />
            <span>{p.tiersNote}</span>
          </p>
        </Reveal>
      </Section>

      <TrustBar dict={dict} headline={p.trustHeadline} />

      {/* ---- What's included comparison table -------------------------- */}
      <Section>
        <SectionHead eyebrow={p.compare.eyebrow} title={p.compare.title} sub={p.compare.sub} />
        <Reveal>
          <div className="table-wrap">
            <table className="table">
              <caption className="visually-hidden">{p.compare.caption}</caption>
              <thead>
                <tr>
                  {p.compare.headers.map((header) => (
                    <th scope="col" key={header}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {p.compare.rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" style={{ fontWeight: 600, color: 'var(--text)' }}>
                      {row.label}
                    </th>
                    {row.values.map((included, i) => (
                      <td key={i}>
                        {included ? (
                          <>
                            <Icon
                              name="Check"
                              size={17}
                              strokeWidth={2.5}
                              style={{ color: 'var(--trust-500)' }}
                            />
                            <span className="visually-hidden">{p.compare.included}</span>
                          </>
                        ) : (
                          <>
                            <Icon name="Minus" size={17} style={{ color: 'var(--text-subtle)' }} />
                            <span className="visually-hidden">{p.compare.notIncluded}</span>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      {/* ---- ROI / cost-consolidation note ----------------------------- */}
      <Section tone="inset">
        <div className="grid grid--2" style={{ gap: 'clamp(2rem, 1rem + 4vw, 4rem)', alignItems: 'center' }}>
          <Reveal>
            <p className="eyebrow">{p.roi.eyebrow}</p>
            <h2 className="h3" style={{ marginBlock: 'var(--space-4)' }}>
              {p.roi.title}
            </h2>
            <p className="body-muted">{p.roi.body}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <Card panel>
              <h3 className="card__title" style={{ fontSize: 'var(--step-1)' }}>
                {p.roi.cardTitle}
              </h3>
              <ul className="checklist" style={{ marginTop: 'var(--space-4)' }}>
                {p.roi.cardItems.map((item) => (
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

      <Section>
        <Container size="narrow" style={{ padding: 0 }}>
          <SectionHead eyebrow={p.faqEyebrow} title={p.faqTitle} />
          <Accordion items={dict.pricingFaq} />
        </Container>
      </Section>

      <CtaBand
        dict={dict}
        locale={locale}
        title={p.cta.title}
        sub={p.cta.sub}
        secondary={{ label: p.cta.secondary, href: '/contact' }}
      />
    </>
  )
}
