import Link from 'next/link'
import Container from '../ui/Container'
import Icon from '../ui/Icon'
import BrandIcon from '../ui/BrandIcon'
import LanguageSwitcher from './LanguageSwitcher'
import Newsletter from './Newsletter'
import { footerNav, legalNav } from '../content/navigation'
import { socials, trustBadges } from '../content/site'
import { type Locale, localeHref } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * Global footer (§2.3). Light mode: the deep-purple closing statement
 * against the cream page; dark mode: the page ground, parted by a hairline.
 */
export default function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const nav = dict.nav
  const f = dict.ui.footer

  return (
    <footer className="footer">
      <Container>
        {/* Final demo CTA — every page ends in a conversion band (§1.6) */}
        <div className="footer__cta">
          <p>{f.ctaTitle}</p>
          <div className="cluster">
            <Link
              href={localeHref('/demo', locale)}
              className="btn btn--onDark"
            >
              {f.ctaDemo}
              <Icon name="ArrowRight" size={18} className="btn__icon icon-flip" />
            </Link>
            <Link
              href={localeHref('/resources', locale)}
              className="btn btn--onDarkGhost"
            >
              <Icon name="Download" size={18} className="btn__icon" />
              {f.ctaBrochure}
            </Link>
          </div>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <p className="footer__brand-name" translate="no">
              <span className="brand__mark" aria-hidden="true">
                R
              </span>
              RacoLearnHub
            </p>
            <p className="footer__blurb">{dict.site.description}</p>

            <Newsletter dict={dict} />

            <div className="footer__badges">
              {trustBadges.map((b) => (
                <span className="footer__badge" key={b.id}>
                  <Icon name={b.icon} size={14} /> {f.badges[b.id]}
                </span>
              ))}
            </div>
          </div>

          {footerNav.map((col) => (
            <nav key={col.titleKey} aria-label={nav.footerTitles[col.titleKey]}>
              <p className="footer__col-title">{nav.footerTitles[col.titleKey]}</p>
              <ul className="footer__links">
                {col.links.map((link) => (
                  <li key={link.href + (nav.items[link.href]?.label ?? '')}>
                    <Link href={localeHref(link.href, locale)}>
                      {nav.items[link.href]?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer__legal">
          <p>
            © {new Date().getFullYear()} {dict.site.legalName} · {dict.site.address}
          </p>

          <ul className="footer__legal-links">
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link href={localeHref(link.href, locale)}>
                  {nav.items[link.href]?.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="cluster">
            <LanguageSwitcher dict={dict} locale={locale} compact />
            <div className="footer__social">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  rel="noreferrer noopener"
                  target="_blank"
                  aria-label={s.id}
                >
                  <BrandIcon name={s.id} size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
