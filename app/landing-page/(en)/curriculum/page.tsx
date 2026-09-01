import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import CurriculumOverviewView from '@components/landing/views/CurriculumOverviewView'

export function generateMetadata() {
  return buildMetadata({ dict: getDictionary('en'), route: 'curriculum', path: '/curriculum', locale: 'en' })
}

export default function Page() {
  return <CurriculumOverviewView dict={getDictionary('en')} locale="en" />
}
