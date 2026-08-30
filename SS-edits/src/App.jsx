import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';

// Home and the demo page are the two routes that carry conversion, so they
// stay in the main bundle. Everything else is split per route to protect the
// LCP < 2.5s budget in §7.
import Home from './pages/Home';
import Demo from './pages/Demo';

const Pricing = lazy(() => import('./pages/Pricing'));
const Security = lazy(() => import('./pages/Security'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PlatformOverview = lazy(() => import('./pages/platform/PlatformOverview'));
const FeaturePage = lazy(() => import('./pages/platform/FeaturePage'));
const SolutionsOverview = lazy(() => import('./pages/solutions/SolutionsOverview'));
const SolutionPage = lazy(() => import('./pages/solutions/SolutionPage'));
const CurriculumOverview = lazy(() => import('./pages/curriculum/CurriculumOverview'));
const CurriculumPage = lazy(() => import('./pages/curriculum/CurriculumPage'));
const LegalPage = lazy(() => import('./pages/legal/LegalPage'));

const ResourcesHub = lazy(() => import('./pages/resources/Resources').then((m) => ({ default: m.ResourcesHub })));
const CaseStudies = lazy(() => import('./pages/resources/Resources').then((m) => ({ default: m.CaseStudies })));
const Blog = lazy(() => import('./pages/resources/Resources').then((m) => ({ default: m.Blog })));
const Events = lazy(() => import('./pages/resources/Resources').then((m) => ({ default: m.Events })));
const HelpCentre = lazy(() => import('./pages/resources/Resources').then((m) => ({ default: m.HelpCentre })));

/**
 * Route table — mirrors the sitemap in Blueprint §2.1 exactly.
 *
 * Nine top-level destinations. Platform, Solutions and Curriculum use
 * parameterised templates driven by the content model, so adding a feature
 * page is a content change rather than a code change.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route index element={<Home />} />

        {/* Platform */}
        <Route path="platform" element={<PlatformOverview />} />
        <Route path="platform/:slug" element={<FeaturePage />} />

        {/* Solutions */}
        <Route path="solutions" element={<SolutionsOverview />} />
        <Route path="solutions/:slug" element={<SolutionPage />} />

        {/* Curriculum */}
        <Route path="curriculum" element={<CurriculumOverview />} />
        <Route path="curriculum/:board" element={<CurriculumPage />} />

        {/* Conversion & trust */}
        <Route path="security" element={<Security />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="demo" element={<Demo />} />
        <Route path="contact" element={<Contact />} />

        {/* Resources */}
        <Route path="resources" element={<ResourcesHub />} />
        <Route path="resources/case-studies" element={<CaseStudies />} />
        <Route path="resources/blog" element={<Blog />} />
        <Route path="resources/events" element={<Events />} />
        <Route path="help" element={<HelpCentre />} />

        {/* Company */}
        <Route path="about" element={<About />} />

        {/* Utility & legal */}
        <Route path="privacy" element={<LegalPage />} />
        <Route path="terms" element={<LegalPage />} />
        <Route path="cookies" element={<LegalPage />} />
        <Route path="accessibility" element={<LegalPage />} />
        <Route path="safeguarding" element={<LegalPage />} />
        <Route path="sitemap" element={<Sitemap />} />

        {/* Legacy / convenience redirects */}
        <Route path="book-a-demo" element={<Navigate to="/demo" replace />} />
        <Route path="platform/ai" element={<Navigate to="/platform/ai-copilot" replace />} />

        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
