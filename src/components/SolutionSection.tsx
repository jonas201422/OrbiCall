import { imageAssets } from "../data/assets";
import { Icon } from "./Icon";
import { ResponsiveImage } from "./ResponsiveImage";

const features = [
  {
    icon: "headset",
    title: "KI-Telefonassistent",
    text: "Nimmt Gespräche an, erkennt Anliegen und führt klare Dialoge im Stil deines Unternehmens.",
  },
  {
    icon: "calendar",
    title: "Terminbuchung",
    text: "Bucht passende Termine oder bereitet Buchungen für dein bestehendes System sauber vor.",
  },
  {
    icon: "summary",
    title: "Gesprächszusammenfassung",
    text: "Fasst Anfragen, Kontaktdaten und nächste Schritte übersichtlich zusammen.",
  },
  {
    icon: "route",
    title: "Weiterleitung an Mitarbeiter",
    text: "Wichtige Anliegen werden nach definierten Regeln an die richtige Person weitergegeben.",
  },
  {
    icon: "globe",
    title: "Mehrsprachige Kommunikation",
    text: "Hilft dabei, Kundenanfragen in mehreren Sprachen professionell aufzunehmen.",
  },
  {
    icon: "clock",
    title: "24/7 Erreichbarkeit",
    text: "Dein Unternehmen bleibt erreichbar, auch wenn das Team gerade im Termin oder Feierabend ist.",
  },
] as const;

export function SolutionSection() {
  return (
    <section className="section solution-section" id="loesung" aria-labelledby="solution-title">
      <div className="container">
        <div className="section-heading narrow" data-reveal>
          <p className="section-kicker">Die Lösung</p>
          <h2 id="solution-title">Orbicall übernimmt deine Anrufe automatisch.</h2>
          <p className="section-lead">
            Unser AI Call Agent nimmt Gespräche entgegen, beantwortet häufige Fragen, sammelt Kundendaten,
            bucht Termine und leitet wichtige Anliegen weiter.
          </p>
        </div>

        <div className="solution-layout">
          <div className="visual-frame section-image" data-reveal>
            <ResponsiveImage asset={imageAssets.solution} />
          </div>
          <div className="feature-grid" data-reveal>
            {features.map((feature) => (
              <article className="glass-card feature-card" key={feature.title}>
                <span className="icon-badge">
                  <Icon name={feature.icon} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
