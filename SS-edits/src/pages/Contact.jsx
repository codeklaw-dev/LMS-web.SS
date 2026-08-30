import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import Reveal from '../components/ui/Reveal';
import PageHero from '../components/blocks/PageHero';
import { site } from '../content/site';
import { useMeta } from '../lib/useMeta';

/**
 * Contact — §3.10. Three routes, with the demo signposted as primary.
 * This page channels non-sales enquiries; it does not replace /demo.
 */
export default function Contact() {
  useMeta({
    title: 'Contact — Talk to a human | RacoLearnHub',
    description:
      'Book a demo, ask a general or support question, or talk to us about partnerships and press.',
  });

  const routes = [
    {
      icon: 'CalendarCheck',
      title: 'Book a demo',
      body: 'The fastest route if you are evaluating RacoLearnHub for a school or trust. Thirty minutes, tailored to your curriculum.',
      cta: { label: 'Book a Live Demo', href: '/demo' },
      primary: true,
    },
    {
      icon: 'MessageCircle',
      title: 'General & support enquiries',
      body: 'Questions about the platform, your existing account, billing or safeguarding. Existing customers should start in the Help Centre for the fastest answer.',
      cta: { label: 'Visit the Help Centre', href: '/help' },
    },
    {
      icon: 'Handshake',
      title: 'Partnerships & press',
      body: 'Content partnerships, resellers and distributors, exam boards, and media enquiries about RACO AI Technologies.',
      cta: { label: 'Email the team', href: 'mailto:hello@racoai.io' },
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a human."
        sub="Three routes in, depending on what you need. If you are evaluating the platform for a school, the demo is the shortest path."
        crumbs={[{ label: 'Contact' }]}
        primary={{ label: 'Book a Live Demo', href: '/demo' }}
        secondary={{ label: 'Help Centre', href: '/help' }}
      />

      <Section>
        <div className="grid grid--3">
          {routes.map((route, i) => (
            <Reveal key={route.title} delay={i * 0.06}>
              <Card panel style={{ height: '100%' }}>
                <span className={`icon-tile ${route.primary ? '' : 'icon-tile--trust'}`}>
                  <Icon name={route.icon} size={22} />
                </span>
                <h2 className="card__title" style={{ fontSize: 'var(--step-1)' }}>{route.title}</h2>
                <p className="card__body">{route.body}</p>
                <div className="card__footer">
                  <Button
                    to={route.cta.href}
                    variant={route.primary ? 'primary' : 'secondary'}
                    block
                  >
                    {route.cta.label}
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="inset">
        <div className="grid grid--2" style={{ gap: 'clamp(2rem, 1rem + 4vw, 4rem)' }}>
          <Reveal>
            <h2 className="h4">Company details</h2>
            <div className="prose" style={{ marginTop: 'var(--space-5)' }}>
              <p>
                <strong>{site.legalName}</strong><br />
                {site.address}<br />
                {site.engineering}
              </p>
              <p>
                Registered address and company number to be added during the brand and
                legal pass before launch.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Card panel>
              <span className="icon-tile"><Icon name="Clock" size={22} /></span>
              <h2 className="card__title" style={{ fontSize: 'var(--step-1)' }}>Response times</h2>
              <ul className="checklist" style={{ marginTop: 'var(--space-4)' }}>
                {[
                  'Demo requests: within one working day',
                  'General enquiries: within two working days',
                  'Existing customer support: per your plan’s SLA',
                  'Safeguarding escalations: prioritised immediately',
                ].map((item) => (
                  <li key={item}><Icon name="Check" size={16} strokeWidth={2.5} /><span>{item}</span></li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
