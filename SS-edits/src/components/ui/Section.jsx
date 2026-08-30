import Container from './Container';

/**
 * Vertical rhythm wrapper. `tone` paints the band; `container` sizes the well.
 */
export default function Section({
  id,
  tone = 'default',      // default | inset | elevated
  tight = false,
  container = 'default', // default | narrow | prose | none
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'section',
    tight ? 'section--tight' : '',
    tone === 'inset' ? 'section--inset' : '',
    tone === 'elevated' ? 'section--elevated' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <section id={id} className={classes} {...rest}>
      {container === 'none' ? children : (
        <Container size={container === 'default' ? undefined : container}>
          {children}
        </Container>
      )}
    </section>
  );
}
