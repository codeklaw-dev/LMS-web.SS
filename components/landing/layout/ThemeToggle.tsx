'use client'

import { useEffect, useState } from 'react'
import Icon from '../ui/Icon'
import type { Dictionary } from '../lib/dictionary'

/**
 * Light / dark. The landing owns its theme without touching the platform's
 * <html>: the boot script in the shell layout sets data-theme on the
 * .landing wrapper before paint, and this toggle keeps the same key
 * (localStorage 'rlh:theme', raw 'light'|'dark') in sync afterwards.
 */
export default function ThemeToggle({ dict }: { dict: Dictionary }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Adopt whatever the boot script resolved, then react to changes.
  useEffect(() => {
    const wrapper = document.querySelector('.landing') as HTMLElement | null
    if (wrapper?.dataset.theme === 'dark') setTheme('dark')
  }, [])

  const apply = (next: 'light' | 'dark') => {
    setTheme(next)
    try {
      window.localStorage.setItem('rlh:theme', next)
    } catch {
      /* private mode — the choice lasts this visit only */
    }
    const wrapper = document.querySelector('.landing') as HTMLElement | null
    if (wrapper) wrapper.dataset.theme = next
  }

  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <span className="theme-wrap">
      <button
        type="button"
        className="icon-btn"
        onClick={() => apply(next)}
        aria-label={dict.ui.switchTheme.replace('{next}', next)}
        title={dict.ui.switchTheme.replace('{next}', next)}
      >
        <Icon name={theme === 'dark' ? 'Sun' : 'Moon'} size={18} />
      </button>
    </span>
  )
}
