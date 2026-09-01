import Card from '../ui/Card'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import type { Locale } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * Three tiers — §3.6. Every plan routes to a demo, not a checkout,
 * because the right configuration depends on curriculum, size and stack.
 * Structural flags (featured) come from the dictionary entry itself.
 */
export default function PricingTable({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: Locale
}) {
  return (
    <div className="pricing-grid">
      {dict.pricingTiers.map((tier, i) => (
        <Reveal key={tier.id} delay={i * 0.06}>
          <Card
            panel
            locale={locale}
            className="plan"
            data-featured={tier.featured ? 'true' : 'false'}
            style={{ height: '100%' }}
          >
            {tier.badge && <Badge className="plan__badge">{tier.badge}</Badge>}

            <h3 className="plan__name">{tier.name}</h3>
            <p className="plan__for">{tier.forWhom}</p>
            <p className="plan__summary">{tier.summary}</p>

            <ul className="plan__includes">
              {tier.includes.map((item) => (
                <li key={item}>
                  <Icon name="Check" size={16} strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="card__footer" style={{ paddingTop: 0 }}>
              <Button
                to={tier.ctaHref}
                locale={locale}
                variant={tier.featured ? 'primary' : 'secondary'}
                block
              >
                {tier.ctaLabel}
              </Button>
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
