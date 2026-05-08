import { Icon } from "./Icon";

const benefits = [
  "Weniger verpasste Anrufe",
  "Bessere Erreichbarkeit",
  "Entlastung des Teams",
  "Professioneller Kundenservice",
  "24/7 Verfügbarkeit möglich",
  "Strukturierte Gesprächszusammenfassungen",
  "Schnellere Reaktion auf Terminwünsche",
  "Mehr Klarheit bei Rückrufen und Weiterleitungen",
];

export function BenefitsSection() {
  return (
    <section className="section benefits-section" id="vorteile" aria-labelledby="benefits-title">
      <div className="container">
        <div className="benefits-panel" data-reveal>
          <div>
            <p className="section-kicker">Vorteile</p>
            <h2 id="benefits-title">Warum OrbiCall statt Anrufbeantworter?</h2>
            <p className="section-lead">
              Ein klassischer Anrufbeantworter sammelt Nachrichten. OrbiCall führt einen Dialog, fragt wichtige
              Informationen ab, unterstützt Terminprozesse und liefert verwertbare Zusammenfassungen für Ihr Team.
            </p>
          </div>
          <div className="benefit-list">
            {benefits.map((benefit) => (
              <div className="benefit-item" key={benefit}>
                <Icon name="check" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
