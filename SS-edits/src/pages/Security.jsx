import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import Accordion from '../components/ui/Accordion';
import PageHero from '../components/blocks/PageHero';
import CtaBand from '../components/blocks/CtaBand';
import { securityPillars } from '../content/site';
import { useMeta } from '../lib/useMeta';

/**
 * Security & Compliance — §3.5.
 * This page clears the IT/DPO gate and is designed to be linked directly
 * into a procurement pack, so it stands on its own without the sales journey.
 */
export default function Security() {
  useMeta({
    title: 'Security & Compliance — Built to be trusted with your students’ data | RacoLearnHub',
    description:
      'GDPR-compliant, UK/EU-hosted, safeguarding-first and accessible by design. Data protection, residency, SSO, accessibility and AI responsibility.',
  });

  const faq = [
    { q: 'Where is our data hosted?', a: 'In the UK/EU by default, with documented residency. International schools can discuss regional hosting during procurement.' },
    { q: 'Do you train AI models on our data?', a: 'No. Course content and student conversations are never used for model training, and this is written into the data-processing agreement rather than only stated on a website.' },
    { q: 'Can we see your security documentation?', a: 'Yes — request the security pack below. It includes policies, the sub-processor list, a penetration-test summary and our data-processing agreement.' },
    { q: 'How do you handle safeguarding incidents?', a: 'Flagged content routes to your named safeguarding lead with full context. Escalation paths, retention and reporting are configured to your school’s policy.' },
    { q: 'What is your accessibility standard?', a: 'We target WCAG 2.2 AA across the product and this marketing site, and publish an accessibility statement schools can reference in their own compliance reporting.' },
    { q: 'What happens to our data if we leave?', a: 'You can export your content and records at any time. On termination, data is deleted according to the schedule in the agreement.' },
  ];

  return (
    <>
      <PageHero
        eyebrow="Security & Compliance"
        title="Built to be trusted with your students’ data."
        sub="GDPR-compliant, UK/EU-hosted, safeguarding-first, and accessible by design."
        crumbs={[{ label: 'Security & Compliance' }]}
        primary={{ label: 'Request our security pack', href: '/contact' }}
        secondary={{ label: 'Book a demo', href: '/demo' }}
      />

      <Section className="section--major">
        <SectionHead
          eyebrow="The essentials"
          title="What your IT and data protection leads will ask"
          sub="Everything below is designed to be forwarded to procurement without further translation."
        />
        {/* An icon per pillar earns its place here: procurement readers scan
            this page for a specific control rather than reading it through. */}
        <div className="ruled-cols ruled-cols--2">
          {securityPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.04} className="ruled-col">
              <div>
                <Icon name={pillar.icon} size={22} className="icon-bare icon-bare--trust" />
                <h2 className="ruled-col__title">{pillar.title}</h2>
                <p className="ruled-col__body">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="inset">
        <div className="grid grid--2" style={{ gap: 'clamp(2rem, 1rem + 4vw, 4rem)', alignItems: 'center' }}>
          <Reveal>
            <p className="eyebrow">For procurement</p>
            <h2 className="h3" style={{ marginBlock: 'var(--space-4)' }}>
              Request the security pack
            </h2>
            <p className="body-muted">
              Policies, sub-processor list, penetration-test summary, data-processing agreement and
              accessibility statement — in one download, so your review starts today rather than
              after three emails.
            </p>
            <div className="cluster" style={{ marginTop: 'var(--space-7)' }}>
              <Button to="/contact" iconRight="ArrowRight">Request the security pack</Button>
              <Button to="/accessibility" variant="secondary">Accessibility statement</Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Card panel>
              <h3 className="card__title" style={{ fontSize: 'var(--step-1)' }}>In the pack</h3>
              <ul className="checklist" style={{ marginTop: 'var(--space-4)' }}>
                {[
                  'Information security policy',
                  'Data-processing agreement (DPA) template',
                  'Sub-processor list and locations',
                  'Penetration-test executive summary',
                  'Business continuity & incident response',
                  'Accessibility conformance statement',
                ].map((item) => (
                  <li key={item}><Icon name="FileCheck2" size={16} /><span>{item}</span></li>
                ))}
              </ul>
              <p className="note" style={{ marginTop: 'var(--space-6)' }}>
                <Icon name="Info" size={15} />
                <span>
                  Exact certifications and residency commitments to be confirmed before launch (§9).
                </span>
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Container size="narrow" style={{ padding: 0 }}>
          <SectionHead eyebrow="FAQ" title="Security & data protection questions" />
          <Accordion items={faq} />
        </Container>
      </Section>

      <CtaBand
        title="Bring your IT lead to the demo."
        sub="We’re happy to spend the first ten minutes on architecture, hosting and data flows before anyone talks about lessons."
        secondary={{ label: 'Request the security pack', href: '/contact' }}
      />
    </>
  );
}
