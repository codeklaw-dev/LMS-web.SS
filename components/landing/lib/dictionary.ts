/**
 * Server dictionary access. One JSON file per locale under locales/, typed
 * from the English file so a missing Bengali key is a type error, not a
 * silent English leak on the Bengali page.
 *
 * The `Dictionary` interface widens the JSON-derived type where the views
 * index by runtime key (nav items by href, legal pages by slug): the JSON
 * literal types are structurally assignable, and lookups stay type-safe.
 */
import type { Locale } from './locale'

import enJson from '../../../locales/landing.en.json'
import bnJson from '../../../locales/landing.bn.json'

type RawDictionary = typeof enJson

export interface Dictionary extends Omit<RawDictionary, 'nav' | 'pages'> {
  nav: Omit<RawDictionary['nav'], 'items' | 'groups' | 'featured' | 'footerTitles'> & {
    items: Record<string, { label: string; desc?: string }>
    groups: Record<string, string>
    featured: Record<string, { badge: string; title: string; body: string }>
    footerTitles: Record<string, string>
  }
  pages: Omit<RawDictionary['pages'], 'legal'> & {
    legal: Omit<RawDictionary['pages']['legal'], 'pages'> & {
      pages: Record<string, { title: string; sub: string; sections: string[] }>
    }
  }
}

const en: Dictionary = enJson
const bn: Dictionary = bnJson as Dictionary

const dictionaries: Record<Locale, Dictionary> = { en, bn }

/** Called in every route — keeps each page's copy in its server bundle. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
