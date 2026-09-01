import Header from './Header'
import Footer from './Footer'
import CookieBanner from './CookieBanner'
import type { Locale } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * The landing owns its document furniture without touching the platform's
 * <html>/<body>: one wrapper div carrying the design-token scope (.landing),
 * the content language, and the theme attribute.
 *
 * The inline script is the anti-FOUC guard: it runs synchronously during
 * parsing — before the page can paint — reads localStorage['rlh:theme'],
 * falls back to prefers-color-scheme, and sets data-theme on its own parent
 * (this wrapper). The old SPA had no guard and defaulted to light; both
 * fixed here.
 */
const BOOT_SCRIPT = `(function(){var t;try{t=localStorage.getItem('rlh:theme')}catch(e){}
if(t!=='dark'&&t!=='light'){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}
var n=document.currentScript.parentElement;if(n)n.dataset.theme=t})()`

export default function LandingShell({
  dict,
  locale,
  children,
}: {
  dict: Dictionary
  locale: Locale
  children: React.ReactNode
}) {
  return (
    <div className="landing" lang={locale} dir="ltr" suppressHydrationWarning>
      <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      <a className="skip-link" href="#main">
        {dict.ui.skipToContent}
      </a>
      <Header dict={dict} locale={locale} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer dict={dict} locale={locale} />
      <CookieBanner dict={dict} locale={locale} />
    </div>
  )
}
