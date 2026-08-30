import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';
import './blocks.css';

/**
 * Interior-page hero. Quieter than the home hero, same structural grammar:
 * eyebrow → H1 → sub-head → actions.
 */
export default function PageHero({
  eyebrow,
  title,
  sub,
  crumbs = [],
  primary = { label: 'Book a Live Demo', href: '/demo' },
  secondary,
  children,
}) {
  return (
    <section className="page-hero">
      <div className="hero__aura" aria-hidden="true" />
      <Container>
        <div className="hero__inner">
          {crumbs.length > 0 && (
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              {crumbs.map((c) => (
                <span key={c.href ?? c.label}>
                  <Icon name="ChevronRight" size={13} style={{ display: 'inline', verticalAlign: '-2px' }} />{' '}
                  {c.href ? <Link to={c.href}>{c.label}</Link> : <span>{c.label}</span>}
                </span>
              ))}
            </nav>
          )}

          <Reveal>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 className="page-hero__title">{title}</h1>
            {sub && <p className="page-hero__sub">{sub}</p>}

            {(primary || secondary) && (
              <div className="page-hero__actions">
                {primary && (
                  <Button to={primary.href} size="lg" iconRight="ArrowRight">{primary.label}</Button>
                )}
                {secondary && (
                  <Button to={secondary.href} variant="secondary" size="lg">{secondary.label}</Button>
                )}
              </div>
            )}
            {children}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
