import Reveal from '../ui/Reveal'

/**
 * Columns parted by a hairline rule rather than boxed in cards.
 *
 * This is the editorial alternative to the three-bordered-cards pattern, and
 * the reason the page stops reading as a template: same information, a
 * quarter of the chrome, and the eye travels across rather than stopping at
 * each border.
 */
export default function RuledColumns({
  items,
  columns = 3,
  accent = false,
}: {
  items: { kicker?: string; title: string; body: string }[]
  columns?: 2 | 3 | 4
  accent?: boolean
}) {
  return (
    <ul className={`ruled-cols ruled-cols--${columns}`}>
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={item.title}
          delay={i * 0.06}
          className={`ruled-col ${accent ? 'ruled-col--accent' : ''}`}
        >
          {item.kicker && <span className="ruled-col__kicker">{item.kicker}</span>}
          <h3 className="ruled-col__title">{item.title}</h3>
          <p className="ruled-col__body">{item.body}</p>
        </Reveal>
      ))}
    </ul>
  )
}
