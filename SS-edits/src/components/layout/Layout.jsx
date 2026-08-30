import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import Header from './Header';
import PageLoading from '../ui/PageLoading';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

/** App shell: skip link → header → routed page → footer. */
export default function Layout() {
  const { pathname, hash } = useLocation();

  // Restore scroll on route change; respect in-page anchors.
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname, hash]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      {/* Suspense lives here, not around the router, so the header and footer
          stay on screen while a lazily-loaded route chunk arrives. */}
      <main id="main" tabIndex={-1}>
        <Suspense fallback={<PageLoading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
