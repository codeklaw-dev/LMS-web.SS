import Section from '../ui/Section'
import Container from '../ui/Container'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import DemoForm from './DemoForm'
import { type Locale, localeHref } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * Book a Live Demo — §3.9. The primary conversion page.
 * Two columns: left is the form, right is reassurance. The form asks only
 * what routing and qualification need — nothing else.
 */
export default function DemoView({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const d = dict.pages.demo

  return (
    <>
      <Section className="demo" container="none" tone="default">
        <Container>
          <div className="demo__grid">
            {/* ---- Left: the form ------------------------------------- */}
            <Reveal className="demo__form-col">
              <p className="eyebrow">
                <Icon name="CalendarCheck" size={15} /> {d.eyebrow}
              </p>
              <h1 className="h2" style={{ marginBlock: 'var(--space-4)' }}>
                {d.title}
              </h1>
              <p className="lede">{d.sub}</p>

              <DemoForm dict={dict} locale={locale} />
            </Reveal>

            {/* ---- Right: reassurance --------------------------------- */}
            <Reveal className="demo__aside" delay={0.08}>
              <Card panel>
                <h2 className="h5" style={{ marginBottom: 'var(--space-5)' }}>
                  {d.expectTitle}
                </h2>
                <ul className="checklist">
                  {d.expectItems.map((item) => (
                    <li key={item}>
                      <Icon name="Check" size={17} strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="note" style={{ marginTop: 'var(--space-6)' }}>
                  <Icon name="MessageSquare" size={15} />
                  <span>{d.expectNote}</span>
                </div>
              </Card>

              <Card panel>
                <Badge
                  tone="outline"
                  style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-4)' }}
                >
                  {dict.ui.placeholderBadge}
                </Badge>
                <blockquote className="quote" style={{ fontSize: 'var(--step-0)' }}>
                  {dict.testimonials[0].quote}
                </blockquote>
                <p className="attrib__meta" style={{ marginTop: 'var(--space-4)' }}>
                  {dict.testimonials[0].role} · {dict.testimonials[0].school}
                </p>
              </Card>

              {/* Alternative paths for visitors not ready for a form */}
              <Card panel id="overview">
                <h2 className="h5" style={{ marginBottom: 'var(--space-3)' }}>
                  {d.exploreTitle}
                </h2>
                <p className="card__body" style={{ marginBottom: 'var(--space-5)' }}>
                  {d.exploreSub}
                </p>
                <div className="grid" style={{ gap: 'var(--space-3)' }}>
                  <button type="button" className="btn btn--secondary btn--block">
                    <Icon name="Play" size={18} className="btn__icon" />
                    {d.watchCta}
                  </button>
                  <a
                    href={localeHref('/platform/simulations', locale)}
                    className="btn btn--secondary btn--block"
                  >
                    <Icon name="Atom" size={18} className="btn__icon" />
                    {d.simulationCta}
                  </a>
                  <a href={localeHref('/contact', locale)} className="btn btn--ghost btn--block">
                    <Icon name="Mail" size={18} className="btn__icon" />
                    {d.emailCta}
                  </a>
                </div>
              </Card>

              <div className="demo__badges">
                {d.badges.map((b) => (
                  <span
                    className="footer__badge"
                    key={b}
                    style={{ borderColor: 'var(--border)', color: 'var(--text-subtle)' }}
                  >
                    <Icon name="ShieldCheck" size={13} /> {b}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  )
}
