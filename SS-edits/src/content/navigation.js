/**
 * Global IA — Blueprint §2.1 Sitemap, §2.2 Global header.
 * Nine top-level destinations. Depth kept shallow: no school buyer is more
 * than two clicks from a demo.
 */

export const platformNav = {
  label: 'Platform',
  href: '/platform',
  featured: {
    badge: 'New',
    title: 'AI Copilot',
    body: 'A patient personal tutor for every student, 24/7, in their language.',
    href: '/platform/ai-copilot',
  },
  groups: [
    {
      title: 'Teaching & learning',
      items: [
        { label: 'AI Copilot', href: '/platform/ai-copilot', desc: 'The AI tutor that knows your curriculum.' },
        { label: 'Interactive Simulations', href: '/platform/simulations', desc: 'Science and maths you can touch.' },
        { label: 'Courses & Curriculum', href: '/platform/courses', desc: 'Curriculum-ready content, day one.' },
        { label: 'Playgrounds', href: '/platform/playgrounds', desc: 'Generate an interactive lesson in minutes.' },
      ],
    },
    {
      title: 'Running your school',
      items: [
        { label: 'Community & Collaboration', href: '/platform/community', desc: 'Keep learning social — and safe.' },
        { label: 'Progress & Analytics', href: '/platform/analytics', desc: 'See how every learner is really doing.' },
        { label: 'White-label & Branding', href: '/platform/white-label', desc: 'Your school, front and centre.' },
        { label: 'Payments & Admin', href: '/platform/payments', desc: 'Fees and admin, handled.' },
      ],
    },
  ],
};

export const solutionsNav = {
  label: 'Solutions',
  href: '/solutions',
  featured: {
    badge: 'Case study',
    title: 'From five tools to one',
    body: 'How a Cambridge school consolidated its stack in a single term.',
    href: '/resources/case-studies',
  },
  groups: [
    {
      title: 'By role',
      items: [
        { label: 'For School Leaders', href: '/solutions/leaders', desc: 'Raise attainment. Save staff time. See everything.' },
        { label: 'For Teachers', href: '/solutions/teachers', desc: 'Spend less time on admin. More time teaching.' },
        { label: 'For Students & Parents', href: '/solutions/students', desc: 'Help whenever you need it, in your language.' },
      ],
    },
    {
      title: 'By organisation',
      items: [
        { label: 'For Trusts & School Groups', href: '/solutions/trusts', desc: 'One platform across every school in your trust.' },
        { label: 'Cambridge schools', href: '/curriculum/cambridge', desc: 'Built for the Cambridge classroom.' },
        { label: 'Edexcel schools', href: '/curriculum/edexcel', desc: 'Built for the Edexcel classroom.' },
      ],
    },
  ],
};

export const resourcesNav = {
  label: 'Resources',
  href: '/resources',
  groups: [
    {
      title: 'Learn',
      items: [
        { label: 'Case Studies', href: '/resources/case-studies', desc: 'Schools, in their own words.' },
        { label: 'Blog / Insights', href: '/resources/blog', desc: 'Insights for modern schools.' },
        { label: 'Webinars & Events', href: '/resources/events', desc: 'Live and on-demand sessions.' },
        { label: 'Help Centre', href: '/help', desc: 'Searchable docs for customers.' },
      ],
    },
  ],
};

/** Centre of the header. Mega-menus flagged with `menu`. */
export const primaryNav = [
  { label: 'Platform', href: '/platform', menu: platformNav },
  { label: 'Solutions', href: '/solutions', menu: solutionsNav },
  { label: 'Curriculum', href: '/curriculum' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources', menu: resourcesNav },
];

/** Four link columns — Blueprint §2.3 Global footer. */
export const footerNav = [
  {
    title: 'Platform',
    links: [
      { label: 'Overview', href: '/platform' },
      { label: 'AI Copilot', href: '/platform/ai-copilot' },
      { label: 'Interactive Simulations', href: '/platform/simulations' },
      { label: 'Courses & Curriculum', href: '/platform/courses' },
      { label: 'Playgrounds', href: '/platform/playgrounds' },
      { label: 'Community', href: '/platform/community' },
      { label: 'Progress & Analytics', href: '/platform/analytics' },
      { label: 'White-label & Branding', href: '/platform/white-label' },
      { label: 'Payments & Admin', href: '/platform/payments' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For School Leaders', href: '/solutions/leaders' },
      { label: 'For Teachers', href: '/solutions/teachers' },
      { label: 'For Students & Parents', href: '/solutions/students' },
      { label: 'For Trusts & Groups', href: '/solutions/trusts' },
      { label: 'Cambridge', href: '/curriculum/cambridge' },
      { label: 'Edexcel', href: '/curriculum/edexcel' },
      { label: 'Security & Compliance', href: '/security' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', href: '/resources/case-studies' },
      { label: 'Blog / Insights', href: '/resources/blog' },
      { label: 'Webinars & Events', href: '/resources/events' },
      { label: 'Help Centre', href: '/help' },
      { label: 'Schools brochure (PDF)', href: '/resources' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About RACO AI', href: '/about' },
      { label: 'Mission', href: '/about#mission' },
      { label: 'Team', href: '/about#team' },
      { label: 'Careers', href: '/about#careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Book a Live Demo', href: '/demo' },
    ],
  },
];

export const legalNav = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Safeguarding', href: '/safeguarding' },
];
