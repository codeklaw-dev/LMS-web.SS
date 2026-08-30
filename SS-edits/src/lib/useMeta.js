import { useEffect } from 'react';

/**
 * Per-route document title and meta description.
 *
 * The blueprint's build stack is Next.js App Router, where this is handled by
 * the `metadata` export and rendered server-side (§6, §7). This client-side
 * hook is the React-SPA stand-in for the skeleton — it keeps the per-page SEO
 * copy colocated with each page so it ports across unchanged. Swap for
 * server-rendered metadata before launch; crawlers and Core Web Vitals both
 * depend on it.
 */
export function useMeta({ title, description, canonical }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, canonical]);
}
