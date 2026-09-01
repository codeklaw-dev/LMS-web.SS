import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import HomeView from '@components/landing/views/HomeView'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('en'), route: 'home', path: '/', locale: 'en' })
}

export default function Page() {
  return <HomeView dict={getDictionary('en')} locale="en" />
}
