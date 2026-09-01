import { getDictionary } from '@components/landing/lib/dictionary'
import { buildMetadata } from '@components/landing/lib/seo'
import BlogView from '@components/landing/views/BlogView'

export function generateMetadata() {
  return buildMetadata({
    dict: getDictionary('bn'),
    route: 'blog',
    path: '/resources/blog',
    locale: 'bn',
  })
}

export default function Page() {
  return <BlogView dict={getDictionary('bn')} locale="bn" />
}
