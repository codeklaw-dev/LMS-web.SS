'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from '../ui/Container'
import Icon from '../ui/Icon'
import MegaMenu from './MegaMenu'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { primaryNav } from '../content/navigation'
import { site } from '../content/site'
import { useDismiss, useScrolled } from '../lib/hooks'
import { type Locale, localeHref } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * Sticky, slim, high-contrast (§2.2).
 * Left: logo · Centre: nav with two mega-menus · Right: language, sign-in,
 * and the persistent "Book a Live Demo" button — it never leaves.
 * Sign-in crosses into the product at racoedu.com.
 */
export default function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrolled(8)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement | null>(null)

  useDismiss(headerRef, () => setOpenMenu(null), Boolean(openMenu))

  // Any navigation closes every surface — including browser back/forward,
  // which is why this is an effect on pathname rather than an onClick.
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  // Lock the page behind the mobile sheet so background content can't
  // scroll. The attribute lands on the .landing wrapper (the CSS keys off
  // it), plus body via :has() in base.css for the actual scroll lock.
  useEffect(() => {
    const wrapper = document.querySelector('.landing')
    if (wrapper) (wrapper as HTMLElement).dataset.menuOpen = mobileOpen ? 'true' : 'false'
    document.body.dataset.menuOpen = mobileOpen ? 'true' : 'false'
    return () => {
      if (wrapper) delete (wrapper as HTMLElement).dataset.menuOpen
      delete document.body.dataset.menuOpen
    }
  }, [mobileOpen])

  const active = primaryNav.find((item) => item.labelHref === openMenu)
  const nav = dict.nav

  return (
    <header className="header" data-scrolled={scrolled} ref={headerRef}>
      <Container>
        <div className="header__inner">
          <Link href={localeHref('/', locale)} className="brand" aria-label={`${site.name} — ${dict.ui.home}`}>
            <span className="brand__mark" aria-hidden="true">
              R
            </span>
            <span className="brand__name" translate="no">
              Raco<em>LearnHub</em>
            </span>
          </Link>

          <nav className="nav" aria-label={nav.primaryLabel}>
            {primaryNav.map((item) => {
              const label = nav.items[item.labelHref]?.label ?? item.labelHref
              return item.menu ? (
                <button
                  key={item.labelHref}
                  type="button"
                  className="nav__trigger"
                  aria-expanded={openMenu === item.labelHref}
                  aria-controls={`megamenu-${item.menu.id}`}
                  onClick={() =>
                    setOpenMenu((cur) => (cur === item.labelHref ? null : item.labelHref))
                  }
                  onMouseEnter={() => setOpenMenu(item.labelHref)}
                >
                  {label}
                  <Icon name="ChevronDown" size={15} className="nav__caret" />
                </button>
              ) : (
                <Link
                  key={item.labelHref}
                  href={localeHref(item.labelHref, locale)}
                  className="nav__link"
                  onMouseEnter={() => setOpenMenu(null)}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          <div className="header__actions">
            <LanguageSwitcher dict={dict} locale={locale} />
            <ThemeToggle dict={dict} />
            <a className="header__signin" href={site.platformUrl} rel="noreferrer noopener">
              {dict.ui.signin}
            </a>
            <ButtonishCta dict={dict} locale={locale} />
            <button
              type="button"
              className="icon-btn header__burger"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? dict.ui.closeMenu : dict.ui.openMenu}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <Icon name={mobileOpen ? 'X' : 'Menu'} size={20} />
            </button>
          </div>
        </div>
      </Container>

      {active?.menu && active.menu.featured && (
        <MegaMenu
          menu={active.menu}
          featuredHref={active.menu.featured.href}
          dict={dict}
          locale={locale}
          id={`megamenu-${active.menu.id}`}
          onNavigate={() => setOpenMenu(null)}
        />
      )}

      {mobileOpen && <MobileNav dict={dict} locale={locale} onNavigate={() => setMobileOpen(false)} />}
    </header>
  )
}

/** The persistent demo CTA (kept out of Header to avoid prop plumbing). */
function ButtonishCta({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <Link href={localeHref(site.primaryCtaHref, locale)} className="btn btn--primary btn--sm header__cta">
      {dict.site.primaryCta.label}
    </Link>
  )
}

function MobileNav({
  dict,
  locale,
  onNavigate,
}: {
  dict: Dictionary
  locale: Locale
  onNavigate: () => void
}) {
  const nav = dict.nav
  return (
    <div className="mobile-nav" id="mobile-nav">
      <Container>
        {primaryNav.map((item) => (
          <div className="mobile-nav__section" key={item.labelHref}>
            <Link
              href={localeHref(item.labelHref, locale)}
              className="mobile-nav__link"
              onClick={onNavigate}
            >
              {nav.items[item.labelHref]?.label}
            </Link>
            {item.menu?.groups
              .flatMap((g) => g.items)
              .map((sub) => (
                <Link
                  key={sub.href}
                  href={localeHref(sub.href, locale)}
                  className="mobile-nav__sublink"
                  onClick={onNavigate}
                >
                  {nav.items[sub.href]?.label}
                </Link>
              ))}
          </div>
        ))}

        <div className="mobile-nav__section">
          <Link href={localeHref('/security', locale)} className="mobile-nav__link" onClick={onNavigate}>
            {nav.items['/security']?.label}
          </Link>
          <Link href={localeHref('/about', locale)} className="mobile-nav__link" onClick={onNavigate}>
            {nav.items['/about']?.label}
          </Link>
          <Link href={localeHref('/contact', locale)} className="mobile-nav__link" onClick={onNavigate}>
            {nav.items['/contact']?.label}
          </Link>
        </div>

        <div className="mobile-nav__cta">
          <Link href={localeHref('/demo', locale)} className="btn btn--primary btn--lg btn--block" onClick={onNavigate}>
            {dict.ui.bookDemo}
          </Link>
          <a href={site.platformUrl} rel="noreferrer noopener" className="btn btn--secondary btn--lg btn--block">
            {dict.ui.signin}
          </a>
        </div>
      </Container>
    </div>
  )
}
