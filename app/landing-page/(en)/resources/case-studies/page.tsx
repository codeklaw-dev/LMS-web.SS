import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import CaseStudiesView from '@components/landing/views/CaseStudiesView'

export function generateMetadata() {
  return buildMetadata({
    dict: getDictionary('en'),
    route: 'caseStudies',
    path: '/resources/case-studies',
    locale: 'en',
  })
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>
}) {
  const { filter } = await searchParams
  return <CaseStudiesView dict={getDictionary('en')} locale="en" filter={filter} />
}
