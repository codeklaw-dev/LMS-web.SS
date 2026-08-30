import Section from './Section';

/**
 * Route-transition fallback for lazily-loaded pages.
 *
 * A skeleton in the shape of a page hero, not a full-screen spinner: it holds
 * the layout still while the chunk arrives, so the page does not jump when it
 * lands. `aria-busy` and the polite live region announce the wait without
 * shouting it on every navigation.
 */
export default function PageLoading() {
  return (
    <Section aria-busy="true" aria-live="polite">
      <span className="visually-hidden">Loading page…</span>
      <div className="stack" style={{ '--flow': 'var(--space-4)' }}>
        <span className="skeleton" style={{ display: 'block', width: 120, height: 16 }} />
        <span className="skeleton" style={{ display: 'block', width: 'min(100%, 620px)', height: 52 }} />
        <span className="skeleton" style={{ display: 'block', width: 'min(100%, 480px)', height: 24 }} />
        <span className="skeleton" style={{ display: 'block', width: 200, height: 46, borderRadius: 'var(--radius)' }} />
      </div>
    </Section>
  );
}
