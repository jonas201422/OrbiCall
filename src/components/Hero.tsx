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
            <span>KI</span>
            <span>Telefonassistent</span>
            <span>für Unternehmen</span>
            <span className="hero-title-gradient">in Österreich</span>
          </h1>
          <p className="hero-subtitle">
            OrbiCall nimmt Anrufe entgegen, beantwortet Kundenfragen, unterstützt bei Terminbuchungen
            und entlastet Teams in österreichischen Unternehmen.
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
