import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import PlatformOverviewView from '@components/landing/views/PlatformOverviewView'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('bn'), route: 'platform', path: '/platform', locale: 'bn' })
}

export default function Page() {
  return <PlatformOverviewView dict={getDictionary('bn')} locale="bn" />
}
