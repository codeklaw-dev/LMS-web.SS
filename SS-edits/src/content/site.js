/**
 * Site-wide constants and shared content. Blueprint §1, §2, §4.8.
 * All copy lives here so it can be lifted into a CMS / translation layer
 * without touching component code.
 */

export const site = {
  name: 'RacoLearnHub',
  parent: 'RACO AI Technologies',
  tagline: 'The AI-native learning platform for schools',
  description:
    'RacoLearnHub brings curriculum-aligned courses, interactive simulations and a 24/7 AI tutor into one platform — branded as your school, in over 20 languages.',
  primaryCta: { label: 'Book a Live Demo', href: '/demo' },
  secondaryCta: { label: 'Watch the 2-min overview', href: '/demo#overview' },
  legalName: 'RACO AI Technologies Ltd',
  address: 'Slough, United Kingdom',
  engineering: 'Engineering in Dhaka, Bangladesh',
  parentSite: 'https://racoai.io',
};

/** §2.4 Global trust bar */
export const trustBar = {
  headline: 'Trusted by schools teaching Cambridge & Edexcel across 12 countries.',
  proofStats: [
    { value: '20+', label: 'languages, including RTL' },
    { value: '99.9%', label: 'platform uptime' },
    { value: 'GDPR', label: 'UK/EU data residency' },
    { value: 'WCAG 2.2 AA', label: 'accessible by design' },
  ],
  boards: ['Cambridge International', 'Pearson Edexcel'],
  // Placeholder school names — replace with reference schools before launch.
  schools: [
    'Northgate International',
    'St. Aldate’s Academy',
    'Riverbank Trust',
    'Al Noor Academy',
    'Meridian College',
    'Kingsway High',
  ],
};

/** §3.1 Section 4 — The platform at a glance */
export const capabilities = [
  {
    id: 'ai-copilot',
    icon: 'Sparkles',
    name: 'AI Copilot',
    oneLiner: 'A patient personal tutor for every student, 24/7, in their language.',
    href: '/platform/ai-copilot',
    tone: 'brand',
  },
  {
    id: 'simulations',
    icon: 'Atom',
    name: 'Interactive Simulations',
    oneLiner: 'Hands-on physics, chemistry, maths & biology that make abstract ideas click.',
    href: '/platform/simulations',
    tone: 'trust',
  },
  {
    id: 'courses',
    icon: 'BookOpen',
    name: 'Courses & Curriculum',
    oneLiner: 'Ready-to-teach content aligned to Cambridge & Edexcel.',
    href: '/platform/courses',
    tone: 'brand',
  },
  {
    id: 'playgrounds',
    icon: 'Blocks',
    name: 'Playgrounds',
    oneLiner: 'Generate interactive activities for any topic in minutes with AI.',
    href: '/platform/playgrounds',
    tone: 'warm',
  },
  {
    id: 'analytics',
    icon: 'LineChart',
    name: 'Progress & Analytics',
    oneLiner: 'See every learner’s journey — and prove impact with certificates.',
    href: '/platform/analytics',
    tone: 'trust',
  },
  {
    id: 'white-label',
    icon: 'Palette',
    name: 'Your Brand',
    oneLiner: 'White-label the whole platform as your school, on your domain.',
    href: '/platform/white-label',
    tone: 'warm',
  },
];

/** §1.4 Value pillars */
export const valuePillars = [
  {
    pillar: 'Curriculum-aligned',
    promise: 'Built around Cambridge & Edexcel, not bolted on.',
    proof: 'Course library, exam-board pages, learning objectives, past-paper alignment.',
  },
  {
    pillar: 'AI that teaches',
    promise: 'A personal AI tutor (Copilot) plus AI-generated Playgrounds and simulations.',
    proof: 'Copilot demo, 20+ live PhET simulations, Playgrounds explainer.',
  },
  {
    pillar: 'Your brand, your school',
    promise: 'Fully white-label — your name, your colours, your domain.',
    proof: 'Branding showcase, multi-language (20+), single sign-on.',
  },
  {
    pillar: 'Safe & accountable',
    promise: 'GDPR, safeguarding and leadership analytics you can trust.',
    proof: 'Security & compliance page, dashboards, certificates, audit trail.',
  },
];

/** §3.1 Section 3 — The problem (empathy) */
export const painPoints = [
  {
    icon: 'Files',
    title: 'Teachers buried in admin',
    body: 'Lesson prep, differentiation, marking and chasing — hours that should belong to teaching, or to going home.',
  },
  {
    icon: 'UserMinus',
    title: 'Students falling through the gaps',
    body: 'The learner who did not ask the question in class has nowhere to ask it afterwards. So they stay behind.',
  },
  {
    icon: 'EyeOff',
    title: 'Leaders flying blind',
    body: 'Five tools, five dashboards, no single view of attainment, engagement or safeguarding across the school.',
  },
];

/** §3.1 Section 7 — Outcomes by role */
export const personas = [
  {
    id: 'leaders',
    title: 'For Leaders',
    points: [
      'One accountable platform',
      'Live insight into attainment',
      'Safeguarding built in',
    ],
    cta: { label: 'Explore for Leaders', href: '/solutions/leaders' },
    icon: 'Building2',
  },
  {
    id: 'teachers',
    title: 'For Teachers',
    points: [
      'Hours back each week',
      'Differentiation done for you',
      'Curriculum-ready content',
    ],
    cta: { label: 'Explore for Teachers', href: '/solutions/teachers' },
    icon: 'GraduationCap',
  },
  {
    id: 'students',
    title: 'For Students',
    points: [
      'A tutor in your pocket',
      'Engaging lessons',
      'Learning in your own language',
    ],
    cta: { label: 'Explore for Students', href: '/solutions/students' },
    icon: 'Users',
  },
];

/** §3.1 Section 12 — How it works */
export const howItWorks = [
  {
    step: '01',
    title: 'Book a demo',
    body: 'We tailor it to your subjects, your exam board and the outcomes your leadership team cares about.',
  },
  {
    step: '02',
    title: 'Set up & brand',
    body: 'We import your courses and apply your identity — your name, colours and domain — before staff ever log in.',
  },
  {
    step: '03',
    title: 'Launch & support',
    body: 'Training for staff, help for students, and a named partner on hand through the first term and beyond.',
  },
];

/** §3.1 Section 11 — Social proof. PLACEHOLDER quotes: replace before launch. */
export const testimonials = [
  {
    quote:
      'We replaced four subscriptions with one platform that actually looks like our school. The staff noticed in week one; the governors noticed in term one.',
    name: 'Placeholder Name',
    role: 'Head Teacher',
    school: 'Northgate International',
    country: 'United Kingdom',
    placeholder: true,
  },
  {
    quote:
      'Copilot answers the questions I never had time for. My Year 10 group arrives already having had the explanation twice — in their own language.',
    name: 'Placeholder Name',
    role: 'Head of Science',
    school: 'Al Noor Academy',
    country: 'United Arab Emirates',
    placeholder: true,
  },
];

export const featuredCaseStudy = {
  eyebrow: 'Case study',
  title: 'From five tools to one, in a single term',
  body:
    'A 900-student Cambridge school consolidated its tutoring app, video library, quiz tool and fee spreadsheet into RacoLearnHub — and gave teaching staff their evenings back.',
  stats: [
    { value: '6.5h', label: 'saved per teacher, per week' },
    { value: '4→1', label: 'platforms retired' },
    { value: '+18%', label: 'assessment completion' },
  ],
  href: '/resources/case-studies',
  placeholder: true,
};

/** §3.6 Pricing — illustrative tiers, confirm commercials before launch. */
export const pricingTiers = [
  {
    id: 'essentials',
    name: 'Essentials',
    forWhom: 'Single schools getting started',
    summary: 'Everything a school needs to teach, brand and measure from day one.',
    includes: [
      'Curriculum-aligned course library',
      'Interactive simulations',
      'AI Copilot for every student',
      'White-label branding & your domain',
      'Core progress analytics',
      'Email support',
    ],
    cta: { label: 'Book a demo', href: '/demo' },
  },
  {
    id: 'professional',
    name: 'Professional',
    badge: 'Most popular',
    forWhom: 'Schools going all-in',
    summary: 'The full platform — including Playgrounds, communities, payments and SSO.',
    includes: [
      'Everything in Essentials',
      'AI Playgrounds',
      'Class & subject communities',
      'Payments & fee administration',
      'Advanced leadership analytics',
      'Single sign-on (SSO)',
      'Priority support & onboarding',
    ],
    featured: true,
    cta: { label: 'Book a demo', href: '/demo' },
  },
  {
    id: 'enterprise',
    name: 'Enterprise / Trust',
    forWhom: 'Trusts & school groups',
    summary: 'Central oversight with per-school branding, plus a dedicated partnership.',
    includes: [
      'Everything in Professional',
      'Multi-school central administration',
      'Cross-school analytics',
      'Custom integrations & data exports',
      'Dedicated customer success',
      'Contractual SLA',
    ],
    cta: { label: 'Talk to sales', href: '/contact' },
  },
];

export const pricingFaq = [
  {
    q: 'How is RacoLearnHub priced?',
    a: 'Simple per-student or per-school plans, billed annually. Because one platform replaces several, it often costs less than the tools it retires. Exact commercials are confirmed on your demo call.',
  },
  {
    q: 'How long is the contract?',
    a: 'Annual terms aligned to your academic year, with multi-year options for trusts. We would rather earn the renewal than lock you in.',
  },
  {
    q: 'Can we run a pilot first?',
    a: 'Yes. Most schools start with a department or a year group for a term, then extend once the results are in front of leadership.',
  },
  {
    q: 'Do you support grant or trust funding?',
    a: 'We provide the documentation procurement teams need — security pack, data-processing terms, pricing schedule and ROI summary.',
  },
  {
    q: 'Is there a checkout?',
    a: 'No. Every plan routes to a conversation, because the right configuration depends on your curriculum, size and existing tools.',
  },
];

/** §3.1 Section 8 — Curriculum alignment */
export const examBoards = [
  {
    id: 'cambridge',
    name: 'Cambridge',
    fullName: 'Cambridge International',
    href: '/curriculum/cambridge',
    body: 'Courses, simulations and assessments mapped to Cambridge specifications, from Lower Secondary through IGCSE and A Level.',
  },
  {
    id: 'edexcel',
    name: 'Edexcel',
    fullName: 'Pearson Edexcel',
    href: '/curriculum/edexcel',
    body: 'Content and pathways aligned to Edexcel assessment objectives, with past-paper practice built into every course.',
  },
];

/** §3.5 Security & Compliance pillars */
export const securityPillars = [
  {
    icon: 'ShieldCheck',
    title: 'Data protection & GDPR',
    body: 'UK GDPR and EU GDPR aligned, with a data-processing agreement, records of processing and a named DPO contact.',
  },
  {
    icon: 'Server',
    title: 'Where your data lives',
    body: 'Hosted in the UK/EU with documented residency. Regional hosting available for international schools on request.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Safeguarding & child safety',
    body: 'Age-appropriate AI, monitored communities, keyword flagging and teacher controls across every student-facing surface.',
  },
  {
    icon: 'KeyRound',
    title: 'Access & single sign-on',
    body: 'SSO via Microsoft Entra ID and Google Workspace, role-based permissions and a full administrative audit trail.',
  },
  {
    icon: 'Accessibility',
    title: 'Accessibility',
    body: 'Targeting WCAG 2.2 AA across product and marketing site, with a published accessibility statement.',
  },
  {
    icon: 'Activity',
    title: 'Uptime & reliability',
    body: '99.9% uptime target, monitored around the clock, with a public status page and incident communications.',
  },
  {
    icon: 'BrainCircuit',
    title: 'AI responsibility',
    body: 'No training on your school’s data. Copilot answers are grounded in your course material, not the open internet.',
  },
  {
    icon: 'FileCheck2',
    title: 'Certifications & policies',
    body: 'Downloadable security pack: policies, sub-processor list, penetration-test summary and compliance posture.',
  },
];

/** Language switcher — mirrors the product's 20+ locales (§4.8) */
export const locales = [
  { code: 'en-GB', label: 'English (UK)', native: 'English', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', native: 'العربية', dir: 'rtl' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা', dir: 'ltr' },
  { code: 'de', label: 'German', native: 'Deutsch', dir: 'ltr' },
  { code: 'es', label: 'Spanish', native: 'Español', dir: 'ltr' },
  { code: 'fr', label: 'French', native: 'Français', dir: 'ltr' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी', dir: 'ltr' },
  { code: 'id', label: 'Indonesian', native: 'Bahasa Indonesia', dir: 'ltr' },
  { code: 'it', label: 'Italian', native: 'Italiano', dir: 'ltr' },
  { code: 'ms', label: 'Malay', native: 'Bahasa Melayu', dir: 'ltr' },
  { code: 'nl', label: 'Dutch', native: 'Nederlands', dir: 'ltr' },
  { code: 'pt', label: 'Portuguese', native: 'Português', dir: 'ltr' },
  { code: 'sw', label: 'Swahili', native: 'Kiswahili', dir: 'ltr' },
  { code: 'tr', label: 'Turkish', native: 'Türkçe', dir: 'ltr' },
  { code: 'ur', label: 'Urdu', native: 'اردو', dir: 'rtl' },
  { code: 'zh', label: 'Chinese', native: '中文', dir: 'ltr' },
];
