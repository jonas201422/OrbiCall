import { imageAssets } from "../data/assets";
import { Icon } from "./Icon";
import { ResponsiveImage } from "./ResponsiveImage";

const steps = [
  {
    title: "Wir richten deinen AI Agent ein",
    text: "Wir definieren Begrüßung, Antworten, Öffnungszeiten, Leistungen und Weiterleitungen.",
    icon: "spark",
  },
  {
    title: "Deine Kunden rufen wie gewohnt an",
    text: "Der AI Agent nimmt Gespräche entgegen und führt natürliche Dialoge.",
    icon: "phone",
  },
  {
    title: "Du erhältst Ergebnisse statt Stress",
    text: "Termine, Zusammenfassungen und wichtige Anfragen landen übersichtlich bei dir.",
    icon: "check",
  },
] as const;

export function ProcessSteps() {
  return (
    <section className="section process-section" id="ablauf" aria-labelledby="process-title">
      <div className="container split-grid process-grid">
        <div className="split-copy" data-reveal>
          <p className="section-kicker">Ablauf</p>
          <h2 id="process-title">In 3 Schritten startklar.</h2>
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
