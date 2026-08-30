import { useEffect, useRef, useState } from 'react';
import Icon from '../ui/Icon';
import { locales } from '../../content/site';
import { useDismiss, usePersistentState } from '../../lib/hooks';

/**
 * Mirrors the product's 20+ locales, RTL included (§4.8).
 * Skeleton behaviour: sets `lang` and `dir` on <html> and persists the choice.
 * Wire to next-intl / react-intl message catalogues when copy is externalised.
 */
export default function LanguageSwitcher({ compact = false }) {
  const [open, setOpen] = useState(false);
  const [code, setCode] = usePersistentState('rlh:locale', 'en-GB');
  const ref = useRef(null);

  useDismiss(ref, () => setOpen(false), open);

  const current = locales.find((l) => l.code === code) ?? locales[0];

  // Applying this in an effect rather than in the click handler means a stored
  // preference is also honoured on reload — including `dir`, so an Arabic or
  // Urdu visitor does not get a left-to-right page on their second visit.
  useEffect(() => {
    document.documentElement.lang = current.code;
    document.documentElement.dir = current.dir;
  }, [current]);

  const choose = (locale) => {
    setCode(locale.code);
    setOpen(false);
  };

  return (
    <div className="lang-wrap" ref={ref}>
      <button
        type="button"
        className="icon-btn"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Change language — currently ${current.label}`}
        onClick={() => setOpen((o) => !o)}
      >
        <Icon name="Languages" size={18} />
      </button>

      {open && (
        <div className="popover" role="presentation">
          <p className="popover__label" id="lang-label">
            Language · {locales.length}+ available
          </p>
          <ul className="popover__list" role="listbox" aria-labelledby="lang-label">
            {locales.map((locale) => (
              <li key={locale.code} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={locale.code === code}
                  className="popover__option"
                  onClick={() => choose(locale)}
                >
                  <span>{locale.label}</span>
                  <span className="popover__native" dir={locale.dir}>{locale.native}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {compact && <span className="visually-hidden">{current.label}</span>}
    </div>
  );
}
