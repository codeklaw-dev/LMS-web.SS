import Link from 'next/link'
import { type Locale, localeHref } from '../lib/locale'
import Icon from './Icon'

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  to?: string
  href?: string
  locale?: Locale
  variant?: 'primary' | 'secondary' | 'ghost' | 'onDark' | 'onDarkGhost'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  iconRight?: string
  block?: boolean
  loading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit'
  as?: 'a'
  children?: React.ReactNode
}

/**
 * The one button. Variants: primary | secondary | ghost | onDark | onDarkGhost.
 * Renders as next/link for internal `to` hrefs (site-relative, locale-stamped),
 * <a> for external, <button> otherwise.
 * States: hover, focus-visible, active, disabled, loading — all defined in CSS.
 */
export default function Button({
  to,
  href,
  locale = 'en',
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  block = false,
  loading = false,
  disabled = false,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size !== 'md' ? `btn--${size}` : '',
    block ? 'btn--block' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      {icon && <Icon name={icon} size={18} className="btn__icon" />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size={18} className="btn__icon icon-flip" />}
    </>
  )

  const shared = {
    className: classes,
    'data-loading': loading ? ('true' as const) : undefined,
    ...rest,
  }

  const target = to ?? href
  const isExternal = typeof target === 'string' && /^(https?:|mailto:|tel:)/.test(target)

  if (to && !disabled && !isExternal && (rest as { as?: string }).as !== 'a') {
    return (
      <Link href={localeHref(to, locale)} {...shared}>
        {inner}
      </Link>
    )
  }

  if (target && isExternal) {
    return (
      <a href={target} rel="noreferrer noopener" target="_blank" {...shared}>
        {inner}
      </a>
    )
  }

  if (target) {
    return (
      <a href={target} {...shared}>
        {inner}
      </a>
    )
  }

  const { type, as: _as, ...restButton } = rest as React.ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: string
  }
  return (
    <button type={type ?? 'button'} disabled={disabled || loading} aria-busy={loading || undefined} {...shared} {...restButton}>
      {inner}
    </button>
  )
}
