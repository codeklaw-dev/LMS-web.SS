import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import SitemapView from '@components/landing/views/SitemapView'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('bn'), route: 'sitemap', path: '/sitemap', locale: 'bn' })
}

export default function Page() {
  return <SitemapView dict={getDictionary('bn')} locale="bn" />
}
