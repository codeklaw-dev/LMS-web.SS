import { getDictionary } from './dictionary'
import { buildMetadata } from './seo'
import LegalView from '../views/LegalView'
import type { Locale } from './locale'

/**
 * Legal pages keep their flat SPA URLs (/privacy, /terms, /cookies,
 * /accessibility, /safeguarding) so every existing link and canonical
 * stays valid. One route file per slug renders through this helper.
 */
export function legalMetadata(locale: Locale, slug: string) {
  const dict = getDictionary(locale)
  const page = dict.pages.legal.pages[slug]
  return buildMetadata({
    dict,
    route: slug,
    path: `/${slug}`,
    locale,
    title: page ? `${page.title} — ${dict.site.name}` : dict.meta.notFound.title,
    description: page?.sub,
  })
}

export function LegalRoute({ locale, slug }: { locale: Locale; slug: string }) {
  return <LegalView dict={getDictionary(locale)} locale={locale} slug={slug} />
}
