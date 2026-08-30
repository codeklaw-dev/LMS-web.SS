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
import { solutionPages, solutionOrder } from '../../content/solutions';
import { useMeta } from '../../lib/useMeta';

/** Persona pages — §3.3. One template, four narratives. */
export default function SolutionPage() {
  const { slug } = useParams();
  const page = solutionPages[slug];

  useMeta({
    title: page ? `${page.name} — RacoLearnHub` : 'Solutions — RacoLearnHub',
    description: page?.sub,
  });

  if (!page) return <Navigate to="/solutions" replace />;

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        sub={page.sub}
        crumbs={[{ label: 'Solutions', href: '/solutions' }, { label: page.name }]}
        primary={page.cta}
        secondary={{ label: 'See the platform', href: '/platform' }}
      />

      {page.stats && (
        <Section tight tone="elevated">
          <dl className="grid grid--3" style={{ textAlign: 'center' }}>
            {page.stats.map((s) => (
              <div className="stat" key={s.label} style={{ alignItems: 'center' }}>
                <dt className="visually-hidden">{s.label}</dt>
                <dd className="stat-value" style={{ margin: 0 }}>{s.value}</dd>
                <dd className="stat-label" style={{ margin: 0 }} aria-hidden="true">{s.label}</dd>
              </div>
            ))}
          </dl>
          <p className="tiny center" style={{ color: 'var(--text-subtle)', marginTop: 'var(--space-6)' }}>
            Illustrative figures — replace with verified customer data before launch.
          </p>
        </Section>
      )}

      <Section className="section--major">
        <div className="ruled-cols ruled-cols--2">
          {page.sections.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.05} className="ruled-col">
              <div>
                <span className="ruled-col__kicker">{String(i + 1).padStart(2, '0')}</span>
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

      <Section tone="inset" className="section--major">
        <SectionHead eyebrow="In their words" title="Schools already working this way" />
        <Testimonials />
      </Section>

      {page.faq && (
        <Section>
          <Container size="narrow" style={{ padding: 0 }}>
            <SectionHead eyebrow="FAQ" title="Questions we get asked" />
            <Accordion items={page.faq} />
          </Container>
        </Section>
      )}

      <Section tone="inset" tight>
        <SectionHead eyebrow="Other roles" title="Everyone else in your school" />
        <div className="grid grid--3">
          {solutionOrder.filter((s) => s !== slug).map((s) => (
            <Card to={`/solutions/${s}`} key={s} style={{ height: '100%' }}>
              <h3 className="card__title" style={{ fontSize: 'var(--step-0)' }}>{solutionPages[s].name}</h3>
              <p className="card__body">{solutionPages[s].h1}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
