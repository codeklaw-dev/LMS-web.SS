import Container from '../ui/Container'
import type { Dictionary } from '../lib/dictionary'

/**
 * Slim, reusable strip beneath the hero on key pages (§2.4).
 * Replace the wordmarks with real school logos before launch.
 */
export default function TrustBar({
  dict,
  headline,
}: {
  dict: Dictionary
  headline?: string
}) {
  const { trustBar } = dict
  return (
    <section className="trustbar" aria-label={trustBar.ariaLabel}>
      <Container>
        <p className="trustbar__line">{headline ?? trustBar.headline}</p>

        <div className="trustbar__logos">
          {trustBar.schools.map((school) => (
            <span className="trustbar__logo" key={school}>
              {school}
            </span>
          ))}
          {trustBar.boards.map((board) => (
            <span className="trustbar__logo" key={board}>
              {board}
            </span>
          ))}
        </div>

        <dl className="trustbar__stats">
          {trustBar.proofStats.map((s) => (
            <div className="stat" key={s.label}>
              <dt className="visually-hidden">{s.label}</dt>
              <dd className="stat-value" style={{ margin: 0 }}>
                {s.value}
              </dd>
              <dd className="stat-label" style={{ margin: 0 }} aria-hidden="true">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
