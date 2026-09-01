'use client'

import { useState } from 'react'
import Link from 'next/link'
import Icon from '../ui/Icon'
import { type Locale, localeHref } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * Book a Live Demo form (§3.9). The primary conversion surface.
 *
 * The form asks only what routing and qualification need — nothing else.
 * Consent is explicit and never pre-ticked, and validation never clears a
 * field on error (RACO form rule). Errors move focus to the first problem
 * so keyboard and screen-reader users are taken to it.
 */
export default function DemoForm({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const d = dict.pages.demo.form
  const [form, setForm] = useState({
    name: '',
    email: '',
    school: '',
    role: '',
    country: '',
    curriculum: '',
    size: '',
    interest: '',
    consent: false,
  })
  const [errors, setErrors] = useState<Record<string, string | undefined>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
      const value =
        e.target instanceof HTMLInputElement && e.target.type === 'checkbox'
          ? e.target.checked
          : e.target.value
      setForm((f) => ({ ...f, [field]: value }))
      // Clear the error as soon as the user starts fixing it.
      setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
    }

  const validate = () => {
    const next: Record<string, string | undefined> = {}
    if (!form.name.trim()) next.name = d.errors.name
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = d.errors.email
    if (!form.school.trim()) next.school = d.errors.school
    if (!form.role) next.role = d.errors.role
    if (!form.country.trim()) next.country = d.errors.country
    if (!form.consent) next.consent = d.errors.consent
    return next
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const found = validate()
    setErrors(found)

    if (Object.keys(found).length > 0) {
      const firstField = Object.keys(found)[0]
      document.getElementById(firstField)?.focus()
      return
    }

    setStatus('loading')
    // TODO: POST to CRM / scheduling endpoint, then route to the
    // confirmation state with a calendar invite (§3.9).
    setTimeout(() => setStatus('success'), 900)
  }

  if (status === 'success') {
    return <DemoConfirmation dict={dict} locale={locale} name={form.name} />
  }

  return (
    <form className="demo__form" onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        <Field
          id="name"
          label={d.name}
          value={form.name}
          onChange={update('name')}
          error={errors.name}
          autoComplete="name"
          required
        />
        <Field
          id="email"
          label={d.email}
          type="email"
          value={form.email}
          onChange={update('email')}
          error={errors.email}
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          autoCapitalize="off"
          required
        />
        <Field
          id="school"
          label={d.school}
          value={form.school}
          onChange={update('school')}
          error={errors.school}
          autoComplete="organization"
          spellCheck={false}
          className="field--full"
          required
        />
        <SelectField
          id="role"
          label={d.role}
          value={form.role}
          onChange={update('role')}
          error={errors.role}
          options={d.roles}
          chooseLabel={d.choose}
          required
        />
        <Field
          id="country"
          label={d.country}
          value={form.country}
          onChange={update('country')}
          error={errors.country}
          autoComplete="country-name"
          required
        />
        <SelectField
          id="curriculum"
          label={d.curriculum}
          value={form.curriculum}
          onChange={update('curriculum')}
          options={d.curricula}
          hint={d.curriculumHint}
          optionalLabel={d.optional}
          chooseLabel={d.choose}
        />
        <SelectField
          id="size"
          label={d.size}
          value={form.size}
          onChange={update('size')}
          options={d.sizes}
          optionalLabel={d.optional}
          chooseLabel={d.choose}
        />

        <div className="field field--full">
          <label className="field__label" htmlFor="interest">
            {d.interest} <span className="field__hint">{d.optional}</span>
          </label>
          <textarea
            id="interest"
            className="textarea"
            value={form.interest}
            onChange={update('interest')}
            autoComplete="off"
            placeholder={d.interestPlaceholder}
          />
        </div>

        <div className="field field--full">
          <label className="checkbox" htmlFor="consent">
            <input
              id="consent"
              type="checkbox"
              checked={form.consent}
              onChange={update('consent')}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? 'consent-error' : undefined}
            />
            <span>
              {d.consent.pre}{' '}
              <Link href={localeHref('/privacy', locale)}>{d.consent.privacy}</Link>
              {d.consent.post}
            </span>
          </label>
          {errors.consent && (
            <p className="field__error" id="consent-error">
              <Icon name="CircleAlert" size={14} /> {errors.consent}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="btn btn--primary btn--lg btn--block demo__submit"
        data-loading={status === 'loading' ? 'true' : undefined}
        disabled={status === 'loading'}
        aria-busy={status === 'loading' || undefined}
      >
        {d.submit}
      </button>

      <p className="tiny" style={{ color: 'var(--text-subtle)', marginTop: 'var(--space-4)' }}>
        {d.footnote}
      </p>
    </form>
  )
}

/* ---------------------------------------------------------------- Fields */

function Field({
  id,
  label,
  error,
  hint,
  optionalLabel,
  className = '',
  required,
  ...rest
}: {
  id: string
  label: string
  error?: string
  hint?: string
  optionalLabel?: string
  className?: string
  required?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={`field ${className}`}>
      <label className="field__label" htmlFor={id}>
        {label} {!required && <span className="field__hint">{optionalLabel}</span>}
      </label>
      <input
        id={id}
        name={id}
        className="input"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        {...rest}
      />
      {hint && !error && (
        <p className="field__hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          <Icon name="CircleAlert" size={14} /> {error}
        </p>
      )}
    </div>
  )
}

function SelectField({
  id,
  label,
  options,
  error,
  hint,
  optionalLabel,
  chooseLabel,
  required,
  ...rest
}: {
  id: string
  label: string
  options: string[]
  error?: string
  hint?: string
  optionalLabel?: string
  chooseLabel: string
  required?: boolean
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label} {!required && <span className="field__hint">{optionalLabel}</span>}
      </label>
      <div className="select-wrap">
        <select
          id={id}
          name={id}
          className="select"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          {...rest}
        >
          <option value="">{chooseLabel}</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <Icon name="ChevronDown" size={16} className="select-wrap__caret" />
      </div>
      {hint && !error && (
        <p className="field__hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          <Icon name="CircleAlert" size={14} /> {error}
        </p>
      )}
    </div>
  )
}

/** Post-submit confirmation with a "while you wait" resource (§3.9). */
function DemoConfirmation({
  dict,
  locale,
  name,
}: {
  dict: Dictionary
  locale: Locale
  name: string
}) {
  const c = dict.pages.demo.confirmation
  return (
    <section className="section">
      <div className="container container--narrow">
        <div
          className="card card--panel"
          style={{ textAlign: 'center', alignItems: 'center', padding: 'var(--space-10) var(--space-6)' }}
        >
          <span className="icon-tile icon-tile--trust" style={{ width: 64, height: 64 }}>
            <Icon name="CalendarCheck" size={30} />
          </span>
          <h1 className="h3" role="status">
            {c.title.pre}
            {name ? `, ${name.split(' ')[0]}` : ''}
            {c.title.post}
          </h1>
          <p className="lede center" style={{ marginTop: 'var(--space-4)' }}>
            {c.body}
          </p>

          <div className="cluster" style={{ justifyContent: 'center', marginTop: 'var(--space-8)' }}>
            <button type="button" className="btn btn--primary">
              <Icon name="Download" size={18} className="btn__icon" />
              {c.brochure}
            </button>
            <Link href={localeHref('/platform/simulations', locale)} className="btn btn--secondary">
              <Icon name="Atom" size={18} className="btn__icon" />
              {c.simulation}
            </Link>
            <Link href={localeHref('/resources/case-studies', locale)} className="btn btn--ghost">
              {c.caseStudy}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
