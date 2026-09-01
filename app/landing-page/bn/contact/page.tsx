import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import ContactView from '@components/landing/views/ContactView'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('bn'), route: 'contact', path: '/contact', locale: 'bn' })
}

export default function Page() {
  return <ContactView dict={getDictionary('bn')} locale="bn" />
}
