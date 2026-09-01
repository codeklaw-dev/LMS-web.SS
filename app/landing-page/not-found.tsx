import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import NotFoundView from '@components/landing/views/NotFoundView'

/**
 * Boundary for notFound() thrown under /landing-page. Note: the current
 * Next 16.3 runtime renders the HTTP fallback (empty body + 404 status) for
 * notFound() calls, so the dynamic views redirect() instead; this boundary
 * still catches routing-level misses the platform's root not-found doesn't.
 */
export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('en'), route: 'notFound', path: '/', locale: 'en' })
}

export default function NotFound() {
  return <NotFoundView dict={getDictionary('en')} locale="en" />
}
