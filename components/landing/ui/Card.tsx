import Link from 'next/link'
import { type Locale, localeHref } from '../lib/locale'

/**
 * Content block. The default has no chrome at all — a column separated from
 * its neighbours by space, which is how Apple's Layout guidance says to group
 * things before reaching for borders or background shapes.
 *
 *   <Card>            plain column, no padding, no border
 *   <Card panel>      a real container, for content that is genuinely grouped
 *   <Card to="/x">    an interactive surface, because it navigates
 */
export default function Card({
  to,
  locale = 'en',
  panel = false,
  flush = false,
  className = '',
  children,
  ...rest
}: {
  to?: string
  locale?: Locale
  panel?: boolean
  flush?: boolean
  className?: string
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) {
  const classes = [
    'card',
    to ? 'card--interactive' : '',
    panel && !to ? 'card--panel' : '',
    flush ? 'card--flush' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link href={localeHref(to, locale)} className={classes} {...(rest as object)}>
        {children}
      </Link>
    )
  }
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}
