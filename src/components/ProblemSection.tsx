import { imageAssets } from "../data/assets";
import { Icon } from "./Icon";
import { ResponsiveImage } from "./ResponsiveImage";

const problems = [
  {
    icon: "phone",
    title: "Verpasste Anrufe werden zu verlorenen Kunden",
    text: "Wenn niemand abhebt, suchen viele Interessenten direkt nach einer Alternative. Aus einem kurzen Anruf wird schnell ein verlorener Termin, Lead oder Auftrag.",
  },
  {
    icon: "headset",
    title: "Standardfragen blockieren das Team",
    text: "Öffnungszeiten, Preise, Terminfragen und Rückrufe unterbrechen Mitarbeiter immer wieder mitten in Beratung, Behandlung, Service oder Küche.",
  },
  {
    icon: "calendar",
    title: "Terminabstimmung kostet unnötig Zeit",
    text: "Terminwünsche, Absagen und Umbuchungen landen in Notizen, Sprachnachrichten oder im Kopf einzelner Personen statt in einem klaren Prozess.",
  },
  {
    icon: "clock",
    title: "Nach Geschäftsschluss bleiben Anfragen liegen",
    text: "Außerhalb der Öffnungszeiten gehen Reservierungen, Rückfragen und neue Anfragen oft verloren, obwohl Kunden gerade dann Zeit zum Anrufen haben.",
  },
] as const;

const impactItems = ["Termine", "Reservierungen", "Leads", "Rückrufe"];

export function ProblemSection() {
  return (
    <section className="section problem-section" id="problem" aria-labelledby="problem-title">
      <div className="container problem-shell">
        <div className="problem-copy" data-reveal>
          <p className="section-kicker">Das Problem</p>
          <h2 id="problem-title">Jeder unbeantwortete Anruf kann ein verlorener Kunde sein.</h2>
          <p className="section-lead">
            Das Telefon ist für viele österreichische KMU ein direkter Umsatzkanal. Wenn Anrufe nicht beantwortet
            werden, verlieren Unternehmen Termine, Reservierungen, Leads oder wichtige Rückfragen, bevor überhaupt ein
            Gespräch entsteht.
          </p>

          <div className="problem-impact" aria-label="Betroffene Anfragen">
            <strong>Betroffen sind oft:</strong>
            {impactItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="problem-card-grid">
            {problems.map((problem) => (
              <article className="glass-card problem-card" key={problem.title}>
                <span className="icon-badge">
                  <Icon name={problem.icon} />
                </span>
                <h3>{problem.title}</h3>
                <p>{problem.text}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="problem-visual-panel" data-reveal>
          <ResponsiveImage asset={imageAssets.problem} />
          <div className="problem-quote glass-card">
            <span>Ohne Antwort kein Auftrag.</span>
            <p>OrbiCall nimmt Anfragen auf, ordnet sie ein und gibt sie strukturiert an das Team weiter.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
