import { site } from "../data/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

const trustItems = [
  { icon: "clock", label: "24/7 erreichbar" },
  { icon: "calendar", label: "Automatisierte Terminbuchung" },
  { icon: "wave", label: "Menschlich klingende Gespräche" },
  { icon: "building", label: "Für lokale Unternehmen" },
] as const;

const heroStats = [
  { value: "24/7", label: "nimmt Anrufe an" },
  { value: "37", label: "Termine im Beispiel" },
  { value: "0", label: "Tracking-Skripte" },
] as const;

export function Hero() {
  return (
    <section className="hero section" aria-labelledby="hero-title">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="hero-brand-lockup" aria-label={`${site.brandStyled} - ${site.slogan}`}>
            <Logo />
            <span className="hero-brand-line" aria-hidden="true" />
            <p>
              Where <span>comfort</span> meets the <span>future</span>
            </p>
          </div>
          <h1 id="hero-title">
            <span>Dein AI Agent</span>
            <span className="gradient-text">am Telefon.</span>
          </h1>
          <p className="hero-subtitle">
            Orbicall beantwortet Anrufe, bucht Termine und rettet Kundenanfragen, auch wenn dein Team gerade
            keine Zeit hat.
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
          <div className="hero-proof" aria-label="Orbicall Vorteile und Kennzahlen">
            <div className="hero-stats">
              {heroStats.map((stat) => (
                <span key={stat.label}>
                  <strong>{stat.value}</strong>
                  {stat.label}
                </span>
              ))}
            </div>
            <div className="trust-grid">
              {trustItems.map((item) => (
                <span className="trust-pill" key={item.label}>
                  <Icon name={item.icon} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="wave-band" aria-hidden="true" />
    </section>
  );
}
