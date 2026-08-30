/**
 * Platform feature pages — Blueprint §3.2.
 * One page per capability, all driven from this single content model so the
 * template stays consistent and the copy is ready to lift into a CMS.
 */

export const platformPages = {
  'ai-copilot': {
    slug: 'ai-copilot',
    eyebrow: 'AI Copilot',
    name: 'AI Copilot',
    h1: 'The AI tutor that knows your curriculum.',
    sub: 'Copilot gives every student patient, step-by-step help grounded in your course material — 24/7, in 20+ languages.',
    pillars: ['Patient', 'Personal', 'Grounded', 'Safe'],
    cta: { label: 'See Copilot live', href: '/demo' },
    sections: [
      {
        title: 'Grounded in your content, not the open web',
        body: 'Every answer is retrieved from the courses your school has loaded, and shown with the chapter it came from. When Copilot does not know, it says so and points the student to their teacher.',
        points: [
          'Answers cite the source chapter or resource',
          'No answers invented from outside your material',
          'Teachers can see and audit every conversation',
        ],
      },
      {
        title: 'Adapts to each learner',
        body: 'Copilot reads where a student is stuck and adjusts explanation, vocabulary and pace — the same concept explained three different ways for three different learners.',
        points: [
          'Level-aware explanations, from foundation to extension',
          'Follows the learner’s language preference automatically',
          'Suggests the next step rather than handing over answers',
        ],
      },
      {
        title: 'Safe by design',
        body: 'Age-appropriate responses, monitored conversations, keyword flagging to safeguarding leads, and a hard rule: your school’s data is never used to train models.',
        points: [
          'Age-appropriate guardrails per year group',
          'Safeguarding alerts routed to your designated lead',
          'No training on your data — contractually',
        ],
      },
      {
        title: 'Teacher controls',
        body: 'Teachers decide what Copilot can discuss, when it is available, and how much help it gives during assessment. It is an assistant to the teacher, not a replacement for one.',
        points: [
          'Per-class and per-assessment availability',
          'Adjustable help level, from hints to full worked examples',
          'Visibility of the questions students are actually asking',
        ],
      },
    ],
    faq: [
      { q: 'Can Copilot just do students’ homework for them?', a: 'Teachers set the help level. In assessment mode Copilot offers hints and questions rather than answers, and every conversation is visible to staff.' },
      { q: 'Which languages does it support?', a: 'The same 20+ languages as the platform, including right-to-left languages such as Arabic and Urdu. A student can ask in their home language about an English-language course.' },
      { q: 'Is our content used to train your models?', a: 'No. Your course material and student conversations are never used for model training. This is written into the data-processing agreement.' },
    ],
  },

  simulations: {
    slug: 'simulations',
    eyebrow: 'Interactive Simulations',
    name: 'Interactive Simulations',
    h1: 'Science and maths you can touch.',
    sub: '20+ interactive simulations across physics, chemistry, maths and biology — hands-on learning that makes concepts stick.',
    pillars: ['Hands-on', 'Research-backed', 'Embeddable', 'Mobile-ready'],
    cta: { label: 'Launch a simulation', href: '/demo' },
    sections: [
      {
        title: 'Browse by subject',
        body: 'Projectile motion, circuit building, molecule shapes, balancing equations, natural selection, graphing — organised by subject and mapped to the topics you already teach.',
        points: ['Physics, chemistry, biology and maths', 'Mapped to Cambridge and Edexcel topics', 'Filter by year group and difficulty'],
      },
      {
        title: 'Embedded, full-screen, mobile-ready',
        body: 'Drop a simulation into any lesson, open it full-screen on the projector, or let students explore it on a phone on the bus home. Same simulation, every device.',
        points: ['Inline in courses and assignments', 'Full-screen presentation mode', 'Touch-first on tablets and phones'],
      },
      {
        title: 'Pair with lessons and Copilot',
        body: 'A simulation next to a Copilot conversation turns exploration into understanding — students can ask "why did that happen?" the moment it happens.',
        points: ['Copilot understands the simulation context', 'Attach guiding questions to any simulation', 'Capture student observations for marking'],
      },
      {
        title: 'Built on trusted, research-backed simulations',
        body: 'Our science simulations build on PhET Interactive Simulations from the University of Colorado Boulder — decades of education research, not a novelty.',
        points: ['Research-validated pedagogy', 'Used in classrooms worldwide', 'Continuously extended with new topics'],
      },
    ],
    faq: [
      { q: 'Do simulations work offline?', a: 'Simulations need a connection to load, but run entirely in the browser afterwards — they hold up on the patchy school Wi-Fi at the back of a science block.' },
      { q: 'Can we request a simulation we need?', a: 'Yes. Playgrounds lets teachers generate an interactive activity for any topic, and we build requested simulations into the core library on a rolling basis.' },
    ],
  },

  courses: {
    slug: 'courses',
    eyebrow: 'Courses & Curriculum',
    name: 'Courses & Curriculum',
    h1: 'Curriculum-ready content, day one.',
    sub: 'Structured courses aligned to Cambridge and Edexcel — or build your own, with AI doing the heavy lifting.',
    pillars: ['Ready-made', 'Aligned', 'Authorable', 'Multimodal'],
    cta: { label: 'Explore the curriculum', href: '/curriculum' },
    sections: [
      { title: 'A ready-made library', body: 'Courses across the core subjects, structured into units, lessons and assessments — usable on the first day of term, not the first day of next year.', points: ['Core subjects covered at each key stage', 'Units, lessons, activities and assessments', 'Progress tracked automatically'] },
      { title: 'Aligned to learning objectives and past papers', body: 'Every lesson maps to specification points and assessment objectives, with past-paper style practice attached so revision is not a separate workflow.', points: ['Specification mapping per lesson', 'Assessment objective tagging', 'Past-paper style question banks'] },
      { title: 'Author your own courses', body: 'Your best teachers already have the material. Bring it in, and AI structures it into lessons, generates questions and fills the gaps you point at.', points: ['Import existing schemes of work', 'AI-assisted lesson and question generation', 'Departmental review before publishing'] },
      { title: 'Collections, pathways and media', body: 'Group courses into pathways for a year group, an intervention cohort or a summer school — and include podcasts, video and reading alongside interactive work.', points: ['Learning pathways per cohort', 'Podcasts and media built in', 'Reusable collections across year groups'] },
    ],
    faq: [
      { q: 'Can we bring our own schemes of work?', a: 'Yes — that is the normal path. Most schools import existing material during onboarding and let the platform structure it, rather than starting from scratch.' },
      { q: 'Who owns the content we author?', a: 'You do. Content your staff create stays yours, and you can export it at any time.' },
    ],
  },

  playgrounds: {
    slug: 'playgrounds',
    eyebrow: 'Playgrounds',
    name: 'Playgrounds',
    h1: 'Generate an interactive lesson in minutes.',
    sub: 'Describe a topic; Playgrounds builds an interactive, AI-generated experience your students can explore.',
    pillars: ['Fast', 'Interactive', 'Teacher-controlled', 'Shareable'],
    cta: { label: 'See Playgrounds in a demo', href: '/demo' },
    sections: [
      { title: 'From prompt to activity', body: 'Type what you want students to understand. Playgrounds generates an interactive activity — a model, a sorter, a simulation, a scenario — in the time it takes to make a coffee.', points: ['Plain-English prompts, no technical setup', 'Multiple activity types generated', 'Edit before anything reaches students'] },
      { title: 'Examples by subject', body: 'A supply-and-demand model for economics, a titration walkthrough for chemistry, a sentence-structure builder for languages — the range is the point.', points: ['Works across humanities, sciences and languages', 'Starter gallery to build from', 'Save to your department library'] },
      { title: 'Teacher in control', body: 'Nothing generated goes live automatically. You review, edit and approve — then share to a class, a set or a single student who needs a different angle.', points: ['Review and edit before publishing', 'Version history on every activity', 'Curriculum tagging on save'] },
      { title: 'Share to a class', body: 'One click to a class, a group or an individual, with progress tracked in the same dashboards as everything else.', points: ['Share to class, group or student', 'Progress feeds the same analytics', 'Reusable next year'] },
    ],
    faq: [
      { q: 'How accurate is generated content?', a: 'Playgrounds drafts; teachers approve. Nothing reaches students without a member of staff reviewing it, which is exactly where professional judgement belongs.' },
    ],
  },

  community: {
    slug: 'community',
    eyebrow: 'Community & Collaboration',
    name: 'Community & Collaboration',
    h1: 'Keep learning social — and safe.',
    sub: 'Moderated communities and discussions that keep students connected to their class and teachers.',
    pillars: ['Connected', 'Moderated', 'Purposeful', 'Safe'],
    cta: { label: 'Book a demo', href: '/demo' },
    sections: [
      { title: 'Class and subject communities', body: 'A space per class and per subject where questions get asked out loud — including the ones students would never raise with their hand up.', points: ['Per-class and per-subject spaces', 'Threaded questions and answers', 'Teacher and peer responses'] },
      { title: 'Moderated discussions', body: 'Automated moderation plus human oversight. Flagged content routes to the right member of staff with the context attached.', points: ['Automated content filtering', 'Escalation to named staff', 'Full moderation audit trail'] },
      { title: 'Announcements', body: 'Reach a class, a year group or the whole school without adding another messaging app to the pile.', points: ['Targeted announcements', 'Read receipts for staff', 'Multi-language delivery'] },
      { title: 'Safeguarding controls', body: 'Direct messaging policy, keyword alerting, retention rules and reporting — configured to your safeguarding policy, not ours.', points: ['Configurable DM policy', 'Keyword and sentiment alerting', 'Retention aligned to your policy'] },
    ],
    faq: [
      { q: 'Can students message each other privately?', a: 'Only if your school enables it. Many schools run communities with peer-to-peer DMs disabled entirely; the setting is yours.' },
    ],
  },

  analytics: {
    slug: 'analytics',
    eyebrow: 'Progress & Analytics',
    name: 'Progress & Analytics',
    h1: 'See how every learner is really doing.',
    sub: 'Dashboards for students, teachers and leaders — plus certificates that prove completion.',
    pillars: ['Live', 'Actionable', 'Exportable', 'Accountable'],
    cta: { label: 'See the dashboards', href: '/demo' },
    sections: [
      { title: 'Student progress & trails', body: 'Every student sees where they are, what is next and what they have mastered — progress as motivation, not surveillance.', points: ['Personal progress view', 'Mastery by topic', 'Next-step recommendations'] },
      { title: 'Teacher class views', body: 'One screen per class showing who is thriving, who is stuck and where the whole group has misunderstood the same thing.', points: ['Class heatmap by topic', 'Individual drill-down', 'Common misconception surfacing'] },
      { title: 'Leadership dashboards', body: 'Attainment, engagement and platform adoption across departments and year groups — the whole-school view that spreadsheets never gave you.', points: ['Cross-department comparison', 'Engagement and adoption tracking', 'Trends across the academic year'] },
      { title: 'Certificates, export & reporting', body: 'Completion certificates for students, and clean exports for your MIS, governors’ reports and inspection evidence.', points: ['Branded completion certificates', 'CSV and API export', 'Scheduled reports to inbox'] },
    ],
    faq: [
      { q: 'Does it integrate with our MIS?', a: 'Data exports via CSV and API are available on every plan; direct MIS integrations are scoped as part of Enterprise onboarding.' },
    ],
  },

  'white-label': {
    slug: 'white-label',
    eyebrow: 'White-label & Branding',
    name: 'White-label & Branding',
    h1: 'Your school, front and centre.',
    sub: 'Your logo, colours, name and domain — a platform families recognise as yours, in 20+ languages.',
    pillars: ['Yours', 'Consistent', 'Multilingual', 'Seamless'],
    cta: { label: 'Book a branded demo', href: '/demo' },
    sections: [
      { title: 'Full brand control', body: 'Logo, palette, typography and tone applied across the platform — web, email and certificates. Students see their school, not a vendor.', points: ['Logo, colours and type', 'Branded email and certificates', 'No RacoLearnHub branding shown'] },
      { title: 'Custom domain', body: 'Runs on your domain — learn.yourschool.org — with certificates and DNS handled during onboarding.', points: ['Your subdomain or domain', 'Managed TLS certificates', 'Set up before staff onboarding'] },
      { title: '20+ languages including RTL', body: 'Interface and content available in over 20 languages, with genuine right-to-left support for Arabic and Urdu — mirrored layouts, not flipped text.', points: ['Direction-aware layouts', 'Per-user language preference', 'Locale-aware dates and numbers'] },
      { title: 'Single sign-on', body: 'Microsoft Entra ID or Google Workspace, so nobody manages another password and offboarding a leaver actually removes their access.', points: ['Microsoft and Google SSO', 'Automatic provisioning', 'Role mapping from your directory'] },
    ],
    faq: [
      { q: 'Will anyone know it’s RacoLearnHub?', a: 'Not from the interface. The platform carries your identity throughout; ours appears only in the contract.' },
    ],
  },

  payments: {
    slug: 'payments',
    eyebrow: 'Payments & Admin',
    name: 'Payments & Admin',
    h1: 'Fees and admin, handled.',
    sub: 'Collect tuition and fees, track payments, and manage your school — without the spreadsheets.',
    pillars: ['Simple', 'Automated', 'Auditable', 'Integrated'],
    cta: { label: 'Talk to our team', href: '/contact' },
    sections: [
      { title: 'Fee collection & history', body: 'Take payments for tuition, trips and materials, with a full history per family and per student in the same place as everything else.', points: ['Card and bank payment options', 'Per-family payment history', 'Partial payments and plans'] },
      { title: 'Automated reminders', body: 'Polite, automatic reminders on your schedule — so chasing fees stops being a person’s job.', points: ['Configurable reminder cadence', 'Multi-language reminders', 'Escalation to the bursar'] },
      { title: 'Roles & permissions', body: 'Granular permissions so finance sees finance, teaching sees teaching, and the audit trail shows who changed what.', points: ['Role-based access control', 'Delegated administration', 'Full change audit log'] },
      { title: 'Enrolment & reporting', body: 'Manage enrolment through the year and report on it without exporting three systems into a spreadsheet first.', points: ['Enrolment and cohort management', 'Finance reporting', 'Export for your accounting system'] },
    ],
    faq: [
      { q: 'Which payment providers do you support?', a: 'Payment provider options depend on your country and are confirmed during onboarding — this is one to raise on your demo call.' },
    ],
  },
};

export const platformOrder = [
  'ai-copilot', 'simulations', 'courses', 'playgrounds',
  'community', 'analytics', 'white-label', 'payments',
];
