import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Icon from '../../components/ui/Icon';
import Badge from '../../components/ui/Badge';
import Reveal from '../../components/ui/Reveal';
import SectionHead from '../../components/ui/SectionHead';
import PageHero from '../../components/blocks/PageHero';
import CtaBand from '../../components/blocks/CtaBand';
import { curriculumPages } from '../../content/solutions';
import { useMeta } from '../../lib/useMeta';

export default function CurriculumOverview() {
  useMeta({
    title: 'Curriculum — Aligned to Cambridge & Edexcel | RacoLearnHub',
    description:
      'Courses, simulations and assessments mapped to Cambridge International and Pearson Edexcel specifications.',
  });

  return (
    <>
      <PageHero
        eyebrow="Curriculum"
        title="Aligned to the exam boards you already teach."
        sub="Content and pathways mapped to Cambridge and Edexcel, so what students learn maps to what they’re assessed on. Built around your curriculum, not bolted on."
        crumbs={[{ label: 'Curriculum' }]}
        secondary={{ label: 'See the course library', href: '/platform/courses' }}
      />

      <Section>
        <div className="grid grid--2">
          {Object.values(curriculumPages).map((page, i) => (
            <Reveal key={page.slug} delay={i * 0.06}>
              <Card to={`/curriculum/${page.slug}`} style={{ height: '100%' }}>
                <Badge tone="trust" style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-5)' }}>
                  Exam board
                </Badge>
                <h2 className="card__title" style={{ fontSize: 'var(--step-2)' }}>{page.fullName}</h2>
                <p className="card__body">{page.sub}</p>
                <ul className="cluster" style={{ marginTop: 'var(--space-5)' }}>
                  {page.levels.slice(0, 3).map((l) => (
                    <li className="badge badge--outline" key={l}>{l}</li>
                  ))}
                </ul>
                <span className="card__footer link-arrow">
                  See {page.board} alignment <Icon name="ArrowRight" size={15} className="icon-flip" />
                </span>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="inset">
        <SectionHead
          eyebrow="Other curricula"
          title="Teaching something else?"
          sub="Cambridge and Edexcel are where our alignment work started, not where it stops. Bring your own schemes of work and the platform will structure them."
          align="center"
        />
      </Section>

      <CtaBand />
    </>
  );
}
