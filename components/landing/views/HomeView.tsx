import Link from 'next/link'
import Section from '../ui/Section'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionHead from '../ui/SectionHead'
import TrustBar from '../blocks/TrustBar'
import Statement from '../blocks/Statement'
import RuledColumns from '../blocks/RuledColumns'
import FeatureSpotlight from '../blocks/FeatureSpotlight'
import CopilotMock from '../blocks/CopilotMock'
import CtaBand from '../blocks/CtaBand'
import {
  capabilities,
  examBoards,
  howItWorksSteps,
  mockUrls,
  personas,
} from '../content/site'
import { type Locale, localeHref } from '../lib/locale'
import type { Dictionary } from '../lib/dictionary'

/**
 * Home — Blueprint §3.1. A guided argument: hook → proof → problem →
 * capability → spotlights → outcomes by role → curriculum → brand →
 * security → social proof → how it works → pricing signpost → demo.
 * Every section is a different shape on purpose; the archetypes rotate so
 * the page never reads as one template.
 */
export default function HomeView({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const h = dict.pages.home
  const [lead, ...rest] = capabilities
  const leadCopy = dict.capabilities.find((c) => c.id === lead.id)!
  const leadHref = localeHref(lead.href, locale)

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
                {h.hero.eyebrow}
              </p>

              <h1 className="hero__title">
                {h.hero.titlePre}{' '}
                <span className="text-gradient">{h.hero.titleGradient}</span>
              </h1>

              <p className="hero__sub">{h.hero.sub}</p>

              <div className="hero__actions">
                <Button to="/demo" locale={locale} size="lg" iconRight="ArrowRight">
                  {dict.site.primaryCta.label}
                </Button>
                <Button
                  to="/demo#overview"
                  locale={locale}
                  variant="secondary"
                  size="lg"
                  icon="Play"
                >
                  {h.hero.watchCta}
                </Button>
              </div>

              <p className="hero__reassure">
                {h.hero.reassure.map((r, i) => (
                  <span key={r.text}>
                    <Icon
                      name={['Clock', 'UserCheck', 'ShieldCheck'][i] ?? 'Check'}
                      size={14}
                    />{' '}
                    {r.text}
                  </span>
                ))}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <CopilotMock dict={dict} url={mockUrls.hero} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── 2 · Trust bar ────────────────────────────────────────────── */}
      <TrustBar dict={dict} />

      {/* ── 3 · The problem — a statement, then hairline-ruled columns ── */}
      <Statement leads sub={h.problem.sub}>
        {h.problem.statement}
      </Statement>

      <Section className="section--continues section--major">
        <RuledColumns
          items={dict.painPoints.map((p) => ({ title: p.title, body: p.body }))}
        />
      </Section>

      {/* ── 4 · The platform at a glance — bento, not a uniform grid ──── */}
      <Section tone="inset" className="section--major">
        <SectionHead eyebrow={h.answer.eyebrow} title={h.answer.title} sub={h.answer.sub} />

        <div className="bento">
          <Link href={leadHref} className="bento__lead">
            <p className="eyebrow">{h.answer.bentoLeadEyebrow}</p>
            <h3>{leadCopy.name}</h3>
            <p>{leadCopy.oneLiner}</p>
            <span
              className="link-arrow"
              style={{ color: 'var(--cream-100)', marginTop: 'var(--space-6)' }}
            >
              {h.answer.bentoLeadCta} <Icon name="ArrowRight" size={15} className="icon-flip" />
            </span>
          </Link>

          {rest.map((cap) => {
            const copy = dict.capabilities.find((c) => c.id === cap.id)!
            return (
              <Link href={localeHref(cap.href, locale)} className="bento__tile" key={cap.id}>
                <Icon
                  name={cap.icon}
                  size={20}
                  className={cap.tone === 'brand' ? 'icon-bare' : `icon-bare icon-bare--${cap.tone}`}
                />
                <h3>{copy.name}</h3>
                <p>{copy.oneLiner}</p>
              </Link>
            )
          })}
        </div>
      </Section>

      {/* ── 5 · Spotlight: AI Copilot ────────────────────────────────── */}
      <Section className="section--major">
        <FeatureSpotlight
          locale={locale}
          eyebrow={h.copilotSpot.eyebrow}
          title={h.copilotSpot.title}
          body={h.copilotSpot.body}
          points={h.copilotSpot.points}
          cta={{ label: h.copilotSpot.ctaLabel, href: '/platform/ai-copilot' }}
          media={<CopilotMock dict={dict} url={mockUrls.copilot} />}
        />
      </Section>

      {/* ── 6 · Spotlight: Simulations & Playgrounds ─────────────────── */}
      <Section tone="inset" className="section--major">
        <FeatureSpotlight
          locale={locale}
          flip
          eyebrow={h.simsSpot.eyebrow}
          title={h.simsSpot.title}
          body={h.simsSpot.body}
          points={h.simsSpot.points}
          cta={{ label: h.simsSpot.ctaLabel, href: '/platform/simulations' }}
          media={<SimulationMock dict={dict} />}
        />
      </Section>

      {/* ── 7 · Outcomes by role — emphasis band (inverts in light only) */}
      <section className="section section--major band-dark">
        <Container>
          <SectionHead eyebrow={h.roles.eyebrow} title={h.roles.title} sub={h.roles.sub} />
          <div className="ruled-cols ruled-cols--3">
            {personas.map((p, i) => {
              const copy = dict.personas.find((x) => x.id === p.id)!
              return (
                <Reveal key={p.id} delay={i * 0.06} className="ruled-col">
                  <h3 className="ruled-col__title">{copy.title}</h3>
                  <ul className="checklist" style={{ marginBlock: 'var(--space-5)' }}>
                    {copy.points.map((point) => (
                      <li key={point}>
                        <Icon name="Check" size={16} strokeWidth={2.5} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link className="link-arrow" href={localeHref(p.ctaHref, locale)}>
                    {copy.ctaLabel} <Icon name="ArrowRight" size={15} className="icon-flip" />
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── 8 · Curriculum — two editorial links, no cards ───────────── */}
      <Section className="section--major">
        <SectionHead eyebrow={h.curriculum.eyebrow} title={h.curriculum.title} sub={h.curriculum.sub} />
        <div className="editorial-pair">
          {examBoards.map((board) => {
            const copy = dict.examBoards.find((b) => b.id === board.id)!
            return (
              <Reveal key={board.id}>
                <Link href={localeHref(board.href, locale)} className="editorial-link">
                  <span className="editorial-link__name">{copy.fullName}</span>
                  <span className="editorial-link__body">{copy.body}</span>
                  <span className="link-arrow editorial-link__cue">
                    {copy.linkCue.replace('{name}', copy.name)}{' '}
                    <Icon name="ArrowRight" size={15} className="icon-flip" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* ── 9 · Your brand, 20+ languages ────────────────────────────── */}
      <Section tone="inset" className="section--major">
        <FeatureSpotlight
          locale={locale}
          eyebrow={h.brandSpot.eyebrow}
          title={h.brandSpot.title}
          body={h.brandSpot.body}
          points={h.brandSpot.points}
          cta={{ label: h.brandSpot.ctaLabel, href: '/platform/white-label' }}
          media={<BrandMock dict={dict} />}
        />
      </Section>

      {/* ── 10 · Security — ruled row, four items, no cards ──────────── */}
      <Section className="section--major">
        <div className="split-head">
          <Reveal>
            <p className="eyebrow eyebrow--accent">{h.security.eyebrow}</p>
            <h2 className="h3" style={{ marginTop: 'var(--space-4)' }}>
              {h.security.title}
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="split-head__aside">
            <p className="body-muted">{h.security.body}</p>
            <Button
              to="/security"
              locale={locale}
              variant="secondary"
              iconRight="ArrowRight"
              style={{ marginTop: 'var(--space-6)' }}
            >
              {h.security.cta}
            </Button>
          </Reveal>
        </div>

        <RuledColumns
          columns={4}
          items={dict.securityPillars.slice(0, 4).map((p) => ({ title: p.title, body: p.body }))}
        />
      </Section>

      {/* ── 11 · Social proof — one pull quote, then supporting ──────── */}
      <Section tone="inset" className="section--major">
        <div className="proof">
          <Reveal className="proof__quote">
            <p className="eyebrow">{h.proof.eyebrow}</p>
            <blockquote className="pullquote" style={{ marginTop: 'var(--space-6)' }}>
              <p className="pullquote__text">{dict.testimonials[0].quote}</p>
            </blockquote>
            <p className="attrib__meta" style={{ marginTop: 'var(--space-6)' }}>
              {dict.testimonials[0].role} · {dict.testimonials[0].school} ·{' '}
              {dict.testimonials[0].country}
              <span className="badge badge--outline" style={{ marginLeft: 'var(--space-3)' }}>
                {dict.ui.placeholderBadge}
              </span>
            </p>
          </Reveal>

          <Reveal className="proof__case" delay={0.08}>
            <Link
              href={localeHref(dict.featuredCaseStudy.href, locale)}
              className="card card--interactive"
            >
              <p className="eyebrow">{dict.featuredCaseStudy.eyebrow}</p>
              <h3
                className="card__title"
                style={{ marginTop: 'var(--space-4)', fontSize: 'var(--step-2)' }}
              >
                {dict.featuredCaseStudy.title}
              </h3>
              <p className="card__body">{dict.featuredCaseStudy.body}</p>
              <dl className="proof__stats">
                {dict.featuredCaseStudy.stats.map((s) => (
                  <div className="stat" key={s.label}>
                    <dt className="visually-hidden">{s.label}</dt>
                    <dd
                      className="stat-value stat-value--accent"
                      style={{ margin: 0, fontSize: 'var(--step-2)' }}
                    >
                      {s.value}
                    </dd>
                    <dd className="stat-label" style={{ margin: 0 }} aria-hidden="true">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
              <span className="card__footer link-arrow">
                {dict.ui.readCaseStudy} <Icon name="ArrowRight" size={15} className="icon-flip" />
              </span>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ── 12 · How it works — large numerals ───────────────────────── */}
      <Section className="section--major">
        <SectionHead eyebrow={h.how.eyebrow} title={h.how.title} sub={h.how.sub} />
        <ol className="steps-editorial">
          {dict.howItWorks.map((s, i) => (
            <Reveal as="li" className="step-ed" key={s.title} delay={i * 0.07}>
              <span className="step-ed__num" aria-hidden="true">
                {howItWorksSteps[i]}
              </span>
              <h3 className="step-ed__title">{s.title}</h3>
              <p className="step-ed__body">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ── 13 · Pricing signpost — type only, no container ──────────── */}
      <Statement leads tone="inset" align="center" sub={h.pricingSignpost.sub}>
        {h.pricingSignpost.statement}
      </Statement>
      <Section tone="inset" className="section--continues section--major">
        <div className="cluster" style={{ justifyContent: 'center' }}>
          <Button to="/pricing" locale={locale} iconRight="ArrowRight">
            {h.pricingSignpost.cta}
          </Button>
          <Button to="/contact" locale={locale} variant="secondary">
            {h.pricingSignpost.secondary}
          </Button>
        </div>
      </Section>

      {/* ── 14 · Final conversion band ───────────────────────────────── */}
      <CtaBand dict={dict} locale={locale} />
    </>
  )
}

/* -------------------------------------------------------------------------
   Placeholder product visuals. Swap for real screenshots in soft device
   frames (§4.4) once brand assets are available.
   ------------------------------------------------------------------------- */

function SimulationMock({ dict }: { dict: Dictionary }) {
  const m = dict.pages.home.simulationMock
  return (
    <div className="mock">
      <div className="mock__bar">
        <div className="mock__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span className="mock__url">{m.barLabel}</span>
      </div>
      <div className="mock__body">
        <div className="grid grid--2" style={{ gap: 'var(--space-3)' }}>
          {m.cells.map((cell) => (
            <div key={cell.name} className="mock__cell">
              <Icon name={cell.icon} size={20} style={{ color: 'var(--accent)' }} />
              <p className="mock__cell-name">{cell.name}</p>
              <p className="tiny" style={{ color: 'var(--text-subtle)' }}>
                {cell.subject}
              </p>
            </div>
          ))}
        </div>
        <div className="note">
          <Icon name="MousePointerClick" size={15} />
          <span>{m.note}</span>
        </div>
      </div>
    </div>
  )
}

function BrandMock({ dict }: { dict: Dictionary }) {
  const m = dict.pages.home.brandMock
  return (
    <div className="grid" style={{ gap: 'var(--space-4)' }}>
      {m.schools.map((s) => (
        <div className="mock" key={s.name}>
          <div className="mock__bar">
            <span
              aria-hidden="true"
              className="mock__crest"
              style={{ background: `var(${s.hue})` }}
            >
              {s.name[0]}
            </span>
            <span className="mock__school" dir={s.dir}>
              {s.name}
            </span>
            <span className="mock__url" style={{ maxWidth: 180 }} dir={s.dir}>
              {s.domain}
            </span>
          </div>
        </div>
      ))}
      <p className="tiny" style={{ color: 'var(--text-subtle)', textAlign: 'center' }}>
        {m.caption}
      </p>
    </div>
  )
}
