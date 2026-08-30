import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import PageHero from '../components/blocks/PageHero';
import CtaBand from '../components/blocks/CtaBand';
import { site } from '../content/site';
import { useMeta } from '../lib/useMeta';

/**
 * About — §3.8. The credibility anchor for the whole site: an established
 * UK company, serious about AI, that builds for people rather than instead of them.
 */
export default function About() {
  useMeta({
    title: 'About — Built by an AI lab that believes in teachers | RacoLearnHub',
    description:
      'RacoLearnHub is made by RACO AI Technologies — a UK AI lab building AI that works for people, not instead of them.',
  });

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built by an AI lab that believes in teachers."
        sub="RacoLearnHub is made by RACO AI Technologies — a UK AI lab building AI that works for people, not instead of them."
        crumbs={[{ label: 'About' }]}
        secondary={{ label: 'Visit racoai.io', href: site.parentSite }}
      />

      <Section id="mission">
        <div className="grid grid--2" style={{ gap: 'clamp(2rem, 1rem + 4vw, 4rem)' }}>
          <Reveal>
            <p className="eyebrow">Mission & story</p>
            <h2 className="h3" style={{ marginBlock: 'var(--space-4)' }}>
              Technology should give teachers time, not take it.
            </h2>
            <div className="prose">
              <p>
                RACO AI Technologies is an AI lab and engineering company. We build applied AI
                products — and RacoLearnHub is the one we care about most, because education is
                where the compounding happens.
              </p>
              <p>
                We started it after watching the same pattern in school after school: enormous
                effort spent stitching tools together, and the students who most needed help
                still waiting for a moment of a teacher’s attention that never came.
              </p>
              <p>
                Our position is unfashionable and simple. AI should not replace the teacher.
                It should handle the twentieth repetition of the same explanation, so the teacher
                can do the thing only a human can.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} id="why-education">
            <Card panel style={{ height: '100%' }}>
              <span className="icon-tile"><Icon name="Heart" size={22} /></span>
              <h3 className="card__title">Why education</h3>
              <p className="card__body">
                Because a tutor for every child used to be a question of wealth. It does not
                have to be any more — and a school-controlled platform, rather than a consumer
                app, is the way that happens safely.
              </p>
              <ul className="checklist" style={{ marginTop: 'var(--space-6)' }}>
                {[
                  'Schools own their content and their data',
                  'No advertising, ever',
                  'No training on student data',
                  'Accessible and multilingual by default',
                ].map((item) => (
                  <li key={item}><Icon name="Check" size={16} strokeWidth={2.5} /><span>{item}</span></li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tone="inset" id="team">
        <SectionHead
          eyebrow="The team"
          title="Engineers, educators and the people between them"
          sub="Placeholder team content — replace with real profiles before launch."
        />
        <div className="grid grid--4">
          {['Leadership', 'AI engineering', 'Learning design', 'Schools success'].map((group, i) => (
            <Reveal key={group} delay={i * 0.05}>
              <Card panel style={{ height: '100%' }}>
                <span className="skeleton" style={{ width: 56, height: 56, borderRadius: '50%', marginBottom: 'var(--space-5)' }} />
                <h3 className="card__title" style={{ fontSize: 'var(--step-0)' }}>{group}</h3>
                <p className="card__body">Profiles to be added during the brand pass.</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid--3">
          <Reveal>
            <Card panel style={{ height: '100%' }}>
              <span className="icon-tile icon-tile--trust"><Icon name="Cpu" size={22} /></span>
              <h3 className="card__title">Backed by real AI engineering</h3>
              <p className="card__body">
                RacoLearnHub is built on the same engineering practice behind RACO AI’s other
                applied AI work — not a wrapper over someone else’s chatbot.
              </p>
              <Button as="a" href={site.parentSite} variant="ghost" className="card__footer" iconRight="ArrowUpRight">
                racoai.io
              </Button>
            </Card>
          </Reveal>

          <Reveal delay={0.06} id="careers">
            <Card panel style={{ height: '100%' }}>
              <span className="icon-tile icon-tile--warm"><Icon name="Briefcase" size={22} /></span>
              <h3 className="card__title">Careers</h3>
              <p className="card__body">
                We hire engineers, learning designers and people who have actually stood in front
                of a class. Open roles are listed as they arise.
              </p>
              <Button to="/contact" variant="ghost" className="card__footer" iconRight="ArrowRight">
                Get in touch
              </Button>
            </Card>
          </Reveal>

          <Reveal delay={0.12}>
            <Card panel style={{ height: '100%' }}>
              <span className="icon-tile"><Icon name="Newspaper" size={22} /></span>
              <h3 className="card__title">Press & contact</h3>
              <p className="card__body">
                {site.legalName}, {site.address}. {site.engineering}. For press enquiries, use the contact page and
                mark your message for the press team.
              </p>
              <Button to="/contact" variant="ghost" className="card__footer" iconRight="ArrowRight">
                Contact us
              </Button>
            </Card>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
