import { Link, useLocation } from 'react-router-dom';
import Section from '../../components/ui/Section';
import Container from '../../components/ui/Container';
import Icon from '../../components/ui/Icon';
import PageHero from '../../components/blocks/PageHero';
import { legalNav } from '../../content/navigation';
import { useMeta } from '../../lib/useMeta';

/**
 * Utility & legal pages — §2.1. Structural skeletons only.
 *
 * Legal copy is deliberately not drafted here: privacy, terms, cookies,
 * safeguarding and the accessibility statement must be written and approved by
 * the people accountable for them. What this provides is the route, the page
 * furniture and a contents structure for that copy to land into.
 */

const LEGAL = {
  '/privacy': {
    title: 'Privacy notice',
    sub: 'How RACO AI Technologies collects, uses and protects personal data across RacoLearnHub.',
    sections: ['Who we are', 'What data we collect', 'How we use it', 'Lawful bases', 'Sharing & sub-processors', 'International transfers', 'Retention', 'Your rights', 'Children’s data', 'Contacting our DPO'],
  },
  '/terms': {
    title: 'Terms of service',
    sub: 'The terms under which schools and their users access RacoLearnHub.',
    sections: ['Agreement & parties', 'Licence & permitted use', 'School responsibilities', 'Acceptable use', 'Content ownership', 'Fees & billing', 'Service levels', 'Liability', 'Term & termination', 'Governing law'],
  },
  '/cookies': {
    title: 'Cookie policy',
    sub: 'What we store on your device, why, and how to change your mind.',
    sections: ['What cookies we use', 'Strictly necessary cookies', 'Analytics cookies', 'Managing your preferences', 'Third-party cookies', 'Changes to this policy'],
  },
  '/accessibility': {
    title: 'Accessibility statement',
    sub: 'Our commitment to WCAG 2.2 AA across the platform and this website — and where we know we fall short.',
    sections: ['Our commitment', 'Conformance status', 'Known limitations', 'Assistive technology support', 'Feedback & reporting a barrier', 'Assessment approach', 'Review schedule'],
  },
  '/safeguarding': {
    title: 'Safeguarding',
    sub: 'How RacoLearnHub supports schools in keeping students safe online.',
    sections: ['Our safeguarding principles', 'Content moderation', 'AI guardrails by age group', 'Alerting & escalation', 'Staff visibility & controls', 'Reporting a concern', 'Working with your DSL'],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const page = LEGAL[pathname] ?? LEGAL['/privacy'];

  useMeta({
    title: `${page.title} — RacoLearnHub`,
    description: page.sub,
  });

  return (
    <>
      <PageHero
        eyebrow="Legal & trust"
        title={page.title}
        sub={page.sub}
        crumbs={[{ label: page.title }]}
        primary={null}
      />

      <Section>
        <Container size="prose" style={{ padding: 0 }}>
          <p className="note" style={{ marginBottom: 'var(--space-8)' }}>
            <Icon name="TriangleAlert" size={16} />
            <span>
              <strong>Skeleton page.</strong> The structure below is scaffolding for legal copy that
              must be drafted and approved by RACO AI Technologies’ legal and data protection leads
              before launch. No legal text has been written here on their behalf.
            </span>
          </p>

          <nav aria-label="On this page" style={{ marginBottom: 'var(--space-9)' }}>
            <p className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>Contents</p>
            <ol className="grid" style={{ gap: 'var(--space-2)' }}>
              {page.sections.map((section, i) => (
                <li key={section}>
                  <a href={`#s-${i}`} className="link-arrow">
                    <span>{i + 1}. {section}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="prose">
            {page.sections.map((section, i) => (
              <section key={section} id={`s-${i}`}>
                <h2>{i + 1}. {section}</h2>
                <p style={{ color: 'var(--text-subtle)' }}>
                  Copy to be supplied. This section will cover {section.toLowerCase()}.
                </p>
              </section>
            ))}
          </div>

          <hr className="rule" style={{ marginBlock: 'var(--space-9)' }} />

          <nav aria-label="Other legal pages">
            <p className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>Related</p>
            <ul className="cluster">
              {legalNav.filter((l) => l.href !== pathname).map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="badge badge--outline">{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </Section>
    </>
  );
}
