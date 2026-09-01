import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import type { Locale } from '../lib/locale'

/**
 * Alternating media + copy block (§4.6). `flip` swaps the media to the left,
 * which is what gives a long page its rhythm without extra chrome.
 */
export default function FeatureSpotlight({
  locale,
  eyebrow,
  title,
  body,
  points = [],
  cta,
  media,
  flip = false,
}: {
  locale: Locale
  eyebrow?: string
  title: string
  body: string
  points?: string[]
  cta?: { label: string; href: string }
  media?: React.ReactNode
  flip?: boolean
}) {
  return (
    <div className="spotlight" data-flip={flip}>
      <Reveal className="spotlight__copy">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="spotlight__title">{title}</h2>
        <p className="spotlight__body">{body}</p>

        {points.length > 0 && (
          <ul className="checklist spotlight__list">
            {points.map((p) => (
              <li key={p}>
                <Icon name="Check" size={17} strokeWidth={2.5} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}

        {cta && (
          <div className="spotlight__cta">
            <Button to={cta.href} locale={locale} variant="secondary" iconRight="ArrowRight">
              {cta.label}
            </Button>
          </div>
        )}
      </Reveal>

      <Reveal className="spotlight__media" delay={0.08}>
        {media}
      </Reveal>
    </div>
  )
}
