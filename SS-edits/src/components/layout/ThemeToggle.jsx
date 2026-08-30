import { useEffect } from 'react';
import Icon from '../ui/Icon';
import { usePersistentState } from '../../lib/hooks';

/**
 * Light / dark. The product supports dark mode and schools expect it (§4.1),
 * so the marketing site ships full parity rather than a light-only shell.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = usePersistentState('rlh:theme', 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <span className="theme-wrap">
      <button
        type="button"
        className="icon-btn"
        onClick={() => setTheme(next)}
        aria-label={`Switch to ${next} theme`}
        title={`Switch to ${next} theme`}
      >
        <Icon name={theme === 'dark' ? 'Sun' : 'Moon'} size={18} />
      </button>
    </span>
  );
}
