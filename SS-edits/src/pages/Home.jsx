import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import Reveal from '../components/ui/Reveal';
import SectionHead from '../components/ui/SectionHead';
import TrustBar from '../components/blocks/TrustBar';
import Statement from '../components/blocks/Statement';
import RuledColumns from '../components/blocks/RuledColumns';
import FeatureSpotlight from '../components/blocks/FeatureSpotlight';
import CopilotMock from '../components/blocks/CopilotMock';
import CtaBand from '../components/blocks/CtaBand';
import {
  painPoints, capabilities, examBoards, securityPillars,
  personas, howItWorks, testimonials, featuredCaseStudy,
} from '../content/site';
import { useMeta } from '../lib/useMeta';

/**
 * Home — Blueprint §3.1.
 *
 * The page is a guided argument: hook → proof → problem → capability →
 * spotlights → outcomes by role → curriculum → brand → security → social proof
 * → how it works → pricing signpost → demo.
 *
 * Every section is a different shape on purpose. An earlier pass rendered all
 * fourteen as an eyebrow, a headline, a sub-head and a grid of bordered cards —
 * which is legible but reads as a template rather than a designed page. Here the
 * archetypes rotate: statement, ruled columns, bento, spotlight, dark band,
 * editorial pair, numbered steps, pull quote. The vertical rhythm rotates with
 * them (see tokens.css §Section rhythm), so the gaps say whether a section
 * continues the current thought or opens a new one.
 */
export default function Home() {
  useMeta({
    title: 'RacoLearnHub — The AI-native learning platform for schools',
    description:
      'Curriculum-aligned courses, interactive simulations and a 24/7 AI tutor in one platform — branded as your school, in 20+ languages. Book a live demo.',
  });

  const lead = capabilities[0];
  const rest = capabilities.slice(1);

  return (
    <>
      {/* ── 1 · Hero ─────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__aura" aria-hidden="true" />
        <Container>
          <div className="hero__inner hero__grid">
            <Reveal>
              <p className="eyebrow eyebrow--accent">
                <Icon name="Sparkles" size={14} />
                The AI-native learning platform for schools
              </p>

              <h1 className="hero__title">
                Give every student a tutor.{' '}
                <span className="text-gradient">Give every teacher their time back.</span>
              </h1>

              <p className="hero__sub">
                RacoLearnHub brings curriculum-aligned courses, interactive simulations and a
                24/7 AI tutor into one platform — branded as your school, in over 20 languages,
                with the safeguarding and insight leaders need.
              </p>

              <div className="hero__actions">
                <Button to="/demo" size="lg" iconRight="ArrowRight">Book a Live Demo</Button>
                <Button to="/demo#overview" variant="secondary" size="lg" icon="Play">
                  Watch the 2-min overview
                </Button>
              </div>

              <p className="hero__reassure">
                <span><Icon name="Clock" size={14} /> 30&nbsp;minutes</span>
                <span><Icon name="UserCheck" size={14} /> With a specialist, not a sales bot</span>
                <span><Icon name="ShieldCheck" size={14} /> No obligation</span>
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <CopilotMock />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 2 · Trust bar ────────────────────────────────────────────── */}
      <TrustBar />

      {/* ── 3 · The problem — a statement, then hairline-ruled columns ── */}
      <Statement
        leads
        sub="A tutoring app here, a video library there, quizzes in one place, payments in a spreadsheet — nothing aligned to your curriculum, nothing that looks like your school, and no single view of how students are really doing."
      >
        Your school runs on too many disconnected tools.
      </Statement>

      <Section className="section--continues section--major">
        <RuledColumns
          items={painPoints.map((p) => ({ title: p.title, body: p.body }))}
        />
      </Section>

      {/* ── 4 · The platform at a glance — bento, not a uniform grid ──── */}
      <Section tone="inset" className="section--major">
        <SectionHead
          eyebrow="The answer"
          title="Everything your school needs to teach, in one place."
          sub="One platform replaces the patchwork — aligned to your exam board, branded as your school, and built so the AI actually teaches."
        />

        <div className="bento">
          <Link to={lead.href} className="bento__lead">
            <p className="eyebrow">Where it starts</p>
            <h3>{lead.name}</h3>
            <p>{lead.oneLiner}</p>
            <span className="link-arrow" style={{ color: '#fff', marginTop: 'var(--space-6)' }}>
              Explore Copilot <Icon name="ArrowRight" size={15} className="icon-flip" />
            </span>
          </Link>

          {rest.map((cap) => (
            <Link to={cap.href} className="bento__tile" key={cap.id}>
              <Icon
                name={cap.icon}
                size={20}
                className={cap.tone === 'brand' ? 'icon-bare' : `icon-bare icon-bare--${cap.tone}`}
              />
              <h3>{cap.name}</h3>
              <p>{cap.oneLiner}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── 5 · Spotlight: AI Copilot ────────────────────────────────── */}
      <Section className="section--major">
        <FeatureSpotlight
          eyebrow="AI Copilot"
          title="A tutor for every student — without hiring one."
          body="Copilot answers questions, explains concepts step by step, and adapts to each learner's level — grounded in your course material, not the open internet. It never gets tired, never judges, and speaks your students' language."
          points={[
            'Grounded in your courses — every answer cites its source',
            'Adapts to each learner’s level and pace',
            'Safe by design: age-appropriate, monitored, teacher-visible',
            'Available 24/7 in 20+ languages',
          ]}
          cta={{ label: 'See Copilot in your demo', href: '/platform/ai-copilot' }}
          media={<CopilotMock url="stmarys.racolearnhub.com" />}
        />
      </Section>

      {/* ── 6 · Spotlight: Simulations & Playgrounds ─────────────────── */}
      <Section tone="inset" className="section--major">
        <FeatureSpotlight
          flip
          eyebrow="Simulations & Playgrounds"
          title="Make the abstract impossible to forget."
          body="Twenty-plus interactive simulations across physics, chemistry, maths and biology — from projectile motion to gene expression — plus AI-built Playgrounds you can spin up for any topic. Learning by doing, not just watching."
          points={[
            'Built on trusted, research-backed PhET simulations',
            'Embeddable in any lesson, full-screen and mobile-ready',
            'Playgrounds: describe a topic, get an interactive activity',
            'Pair any simulation with Copilot for guided exploration',
          ]}
          cta={{ label: 'Try a live simulation', href: '/platform/simulations' }}
          media={<SimulationMock />}
        />
      </Section>

      {/* ── 7 · Outcomes by role — full-bleed dark band ──────────────── */}
      <section className="section section--major band-dark">
        <Container>
          <SectionHead
            eyebrow="Outcomes by role"
            title="Built for everyone in your school."
            sub="The same platform, three very different jobs to be done."
          />
          <div className="ruled-cols ruled-cols--3">
            {personas.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06} className="ruled-col">
                <h3 className="ruled-col__title">{p.title}</h3>
                <ul className="checklist" style={{ marginBlock: 'var(--space-5)' }}>
                  {p.points.map((point) => (
                    <li key={point}>
                      <Icon name="Check" size={16} strokeWidth={2.5} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link className="link-arrow" to={p.cta.href}>
                  {p.cta.label} <Icon name="ArrowRight" size={15} className="icon-flip" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 8 · Curriculum — two editorial links, no cards ───────────── */}
      <Section className="section--major">
        <SectionHead
          eyebrow="Curriculum"
          title="Aligned to the exam boards you already teach."
          sub="Content and pathways mapped to Cambridge and Edexcel, so what students learn maps to what they’re assessed on."
        />
        <div className="editorial-pair">
          {examBoards.map((board) => (
            <Reveal key={board.id}>
              <Link to={board.href} className="editorial-link">
                <span className="editorial-link__name">{board.fullName}</span>
                <span className="editorial-link__body">{board.body}</span>
                <span className="link-arrow editorial-link__cue">
                  See {board.name} alignment <Icon name="ArrowRight" size={15} className="icon-flip" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── 9 · Your brand, 20+ languages ────────────────────────────── */}
      <Section tone="inset" className="section--major">
        <FeatureSpotlight
          eyebrow="White-label"
          title="It’s your platform. It just runs on ours."
          body="Your name, your colours, your domain — and every word available in 20+ languages, including right-to-left, so every family feels at home."
          points={[
            'Your logo, palette and typography throughout',
            'Your own domain: learn.yourschool.org',
            '20+ languages including Arabic and Urdu (RTL)',
            'Single sign-on with Microsoft or Google',
          ]}
          cta={{ label: 'See white-label', href: '/platform/white-label' }}
          media={<BrandMock />}
        />
      </Section>

      {/* ── 10 · Security — ruled row, four items, no cards ──────────── */}
      <Section className="section--major">
        <div className="split-head">
          <Reveal>
            <p className="eyebrow eyebrow--accent">Security &amp; safeguarding</p>
            <h2 className="h3" style={{ marginTop: 'var(--space-4)' }}>
              Safe for students. Trusted by IT.
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="split-head__aside">
            <p className="body-muted">
              GDPR-compliant, hosted in the UK/EU, single sign-on, WCAG-accessible, with
              safeguarding controls throughout.
            </p>
            <Button to="/security" variant="secondary" iconRight="ArrowRight" style={{ marginTop: 'var(--space-6)' }}>
              Read about security &amp; compliance
            </Button>
          </Reveal>
        </div>

        <RuledColumns
          columns={4}
          items={securityPillars.slice(0, 4).map((p) => ({ title: p.title, body: p.body }))}
        />
      </Section>

      {/* ── 11 · Social proof — one pull quote, then supporting ──────── */}
      <Section tone="inset" className="section--major">
        <div className="proof">
          <Reveal className="proof__quote">
            <p className="eyebrow">Why schools switch</p>
            <blockquote className="pullquote" style={{ marginTop: 'var(--space-6)' }}>
              <p className="pullquote__text">{testimonials[0].quote}</p>
            </blockquote>
            <p className="attrib__meta" style={{ marginTop: 'var(--space-6)' }}>
              {testimonials[0].role} · {testimonials[0].school} · {testimonials[0].country}
              <span className="badge badge--outline" style={{ marginLeft: 'var(--space-3)' }}>
                Placeholder — replace before launch
              </span>
            </p>
          </Reveal>

          <Reveal className="proof__case" delay={0.08}>
            <Link to={featuredCaseStudy.href} className="card card--interactive">
              <p className="eyebrow">{featuredCaseStudy.eyebrow}</p>
              <h3 className="card__title" style={{ marginTop: 'var(--space-4)', fontSize: 'var(--step-2)' }}>
                {featuredCaseStudy.title}
              </h3>
              <p className="card__body">{featuredCaseStudy.body}</p>
              <dl className="proof__stats">
                {featuredCaseStudy.stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <dt className="visually-hidden">{s.label}</dt>
                    <dd className="stat-value stat-value--accent" style={{ margin: 0, fontSize: 'var(--step-2)' }}>{s.value}</dd>
                    <dd className="stat-label" style={{ margin: 0 }} aria-hidden="true">{s.label}</dd>
                  </div>
                ))}
              </dl>
              <span className="card__footer link-arrow">
                Read the case study <Icon name="ArrowRight" size={15} className="icon-flip" />
              </span>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ── 12 · How it works — large numerals ───────────────────────── */}
      <Section className="section--major">
        <SectionHead
          eyebrow="How it works"
          title="Live in weeks, not terms."
          sub="No year-long implementation project. Most schools are teaching on RacoLearnHub inside a half-term."
        />
        <ol className="steps-editorial">
          {howItWorks.map((s, i) => (
            <Reveal as="li" className="step-ed" key={s.step} delay={i * 0.07}>
              <span className="step-ed__num" aria-hidden="true">{s.step}</span>
              <h3 className="step-ed__title">{s.title}</h3>
              <p className="step-ed__body">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ── 13 · Pricing signpost — type only, no container ──────────── */}
      <Statement
        leads
        tone="inset"
        align="center"
        sub="Simple per-student or per-school plans. Because one platform replaces many, it often costs less than the tools it retires."
      >
        Pricing that scales with your school.
      </Statement>
      <Section tone="inset" className="section--continues section--major">
        <div className="cluster" style={{ justifyContent: 'center' }}>
          <Button to="/pricing" iconRight="ArrowRight">See plans</Button>
          <Button to="/contact" variant="secondary">Get a tailored quote</Button>
        </div>
      </Section>

      {/* ── 14 · Final conversion band ───────────────────────────────── */}
      <CtaBand />
    </>
  );
}

/* -------------------------------------------------------------------------
   Placeholder product visuals. Swap for real screenshots in soft device
   frames (§4.4) once brand assets are available.
   ------------------------------------------------------------------------- */

function SimulationMock() {
  const subjects = [
    { name: 'Projectile motion', subject: 'Physics', icon: 'Rocket' },
    { name: 'Balancing equations', subject: 'Chemistry', icon: 'FlaskConical' },
    { name: 'Gene expression', subject: 'Biology', icon: 'Dna' },
    { name: 'Graphing quadratics', subject: 'Maths', icon: 'Sigma' },
  ];

  return (
    <div className="mock">
      <div className="mock__bar">
        <div className="mock__dots" aria-hidden="true"><i /><i /><i /></div>
        <span className="mock__url">Simulations · Year 10 Physics</span>
      </div>
      <div className="mock__body">
        <div className="grid grid--2" style={{ gap: 'var(--space-3)' }}>
          {subjects.map((s) => (
            <div key={s.name} className="mock__cell">
              <Icon name={s.icon} size={20} style={{ color: 'var(--accent)' }} />
              <p className="mock__cell-name">{s.name}</p>
              <p className="tiny" style={{ color: 'var(--text-subtle)' }}>{s.subject}</p>
            </div>
          ))}
        </div>
        <div className="note">
          <Icon name="MousePointerClick" size={15} />
          <span>Live, embeddable and mobile-ready — students explore, they don’t just watch.</span>
        </div>
      </div>
    </div>
  );
}

function BrandMock() {
  const schools = [
    { name: 'Northgate International', domain: 'learn.northgate.edu', hue: 'var(--brand-600)' },
    { name: 'Al Noor Academy', domain: 'منصة.alnoor.ae', hue: 'var(--trust-500)', dir: 'rtl' },
    { name: 'Riverbank Trust', domain: 'hub.riverbank.org.uk', hue: 'var(--warm-500)' },
  ];

  return (
    <div className="grid" style={{ gap: 'var(--space-4)' }}>
      {schools.map((s) => (
        <div className="mock" key={s.name}>
          <div className="mock__bar">
            <span aria-hidden="true" className="mock__crest" style={{ background: s.hue }}>
              {s.name[0]}
            </span>
            <span className="mock__school" dir={s.dir}>{s.name}</span>
            <span className="mock__url" style={{ maxWidth: 180 }} dir={s.dir}>{s.domain}</span>
          </div>
        </div>
      ))}
      <p className="tiny" style={{ color: 'var(--text-subtle)', textAlign: 'center' }}>
        Same platform. Three schools. Nobody sees ours.
      </p>
    </div>
  );
}
