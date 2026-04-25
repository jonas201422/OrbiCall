import { imageAssets } from "../data/assets";
import { Icon } from "./Icon";
import { ResponsiveImage } from "./ResponsiveImage";

const securityItems = [
  {
    title: "DSGVO-bewusst",
    text: "Datenschutz wird von Anfang an in Texten, Prozessen und Einbindungen mitgedacht.",
    icon: "shield",
  },
  {
    title: "Keine unnötigen Drittanbieter",
    text: "Die Website läuft ohne externe Fonts, Tracking-Skripte oder eingebettete Marketingtools.",
    icon: "lock",
  },
  {
    title: "Transparente Kontaktaufnahme",
    text: "Nutzer sehen klar, welche Angaben sie für eine Anfrage übermitteln.",
    icon: "mail",
  },
  {
    title: "Sichere Prozesse",
    text: "Weiterleitungen, Zugriffe und künftige Integrationen werden bewusst und nachvollziehbar geplant.",
    icon: "route",
  },
] as const;

export function SecuritySection() {
  return (
    <section className="section security-section" id="sicherheit" aria-labelledby="security-title">
      <div className="container split-grid">
        <div className="split-copy" data-reveal>
          <p className="section-kicker">Sicherheit</p>
          <h2 id="security-title">Sicherheit und Datenschutz mitgedacht.</h2>
          <p className="section-lead">
            Orbicall wird datenschutzbewusst aufgebaut. Die Website verwendet keine externen Tracking-Skripte
            ohne Einwilligung und setzt auf transparente Informationen zu Datenverarbeitung.
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
