import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import DemoView from '@components/landing/views/DemoView'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('bn'), route: 'demo', path: '/demo', locale: 'bn' })
}

export default function Page() {
  return <DemoView dict={getDictionary('bn')} locale="bn" />
}
