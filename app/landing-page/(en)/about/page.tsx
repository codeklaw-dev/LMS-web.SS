import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import AboutView from '@components/landing/views/AboutView'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('en'), route: 'about', path: '/about', locale: 'en' })
}

export default function Page() {
  return <AboutView dict={getDictionary('en')} locale="en" />
}
