import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import PricingView from '@components/landing/views/PricingView'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('en'), route: 'pricing', path: '/pricing', locale: 'en' })
}

export default function Page() {
  return <PricingView dict={getDictionary('en')} locale="en" />
}
