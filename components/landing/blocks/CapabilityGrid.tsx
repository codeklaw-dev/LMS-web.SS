import Card from '../ui/Card'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import { capabilities } from '../content/site'
import type { Locale } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

const toneClass: Record<string, string> = {
  brand: '',
  warm: 'icon-tile--warm',
  trust: 'icon-tile--trust',
}

/** Six cards, each linking to its feature page (§3.1 Section 4). */
export default function CapabilityGrid({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: Locale
}) {
  return (
    <div className="grid grid--3">
      {capabilities.map((cap, i) => {
        const copy = dict.capabilities.find((c) => c.id === cap.id)
        if (!copy) return null
        return (
          <Reveal key={cap.id} delay={i * 0.05}>
            <Card to={cap.href} locale={locale} style={{ height: '100%' }}>
              <span className={`icon-tile ${toneClass[cap.tone] ?? ''}`}>
                <Icon name={cap.icon} size={22} />
              </span>
              <h3 className="card__title">{copy.name}</h3>
              <p className="card__body">{copy.oneLiner}</p>
              <span className="card__footer link-arrow">
                {dict.ui.explore} <Icon name="ArrowRight" size={15} className="icon-flip" />
              </span>
            </Card>
          </Reveal>
        )
      })}
    </div>
  )
}
