import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import PricingView from '@components/landing/views/PricingView'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('bn'), route: 'pricing', path: '/pricing', locale: 'bn' })
}

export default function Page() {
  return <PricingView dict={getDictionary('bn')} locale="bn" />
}
