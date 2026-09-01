import Link from 'next/link'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import JsonLd from '../layout/JsonLd'
import { type Locale, localeHref, canonicalUrl } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * Interior-page hero. Quieter than the home hero, same structural grammar:
 * eyebrow → H1 → sub-head → actions. When crumbs are present it also emits
 * a BreadcrumbList — structured data rides along with the visible trail.
 */
export default function PageHero({
  dict,
  locale,
  eyebrow,
  title,
  sub,
  crumbs = [],
  primary,
  secondary,
  children,
}: {
  dict: Dictionary
  locale: Locale
  eyebrow?: string
  title: string
  sub?: string
  crumbs?: { label: string; href?: string }[]
  primary?: { label: string; href: string } | null
  secondary?: { label: string; href: string }
  children?: React.ReactNode
}) {
  const defaultPrimary = primary === undefined ? { label: dict.ui.bookDemo, href: '/demo' } : primary
  const trail = [{ label: dict.ui.home, href: '/' }, ...crumbs]

  return (
    <section className="page-hero">
      <div className="hero__aura" aria-hidden="true" />
      <Container>
        <div className="hero__inner">
          {crumbs.length > 0 && (
            <>
              <JsonLd
                data={{
                  '@context': 'https://schema.org',
                  '@type': 'BreadcrumbList',
                  itemListElement: trail.map((c, i) => ({
                    '@type': 'ListItem',
                    position: i + 1,
                    name: c.label,
                    ...(c.href ? { item: canonicalUrl(c.href, locale) } : {}),
                  })),
                }}
              />
              <nav className="crumbs" aria-label={dict.ui.breadcrumbLabel}>
                <Link href={localeHref('/', locale)}>{dict.ui.home}</Link>
                {crumbs.map((c) => (
                  <span key={c.href ?? c.label}>
                    <Icon
                      name="ChevronRight"
                      size={13}
                      style={{ display: 'inline', verticalAlign: '-2px' }}
                    />{' '}
                    {c.href ? (
                      <Link href={localeHref(c.href, locale)}>{c.label}</Link>
                    ) : (
                      <span>{c.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            </>
          )}

          <Reveal>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="page-hero__title">{title}</h1>
            {sub && <p className="page-hero__sub">{sub}</p>}

            {(defaultPrimary || secondary) && (
              <div className="page-hero__actions">
                {defaultPrimary && (
                  <Button
                    to={defaultPrimary.href}
                    locale={locale}
                    size="lg"
                    iconRight="ArrowRight"
                  >
                    {defaultPrimary.label}
                  </Button>
                )}
                {secondary && (
                  <Button to={secondary.href} locale={locale} variant="secondary" size="lg">
                    {secondary.label}
                  </Button>
                )}
              </div>
            )}
            {children}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
