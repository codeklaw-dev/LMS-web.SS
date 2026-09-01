import Icon from './Icon'

/** Eyebrow → title → sub. One focal point, then two levels beneath it. */
export default function SectionHead({
  eyebrow,
  eyebrowIcon,
  title,
  sub,
  align = 'start',
  as: Tag = 'h2',
  className = '',
  ...rest
}: {
  eyebrow?: string
  eyebrowIcon?: string
  title: string
  sub?: string
  align?: 'start' | 'center'
  as?: 'h2' | 'h3'
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={[
        'section-head',
        align === 'center' ? 'section-head--center' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {eyebrow && (
        <p className="eyebrow">
          {eyebrowIcon && <Icon name={eyebrowIcon} size={15} />}
          {eyebrow}
        </p>
      )}
      <Tag className="section-head__title">{title}</Tag>
      {sub && <p className="section-head__sub">{sub}</p>}
    </div>
  )
}
