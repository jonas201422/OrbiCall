import { DemoButton } from "./DemoButton";
import { Icon } from "./Icon";

const proofItems = ["DSGVO-orientiert", "Für österreichische KMU", "Telefonannahme & Termine", "Klare Übergaben"];

export function Hero() {
  return (
    <section className="hero section" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">KI Telefonservice aus Österreich</p>
          <h1 id="hero-title">
            <span>Verpasste Anrufe.</span>
            {" "}
            <span className="hero-title-gradient">Echter Verlust.</span>
          </h1>
          <p className="hero-subtitle">
            OrbiCall ist der KI Telefonassistent für Unternehmen in Österreich: Er nimmt Anrufe entgegen,
            beantwortet Kundenfragen, unterstützt bei Terminbuchungen und entlastet Teams spürbar.
          </p>
          <div className="hero-actions">
            <DemoButton />
            <a className="btn btn-secondary" href="/ki-telefonassistent">
              Mehr erfahren
            </a>
          </div>
          <div className="hero-proof-list" aria-label="OrbiCall Vertrauensmerkmale">
            {proofItems.map((item) => (
              <span key={item}>
                <Icon name="check" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
