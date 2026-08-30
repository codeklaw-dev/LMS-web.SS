import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';
import { personas } from '../../content/site';
import './blocks.css';

/** Outcomes by role — §3.1 Section 7. */
export default function PersonaColumns({ items = personas }) {
  return (
    <div className="grid grid--3">
      {items.map((p, i) => (
        <Reveal key={p.id} delay={i * 0.06}>
          <Card className="persona-col" style={{ height: '100%' }}>
            <span className="icon-tile"><Icon name={p.icon} size={22} /></span>
            <h3 className="card__title">{p.title}</h3>
            <ul>
              {p.points.map((point) => (
                <li key={point}>
                  <Icon name="Check" size={16} strokeWidth={2.5} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link className="link-arrow card__footer" to={p.cta.href}>
              {p.cta.label} <Icon name="ArrowRight" size={15} className="icon-flip" />
            </Link>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
