import { useState } from 'react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import Badge from '../components/ui/Badge';
import Reveal from '../components/ui/Reveal';
import { testimonials } from '../content/site';
import { useMeta } from '../lib/useMeta';
import './demo.css';

/**
 * Book a Live Demo — §3.9. The primary conversion page.
 *
 * Two columns: left is the form, right is reassurance. The form asks only what
 * routing and qualification need — nothing else. Consent is explicit and never
 * pre-ticked, and validation never clears a field on error (RACO form rule).
 */

const ROLES = [
  'Head / Deputy Head / SLT',
  'Head of Department / Teacher',
  'Business Manager / Bursar',
  'IT / Data Protection Lead',
  'Other',
];

const CURRICULA = ['Cambridge', 'Edexcel', 'Both', 'Other / Mixed'];

const SIZES = [
  'Under 250 students',
  '250–750 students',
  '750–1,500 students',
  '1,500+ students',
  'Multi-school trust or group',
];

const initialForm = {
  name: '', email: '', school: '', role: '', country: '',
  curriculum: '', size: '', interest: '', consent: false,
};

export default function Demo() {
  useMeta({
    title: 'Book a Live Demo — RacoLearnHub',
    description:
      'A 30-minute personalised walkthrough with a specialist, tailored to your curriculum, your subjects and your goals. No obligation.',
  });

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
    // Clear the error as soon as the user starts fixing it — never on blur alone.
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please tell us your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid work email address.';
    if (!form.school.trim()) next.school = 'Please tell us which school or organisation you’re with.';
    if (!form.role) next.role = 'Please choose the closest role.';
    if (!form.country.trim()) next.country = 'Please tell us your country.';
    if (!form.consent) next.consent = 'We need your consent before we can get in touch.';
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);

    if (Object.keys(found).length > 0) {
      // Move focus to the first problem so keyboard and screen-reader users
      // are taken to it rather than left guessing.
      const firstField = Object.keys(found)[0];
      document.getElementById(firstField)?.focus();
      return;
    }

    setStatus('loading');
    // TODO: POST to CRM / scheduling endpoint, then route to the confirmation
    // page with a calendar invite and a "while you wait" resource (§3.9).
    setTimeout(() => setStatus('success'), 900);
  };

  if (status === 'success') return <DemoConfirmation name={form.name} />;

  return (
    <>
      <Section className="demo" container="none" tone="default">
        <Container>
          <div className="demo__grid">
            {/* ---- Left: the form ------------------------------------- */}
            <Reveal className="demo__form-col">
              <p className="eyebrow"><Icon name="CalendarCheck" size={15} /> Book a live demo</p>
              <h1 className="h2" style={{ marginBlock: 'var(--space-4)' }}>
                See RacoLearnHub with your school’s subjects.
              </h1>
              <p className="lede">
                A 30-minute personalised walkthrough with a specialist. We’ll tailor it to your
                curriculum, your subjects and your goals. No obligation.
              </p>

              <form className="demo__form" onSubmit={onSubmit} noValidate>
                <div className="form-grid">
                  <Field
                    id="name" label="Full name" value={form.name}
                    onChange={update('name')} error={errors.name} autoComplete="name" required
                  />
                  <Field
                    id="email" label="Work email" type="email" value={form.email}
                    onChange={update('email')} error={errors.email} autoComplete="email"
                    inputMode="email" spellCheck={false} autoCapitalize="off" required
                  />
                  <Field
                    id="school" label="School or organisation" value={form.school}
                    onChange={update('school')} error={errors.school} autoComplete="organization"
                    spellCheck={false}
                    className="field--full" required
                  />
                  <SelectField
                    id="role" label="Your role" value={form.role}
                    onChange={update('role')} error={errors.role} options={ROLES} required
                  />
                  <Field
                    id="country" label="Country" value={form.country}
                    onChange={update('country')} error={errors.country} autoComplete="country-name" required
                  />
                  <SelectField
                    id="curriculum" label="Curriculum" value={form.curriculum}
                    onChange={update('curriculum')} options={CURRICULA}
                    hint="So we can show the right course library."
                  />
                  <SelectField
                    id="size" label="Approximate number of students" value={form.size}
                    onChange={update('size')} options={SIZES}
                  />

                  <div className="field field--full">
                    <label className="field__label" htmlFor="interest">
                      What would you like to see? <span className="field__hint">Optional</span>
                    </label>
                    <textarea
                      id="interest" className="textarea" value={form.interest}
                      onChange={update('interest')}
                      autoComplete="off"
                      placeholder="e.g. how Copilot handles Year 11 Chemistry, or what leadership dashboards look like…"
                    />
                  </div>

                  <div className="field field--full">
                    <label className="checkbox" htmlFor="consent">
                      <input
                        id="consent" type="checkbox" checked={form.consent}
                        onChange={update('consent')}
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby={errors.consent ? 'consent-error' : undefined}
                      />
                      <span>
                        I’d like RACO AI Technologies to contact me about this demo. We’ll only use
                        your details to arrange it — see our <a href="/privacy">privacy notice</a>.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="field__error" id="consent-error">
                        <Icon name="CircleAlert" size={14} /> {errors.consent}
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit" size="lg" block loading={status === 'loading'}
                  className="demo__submit"
                >
                  Book my demo
                </Button>

                <p className="tiny" style={{ color: 'var(--text-subtle)', marginTop: 'var(--space-4)' }}>
                  We’ll be in touch within one working day. No newsletter unless you ask for one.
                </p>
              </form>
            </Reveal>

            {/* ---- Right: reassurance --------------------------------- */}
            <Reveal className="demo__aside" delay={0.08}>
              <Card panel>
                <h2 className="h5" style={{ marginBottom: 'var(--space-5)' }}>What to expect</h2>
                <ul className="checklist">
                  {[
                    'Tailored to your subjects and exam board — not a generic tour',
                    'Your questions answered by someone who knows the product',
                    'A clear, no-pressure next step at the end',
                    '30 minutes, on a call you can share with colleagues',
                  ].map((item) => (
                    <li key={item}>
                      <Icon name="Check" size={17} strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="note" style={{ marginTop: 'var(--space-6)' }}>
                  <Icon name="MessageSquare" size={15} />
                  <span>It’s a conversation, not a pitch.</span>
                </div>
              </Card>

              <Card panel>
                <Badge tone="outline" style={{ alignSelf: 'flex-start', marginBottom: 'var(--space-4)' }}>
                  Placeholder — replace before launch
                </Badge>
                <blockquote className="quote" style={{ fontSize: 'var(--step-0)' }}>
                  {testimonials[0].quote}
                </blockquote>
                <p className="attrib__meta" style={{ marginTop: 'var(--space-4)' }}>
                  {testimonials[0].role} · {testimonials[0].school}
                </p>
              </Card>

              {/* Alternative paths for visitors not ready for a form */}
              <Card panel id="overview">
                <h2 className="h5" style={{ marginBottom: 'var(--space-3)' }}>Prefer to explore first?</h2>
                <p className="card__body" style={{ marginBottom: 'var(--space-5)' }}>
                  Not everyone is ready to talk to someone — and that’s fine.
                </p>
                <div className="grid" style={{ gap: 'var(--space-3)' }}>
                  <Button variant="secondary" icon="Play" block>Watch the 2-min overview</Button>
                  <Button to="/platform/simulations" variant="secondary" icon="Atom" block>
                    Try a live simulation
                  </Button>
                  <Button to="/contact" variant="ghost" icon="Mail" block>
                    Email us instead
                  </Button>
                </div>
              </Card>

              <div className="demo__badges">
                {['GDPR compliant', 'UK/EU hosted', 'WCAG 2.2 AA', 'No data training'].map((b) => (
                  <span className="footer__badge" key={b} style={{ borderColor: 'var(--border)', color: 'var(--text-subtle)' }}>
                    <Icon name="ShieldCheck" size={13} /> {b}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}

/* ---------------------------------------------------------------- Fields */

function Field({ id, label, error, hint, className = '', required, ...rest }) {
  return (
    <div className={`field ${className}`}>
      <label className="field__label" htmlFor={id}>
        {label} {!required && <span className="field__hint">Optional</span>}
      </label>
      <input
        id={id}
        name={id}
        className="input"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        {...rest}
      />
      {hint && !error && <p className="field__hint" id={`${id}-hint`}>{hint}</p>}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          <Icon name="CircleAlert" size={14} /> {error}
        </p>
      )}
    </div>
  );
}

function SelectField({ id, label, options, error, hint, required, ...rest }) {
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label} {!required && <span className="field__hint">Optional</span>}
      </label>
      <div className="select-wrap">
        <select
          id={id}
          name={id}
          className="select"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          {...rest}
        >
          <option value="">Please choose…</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <Icon name="ChevronDown" size={16} className="select-wrap__caret" />
      </div>
      {hint && !error && <p className="field__hint" id={`${id}-hint`}>{hint}</p>}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          <Icon name="CircleAlert" size={14} /> {error}
        </p>
      )}
    </div>
  );
}

/** Post-submit confirmation with a "while you wait" resource (§3.9). */
function DemoConfirmation({ name }) {
  return (
    <Section>
      <Container size="narrow">
        <Card panel style={{ textAlign: 'center', alignItems: 'center', padding: 'var(--space-10) var(--space-6)' }}>
          <span className="icon-tile icon-tile--trust" style={{ width: 64, height: 64 }}>
            <Icon name="CalendarCheck" size={30} />
          </span>
          <h1 className="h3" role="status">Thanks{name ? `, ${name.split(' ')[0]}` : ''} — you’re booked in.</h1>
          <p className="lede center" style={{ marginTop: 'var(--space-4)' }}>
            A specialist will confirm your slot within one working day, and you’ll get a calendar
            invite you can forward to colleagues.
          </p>

          <div className="cluster" style={{ justifyContent: 'center', marginTop: 'var(--space-8)' }}>
            <Button icon="Download">Schools brochure (PDF)</Button>
            <Button to="/platform/simulations" variant="secondary" icon="Atom">Try a simulation</Button>
            <Button to="/resources/case-studies" variant="ghost">Read a case study</Button>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
