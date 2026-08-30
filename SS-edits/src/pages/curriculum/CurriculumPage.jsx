import { Navigate, useParams } from 'react-router-dom';
import Section from '../../components/ui/Section';
import Container from '../../components/ui/Container';
import Card from '../../components/ui/Card';
import Icon from '../../components/ui/Icon';
import Reveal from '../../components/ui/Reveal';
import SectionHead from '../../components/ui/SectionHead';
import Accordion from '../../components/ui/Accordion';
import PageHero from '../../components/blocks/PageHero';
import CtaBand from '../../components/blocks/CtaBand';
import Testimonials from '../../components/blocks/Testimonials';
import { curriculumPages } from '../../content/solutions';
import { useMeta } from '../../lib/useMeta';

/**
 * Exam-board landing pages — §3.4. These carry the credibility hook for this
 * market and capture the long-tail intent identified in §6.
 */
export default function CurriculumPage() {
  const { board } = useParams();
  const page = curriculumPages[board];

  useMeta({
    title: page ? `${page.fullName} learning platform — RacoLearnHub` : 'Curriculum — RacoLearnHub',
    description: page?.sub,
  });

  if (!page) return <Navigate to="/curriculum" replace />;

  const faq = [
    { q: `Which ${page.board} levels are covered?`, a: `${page.levels.join(', ')} — with subject coverage expanding each term.` },
    { q: 'How is alignment maintained when specifications change?', a: 'Specification updates are tracked centrally and pushed to course mappings, so your department is not re-tagging lessons by hand.' },
    { q: 'Can we mix exam boards?', a: 'Yes. Many international schools run both Cambridge and Edexcel across different subjects or key stages, and the platform handles that in one instance.' },
  ];

  return (
    <>
      <PageHero
        eyebrow={page.fullName}
        title={page.h1}
        sub={page.sub}
        crumbs={[{ label: 'Curriculum', href: '/curriculum' }, { label: page.board }]}
        primary={{ label: `Book a demo for your ${page.board} subjects`, href: '/demo' }}
        secondary={{ label: 'See the course library', href: '/platform/courses' }}
      />

      <Section>
        <SectionHead
          eyebrow="Coverage"
          title="Subjects & levels covered"
          sub={`Content mapped to ${page.fullName} specifications, with new subjects added each term.`}
        />
        <div className="grid grid--2">
          <Reveal>
            <Card panel style={{ height: '100%' }}>
              <span className="icon-tile"><Icon name="Layers" size={22} /></span>
              <h3 className="card__title">Levels</h3>
              <ul className="checklist" style={{ marginTop: 'var(--space-4)' }}>
                {page.levels.map((l) => (
                  <li key={l}><Icon name="Check" size={16} strokeWidth={2.5} /><span>{l}</span></li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={0.06}>
            <Card panel style={{ height: '100%' }}>
              <span className="icon-tile icon-tile--trust"><Icon name="BookOpen" size={22} /></span>
              <h3 className="card__title">Subjects</h3>
              <ul className="cluster" style={{ marginTop: 'var(--space-4)' }}>
                {page.subjects.map((s) => <li className="badge badge--outline" key={s}>{s}</li>)}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="inset">
        <SectionHead
          eyebrow="Alignment"
          title="Mapped to specifications & assessment objectives"
          sub="Every lesson carries its specification reference, so what students learn maps to what they are examined on."
        />
        <div className="grid grid--3">
          {[
            { icon: 'Target', title: 'Specification mapping', body: `Each lesson tagged to its ${page.board} specification point, visible to teachers and to leadership reporting.` },
            { icon: 'FileText', title: 'Past-paper practice', body: 'Past-paper style questions attached to each topic, so revision is part of the course rather than a separate scramble in May.' },
            { icon: 'Atom', title: 'Simulations by subject', body: 'Interactive simulations mapped to the practical and conceptual content of each science and maths topic.' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <Card panel style={{ height: '100%' }}>
                <span className="icon-tile"><Icon name={item.icon} size={22} /></span>
                <h3 className="card__title" style={{ fontSize: 'var(--step-1)' }}>{item.title}</h3>
                <p className="card__body">{item.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="What teachers say" title={`${page.board} departments already using RacoLearnHub`} />
        <Testimonials />
      </Section>

      <Section tone="inset">
        <Container size="narrow" style={{ padding: 0 }}>
          <SectionHead eyebrow="FAQ" title={`${page.board} questions`} />
          <Accordion items={faq} />
        </Container>
      </Section>

      <Reveal>
        <Container style={{ paddingBottom: 'var(--space-9)' }}>
          <p className="note">
            <Icon name="Info" size={15} />
            <span>
              RacoLearnHub is an independent platform. {page.fullName} is referenced to describe
              curriculum alignment; confirm endorsement and trademark usage with the board before launch.
            </span>
          </p>
        </Container>
      </Reveal>

      <CtaBand
        title={`See RacoLearnHub with your ${page.board} subjects.`}
        sub="A 30-minute walkthrough using your specification, your topics and your year groups."
      />
    </>
  );
}
