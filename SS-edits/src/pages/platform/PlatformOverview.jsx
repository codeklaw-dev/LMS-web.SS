import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Icon from '../../components/ui/Icon';
import Reveal from '../../components/ui/Reveal';
import SectionHead from '../../components/ui/SectionHead';
import PageHero from '../../components/blocks/PageHero';
import CapabilityGrid from '../../components/blocks/CapabilityGrid';
import CtaBand from '../../components/blocks/CtaBand';
import TrustBar from '../../components/blocks/TrustBar';
import { platformPages, platformOrder } from '../../content/platform';
import { useMeta } from '../../lib/useMeta';

/** Platform overview — §3.2. The whole capability story on one page. */
export default function PlatformOverview() {
  useMeta({
    title: 'Platform — One platform. Every part of learning. | RacoLearnHub',
    description:
      'From an AI tutor to interactive simulations, curriculum content to community and payments — see how the pieces of RacoLearnHub fit together.',
  });

  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="One platform. Every part of learning."
        sub="From an AI tutor to interactive simulations, curriculum content to community and payments — see how the pieces fit together."
        crumbs={[{ label: 'Platform' }]}
        secondary={{ label: 'See pricing', href: '/pricing' }}
      />

      <TrustBar headline="One platform, replacing the five your school is paying for today." />

      <Section>
        <SectionHead
          eyebrow="Capabilities"
          title="Eight capabilities, one login."
          sub="Each one would be a product on its own. Together they are the reason schools stop stitching tools together."
        />
        <CapabilityGrid />
      </Section>

      <Section tone="inset">
        <SectionHead
          eyebrow="Everything included"
          title="The full capability list"
          sub="Every capability has its own page with the detail your team will ask for."
        />
        <div className="grid grid--2">
          {platformOrder.map((slug, i) => {
            const page = platformPages[slug];
            return (
              <Reveal key={slug} delay={i * 0.04}>
                <Card to={`/platform/${slug}`} style={{ height: '100%' }}>
                  <h3 className="card__title" style={{ fontSize: 'var(--step-1)' }}>{page.name}</h3>
                  <p className="card__body">{page.sub}</p>
                  <ul className="cluster" style={{ marginTop: 'var(--space-5)' }}>
                    {page.pillars.map((p) => (
                      <li className="badge badge--outline" key={p}>{p}</li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Capability comparison — "Replaces:" (§3.2) */}
      <Section>
        <SectionHead
          eyebrow="Consolidation"
          title="What RacoLearnHub replaces"
          sub="The business case usually writes itself once the current subscriptions are listed side by side."
        />
        <Reveal>
          <div className="table-wrap">
            <table className="table">
              <caption className="visually-hidden">
                Tools RacoLearnHub replaces and the capability that covers each one
              </caption>
              <thead>
                <tr>
                  <th scope="col">Tool you’re paying for today</th>
                  <th scope="col">Replaced by</th>
                  <th scope="col">What improves</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Tutoring / homework help app', 'AI Copilot', 'Available 24/7, grounded in your own courses'],
                  ['Video & content library', 'Courses & Curriculum', 'Aligned to your exam board, not generic'],
                  ['Quiz & assessment tool', 'Courses + Analytics', 'Results feed one progress picture'],
                  ['Separate LMS', 'The whole platform', 'One login for staff and students'],
                  ['Messaging app', 'Community & Collaboration', 'Moderated and safeguarded'],
                  ['Payments spreadsheet', 'Payments & Admin', 'Automated reminders and a real audit trail'],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal style={{ marginTop: 'var(--space-6)' }}>
          <p className="note">
            <Icon name="Info" size={15} />
            <span>
              Which capabilities are live versus on the roadmap should be confirmed before launch,
              so the site never over-promises (§9, open questions).
            </span>
          </p>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
