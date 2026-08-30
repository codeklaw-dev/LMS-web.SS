import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import PageHero from '../components/blocks/PageHero';
import { footerNav, legalNav } from '../content/navigation';
import { useMeta } from '../lib/useMeta';

/** HTML sitemap — §2.1 utility pages. Also a fast way to audit the IA. */
export default function Sitemap() {
  useMeta({
    title: 'Sitemap — RacoLearnHub',
    description: 'Every page on the RacoLearnHub website.',
  });

  const columns = [
    ...footerNav,
    { title: 'Legal & utility', links: [...legalNav, { label: 'Sitemap', href: '/sitemap' }] },
  ];

  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title="Every page on this site."
        sub="Nine top-level destinations, kept deliberately shallow — no school buyer should be more than two clicks from a demo."
        crumbs={[{ label: 'Sitemap' }]}
        primary={null}
      />

      <Section>
        <div className="grid grid--3">
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="h5" style={{ marginBottom: 'var(--space-4)' }}>{col.title}</h2>
              <ul className="grid" style={{ gap: 'var(--space-2)' }}>
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link to={link.href} className="link-arrow">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Section>
    </>
  );
}
