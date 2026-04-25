import { site } from "../data/site";
import { Icon } from "./Icon";

export function CTASection() {
  return (
    <section className="section cta-section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-panel" data-reveal>
          <p className="section-kicker">Demo</p>
          <h2 id="cta-title">Bereit, keinen Anruf mehr zu verpassen?</h2>
          <p>
            Buche eine kostenlose Demo und erfahre, wie ein AI Call Agent für dein Unternehmen klingen und
            arbeiten kann.
          </p>
          <div className="cta-actions">
            <a className="btn btn-primary" href={site.calendlyUrl} target="_blank" rel="noreferrer">
              Demo anfragen
              <Icon name="arrow" />
            </a>
            <a className="btn btn-secondary" href="#kontakt">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
