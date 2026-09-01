import Section from '../ui/Section'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import PageHero from '../blocks/PageHero'
import CapabilityGrid from '../blocks/CapabilityGrid'
import CtaBand from '../blocks/CtaBand'
import TrustBar from '../blocks/TrustBar'
import JsonLd from '../layout/JsonLd'
import { platformOrder } from '../content/platform'
import { type Locale, localeHref } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/** Platform overview — §3.2. The whole capability story on one page. */
export default function PlatformOverviewView({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: Locale
}) {
  const p = dict.pages.platform

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: dict.site.name,
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Web',
          description: dict.site.description,
          url: 'https://racoedu.com/landing-page/platform',
          offers: dict.pricingTiers.map((t) => ({
            '@type': 'Offer',
            name: t.name,
            description: t.summary,
            url: 'https://racoedu.com/landing-page/pricing',
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
        secondary={{ label: p.hero.secondary, href: '/pricing' }}
      />

      <TrustBar dict={dict} headline={p.trustHeadline} />

      <Section>
        <SectionHead eyebrow={p.capabilities.eyebrow} title={p.capabilities.title} sub={p.capabilities.sub} />
        <CapabilityGrid dict={dict} locale={locale} />
      </Section>

      <Section tone="inset">
        <SectionHead eyebrow={p.included.eyebrow} title={p.included.title} sub={p.included.sub} />
        <div className="grid grid--2">
          {platformOrder.map((slug, i) => {
            const page = dict.platformPages[slug]
            return (
              <Reveal key={slug} delay={i * 0.04}>
                <Card to={`/platform/${slug}`} locale={locale} style={{ height: '100%' }}>
                  <h3 className="card__title" style={{ fontSize: 'var(--step-1)' }}>
                    {page.name}
                  </h3>
                  <p className="card__body">{page.sub}</p>
                  <ul className="cluster" style={{ marginTop: 'var(--space-5)' }}>
                    {page.pillars.map((pillar) => (
                      <li className="badge badge--outline" key={pillar}>
                        {pillar}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Capability comparison — "Replaces:" (§3.2) */}
      <Section>
        <SectionHead eyebrow={p.replaces.eyebrow} title={p.replaces.title} sub={p.replaces.sub} />
        <Reveal>
          <div className="table-wrap">
            <table className="table">
              <caption className="visually-hidden">{p.replaces.caption}</caption>
              <thead>
                <tr>
                  {p.replaces.headers.map((header) => (
                    <th scope="col" key={header}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {p.replaces.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal style={{ marginTop: 'var(--space-6)' }}>
          <p className="note">
            <Icon name="Info" size={15} />
            <span>{p.replaces.note}</span>
          </p>
        </Reveal>
      </Section>

      <CtaBand dict={dict} locale={locale} />
    </>
  )
}
