import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import NotFoundView from '@components/landing/views/NotFoundView'

export const dynamic = 'force-static'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('bn'), route: 'notFound', path: '/', locale: 'bn' })
}

export default function NotFound() {
  return <NotFoundView dict={getDictionary('bn')} locale="bn" />
}
