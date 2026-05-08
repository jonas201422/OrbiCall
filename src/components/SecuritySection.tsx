import { imageAssets } from "../data/assets";
import { Icon } from "./Icon";
import { ResponsiveImage } from "./ResponsiveImage";

const securityItems = [
  {
    title: "DSGVO-orientierte Umsetzung",
    text: "Datenflüsse, Kontaktwege und Zuständigkeiten werden transparent geplant und dokumentiert.",
    icon: "shield",
  },
  {
    title: "Österreichischer Markt",
    text: "OrbiCall ist auf Anforderungen österreichischer Unternehmen, KMU und lokaler Dienstleister ausgerichtet.",
    icon: "building",
  },
  {
    title: "Klare Eskalationsregeln",
    text: "Komplexe oder sensible Anliegen werden nicht improvisiert, sondern nach definierten Regeln weitergeleitet.",
    icon: "route",
  },
  {
    title: "Keine unnötigen Tracking-Skripte",
    text: "Die Website ist bewusst schlank gehalten. Drittanbieter werden transparent beschrieben und nicht versteckt.",
    icon: "lock",
  },
] as const;

export function SecuritySection() {
  return (
    <section className="section security-section" id="sicherheit" aria-labelledby="security-title">
      <div className="container split-grid">
        <div className="split-copy" data-reveal>
          <p className="section-kicker">Datenschutz und Vertrauen</p>
          <h2 id="security-title">Für Unternehmen, die Kundendaten ernst nehmen.</h2>
          <p className="section-lead">
            Telefonate enthalten personenbezogene Daten. Deshalb positioniert sich OrbiCall nicht als KI-Spielerei,
            sondern als seriöser KI Telefonservice mit DSGVO-orientierten Prozessen und klaren Grenzen.
          </p>
          <div className="security-grid">
            {securityItems.map((item) => (
              <article className="glass-card mini-card" key={item.title}>
                <span className="icon-badge">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="visual-frame section-image" data-reveal>
          <ResponsiveImage asset={imageAssets.security} />
        </div>
      </div>
    </section>
  );
}
