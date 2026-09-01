import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import SitemapView from '@components/landing/views/SitemapView'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('en'), route: 'sitemap', path: '/sitemap', locale: 'en' })
}

export default function Page() {
  return <SitemapView dict={getDictionary('en')} locale="en" />
}
