import { imageAssets } from "../data/assets";
import { site } from "../data/site";
import { Icon } from "./Icon";
import { ResponsiveImage } from "./ResponsiveImage";

const trustItems = [
  { icon: "clock", label: "24/7 erreichbar" },
  { icon: "calendar", label: "Automatisierte Terminbuchung" },
  { icon: "wave", label: "Menschlich klingende Gespräche" },
  { icon: "building", label: "Für lokale Unternehmen" },
] as const;

export function Hero() {
  return (
    <section className="hero section" aria-labelledby="hero-title">
      <div className="hero-grid container">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">
            {site.brand} <span>{site.slogan}</span>
          </p>
          <h1 id="hero-title">AI Call Agents, die für dein Unternehmen ans Telefon gehen.</h1>
          <p className="hero-subtitle">
            Orbicall beantwortet Anrufe, qualifiziert Kundenanfragen, bucht Termine und ist 24/7 erreichbar,
            damit kein potenzieller Kunde verloren geht.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={site.calendlyUrl} target="_blank" rel="noreferrer">
              Kostenlose Demo buchen
              <Icon name="arrow" />
            </a>
            <a className="btn btn-secondary" href="#ablauf">
              So funktioniert's
            </a>
          </div>
          <div className="trust-grid" aria-label="Orbicall Vorteile">
            {trustItems.map((item) => (
              <span className="trust-pill" key={item.label}>
                <Icon name={item.icon} />
                {item.label}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="visual-frame hero-frame">
            <ResponsiveImage asset={imageAssets.hero} />
          </div>
          <div className="floating-signal signal-one" aria-hidden="true">
            <Icon name="phone" />
          </div>
          <div className="floating-signal signal-two" aria-hidden="true">
            <Icon name="message" />
          </div>
        </div>
      </div>
      <div className="wave-band" aria-hidden="true" />
    </section>
  );
}
