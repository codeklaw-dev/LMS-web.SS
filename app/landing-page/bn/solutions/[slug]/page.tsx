import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import SolutionView from '@components/landing/views/SolutionView'
import { solutionOrder } from '@components/landing/content/solutions'

export function generateStaticParams() {
  return solutionOrder.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const dict = getDictionary('bn')
  const page = dict.solutionPages[slug as keyof typeof dict.solutionPages]
  const meta = dict.meta.solution
  return buildMetadata({
    dict,
    route: 'solution',
    path: `/solutions/${slug}`,
    locale: 'bn',
    title: meta.title.replace('{name}', page?.name ?? dict.site.name),
    description: page?.sub,
  })
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <SolutionView dict={getDictionary('bn')} locale="bn" slug={slug} />
}
