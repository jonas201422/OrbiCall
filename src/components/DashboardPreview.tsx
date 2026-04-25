import { Icon } from "./Icon";

const stats = [
  { label: "Anrufe beantwortet", value: "142", detail: "+28 diese Woche", icon: "phone" },
  { label: "Termine gebucht", value: "37", detail: "automatisch erfasst", icon: "calendar" },
  { label: "Verpasste Anrufe gerettet", value: "18", detail: "nach Öffnungszeiten", icon: "spark" },
] as const;

const summaries = [
  "Interessent möchte Rückruf für Erstberatung am Dienstag.",
  "Bestandskundin fragt nach Terminverschiebung und Öffnungszeiten.",
  "Neue Anfrage: Angebot für Reparaturservice mit Fotos per E-Mail.",
];

export function DashboardPreview() {
  return (
    <section className="section dashboard-section" aria-labelledby="dashboard-title">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Product Preview</p>
          <h2 id="dashboard-title">Alle Anrufe, Termine und Zusammenfassungen auf einen Blick.</h2>
          <p className="section-lead">
            Das Dashboard zeigt dir, was dein AI Agent erledigt hat und welche Anfragen deine Aufmerksamkeit brauchen.
          </p>
        </div>

        <div className="dashboard-mockup" data-reveal aria-label="Orbicall Dashboard Vorschau">
          <div className="mockup-topbar">
            <div>
              <span className="status-dot" />
              <strong>AI Agent aktiv</strong>
            </div>
            <span className="live-pill">Live</span>
          </div>

          <div className="mockup-grid">
            {stats.map((stat) => (
              <article className="mockup-card" key={stat.label}>
                <span className="icon-badge small">
                  <Icon name={stat.icon} />
                </span>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <small>{stat.detail}</small>
              </article>
            ))}
          </div>

          <div className="mockup-lower">
            <div className="chart-panel">
              <div className="chart-header">
                <span>Anrufvolumen</span>
                <strong>Heute</strong>
              </div>
              <div className="bar-chart" aria-hidden="true">
                <span style={{ height: "38%" }} />
                <span style={{ height: "64%" }} />
                <span style={{ height: "48%" }} />
                <span style={{ height: "74%" }} />
                <span style={{ height: "58%" }} />
                <span style={{ height: "86%" }} />
                <span style={{ height: "69%" }} />
              </div>
            </div>

            <div className="summary-panel">
              <div className="chart-header">
                <span>Neue Gesprächszusammenfassungen</span>
                <strong>3</strong>
              </div>
              <ul>
                {summaries.map((summary) => (
                  <li key={summary}>
                    <Icon name="check" />
                    <span>{summary}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
