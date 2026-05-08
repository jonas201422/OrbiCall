import { imageAssets } from "../data/assets";
import { Icon } from "./Icon";
import { ResponsiveImage } from "./ResponsiveImage";

const steps = [
  {
    title: "Erstgespräch und Demo",
    text: "Wir klären Branche, Anrufvolumen, typische Anliegen und zeigen, wie OrbiCall für Ihr Unternehmen klingen kann.",
    icon: "message",
  },
  {
    title: "Anpassung an Ihr Unternehmen",
    text: "Begrüßung, Öffnungszeiten, Leistungen, FAQ, Terminlogik und Weiterleitungen werden sauber definiert.",
    icon: "spark",
  },
  {
    title: "Einrichtung des KI Telefonassistenten",
    text: "Der AI Call Agent wird auf Ihre Telefonprozesse, Sprache und gewünschte Gesprächsführung vorbereitet.",
    icon: "phone",
  },
  {
    title: "Testphase",
    text: "Vor der Live-Schaltung prüfen wir typische Anrufe, Grenzfälle, Weiterleitungen und Zusammenfassungen.",
    icon: "check",
  },
  {
    title: "Live-Schaltung und Optimierung",
    text: "Nach dem Start werden Gespräche ausgewertet und die Abläufe anhand realer Rückmeldungen verbessert.",
    icon: "chart",
  },
] as const;

export function ProcessSteps() {
  return (
    <section className="section process-section" id="ablauf" aria-labelledby="process-title">
      <div className="container split-grid process-grid">
        <div className="split-copy" data-reveal>
          <p className="section-kicker">Ablauf</p>
          <h2 id="process-title">Von der Demo zur Live-Schaltung.</h2>
          <p className="section-lead">
            OrbiCall wird nicht als austauschbarer Bot gestartet, sondern an Ihre Branche, Ihre Sprache und Ihre
            Abläufe angepasst.
          </p>
          <div className="step-list">
            {steps.map((step, index) => (
              <article className="step-card" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <span className="icon-badge">
                  <Icon name={step.icon} />
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="visual-frame section-image" data-reveal>
          <ResponsiveImage asset={imageAssets.process} />
        </div>
      </div>
    </section>
  );
}
