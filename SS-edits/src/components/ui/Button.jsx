import { Link } from 'react-router-dom';
import Icon from './Icon';

/**
 * The one button. Variants: primary | secondary | ghost | onDark | onDarkGhost.
 * Renders as <Link> for internal hrefs, <a> for external, <button> otherwise.
 * States: hover, focus-visible, active, disabled, loading — all defined in CSS.
 */
export default function Button({
  as,
  to,
  href,
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
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    size !== 'md' ? `btn--${size}` : '',
    block ? 'btn--block' : '',
    className,
  ].filter(Boolean).join(' ');

  const inner = (
    <>
      {icon && <Icon name={icon} size={18} className="btn__icon" />}
      <span>{children}</span>
      {iconRight && <Icon name={iconRight} size={18} className="btn__icon icon-flip" />}
    </>
  );

  const shared = {
    className: classes,
    'data-loading': loading ? 'true' : undefined,
    ...rest,
  };

  const target = to ?? href;
  const isExternal = typeof target === 'string' && /^(https?:|mailto:|tel:)/.test(target);

  if (target && !disabled && !isExternal && as !== 'a') {
    return <Link to={target} {...shared}>{inner}</Link>;
  }

  if (target && isExternal) {
    return (
      <a href={target} rel="noreferrer noopener" target="_blank" {...shared}>
        {inner}
      </a>
    );
  }

  return (
    <button
      type={rest.type ?? 'button'}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...shared}
    >
      {inner}
    </button>
  );
}
