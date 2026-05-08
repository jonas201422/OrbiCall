import { assistantFeatures } from "../data/content";
import { imageAssets } from "../data/assets";
import { Icon } from "./Icon";
import { ResponsiveImage } from "./ResponsiveImage";

export function SolutionSection() {
  return (
    <section className="section solution-section" id="loesung" aria-labelledby="solution-title">
      <div className="container">
        <div className="section-heading narrow" data-reveal>
          <p className="section-kicker">Die Lösung</p>
          <h2 id="solution-title">OrbiCall ist Ihr KI Call Agent am Telefon.</h2>
          <p className="section-lead">
            Der KI Telefonassistent nimmt Gespräche entgegen, beantwortet häufige Fragen, sammelt Kundendaten,
            unterstützt Terminbuchungen und leitet wichtige Anliegen an Ihr Team weiter.
          </p>
        </div>

        <div className="solution-layout">
          <div className="visual-frame section-image" data-reveal>
            <ResponsiveImage asset={imageAssets.solution} />
          </div>
          <div className="feature-grid" data-reveal>
            {assistantFeatures.map((feature) => (
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
