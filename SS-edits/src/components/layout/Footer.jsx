import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import BrandIcon from '../ui/BrandIcon';
import LanguageSwitcher from './LanguageSwitcher';
import { footerNav, legalNav } from '../../content/navigation';
import { site } from '../../content/site';
import './footer.css';

const socials = [
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com' },
  { label: 'X', icon: 'x', href: 'https://x.com' },
  { label: 'YouTube', icon: 'youtube', href: 'https://youtube.com' },
];

const trustBadges = [
  { icon: 'ShieldCheck', label: 'GDPR compliant' },
  { icon: 'Accessibility', label: 'WCAG 2.2 AA' },
  { icon: 'GraduationCap', label: 'Cambridge & Edexcel aligned' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        {/* Final demo CTA — every page ends in a conversion band (§1.6) */}
        <div className="footer__cta">
          <p>Ready to see it with your subjects?</p>
          <div className="cluster">
            <Button to="/demo" variant="onDark" iconRight="ArrowRight">
              Book a live demo
            </Button>
            <Button to="/resources" variant="onDarkGhost" icon="Download">
              Schools brochure
            </Button>
          </div>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <p className="footer__brand-name" translate="no">
              <span className="brand__mark" aria-hidden="true">R</span>
              RacoLearnHub
            </p>
            <p className="footer__blurb">{site.description}</p>

            <Newsletter />

            <div className="footer__badges">
              {trustBadges.map((b) => (
                <span className="footer__badge" key={b.label}>
                  <Icon name={b.icon} size={14} /> {b.label}
                </span>
              ))}
            </div>
          </div>

          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="footer__col-title">{col.title}</p>
              <ul className="footer__links">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer__legal">
          <p>
            © {new Date().getFullYear()} {site.legalName} · {site.address}
          </p>

          <ul className="footer__legal-links">
            {legalNav.map((link) => (
              <li key={link.href}><Link to={link.href}>{link.label}</Link></li>
            ))}
          </ul>

          <div className="cluster">
            <LanguageSwitcher />
            <div className="footer__social">
              {socials.map((s) => (
                <a key={s.label} href={s.href} rel="noreferrer noopener" target="_blank" aria-label={s.label}>
                  <BrandIcon name={s.icon} size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/**
 * Newsletter sign-up. Skeleton: local state only — no network call.
 * Wire `status` to your ESP/CRM endpoint; keep the four states intact.
 */
function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) { setStatus('error'); return; }
    setStatus('loading');
    // TODO: POST to newsletter endpoint.
    setTimeout(() => setStatus('success'), 600);
  };

  if (status === 'success') {
    return (
      <div className="newsletter">
        <p className="newsletter__ok" role="status">
          <Icon name="CircleCheck" size={17} /> You’re subscribed. First insight lands next month.
        </p>
      </div>
    );
  }

  return (
    <form className="newsletter" onSubmit={onSubmit} noValidate>
      <label className="footer__col-title" htmlFor="newsletter-email">
        Insights for school leaders
      </label>
      <div className="newsletter__row">
        <input
          id="newsletter-email"
          className="newsletter__input"
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          autoCapitalize="off"
          placeholder="you@school.org"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
          aria-invalid={status === 'error'}
          aria-describedby="newsletter-note"
        />
        <Button type="submit" variant="onDark" loading={status === 'loading'}>
          Subscribe
        </Button>
      </div>
      <p className="newsletter__note" id="newsletter-note">
        {status === 'error'
          ? 'Please enter a valid work email address.'
          : 'Monthly, no spam. Unsubscribe in one click.'}
      </p>
    </form>
  );
}
