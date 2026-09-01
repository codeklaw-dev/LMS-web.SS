'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type Locale, localeHref, locales, stripLocalePath } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * Two locales, one pair of links. Because the routes are locale-prefixed and
 * server-rendered, switching language is navigation — the same path in the
 * other tree — not a client-side catalogue swap. The current path is
 * preserved so a deep route stays deep.
 */
export default function LanguageSwitcher({
  dict,
  locale,
  compact = false,
}: {
  dict: Dictionary
  locale: Locale
  compact?: boolean
}) {
  const pathname = usePathname() ?? '/'
  const sitePath = stripLocalePath(pathname)

  return (
    <span className="lang-wrap">
      {locales.map((l, i) => (
        <span key={l.code} style={{ display: 'inline-flex' }}>
          {i > 0 && <span className="visually-hidden">/</span>}
          <Link
            href={localeHref(sitePath === '/' ? '/' : sitePath, l.code)}
            hrefLang={l.code}
            className="nav__link"
            style={{
              fontWeight: l.code === locale ? 700 : 400,
              textDecoration: l.code === locale ? 'underline' : 'none',
              textUnderlineOffset: 3,
            }}
            aria-current={l.code === locale ? 'true' : undefined}
          >
            <span aria-hidden={compact ? true : undefined}>{l.native}</span>
            <span className="visually-hidden">{l.label}</span>
          </Link>
        </span>
      ))}
    </span>
  )
}
