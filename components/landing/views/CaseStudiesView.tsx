import Link from 'next/link'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import PageHero from '../blocks/PageHero'
import CtaBand from '../blocks/CtaBand'
import { type Locale, localeHref } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * Case studies — filterable card grid (§3.7).
 * The filter lives in the URL (?filter=Cambridge) and the chips are
 * server-rendered <Link>s, so every filtered view is crawlable and
 * shareable — the Next port of the SPA's useSearchParams state.
 */
const FILTERS = ['All', 'Cambridge', 'Edexcel', 'Trust', 'International'] as const
type Filter = (typeof FILTERS)[number]

function isFilter(v: string | undefined): v is Filter {
  return !!v && (FILTERS as readonly string[]).includes(v)
}

export default function CaseStudiesView({
  dict,
  locale,
  filter,
}: {
  dict: Dictionary
  locale: Locale
  filter?: string
}) {
  const c = dict.pages.caseStudies
  const active: Filter = isFilter(filter) ? filter : 'All'

  const visible = c.items.filter((cs) => {
    if (active === 'All') return true
    // A school teaching both boards matches either board filter, but must
    // not slip through a school-type filter it does not belong to.
    if (active === 'Cambridge' || active === 'Edexcel') {
      return cs.curriculum === active || cs.curriculum === c.bothLabel
    }
    return cs.type === active
  })

  return (
    <>
      <PageHero
        dict={dict}
        locale={locale}
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        sub={c.hero.sub}
        crumbs={[{ label: dict.pages.resources.hero.crumb, href: '/resources' }, { label: c.hero.crumb }]}
        secondary={{ label: c.hero.secondary, href: '/demo' }}
      />

      <Section>
        <div
          className="cluster"
          style={{ marginBottom: 'var(--space-8)' }}
          role="group"
          aria-label={c.filterLabel}
        >
          {FILTERS.map((f) => {
            const href =
              f === 'All'
                ? localeHref('/resources/case-studies', locale)
                : `${localeHref('/resources/case-studies', locale)}?filter=${f}`
            return (
              <Link
                key={f}
                href={href}
                className={`btn btn--sm ${active === f ? 'btn--primary' : 'btn--secondary'}`}
                aria-pressed={active === f}
              >
                {f === 'All' ? c.allFilter : f}
              </Link>
            )
          })}
        </div>

        {visible.length === 0 ? (
          <Card
            panel
            style={{ alignItems: 'center', textAlign: 'center', padding: 'var(--space-10)' }}
          >
            <span className="icon-tile">
              <Icon name="SearchX" size={22} />
            </span>
            <h2 className="card__title">{c.empty.title}</h2>
            <p className="card__body">{c.empty.body}</p>
            <Link href={localeHref('/contact', locale)} className="btn btn--secondary card__footer">
              {c.empty.cta}
            </Link>
          </Card>
        ) : (
          <div className="grid grid--3">
            {visible.map((cs, i) => (
              <Reveal key={cs.title} delay={i * 0.05}>
                <Card to="/resources/case-studies" locale={locale} style={{ height: '100%' }}>
                  <Badge
                    tone="outline"
                    style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-4)' }}
                  >
                    {dict.ui.placeholderBadge}
                  </Badge>
                  <h2 className="card__title" style={{ fontSize: 'var(--step-1)' }}>
                    {cs.title}
                  </h2>
                  <p className="card__body">
                    {cs.school} · {cs.country} · {cs.curriculum}
                  </p>
                  <p className="stat-value card__footer" style={{ fontSize: 'var(--step-2)' }}>
                    {cs.stat}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      <CtaBand dict={dict} locale={locale} title={c.cta.title} sub={c.cta.sub} />
    </>
  )
}
