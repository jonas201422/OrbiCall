import { DemoButton } from "./DemoButton";

export function CTASection() {
  return (
    <section className="section cta-section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-panel" data-reveal>
          <p className="section-kicker">Demo</p>
          <h2 id="cta-title">Bereit für bessere telefonische Erreichbarkeit?</h2>
          <p>
            Buchen Sie eine Demo und sehen Sie, wie OrbiCall Telefonannahme, Terminbuchung
            und Kundenanfragen für Ihr Unternehmen in Österreich automatisieren kann.
          </p>
          <div className="cta-actions">
            <DemoButton />
            <a className="btn btn-secondary" href="/kontakt">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
