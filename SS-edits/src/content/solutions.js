/**
 * Persona pages — Blueprint §3.3. Each maps features to the outcomes that
 * persona is actually buying, in their language.
 */

export const solutionPages = {
  leaders: {
    slug: 'leaders',
    eyebrow: 'For School Leaders',
    name: 'For School Leaders',
    h1: 'Raise attainment. Save staff time. See everything.',
    sub: 'One accountable platform that lifts outcomes, gives teachers their time back, and gives you a live view of your whole school.',
    cta: { label: 'Book a Live Demo', href: '/demo' },
    stats: [
      { value: '6.5h', label: 'saved per teacher, per week' },
      { value: '4→1', label: 'platforms consolidated' },
      { value: '99.9%', label: 'uptime' },
    ],
    sections: [
      { title: 'The leadership case', body: 'Attainment, efficiency and oversight in one business case: better outcomes for students, hours back for staff, and a single accountable supplier instead of five.', points: ['Measurable attainment and engagement data', 'Staff time recovered from admin', 'One contract, one supplier, one bill'] },
      { title: 'Live analytics', body: 'Whole-school dashboards updated continuously — by department, year group and cohort — so governors’ reports write themselves.', points: ['Cross-department comparison', 'Cohort and intervention tracking', 'Exportable for governors and inspection'] },
      { title: 'Safeguarding & compliance', body: 'GDPR-aligned, UK/EU hosted, with safeguarding controls and audit trails that satisfy your DSL and your DPO.', points: ['Safeguarding alerts to named staff', 'Full administrative audit trail', 'Security pack for procurement'] },
      { title: 'Consolidate tools & cost', body: 'One platform retires the tutoring app, the video library, the quiz tool and the fee spreadsheet — which is usually where the budget comes from.', points: ['Replaces multiple subscriptions', 'Single procurement process', 'Transparent per-student pricing'] },
      { title: 'Rollout & support', body: 'A named partner through onboarding, staff training built into the plan, and support that answers before the lesson is over.', points: ['Structured rollout plan', 'Staff training included', 'Named customer success contact'] },
    ],
    faq: [
      { q: 'How long does rollout take?', a: 'Most single schools are teaching on the platform within a half-term: branding and course import first, then staff training, then students.' },
      { q: 'What does this replace?', a: 'Typically a tutoring or homework app, a video/content library, a quiz or assessment tool, and a fee-tracking spreadsheet — sometimes an LMS as well.' },
    ],
  },

  teachers: {
    slug: 'teachers',
    eyebrow: 'For Teachers',
    name: 'For Teachers',
    h1: 'Spend less time on admin. More time teaching.',
    sub: 'Curriculum-ready content, AI that differentiates for you, and a tutor that answers the questions you can’t get to.',
    cta: { label: 'See a teacher demo', href: '/demo' },
    stats: [
      { value: '6.5h', label: 'saved per week' },
      { value: '3 min', label: 'to build an activity' },
      { value: '24/7', label: 'student support' },
    ],
    sections: [
      { title: 'A week in the life — before and after', body: 'Before: three evenings on resources, a weekend on differentiation, and a queue of students you never reached. After: content that is already aligned, differentiation generated, and questions answered while you sleep.', points: ['Resources ready, not built from scratch', 'Differentiation generated per learner', 'The quiet questions finally get asked'] },
      { title: 'Differentiation made easy', body: 'One lesson, three levels, automatically — foundation, core and extension generated from the same material and assigned in a click.', points: ['Automatic level variants', 'Assign per student or per group', 'Adjust anything before it goes out'] },
      { title: 'Copilot as your teaching assistant', body: 'Copilot handles the twentieth "can you explain that again?" so you can spend the lesson on the students who need you in the room.', points: ['Answers grounded in your material', 'Visible to you, always', 'Shows what the class is stuck on'] },
      { title: 'Build & share in minutes', body: 'Playgrounds turns a topic description into an interactive activity, ready to review and share to your class before the bell.', points: ['Prompt to activity in minutes', 'Department library to share into', 'Reusable next year'] },
      { title: 'Track your class', body: 'One screen showing who is thriving, who is stuck, and which misconception the whole group shares.', points: ['Class heatmap by topic', 'Individual drill-down', 'Evidence ready for parents’ evening'] },
    ],
    faq: [
      { q: 'How much training will I need?', a: 'Most teachers are running lessons after a single session. The platform is designed to be usable before it is mastered.' },
      { q: 'Does the AI mark my students’ work?', a: 'It drafts and suggests; you decide. Professional judgement stays with the teacher, by design.' },
    ],
  },

  students: {
    slug: 'students',
    eyebrow: 'For Students & Parents',
    name: 'For Students & Parents',
    h1: 'Help whenever you need it, in your language.',
    sub: 'A personal AI tutor, interactive lessons, and a place to learn that works on any device.',
    cta: { label: 'Ask your school about RacoLearnHub', href: '/contact' },
    stats: [
      { value: '24/7', label: 'always available' },
      { value: '20+', label: 'languages' },
      { value: 'Any', label: 'device' },
    ],
    sections: [
      { title: 'Learn your way', body: 'Read it, watch it, try it or ask about it. The same topic, in whichever form finally makes it click.', points: ['Text, video, audio and interactive', 'Work at your own pace', 'Pick up where you left off, on any device'] },
      { title: 'Never stuck for long', body: 'Copilot explains things as many times as you need, in as many ways as it takes — without anyone sighing.', points: ['Ask anything, any time', 'Step-by-step explanations', 'Ask in your home language'] },
      { title: 'Fun, hands-on simulations', body: 'Drop a ball, build a circuit, balance an equation. Some things you only understand once you have broken them.', points: ['20+ interactive simulations', 'Works on a phone', 'Explore, don’t just revise'] },
      { title: 'For parents: visibility & peace of mind', body: 'See what your child is learning and how they are getting on — and know the platform is monitored, age-appropriate and run by their school.', points: ['Progress visible to parents', 'School-controlled and monitored', 'Available in your language'] },
      { title: 'Accessible & multilingual', body: 'Built to WCAG 2.2 AA, keyboard-operable, screen-reader friendly, and available in 20+ languages including right-to-left.', points: ['Screen-reader and keyboard support', 'Adjustable text and contrast', 'Right-to-left languages supported'] },
    ],
    faq: [
      { q: 'Can I sign up myself?', a: 'RacoLearnHub is provided by schools rather than sold to families directly — ask your school whether they use it, or point them our way.' },
      { q: 'Is it safe?', a: 'Conversations are monitored, content is age-appropriate, and your school controls the settings. Student data is never used to train AI models.' },
    ],
  },

  trusts: {
    slug: 'trusts',
    eyebrow: 'For Trusts & School Groups',
    name: 'For Trusts & School Groups',
    h1: 'One platform across every school in your trust.',
    sub: 'Standardise quality, compare across schools, and buy once — with per-school branding and central oversight.',
    cta: { label: 'Talk to our schools team', href: '/contact' },
    stats: [
      { value: '1', label: 'contract, many schools' },
      { value: 'Per-school', label: 'branding retained' },
      { value: 'Central', label: 'oversight & reporting' },
    ],
    sections: [
      { title: 'Central + per-school control', body: 'Set standards centrally, let each school keep its own identity. Shared curriculum, separate front doors.', points: ['Trust-level policy and defaults', 'Per-school branding and domains', 'Shared curriculum libraries'] },
      { title: 'Cross-school analytics', body: 'Compare attainment, engagement and adoption across your schools — and see which practice is worth spreading.', points: ['Like-for-like school comparison', 'Trust-wide attainment trends', 'Adoption and engagement tracking'] },
      { title: 'Procurement made simple', body: 'One contract, one security review, one invoice — with the documentation your procurement team asks for up front.', points: ['Single contract and DPA', 'Security pack for review', 'Consolidated invoicing'] },
      { title: 'Volume pricing', body: 'Pricing that reflects the size of your estate, with predictable per-student economics as schools join.', points: ['Volume-based per-student pricing', 'Predictable growth model', 'Multi-year options'] },
      { title: 'Dedicated partnership', body: 'A named team, a rollout plan per school, and an SLA that matches the scale of the commitment.', points: ['Named customer success team', 'Per-school rollout planning', 'Contractual SLA'] },
    ],
    faq: [
      { q: 'Can schools join in phases?', a: 'Yes — most trusts start with two or three schools, prove the model, then extend across the estate at the start of an academic year.' },
      { q: 'Can each school keep its own branding?', a: 'Yes. Central standards and per-school identity are not in tension here: schools keep their own look, domain and voice.' },
    ],
  },
};

export const solutionOrder = ['leaders', 'teachers', 'students', 'trusts'];

/** Curriculum pages — §3.4. Same template, board-specific copy. */
export const curriculumPages = {
  cambridge: {
    slug: 'cambridge',
    board: 'Cambridge',
    fullName: 'Cambridge International',
    h1: 'Built for the Cambridge classroom.',
    sub: 'Courses, simulations and assessments mapped to Cambridge specifications — so learning lines up with what students are examined on.',
    levels: ['Cambridge Lower Secondary', 'Cambridge IGCSE', 'Cambridge International AS & A Level'],
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English', 'Economics', 'Business Studies'],
  },
  edexcel: {
    slug: 'edexcel',
    board: 'Edexcel',
    fullName: 'Pearson Edexcel',
    h1: 'Built for the Edexcel classroom.',
    sub: 'Courses, simulations and assessments mapped to Edexcel specifications — so learning lines up with what students are examined on.',
    levels: ['Edexcel International GCSE', 'Edexcel GCSE', 'Edexcel International A Level', 'Edexcel A Level'],
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English Language', 'Economics', 'Business'],
  },
};
