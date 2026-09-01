import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import HomeView from '@components/landing/views/HomeView'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('bn'), route: 'home', path: '/', locale: 'bn' })
}

export default function Page() {
  return <HomeView dict={getDictionary('bn')} locale="bn" />
}
