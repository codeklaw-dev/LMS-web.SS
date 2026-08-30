export default function Badge({ tone = 'brand', className = '', children, ...rest }) {
  const map = { brand: '', outline: 'badge--outline', trust: 'badge--trust', warm: 'badge--warm' };
  return (
    <span className={['badge', map[tone] ?? '', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </span>
  );
}
