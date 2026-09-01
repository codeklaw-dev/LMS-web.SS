import Section from '../ui/Section'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Reveal from '../ui/Reveal'
import PageHero from '../blocks/PageHero'
import CtaBand from '../blocks/CtaBand'
import { type Locale } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/** Blog / insights index (§3.7). */
export default function BlogView({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const b = dict.pages.blog

  return (
    <>
      <PageHero
        dict={dict}
        locale={locale}
        eyebrow={b.hero.eyebrow}
        title={b.hero.title}
        sub={b.hero.sub}
        crumbs={[{ label: dict.pages.resources.hero.crumb, href: '/resources' }, { label: b.hero.crumb }]}
        primary={null}
      />

      <Section>
        <div className="cluster" style={{ marginBottom: 'var(--space-8)' }}>
          {b.categories.map((c) => (
            <Badge key={c} tone="outline">
              {c}
            </Badge>
          ))}
        </div>

        <div className="grid grid--3">
          {b.posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.04}>
              <Card to="/resources/blog" locale={locale} style={{ height: '100%' }}>
                <p className="eyebrow" style={{ fontSize: 'var(--step--2)' }}>
                  {post.category}
                </p>
                <h2 className="card__title" style={{ fontSize: 'var(--step-1)', marginTop: 'var(--space-3)' }}>
                  {post.title}
                </h2>
                <p className="card__body card__footer">{post.read}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand dict={dict} locale={locale} title={b.cta.title} sub={b.cta.sub} />
    </>
  )
}
