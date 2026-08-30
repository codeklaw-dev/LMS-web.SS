export default function Container({ size, className = '', children, ...rest }) {
  const classes = [
    'container',
    size === 'narrow' ? 'container--narrow' : '',
    size === 'prose' ? 'container--prose' : '',
    className,
  ].filter(Boolean).join(' ');

  return <div className={classes} {...rest}>{children}</div>;
}
