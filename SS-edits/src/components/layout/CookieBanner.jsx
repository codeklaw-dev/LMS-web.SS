import Button from '../ui/Button';
import { usePersistentState } from '../../lib/hooks';

/**
 * Privacy-first cookie consent (§4.6, §5): nothing is pre-ticked and
 * declining is exactly as easy as accepting. Analytics stay off until consent.
 */
export default function CookieBanner() {
  const [consent, setConsent] = usePersistentState('rlh:consent', null);

  if (consent) return null;

  return (
    <div className="cookie" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-desc">
      <h2 id="cookie-title">Cookies on this site</h2>
      <p id="cookie-desc">
        We use essential cookies to run the site. With your consent we also measure which
        pages help schools decide — nothing more, and never for advertising.
      </p>
      <div className="cookie__actions">
        <Button size="sm" onClick={() => setConsent('all')}>Accept analytics</Button>
        <Button size="sm" variant="secondary" onClick={() => setConsent('essential')}>
          Essential only
        </Button>
        <Button size="sm" variant="ghost" to="/cookies">Cookie policy</Button>
      </div>
    </div>
  );
}
