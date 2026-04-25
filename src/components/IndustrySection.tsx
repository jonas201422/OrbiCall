import { imageAssets } from "../data/assets";
import { Icon } from "./Icon";
import { ResponsiveImage } from "./ResponsiveImage";

const industries = [
  {
    title: "Arzt- & Zahnarztpraxen",
    text: "Terminanfragen, Rückrufe und häufige Fragen werden zuverlässig aufgenommen.",
    icon: "calendar",
  },
  {
    title: "Friseure & Beauty-Studios",
    text: "Buchungen, Verschiebungen und Servicefragen laufen auch während Behandlungen weiter.",
    icon: "spark",
  },
  {
    title: "Immobilienmakler",
    text: "Interessenten werden qualifiziert, Besichtigungswünsche strukturiert erfasst.",
    icon: "building",
  },
  {
    title: "Restaurants",
    text: "Reservierungen, Öffnungszeiten und einfache Anfragen werden schneller beantwortet.",
    icon: "phone",
  },
  {
    title: "Werkstätten",
    text: "Serviceanfragen, Rückrufbitten und Terminwünsche landen sortiert bei deinem Team.",
    icon: "route",
  },
  {
    title: "Kanzleien & Büros",
    text: "Erstanfragen werden vorqualifiziert und wichtige Anliegen sauber weitergeleitet.",
    icon: "file",
  },
] as const;

export function IndustrySection() {
  return (
    <section className="section industries-section" id="branchen" aria-labelledby="industry-title">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Branchen</p>
          <h2 id="industry-title">Für Unternehmen, die erreichbar sein müssen.</h2>
          <p className="section-lead">
            Orbicall passt besonders gut zu Teams, bei denen jeder verpasste Anruf ein echter Auftrag sein kann.
          </p>
        </div>

        <div className="industry-layout">
          <div className="industry-grid" data-reveal>
            {industries.map((industry) => (
              <article className="glass-card industry-card" key={industry.title}>
                <span className="icon-badge">
                  <Icon name={industry.icon} />
                </span>
                <h3>{industry.title}</h3>
                <p>{industry.text}</p>
              </article>
            ))}
          </div>
          <div className="visual-frame section-image" data-reveal>
            <ResponsiveImage asset={imageAssets.industries} />
          </div>
        </div>
      </div>
    </section>
  );
}
