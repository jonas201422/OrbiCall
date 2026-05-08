import { statsItems } from "../data/content";

export function StatsSection() {
  return (
    <section className="section stats-section" aria-labelledby="stats-title">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Warum Erreichbarkeit zählt</p>
          <h2 id="stats-title">Jeder verpasste Anruf kann ein verlorener Auftrag sein.</h2>
          <p className="section-lead">
            Gute Telefonerreichbarkeit ist kein Komfortthema. Sie beeinflusst, ob Anfragen beantwortet,
            Termine gebucht und Interessenten rechtzeitig weiterbetreut werden.
          </p>
        </div>
        <div className="stats-grid" data-reveal>
          {statsItems.map((stat) => (
            <article className="stat-card" key={stat.title}>
              <strong>{stat.value}</strong>
              <h3>{stat.title}</h3>
              <p>{stat.text}</p>
              <a href={stat.href} target="_blank" rel="noopener noreferrer">
                Quelle: {stat.source}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
