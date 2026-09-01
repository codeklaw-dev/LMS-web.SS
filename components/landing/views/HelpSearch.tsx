'use client'

import Icon from '../ui/Icon'
import type { Dictionary } from '../lib/dictionary'

/** Help-centre search box. Skeleton: intercepts submit; wire to the
 *  docs search once the Help Centre has an index behind it. */
export default function HelpSearch({ dict }: { dict: Dictionary }) {
  const h = dict.pages.help
  return (
    <form
      className="cluster"
      style={{ marginTop: 'var(--space-7)', maxWidth: 520 }}
      onSubmit={(e) => e.preventDefault()}
      role="search"
    >
      <label className="visually-hidden" htmlFor="help-search">
        {h.searchLabel}
      </label>
      <input
        id="help-search"
        className="input"
        type="search"
        placeholder={h.searchPlaceholder}
        style={{ flex: 1 }}
      />
      <button type="submit" className="btn btn--primary">
        <Icon name="Search" size={18} className="btn__icon" />
        {h.searchSubmit}
      </button>
    </form>
  )
}
