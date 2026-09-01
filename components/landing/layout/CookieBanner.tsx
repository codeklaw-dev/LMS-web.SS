'use client'

import Link from 'next/link'
import { usePersistentState } from '../lib/hooks'
import { type Locale, localeHref } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * Privacy-first cookie consent (§4.6, §5): nothing is pre-ticked and
 * declining is exactly as easy as accepting. Analytics stay off until
 * consent.
 */
export default function CookieBanner({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: Locale
}) {
  const [consent, setConsent] = usePersistentState<string | null>('rlh:consent', null)
  const c = dict.ui.cookie

  if (consent) return null

  return (
    <div className="cookie" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-desc">
      <h2 id="cookie-title">{c.title}</h2>
      <p id="cookie-desc">{c.body}</p>
      <div className="cookie__actions">
        <button type="button" className="btn btn--primary btn--sm" onClick={() => setConsent('all')}>
          {c.accept}
        </button>
        <button
          type="button"
          className="btn btn--secondary btn--sm"
          onClick={() => setConsent('essential')}
        >
          {c.essential}
        </button>
        <Link href={localeHref('/cookies', locale)} className="btn btn--ghost btn--sm">
          {c.policy}
        </Link>
      </div>
    </div>
  )
}
