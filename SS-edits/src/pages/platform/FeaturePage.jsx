import { Navigate, useParams } from 'react-router-dom';
import Section from '../../components/ui/Section';
import Container from '../../components/ui/Container';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Icon from '../../components/ui/Icon';
import Reveal from '../../components/ui/Reveal';
import SectionHead from '../../components/ui/SectionHead';
import PageHero from '../../components/blocks/PageHero';
import FeatureSpotlight from '../../components/blocks/FeatureSpotlight';
import CtaBand from '../../components/blocks/CtaBand';
import Accordion from '../../components/ui/Accordion';
import CopilotMock from '../../components/blocks/CopilotMock';
import { platformPages, platformOrder } from '../../content/platform';
import { capabilities } from '../../content/site';
import { useMeta } from '../../lib/useMeta';

/**
 * One template, eight feature pages — Blueprint §3.2.
 *
 * Keeping these on a shared template is a deliberate call: the pages share a
 * structure (hero → copy pillars → alternating sections → related → FAQ → CTA),
 * so the difference between them should live in content, not in eight
 * near-identical components that drift apart the first time the design changes.
 */
export default function FeaturePage() {
  const { slug } = useParams();
  const page = platformPages[slug];

  useMeta({
    title: page ? `${page.name} — RacoLearnHub` : 'Platform — RacoLearnHub',
    description: page?.sub,
  });

  if (!page) return <Navigate to="/platform" replace />;

  const related = platformOrder
    .filter((s) => s !== slug)
    .slice(0, 3)
    .map((s) => platformPages[s]);

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        sub={page.sub}
        crumbs={[{ label: 'Platform', href: '/platform' }, { label: page.name }]}
        primary={page.cta}
        secondary={{ label: 'See all capabilities', href: '/platform' }}
      >
        {page.pillars && (
          <div className="cluster" style={{ marginTop: 'var(--space-7)' }}>
            {page.pillars.map((p) => <Badge key={p} tone="outline">{p}</Badge>)}
          </div>
        )}
      </PageHero>

      {/* The first section gets a visual; the rest are copy-led, which keeps
          the page from becoming a wall of identical two-column blocks. */}
      <Section className="section--major">
        <FeatureSpotlight
          title={page.sections[0].title}
          body={page.sections[0].body}
          points={page.sections[0].points}
          media={<CopilotMock url={`${slug}.racolearnhub.com`} />}
        />
      </Section>

      <Section tone="inset" className="section--major">
        <div className="ruled-cols ruled-cols--3">
          {page.sections.slice(1).map((section, i) => (
            <Reveal key={section.title} delay={i * 0.06} className="ruled-col">
              <div>
                <h2 className="ruled-col__title">{section.title}</h2>
                <p className="ruled-col__body">{section.body}</p>
                <ul className="checklist" style={{ marginTop: 'var(--space-5)' }}>
                  {section.points.map((p) => (
                    <li key={p}>
                      <Icon name="Check" size={16} strokeWidth={2.5} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {page.faq && (
        <Section>
          <Container size="narrow" style={{ padding: 0 }}>
            <SectionHead eyebrow="FAQ" title={`${page.name} — your questions`} />
            <Accordion items={page.faq} />
          </Container>
        </Section>
      )}

      <Section tone="inset">
        <SectionHead eyebrow="Explore further" title="The rest of the platform" />
        <div className="grid grid--3">
          {related.map((rel) => {
            const meta = capabilities.find((c) => c.href.endsWith(rel.slug));
            return (
              <Card to={`/platform/${rel.slug}`} key={rel.slug} style={{ height: '100%' }}>
                <span className="icon-tile"><Icon name={meta?.icon ?? 'Circle'} size={22} /></span>
                <h3 className="card__title">{rel.name}</h3>
                <p className="card__body">{rel.sub}</p>
                <span className="card__footer link-arrow">
                  Explore <Icon name="ArrowRight" size={15} className="icon-flip" />
                </span>
              </Card>
            );
          })}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
