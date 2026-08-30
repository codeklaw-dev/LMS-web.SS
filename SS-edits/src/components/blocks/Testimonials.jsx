import Card from '../ui/Card';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';
import Badge from '../ui/Badge';
import { testimonials, featuredCaseStudy } from '../../content/site';
import './blocks.css';

const initials = (name) =>
  name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();

/**
 * Social proof — §3.1 Section 11.
 * Quotes are marked `placeholder: true` until real references are signed off;
 * the flag renders visibly so nothing fictional ships by accident.
 */
export default function Testimonials({ items = testimonials, caseStudy = featuredCaseStudy }) {
  return (
    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
      {items.map((t, i) => (
        <Reveal key={t.school} delay={i * 0.06}>
          <Card panel style={{ height: '100%' }}>
            {t.placeholder && (
              <Badge tone="outline" style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-4)' }}>
                Placeholder — replace before launch
              </Badge>
            )}
            <blockquote className="quote">{t.quote}</blockquote>
            <div className="attrib">
              <span className="attrib__avatar" aria-hidden="true">{initials(t.name)}</span>
              <div>
                <p className="attrib__name">{t.name}</p>
                <p className="attrib__meta">{t.role} · {t.school} · {t.country}</p>
              </div>
            </div>
          </Card>
        </Reveal>
      ))}

      {caseStudy && (
        <Reveal delay={0.12}>
          <Card to={caseStudy.href} style={{ height: '100%', background: 'var(--bg-inset)' }}>
            <p className="eyebrow">{caseStudy.eyebrow}</p>
            <h3 className="card__title" style={{ marginTop: 'var(--space-3)' }}>{caseStudy.title}</h3>
            <p className="card__body">{caseStudy.body}</p>
            <dl
              className="grid grid--3"
              style={{ gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}
            >
              {caseStudy.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <dt className="visually-hidden">{s.label}</dt>
                  <dd className="stat-value" style={{ margin: 0, fontSize: 'var(--step-2)' }}>{s.value}</dd>
                  <dd className="stat-label" style={{ margin: 0 }} aria-hidden="true">{s.label}</dd>
                </div>
              ))}
            </dl>
            <span className="card__footer link-arrow">
              Read the case study <Icon name="ArrowRight" size={15} className="icon-flip" />
            </span>
          </Card>
        </Reveal>
      )}
    </div>
  );
}
