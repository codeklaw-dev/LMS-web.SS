import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import HelpCentreView from '@components/landing/views/HelpCentreView'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('bn'), route: 'help', path: '/help', locale: 'bn' })
}

export default function Page() {
  return <HelpCentreView dict={getDictionary('bn')} locale="bn" />
}
