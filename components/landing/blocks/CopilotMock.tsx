import Icon from '../ui/Icon'
import type { Dictionary } from '../lib/dictionary'

/**
 * Product visual for the hero and the Copilot spotlight.
 *
 * Deliberately an interface, not an "AI robot" (§4.4). The streaming caret
 * and the "based on" source chip are the two trust cues that carry RACO's
 * AI-UX principles: show the work, and disclose what the answer is grounded
 * in. Replace with a real screenshot in a soft device frame once brand
 * assets land.
 */
export default function CopilotMock({
  dict,
  url = 'northgate.racoedu.com',
}: {
  dict: Dictionary
  url?: string
}) {
  const m = dict.pages.home.copilotMock
  return (
    <div className="mock">
      <div className="mock__bar">
        <div className="mock__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span className="mock__url">{url}</span>
      </div>

      <div className="mock__body">
        <div className="cluster" style={{ justifyContent: 'space-between' }}>
          <span className="badge">
            <Icon name="Sparkles" size={13} /> {m.badge}
          </span>
          <span className="badge badge--trust">
            <Icon name="ShieldCheck" size={13} /> {m.safeBadge}
          </span>
        </div>

        <div className="chat">
          <div className="chat__row chat__row--user">
            <span className="chat__avatar" aria-hidden="true">
              {m.avatar}
            </span>
            <p className="chat__bubble">{m.question}</p>
          </div>

          <div className="chat__row">
            <span className="chat__avatar chat__avatar--ai" aria-hidden="true">
              <Icon name="Sparkles" size={14} />
            </span>
            <div>
              <p className="chat__bubble">
                {m.answerPre} <em>{m.answerEm}</em>
                <span className="chat__caret" aria-hidden="true" />
              </p>
              <span className="chat__source">
                <Icon name="BookOpen" size={13} />
                {m.source}
              </span>
            </div>
          </div>
        </div>

        <div className="note" style={{ marginTop: 'var(--space-2)' }}>
          <Icon name="Info" size={15} />
          <span>{m.note}</span>
        </div>
      </div>
    </div>
  )
}
