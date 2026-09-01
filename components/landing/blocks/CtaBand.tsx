import Container from '../ui/Container'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import type { Locale } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * The reusable conversion band. Every page ends in one (§1.6).
 * The demo is framed as low-risk and high-value, never as a sales call.
 */
export default function CtaBand({
  dict,
  locale,
  title,
  sub,
  primary,
  secondary,
  note,
}: {
  dict: Dictionary
  locale: Locale
  title?: string
  sub?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string } | null
  note?: string | null
}) {
  const d = dict.ui.ctaBand
  return (
    <section className="section ctaband">
      <Container>
        <Reveal className="ctaband__inner">
          <h2 className="ctaband__title">{title ?? d.title}</h2>
          <p className="ctaband__sub">{sub ?? d.sub}</p>
          <div className="ctaband__actions">
            <Button
              to={primary?.href ?? '/demo'}
              locale={locale}
              variant="onDark"
              size="lg"
              iconRight="ArrowRight"
            >
              {primary?.label ?? dict.ui.bookDemo}
            </Button>
            {(secondary ?? { label: d.secondaryLabel, href: '/resources' }) && (
              <Button
                to={secondary?.href ?? '/resources'}
                locale={locale}
                variant="onDarkGhost"
                size="lg"
                icon="Download"
              >
                {secondary?.label ?? d.secondaryLabel}
              </Button>
            )}
          </div>
          {(note ?? d.note) && <p className="ctaband__note">{note ?? d.note}</p>}
        </Reveal>
      </Container>
    </section>
  )
}
