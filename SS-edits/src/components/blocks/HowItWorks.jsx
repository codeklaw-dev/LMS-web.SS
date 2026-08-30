import Reveal from '../ui/Reveal';
import { howItWorks } from '../../content/site';
import './blocks.css';

/** Live in weeks, not terms — §3.1 Section 12. */
export default function HowItWorks({ steps = howItWorks }) {
  return (
    <ol className="steps">
      {steps.map((s, i) => (
        <Reveal as="li" className="step" key={s.step} delay={i * 0.07}>
          <span className="step__num" aria-hidden="true">{s.step}</span>
          <div>
            <h3 className="step__title">{s.title}</h3>
            <p className="step__body">{s.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
