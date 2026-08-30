import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import { useMeta } from '../lib/useMeta';

/** 404 — §2.1. Every dead end still offers the primary path. */
export default function NotFound() {
  useMeta({
    title: 'Page not found — RacoLearnHub',
    description: 'The page you were looking for does not exist.',
  });

  return (
    <Section>
      <Container size="narrow">
        <Card panel style={{ textAlign: 'center', alignItems: 'center', padding: 'var(--space-11) var(--space-6)' }}>
          <span className="icon-tile icon-tile--warm" style={{ width: 64, height: 64 }}>
            <Icon name="Compass" size={30} />
          </span>
          <p className="eyebrow">404</p>
          <h1 className="h3" style={{ marginBlock: 'var(--space-4)' }}>
            That page isn’t here.
          </h1>
          <p className="lede center">
            The link may be old, or the page may have moved. Here are the routes most people
            are looking for.
          </p>
          <div className="cluster" style={{ justifyContent: 'center', marginTop: 'var(--space-8)' }}>
            <Button to="/demo" iconRight="ArrowRight">Book a Live Demo</Button>
            <Button to="/platform" variant="secondary">See the platform</Button>
            <Button to="/" variant="ghost">Back to home</Button>
          </div>
          <p className="tiny" style={{ color: 'var(--text-subtle)', marginTop: 'var(--space-7)' }}>
            Or browse the <a href="/sitemap">full sitemap</a>.
          </p>
        </Card>
      </Container>
    </Section>
  );
}
