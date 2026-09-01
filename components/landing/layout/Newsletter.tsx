'use client'

import { useState } from 'react'
import Icon from '../ui/Icon'
import type { Dictionary } from '../lib/dictionary'

/**
 * Newsletter sign-up. Skeleton: local state only — no network call.
 * Wire `status` to your ESP/CRM endpoint; keep the four states intact.
 */
export default function Newsletter({ dict }: { dict: Dictionary }) {
  const n = dict.ui.newsletter
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) {
      setStatus('error')
      return
    }
    setStatus('loading')
    // TODO: POST to newsletter endpoint.
    setTimeout(() => setStatus('success'), 600)
  }

  if (status === 'success') {
    return (
      <div className="newsletter">
        <p className="newsletter__ok" role="status">
          <Icon name="CircleCheck" size={17} /> {n.success}
        </p>
      </div>
    )
  }

  return (
    <form className="newsletter" onSubmit={onSubmit} noValidate>
      <label className="footer__col-title" htmlFor="newsletter-email">
        {n.label}
      </label>
      <div className="newsletter__row">
        <input
          id="newsletter-email"
          className="newsletter__input"
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          autoCapitalize="off"
          placeholder={n.placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          aria-invalid={status === 'error'}
          aria-describedby="newsletter-note"
        />
        <button type="submit" className="btn btn--onDark" data-loading={status === 'loading' ? 'true' : undefined}>
          {n.submit}
        </button>
      </div>
      <p className="newsletter__note" id="newsletter-note">
        {status === 'error' ? n.error : n.note}
      </p>
    </form>
  )
}
