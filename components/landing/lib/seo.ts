import type { Metadata } from 'next'
import { canonicalUrl, type Locale } from './locale'
import type { Dictionary } from './dictionary'

/**
 * Uniform per-page metadata: title + description from dict.meta, canonical
 * under https://racoedu.com/landing-page, hreflang both ways plus
 * x-default, OpenGraph and Twitter card. OG images come from the
 * convention-based opengraph-image files in each locale tree.
 */
export function buildMetadata({
  dict,
  route,
  path,
  locale,
  title,
  description,
}: {
  dict: Dictionary
  route: string
  path: string
  locale: Locale
  title?: string
  description?: string
}): Metadata {
  const meta = dict.meta[route as keyof typeof dict.meta] ?? dict.meta.home
  const resolvedTitle = title ?? meta.title
  const resolvedDescription = description ?? meta.description
  const url = canonicalUrl(path, locale)

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: url,
      languages: {
        en: canonicalUrl(path, 'en'),
        bn: canonicalUrl(path, 'bn'),
        'x-default': canonicalUrl(path, 'en'),
      },
    },
    openGraph: {
      type: 'website',
      url,
      siteName: dict.site.name,
      locale: locale === 'bn' ? 'bn_BD' : 'en_GB',
      alternateLocale: locale === 'bn' ? ['en_GB'] : ['bn_BD'],
      title: resolvedTitle,
      description: resolvedDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDescription,
    },
  }
}
