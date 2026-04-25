import { Icon } from "./Icon";

const benefits = [
  "Mehr Anfragen werden beantwortet",
  "Weniger Stress am Telefon",
  "Professioneller erster Eindruck",
  "24/7 erreichbar",
  "Automatisierte Prozesse",
  "Skalierbar für kleine und wachsende Unternehmen",
];

export function BenefitsSection() {
  return (
    <section className="section benefits-section" id="vorteile" aria-labelledby="benefits-title">
      <div className="container">
        <div className="benefits-panel" data-reveal>
          <div>
            <p className="section-kicker">Vorteile</p>
            <h2 id="benefits-title">Warum Orbicall?</h2>
            <p className="section-lead">
              Orbicall entlastet dein Team, hält die Erreichbarkeit hoch und macht Telefonprozesse planbarer,
              ohne den persönlichen Eindruck deines Unternehmens zu verlieren.
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
