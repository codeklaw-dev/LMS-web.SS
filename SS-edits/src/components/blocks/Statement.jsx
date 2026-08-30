import Container from '../ui/Container';
import Reveal from '../ui/Reveal';
import './blocks.css';

/**
 * A section that is nothing but a sentence.
 *
 * Apple's Layout guidance: "Make essential information easy to find by giving
 * it sufficient space… don't obscure it by crowding it with nonessential
 * details." Sometimes the most confident thing a section can do is hold one
 * idea and stop. Used to break the rhythm between denser sections.
 *
 * `leads` shortens the gap beneath it, for when the section that follows is the
 * second half of the same thought rather than a new one.
 */
export default function Statement({ children, sub, align = 'start', tone, leads = false }) {
  const classes = [
    'section',
    'statement',
    leads ? 'section--leads' : 'section--major',
    tone === 'inset' ? 'section--inset' : '',
  ].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      <Container>
        <Reveal className={align === 'center' ? 'statement__inner statement__inner--center' : 'statement__inner'}>
          <p className="statement__text">{children}</p>
          {sub && <p className="statement__sub">{sub}</p>}
        </Reveal>
      </Container>
    </section>
  );
}
