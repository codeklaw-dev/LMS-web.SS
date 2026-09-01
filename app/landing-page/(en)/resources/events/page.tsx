import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import EventsView from '@components/landing/views/EventsView'

export function generateMetadata() {
  return buildMetadata({
    dict: getDictionary('en'),
    route: 'events',
    path: '/resources/events',
    locale: 'en',
  })
}

export default function Page() {
  return <EventsView dict={getDictionary('en')} locale="en" />
}
