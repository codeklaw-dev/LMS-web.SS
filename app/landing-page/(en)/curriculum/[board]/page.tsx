import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import CurriculumView from '@components/landing/views/CurriculumView'
import { curriculumOrder } from '@components/landing/content/solutions'

export function generateStaticParams() {
  return curriculumOrder.map((board) => ({ board }))
}

export async function generateMetadata({ params }: { params: Promise<{ board: string }> }) {
  const { board } = await params
  const dict = getDictionary('en')
  const page = dict.curriculumPages[board as keyof typeof dict.curriculumPages]
  const meta = dict.meta.curriculumBoard
  return buildMetadata({
    dict,
    route: 'curriculumBoard',
    path: `/curriculum/${board}`,
    locale: 'en',
    title: meta.title.replace('{fullName}', page?.fullName ?? dict.site.name),
    description: page?.sub,
  })
}

export default async function Page({ params }: { params: Promise<{ board: string }> }) {
  const { board } = await params
  return <CurriculumView dict={getDictionary('en')} locale="en" slug={board} />
}
