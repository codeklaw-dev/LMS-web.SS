import Card from '../ui/Card';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';
import { capabilities } from '../../content/site';
import './blocks.css';

const toneClass = { brand: '', warm: 'icon-tile--warm', trust: 'icon-tile--trust' };

/** Six cards, each linking to its feature page (§3.1 Section 4). */
export default function CapabilityGrid({ items = capabilities }) {
  return (
    <div className="grid grid--3">
      {items.map((cap, i) => (
        <Reveal key={cap.id} delay={i * 0.05}>
          <Card to={cap.href} style={{ height: '100%' }}>
            <span className={`icon-tile ${toneClass[cap.tone] ?? ''}`}>
              <Icon name={cap.icon} size={22} />
            </span>
            <h3 className="card__title">{cap.name}</h3>
            <p className="card__body">{cap.oneLiner}</p>
            <span className="card__footer link-arrow">
              Explore <Icon name="ArrowRight" size={15} className="icon-flip" />
            </span>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
