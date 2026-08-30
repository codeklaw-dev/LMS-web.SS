import { useSearchParams } from 'react-router-dom';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Icon from '../../components/ui/Icon';
import Reveal from '../../components/ui/Reveal';
import SectionHead from '../../components/ui/SectionHead';
import PageHero from '../../components/blocks/PageHero';
import CtaBand from '../../components/blocks/CtaBand';
import { useMeta } from '../../lib/useMeta';

/**
 * Resources hub and its sub-pages — §3.7.
 *
 * These are the content engine (Phase 3 of the roadmap) and will be
 * CMS-driven. The skeleton renders the card grids, filters and empty states
 * against placeholder data so the shape is settled before content arrives.
 */

const CASE_STUDIES = [
  { title: 'From five tools to one, in a single term', school: 'Northgate International', country: 'United Kingdom', curriculum: 'Cambridge', type: 'Independent', stat: '6.5h saved per teacher weekly' },
  { title: 'Copilot in a multilingual science department', school: 'Al Noor Academy', country: 'United Arab Emirates', curriculum: 'Edexcel', type: 'International', stat: '+18% assessment completion' },
  { title: 'One platform across nine schools', school: 'Riverbank Trust', country: 'United Kingdom', curriculum: 'Both', type: 'Trust', stat: '9 schools, 1 contract' },
];

const POSTS = [
  { title: 'What an AI tutor should and shouldn’t do in a classroom', category: 'AI in education', read: '6 min' },
  { title: 'Differentiation without the Sunday evening', category: 'Teaching & learning', read: '5 min' },
  { title: 'The questions your DPO will ask about an AI platform', category: 'Leadership', read: '8 min' },
  { title: 'Why we ground every Copilot answer in your own courses', category: 'Product updates', read: '4 min' },
  { title: 'Consolidating EdTech: a business case template for SLT', category: 'Leadership', read: '7 min' },
  { title: 'Simulations that actually change what students understand', category: 'Teaching & learning', read: '5 min' },
];

const EVENTS = [
  { title: 'AI tutors in the classroom', date: 'Live · monthly', status: 'Upcoming', body: 'What changes for teachers when every student has a tutor — and what doesn’t.' },
  { title: 'GDPR for school platforms', date: 'On demand', status: 'On demand', body: 'A walkthrough for data protection leads evaluating an AI learning platform.' },
  { title: 'Building a business case for consolidation', date: 'On demand', status: 'On demand', body: 'For business managers and bursars costing a platform move.' },
];

export function ResourcesHub() {
  useMeta({
    title: 'Resources — Insights, case studies and webinars for schools | RacoLearnHub',
    description:
      'Case studies, insights for school leaders, webinars and the help centre — everything schools use to evaluate RacoLearnHub.',
  });

  const sections = [
    { icon: 'Quote', title: 'Case Studies', body: 'Schools, in their own words — challenge, solution, results.', href: '/resources/case-studies' },
    { icon: 'PenLine', title: 'Blog / Insights', body: 'AI in education, teaching & learning, leadership and product updates.', href: '/resources/blog' },
    { icon: 'Video', title: 'Webinars & Events', body: 'Live and on-demand sessions for leaders, teachers and IT.', href: '/resources/events' },
    { icon: 'LifeBuoy', title: 'Help Centre', body: 'Searchable documentation for schools already using the platform.', href: '/help' },
  ];

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Everything you need to make the case."
        sub="Evidence from schools, practical insight for staff, and the documentation your IT and finance colleagues will ask for."
        crumbs={[{ label: 'Resources' }]}
        primary={{ label: 'Download the schools brochure', href: '/resources' }}
        secondary={{ label: 'Book a Live Demo', href: '/demo' }}
      />

      <Section>
        <div className="grid grid--4">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <Card to={s.href} style={{ height: '100%' }}>
                <span className="icon-tile"><Icon name={s.icon} size={22} /></span>
                <h2 className="card__title" style={{ fontSize: 'var(--step-1)' }}>{s.title}</h2>
                <p className="card__body">{s.body}</p>
                <span className="card__footer link-arrow">
                  Browse <Icon name="ArrowRight" size={15} className="icon-flip" />
                </span>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="inset">
        <div className="grid grid--2" style={{ gap: 'clamp(2rem, 1rem + 4vw, 4rem)', alignItems: 'center' }}>
          <Reveal>
            <p className="eyebrow">Brochure</p>
            <h2 className="h3" style={{ marginBlock: 'var(--space-4)' }}>The schools brochure</h2>
            <p className="body-muted">
              Twelve pages you can forward to a colleague or take into a governors’ meeting:
              what the platform does, what it replaces, what it costs to run, and how rollout works.
            </p>
            <div className="cluster" style={{ marginTop: 'var(--space-7)' }}>
              <Button icon="Download">Download the PDF</Button>
              <Button to="/demo" variant="secondary">Book a demo instead</Button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <Card panel style={{ aspectRatio: '4 / 3', justifyContent: 'center', alignItems: 'center' }}>
              <span className="icon-tile" style={{ width: 64, height: 64 }}>
                <Icon name="FileText" size={30} />
              </span>
              <p className="card__body center">Brochure preview — asset to be added in the brand pass.</p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

/** Case studies — filterable card grid (§3.7). */
export function CaseStudies() {
  useMeta({
    title: 'Case Studies — Schools, in their own words | RacoLearnHub',
    description: 'How schools and trusts use RacoLearnHub: the challenge, the solution and the results.',
  });

  // Filter state lives in the URL so a filtered view can be shared, bookmarked
  // and reached with the back button — the same reason tabs and pagination
  // belong in query params rather than component state.
  const [params, setParams] = useSearchParams();
  const filters = ['All', 'Cambridge', 'Edexcel', 'Trust', 'International'];
  const requested = params.get('filter');
  const filter = filters.includes(requested) ? requested : 'All';

  const setFilter = (next) => {
    const nextParams = new URLSearchParams(params);
    if (next === 'All') nextParams.delete('filter');
    else nextParams.set('filter', next);
    setParams(nextParams, { replace: true });
  };

  const visible = CASE_STUDIES.filter((cs) => {
    if (filter === 'All') return true;
    // A school teaching both boards matches either board filter, but must not
    // slip through a school-type filter it does not belong to.
    if (filter === 'Cambridge' || filter === 'Edexcel') {
      return cs.curriculum === filter || cs.curriculum === 'Both';
    }
    return cs.type === filter;
  });

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Schools, in their own words."
        sub="Challenge, solution, results. Filter by curriculum, country or school type."
        crumbs={[{ label: 'Resources', href: '/resources' }, { label: 'Case studies' }]}
        secondary={{ label: 'Book your own demo', href: '/demo' }}
      />

      <Section>
        <div className="cluster" style={{ marginBottom: 'var(--space-8)' }} role="group" aria-label="Filter case studies">
          {filters.map((f) => (
            <Button
              key={f}
              size="sm"
              variant={filter === f ? 'primary' : 'secondary'}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>

        {visible.length === 0 ? (
          <Card panel style={{ alignItems: 'center', textAlign: 'center', padding: 'var(--space-10)' }}>
            <span className="icon-tile"><Icon name="SearchX" size={22} /></span>
            <h2 className="card__title">No case studies match that filter yet</h2>
            <p className="card__body">Try another filter, or ask us for a reference school like yours.</p>
            <Button to="/contact" variant="secondary" className="card__footer">Ask for a reference</Button>
          </Card>
        ) : (
          <div className="grid grid--3">
            {visible.map((cs, i) => (
              <Reveal key={cs.title} delay={i * 0.05}>
                <Card to="/resources/case-studies" style={{ height: '100%' }}>
                  <Badge tone="outline" style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-4)' }}>
                    Placeholder
                  </Badge>
                  <h2 className="card__title" style={{ fontSize: 'var(--step-1)' }}>{cs.title}</h2>
                  <p className="card__body">{cs.school} · {cs.country} · {cs.curriculum}</p>
                  <p className="stat-value card__footer" style={{ fontSize: 'var(--step-2)' }}>{cs.stat}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      <CtaBand title="Want a school like yours to talk to?" sub="We’ll introduce you to a reference school on a similar curriculum, at a similar size." />
    </>
  );
}

/** Blog / insights index (§3.7). */
export function Blog() {
  useMeta({
    title: 'Insights for modern schools | RacoLearnHub',
    description: 'AI in education, teaching & learning, leadership and product updates from RACO AI Technologies.',
  });

  const categories = ['AI in education', 'Teaching & learning', 'Leadership', 'Product updates'];

  return (
    <>
      <PageHero
        eyebrow="Blog / Insights"
        title="Insights for modern schools."
        sub="Practical writing for the people making decisions about AI in education — and the people living with those decisions."
        crumbs={[{ label: 'Resources', href: '/resources' }, { label: 'Blog' }]}
        primary={null}
      />

      <Section>
        <div className="cluster" style={{ marginBottom: 'var(--space-8)' }}>
          {categories.map((c) => <Badge key={c} tone="outline">{c}</Badge>)}
        </div>

        <div className="grid grid--3">
          {POSTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.04}>
              <Card to="/resources/blog" style={{ height: '100%' }}>
                <p className="eyebrow" style={{ fontSize: 'var(--step--2)' }}>{post.category}</p>
                <h2 className="card__title" style={{ fontSize: 'var(--step-1)', marginTop: 'var(--space-3)' }}>
                  {post.title}
                </h2>
                <p className="card__body card__footer">{post.read} read</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Reading is fine. Seeing it is better."
        sub="Thirty minutes with a specialist, using your subjects."
      />
    </>
  );
}

/** Webinars & events — registration doubles as lead capture (§3.7). */
export function Events() {
  useMeta({
    title: 'Webinars & Events | RacoLearnHub',
    description: 'Live and on-demand webinars for school leaders, teachers and data protection leads.',
  });

  return (
    <>
      <PageHero
        eyebrow="Webinars & events"
        title="Come and ask us hard questions."
        sub="Live sessions and on-demand recordings for leaders, teachers and IT — including the GDPR one your DPO will want."
        crumbs={[{ label: 'Resources', href: '/resources' }, { label: 'Events' }]}
        primary={null}
      />

      <Section>
        <div className="grid grid--3">
          {EVENTS.map((event, i) => (
            <Reveal key={event.title} delay={i * 0.05}>
              <Card panel style={{ height: '100%' }}>
                <Badge tone={event.status === 'Upcoming' ? 'warm' : 'outline'} style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-4)' }}>
                  {event.status}
                </Badge>
                <h2 className="card__title" style={{ fontSize: 'var(--step-1)' }}>{event.title}</h2>
                <p className="card__body">{event.body}</p>
                <p className="tiny" style={{ color: 'var(--text-subtle)', marginTop: 'var(--space-4)' }}>{event.date}</p>
                <div className="card__footer">
                  <Button variant="secondary" block>
                    {event.status === 'Upcoming' ? 'Register' : 'Watch on demand'}
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

/** Help Centre — reassures prospects that support is real (§3.7). */
export function HelpCentre() {
  useMeta({
    title: 'Help Centre | RacoLearnHub',
    description: 'Searchable documentation for schools using RacoLearnHub.',
  });

  const topics = [
    { icon: 'Rocket', title: 'Getting started', count: 18 },
    { icon: 'Users', title: 'Managing users & roles', count: 24 },
    { icon: 'BookOpen', title: 'Courses & content', count: 31 },
    { icon: 'Sparkles', title: 'AI Copilot', count: 15 },
    { icon: 'CreditCard', title: 'Payments & billing', count: 12 },
    { icon: 'ShieldCheck', title: 'Safeguarding & privacy', count: 9 },
  ];

  return (
    <>
      <PageHero
        eyebrow="Help Centre"
        title="Answers, not ticket queues."
        sub="Searchable documentation for staff and students already using RacoLearnHub."
        crumbs={[{ label: 'Help Centre' }]}
        primary={null}
      >
        <form
          className="cluster"
          style={{ marginTop: 'var(--space-7)', maxWidth: 520 }}
          onSubmit={(e) => e.preventDefault()}
          role="search"
        >
          <label className="visually-hidden" htmlFor="help-search">Search the help centre</label>
          <input id="help-search" className="input" type="search" placeholder="Search help articles…" style={{ flex: 1 }} />
          <Button type="submit" icon="Search">Search</Button>
        </form>
      </PageHero>

      <Section>
        <SectionHead eyebrow="Browse" title="Popular topics" />
        <div className="grid grid--3">
          {topics.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.04}>
              <Card to="/help" style={{ height: '100%' }}>
                <span className="icon-tile"><Icon name={t.icon} size={22} /></span>
                <h2 className="card__title" style={{ fontSize: 'var(--step-1)' }}>{t.title}</h2>
                <p className="card__body">{t.count} articles</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="inset" tight>
        <Card panel style={{ alignItems: 'center', textAlign: 'center', padding: 'var(--space-9)' }}>
          <h2 className="h4">Can’t find it?</h2>
          <p className="body-muted center" style={{ marginTop: 'var(--space-3)' }}>
            Support is staffed by people who know the product and the school year.
          </p>
          <div className="cluster" style={{ justifyContent: 'center', marginTop: 'var(--space-6)' }}>
            <Button to="/contact">Contact support</Button>
          </div>
        </Card>
      </Section>
    </>
  );
}
