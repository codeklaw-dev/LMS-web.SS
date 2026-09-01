import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import SolutionsOverviewView from '@components/landing/views/SolutionsOverviewView'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('en'), route: 'solutions', path: '/solutions', locale: 'en' })
}

export default function Page() {
  return <SolutionsOverviewView dict={getDictionary('en')} locale="en" />
}
