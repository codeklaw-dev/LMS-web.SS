'use client'

import Link from 'next/link'
import Container from '../ui/Container'
import Icon from '../ui/Icon'
import { type Locale, localeHref } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'
import type { NavMenuDef } from '../content/navigation'

/**
 * Grouped links with one-line descriptions plus a featured card (§2.2).
 * Rendered inside the header; dismissal is owned by <Header>.
 */
export default function MegaMenu({
  menu,
  featuredHref,
  dict,
  locale,
  id,
  onNavigate,
}: {
  menu: NavMenuDef
  featuredHref: string
  dict: Dictionary
  locale: Locale
  id: string
  onNavigate: () => void
}) {
  const nav = dict.nav
  const featured = nav.featured[menu.id]

  return (
    <div className="megamenu" id={id}>
      <Container>
        <div
          className="megamenu__grid"
          data-cols={menu.groups.length + (featured ? 1 : 0)}
        >
          {menu.groups.map((group) => (
            <div key={group.group}>
              <p className="megamenu__group-title">{nav.groups[group.group]}</p>
              <ul className="megamenu__list">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={localeHref(item.href, locale)}
                      className="megamenu__item"
                      onClick={onNavigate}
                    >
                      <span className="megamenu__item-label">{nav.items[item.href]?.label}</span>
                      <span className="megamenu__item-desc">{nav.items[item.href]?.desc}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {featured && (
            <Link
              href={localeHref(featuredHref, locale)}
              className="megamenu__featured"
              onClick={onNavigate}
            >
              <span className="badge">{featured.badge}</span>
              <h3>{featured.title}</h3>
              <p>{featured.body}</p>
              <span>
                {dict.ui.readMore} <Icon name="ArrowRight" size={16} className="icon-flip" />
              </span>
            </Link>
          )}
        </div>
      </Container>
    </div>
  )
}
