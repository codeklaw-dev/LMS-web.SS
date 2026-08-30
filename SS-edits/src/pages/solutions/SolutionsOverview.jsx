import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Icon from '../../components/ui/Icon';
import Reveal from '../../components/ui/Reveal';
import SectionHead from '../../components/ui/SectionHead';
import PageHero from '../../components/blocks/PageHero';
import CtaBand from '../../components/blocks/CtaBand';
import { solutionPages, solutionOrder } from '../../content/solutions';
import { valuePillars } from '../../content/site';
import { useMeta } from '../../lib/useMeta';

export default function SolutionsOverview() {
  useMeta({
    title: 'Solutions — Built for everyone in your school | RacoLearnHub',
    description:
      'Persona-led narratives mapping RacoLearnHub features to outcomes for school leaders, teachers, students, parents and multi-academy trusts.',
  });

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Built for everyone in your school."
        sub="The same platform does a very different job depending on who is holding it. Start with the person you are."
        crumbs={[{ label: 'Solutions' }]}
        secondary={{ label: 'See the platform', href: '/platform' }}
      />

      <Section>
        <div className="grid grid--2">
          {solutionOrder.map((slug, i) => (
            <Reveal key={slug} delay={i * 0.05}>
              <Card to={`/solutions/${slug}`} style={{ height: '100%' }}>
                <p className="eyebrow">{solutionPages[slug].eyebrow}</p>
                <h2 className="card__title" style={{ fontSize: 'var(--step-2)', marginTop: 'var(--space-3)' }}>
                  {solutionPages[slug].h1}
                </h2>
                <p className="card__body">{solutionPages[slug].sub}</p>
                <span className="card__footer link-arrow">
                  Explore <Icon name="ArrowRight" size={15} className="icon-flip" />
                </span>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="inset">
        <SectionHead
          eyebrow="What every role gets"
          title="Four things every page on this site keeps promising"
          sub="Because they are the four things schools actually buy."
        />
        <div className="grid grid--4">
          {valuePillars.map((p, i) => (
            <Reveal key={p.pillar} delay={i * 0.05}>
              <Card style={{ height: '100%' }}>
                <h3 className="card__title" style={{ fontSize: 'var(--step-0)' }}>{p.pillar}</h3>
                <p className="card__body">{p.promise}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
