import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Icon from '../components/ui/Icon';
import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import Accordion from '../components/ui/Accordion';
import PageHero from '../components/blocks/PageHero';
import PricingTable from '../components/blocks/PricingTable';
import CtaBand from '../components/blocks/CtaBand';
import TrustBar from '../components/blocks/TrustBar';
import { pricingFaq } from '../content/site';
import { useMeta } from '../lib/useMeta';

/**
 * Pricing — §3.6. Every plan routes to a demo, not a checkout.
 * Tiers are illustrative until commercials are confirmed (§9).
 */
export default function Pricing() {
  useMeta({
    title: 'Pricing — Plans that scale with your school | RacoLearnHub',
    description:
      'Simple per-student or per-school plans. One platform replaces many — so it often costs less than the tools it retires.',
  });

  const comparison = [
    ['Curriculum-aligned course library', true, true, true],
    ['Interactive simulations', true, true, true],
    ['AI Copilot', true, true, true],
    ['White-label branding & custom domain', true, true, true],
    ['Core progress analytics', true, true, true],
    ['AI Playgrounds', false, true, true],
    ['Class & subject communities', false, true, true],
    ['Payments & fee administration', false, true, true],
    ['Advanced leadership analytics', false, true, true],
    ['Single sign-on (SSO)', false, true, true],
    ['Multi-school central administration', false, false, true],
    ['Cross-school analytics', false, false, true],
    ['Custom integrations & data exports', false, false, true],
    ['Dedicated customer success', false, false, true],
    ['Contractual SLA', false, false, true],
  ];

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Pricing that scales with your school."
        sub="Simple per-student or per-school plans. One platform replaces many — so it often costs less than the tools it retires."
        crumbs={[{ label: 'Pricing' }]}
        secondary={{ label: 'Get a tailored quote', href: '/contact' }}
      />

      <Section tight>
        <PricingTable />
        <Reveal style={{ marginTop: 'var(--space-8)' }}>
          <p className="note">
            <Icon name="Info" size={15} />
            <span>
              Tiers shown are illustrative pending confirmed commercials (§9). Final per-student
              and per-school pricing is shared on your demo call, with a written schedule for procurement.
            </span>
          </p>
        </Reveal>
      </Section>

      <TrustBar headline="Schools typically retire three to five subscriptions when they move to RacoLearnHub." />

      {/* ---- What's included comparison table -------------------------- */}
      <Section>
        <SectionHead
          eyebrow="Compare"
          title="What’s included"
          sub="The honest version: what each plan does and does not include."
        />
        <Reveal>
          <div className="table-wrap">
            <table className="table">
              <caption className="visually-hidden">Feature comparison across Essentials, Professional and Enterprise plans</caption>
              <thead>
                <tr>
                  <th scope="col">Capability</th>
                  <th scope="col">Essentials</th>
                  <th scope="col">Professional</th>
                  <th scope="col">Enterprise / Trust</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row[0]}>
                    <th scope="row" style={{ fontWeight: 600, color: 'var(--text)' }}>{row[0]}</th>
                    {row.slice(1).map((included, i) => (
                      <td key={i}>
                        {included ? (
                          <>
                            <Icon name="Check" size={17} strokeWidth={2.5} style={{ color: 'var(--trust-500)' }} />
                            <span className="visually-hidden">Included</span>
                          </>
                        ) : (
                          <>
                            <Icon name="Minus" size={17} style={{ color: 'var(--text-subtle)' }} />
                            <span className="visually-hidden">Not included</span>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      {/* ---- ROI / cost-consolidation note ----------------------------- */}
      <Section tone="inset">
        <div className="grid grid--2" style={{ gap: 'clamp(2rem, 1rem + 4vw, 4rem)', alignItems: 'center' }}>
          <Reveal>
            <p className="eyebrow">Return on investment</p>
            <h2 className="h3" style={{ marginBlock: 'var(--space-4)' }}>
              Count what you retire, not just what you spend.
            </h2>
            <p className="body-muted">
              Most schools arrive paying for a homework-help app, a content library, an assessment
              tool and a fee spreadsheet that costs somebody two days a month. The comparison that
              matters is the total of those, plus the staff hours, against one platform.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <Card panel>
              <h3 className="card__title" style={{ fontSize: 'var(--step-1)' }}>
                What to bring to the conversation
              </h3>
              <ul className="checklist" style={{ marginTop: 'var(--space-4)' }}>
                {[
                  'Your current EdTech subscriptions and renewal dates',
                  'Roughly how many students and staff need access',
                  'Your exam board(s) and priority subjects',
                  'Any procurement or funding deadlines',
                ].map((item) => (
                  <li key={item}><Icon name="Check" size={16} strokeWidth={2.5} /><span>{item}</span></li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Container size="narrow" style={{ padding: 0 }}>
          <SectionHead eyebrow="FAQ" title="Billing, contracts and pilots" />
          <Accordion items={pricingFaq} />
        </Container>
      </Section>

      <CtaBand
        title="Not sure which plan? See it first — book a demo."
        sub="We’ll recommend the plan that fits, and tell you plainly if a smaller one would do."
        secondary={{ label: 'Get a tailored quote', href: '/contact' }}
      />
    </>
  );
}
