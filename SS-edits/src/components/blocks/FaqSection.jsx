import Accordion from '../ui/Accordion';
import SectionHead from '../ui/SectionHead';
import Container from '../ui/Container';
import './blocks.css';

export default function FaqSection({ eyebrow = 'FAQ', title, sub, items }) {
  return (
    <section className="section">
      <Container size="narrow">
        <SectionHead eyebrow={eyebrow} title={title} sub={sub} />
        <Accordion items={items} />
      </Container>
    </section>
  );
}
