import { imageAssets } from "../data/assets";
import { Icon } from "./Icon";
import { ResponsiveImage } from "./ResponsiveImage";

const problems = [
  {
    icon: "phone",
    title: "Verpasste Anfragen",
    text: "Viele Interessenten rufen nur einmal an. Wenn niemand abhebt, ist der nächste Anbieter oft nur einen Klick entfernt.",
  },
  {
    icon: "headset",
    title: "Überlastete Mitarbeiter",
    text: "Wiederkehrende Telefonate reißen dein Team aus der Arbeit und sorgen genau dann für Druck, wenn es ohnehin voll ist.",
  },
  {
    icon: "clock",
    title: "Keine Erreichbarkeit außerhalb der Öffnungszeiten",
    text: "Abends, am Wochenende oder während Pausen gehen wichtige Anliegen häufig verloren oder bleiben zu lange unbearbeitet.",
  },
] as const;

export function ProblemSection() {
  return (
    <section className="section split-section" id="problem" aria-labelledby="problem-title">
      <div className="container split-grid">
        <div className="split-copy" data-reveal>
          <p className="section-kicker">Das Problem</p>
          <h2 id="problem-title">Verpasste Anrufe kosten Umsatz.</h2>
          <p className="section-lead">
            Viele Kunden rufen nur einmal an. Wenn niemand abhebt, landet der Auftrag oft bei der Konkurrenz.
          </p>
          <div className="stacked-cards">
            {problems.map((problem) => (
              <article className="glass-card compact-card" key={problem.title}>
                <span className="icon-badge">
                  <Icon name={problem.icon} />
                </span>
                <div>
                  <h3>{problem.title}</h3>
                  <p>{problem.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="visual-frame section-image" data-reveal>
          <ResponsiveImage asset={imageAssets.problem} />
        </div>
      </div>
    </section>
  );
}
