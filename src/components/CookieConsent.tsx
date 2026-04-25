import { useEffect, useState } from "react";

type ConsentState = {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
};

const storageKey = "orbicall-consent";
const defaultConsent: ConsentState = {
  necessary: true,
  statistics: false,
  marketing: false,
};

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(defaultConsent);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) {
      setIsVisible(true);
      return;
    }

    try {
      setConsent({ ...defaultConsent, ...JSON.parse(saved) });
    } catch {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (nextConsent: ConsentState) => {
    window.localStorage.setItem(storageKey, JSON.stringify(nextConsent));
    setConsent(nextConsent);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside className="cookie-banner" aria-label="Cookie Hinweis">
      <div>
        <strong>Datenschutzfreundlicher Cookie-Hinweis</strong>
        <p>
          Diese Website nutzt aktuell nur technisch notwendige UI-Zustände. Statistik und Marketing sind
          vorbereitet, bleiben aber deaktiviert, solange du nicht zustimmst und keine entsprechenden Dienste
          eingebunden werden.
        </p>
        <div className="consent-options" aria-label="Cookie Kategorien">
          <label>
            <input type="checkbox" checked readOnly />
            Notwendig
          </label>
          <label>
            <input
              type="checkbox"
              checked={consent.statistics}
              onChange={(event) => setConsent((current) => ({ ...current, statistics: event.target.checked }))}
            />
            Statistik
          </label>
          <label>
            <input
              type="checkbox"
              checked={consent.marketing}
              onChange={(event) => setConsent((current) => ({ ...current, marketing: event.target.checked }))}
            />
            Marketing
          </label>
        </div>
      </div>
      <div className="cookie-actions">
        <button className="btn btn-secondary" type="button" onClick={() => saveConsent(defaultConsent)}>
          Nur notwendige
        </button>
        <button className="btn btn-primary" type="button" onClick={() => saveConsent(consent)}>
          Auswahl speichern
        </button>
      </div>
    </aside>
  );
}
