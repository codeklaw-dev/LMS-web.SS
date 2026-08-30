import Container from '../ui/Container';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import './blocks.css';

/**
 * The reusable conversion band. Every page ends in one (§1.6).
 * The demo is framed as low-risk and high-value, never as a sales call.
 */
export default function CtaBand({
  title = 'See RacoLearnHub with your school’s subjects.',
  sub = 'A 30-minute personalised walkthrough with a specialist. No obligation.',
  primary = { label: 'Book a Live Demo', href: '/demo' },
  secondary = { label: 'Download the schools brochure', href: '/resources' },
  note = 'It’s a conversation, not a pitch — bring your questions and your curriculum.',
}) {
  return (
    <section className="section ctaband">
      <Container>
        <Reveal className="ctaband__inner">
          <h2 className="ctaband__title">{title}</h2>
          <p className="ctaband__sub">{sub}</p>
          <div className="ctaband__actions">
            <Button to={primary.href} variant="onDark" size="lg" iconRight="ArrowRight">
              {primary.label}
            </Button>
            {secondary && (
              <Button to={secondary.href} variant="onDarkGhost" size="lg" icon="Download">
                {secondary.label}
              </Button>
            )}
          </div>
          {note && <p className="ctaband__note">{note}</p>}
        </Reveal>
      </Container>
    </section>
  );
}
