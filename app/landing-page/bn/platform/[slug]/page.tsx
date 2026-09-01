import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import FeatureView from '@components/landing/views/FeatureView'
import { platformOrder } from '@components/landing/content/platform'

export function generateStaticParams() {
  return platformOrder.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const dict = getDictionary('bn')
  const page = dict.platformPages[slug as keyof typeof dict.platformPages]
  const meta = dict.meta.platformFeature
  return buildMetadata({
    dict,
    route: 'platformFeature',
    path: `/platform/${slug}`,
    locale: 'bn',
    title: meta.title.replace('{name}', page?.name ?? dict.site.name),
    description: page?.sub,
  })
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <FeatureView dict={getDictionary('bn')} locale="bn" slug={slug} />
}
