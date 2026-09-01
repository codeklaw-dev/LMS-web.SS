import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import SecurityView from '@components/landing/views/SecurityView'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('en'), route: 'security', path: '/security', locale: 'en' })
}

export default function Page() {
  return <SecurityView dict={getDictionary('en')} locale="en" />
}
