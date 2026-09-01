import Section from '../ui/Section'
import Container from '../ui/Container'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import { type Locale } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/** 404 — §2.1. Every dead end still offers the primary path. */
export default function NotFoundView({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const n = dict.pages.notFound

  return (
    <Section>
      <Container size="narrow">
        <Card
          panel
          style={{ textAlign: 'center', alignItems: 'center', padding: 'var(--space-11) var(--space-6)' }}
        >
          <span className="icon-tile icon-tile--warm" style={{ width: 64, height: 64 }}>
            <Icon name="Compass" size={30} />
          </span>
          <p className="eyebrow">404</p>
          <h1 className="h3" style={{ marginBlock: 'var(--space-4)' }}>
            {n.title}
          </h1>
          <p className="lede center">{n.body}</p>
          <div className="cluster" style={{ justifyContent: 'center', marginTop: 'var(--space-8)' }}>
            <Button to="/demo" locale={locale} iconRight="ArrowRight">
              {dict.ui.bookDemo}
            </Button>
            <Button to="/platform" locale={locale} variant="secondary">
              {n.platform}
            </Button>
            <Button to="/" locale={locale} variant="ghost">
              {n.home}
            </Button>
          </div>
          <p className="tiny" style={{ color: 'var(--text-subtle)', marginTop: 'var(--space-7)' }}>
            {n.sitemap.pre}{' '}
            <a href={`/landing-page${locale === 'bn' ? '/bn' : ''}/sitemap`}>{n.sitemap.link}</a>.
          </p>
        </Card>
      </Container>
    </Section>
  )
}
