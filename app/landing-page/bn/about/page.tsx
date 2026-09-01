import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import AboutView from '@components/landing/views/AboutView'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('bn'), route: 'about', path: '/about', locale: 'bn' })
}

export default function Page() {
  return <AboutView dict={getDictionary('bn')} locale="bn" />
}
