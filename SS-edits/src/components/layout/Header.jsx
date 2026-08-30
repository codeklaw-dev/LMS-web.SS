import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import MegaMenu from './MegaMenu';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { primaryNav } from '../../content/navigation';
import { site } from '../../content/site';
import { useDismiss, useScrolled } from '../../lib/hooks';
import './header.css';

/**
 * Sticky, slim, high-contrast (§2.2).
 * Left: logo · Centre: nav with two mega-menus · Right: language, sign-in,
 * and the persistent "Book a Live Demo" button — it never leaves.
 */
export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(8);
  const location = useLocation();
  const headerRef = useRef(null);

  useDismiss(headerRef, () => setOpenMenu(null), Boolean(openMenu));

  // Any navigation closes every surface — including browser back/forward, which
  // is why this is an effect on pathname rather than an onClick on each link.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock the page behind the mobile sheet so background content can't scroll.
  useEffect(() => {
    document.body.dataset.menuOpen = mobileOpen ? 'true' : 'false';
    return () => { document.body.dataset.menuOpen = 'false'; };
  }, [mobileOpen]);

  const activeMenu = primaryNav.find((item) => item.label === openMenu)?.menu;

  return (
    <header className="header" data-scrolled={scrolled} ref={headerRef}>
      <Container>
        <div className="header__inner">
          <Link to="/" className="brand" aria-label={`${site.name} — home`}>
            <span className="brand__mark" aria-hidden="true">R</span>
            <span className="brand__name" translate="no">Raco<em>LearnHub</em></span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {primaryNav.map((item) =>
              item.menu ? (
                <button
                  key={item.label}
                  type="button"
                  className="nav__trigger"
                  aria-expanded={openMenu === item.label}
                  aria-controls={`megamenu-${item.label.toLowerCase()}`}
                  onClick={() => setOpenMenu((cur) => (cur === item.label ? null : item.label))}
                  onMouseEnter={() => setOpenMenu(item.label)}
                >
                  {item.label}
                  <Icon name="ChevronDown" size={15} className="nav__caret" />
                </button>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className="nav__link"
                  onMouseEnter={() => setOpenMenu(null)}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="header__actions">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              className="header__signin"
              href="https://app.racolearnhub.com"
              rel="noreferrer noopener"
            >
              Sign in
            </a>
            <Button to={site.primaryCta.href} size="sm" className="header__cta">
              {site.primaryCta.label}
            </Button>
            <button
              type="button"
              className="icon-btn header__burger"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <Icon name={mobileOpen ? 'X' : 'Menu'} size={20} />
            </button>
          </div>
        </div>
      </Container>

      {activeMenu && (
        <MegaMenu
          menu={activeMenu}
          id={`megamenu-${openMenu.toLowerCase()}`}
          onNavigate={() => setOpenMenu(null)}
        />
      )}

      {mobileOpen && <MobileNav onNavigate={() => setMobileOpen(false)} />}
    </header>
  );
}

function MobileNav({ onNavigate }) {
  return (
    <div className="mobile-nav" id="mobile-nav">
      <Container>
        {primaryNav.map((item) => (
          <div className="mobile-nav__section" key={item.label}>
            <Link to={item.href} className="mobile-nav__link" onClick={onNavigate}>
              {item.label}
            </Link>
            {item.menu?.groups.flatMap((g) => g.items).map((sub) => (
              <Link key={sub.href} to={sub.href} className="mobile-nav__sublink" onClick={onNavigate}>
                {sub.label}
              </Link>
            ))}
          </div>
        ))}

        <div className="mobile-nav__section">
          <Link to="/security" className="mobile-nav__link" onClick={onNavigate}>
            Security & Compliance
          </Link>
          <Link to="/about" className="mobile-nav__link" onClick={onNavigate}>
            About
          </Link>
          <Link to="/contact" className="mobile-nav__link" onClick={onNavigate}>
            Contact
          </Link>
        </div>

        <div className="mobile-nav__cta">
          <Button to="/demo" size="lg" block onClick={onNavigate}>
            Book a Live Demo
          </Button>
          <Button
            as="a"
            href="https://app.racolearnhub.com"
            variant="secondary"
            size="lg"
            block
          >
            Sign in
          </Button>
        </div>
      </Container>
    </div>
  );
}
