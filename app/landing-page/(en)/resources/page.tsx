import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import ResourcesHubView from '@components/landing/views/ResourcesHubView'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('en'), route: 'resources', path: '/resources', locale: 'en' })
}

export default function Page() {
  return <ResourcesHubView dict={getDictionary('en')} locale="en" />
}
