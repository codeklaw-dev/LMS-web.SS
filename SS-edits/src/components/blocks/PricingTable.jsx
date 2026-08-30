import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';
import { pricingTiers } from '../../content/site';
import './blocks.css';

/**
 * Three tiers — §3.6. Every plan routes to a demo, not a checkout,
 * because the right configuration depends on curriculum, size and stack.
 */
export default function PricingTable({ tiers = pricingTiers }) {
  return (
    <div className="pricing-grid">
      {tiers.map((tier, i) => (
        <Reveal key={tier.id} delay={i * 0.06}>
          <Card panel className="plan" data-featured={tier.featured ? 'true' : 'false'} style={{ height: '100%' }}>
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
                to={tier.cta.href}
                variant={tier.featured ? 'primary' : 'secondary'}
                block
              >
                {tier.cta.label}
              </Button>
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
