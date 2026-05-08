import { DemoButton } from "../components/DemoButton";
import { Icon } from "../components/Icon";
import { JsonLd } from "../components/JsonLd";
import { PageHero } from "../components/PageHero";
import { pageMeta } from "../data/content";
import { breadcrumbSchema, serviceSchema } from "../data/schemas";
import { usePageMeta } from "../hooks/usePageMeta";

const demoItems = [
  {
    icon: "phone",
    title: "KI-Telefonassistent live erleben",
    text: "Sie sehen, wie OrbiCall einen Anruf annimmt, Rückfragen stellt und eine klare Gesprächsführung hält.",
  },
  {
    icon: "calendar",
    title: "Termin- und Anfrageprozesse prüfen",
    text: "Wir zeigen, wie Terminwünsche, Absagen, Rückrufe oder Reservierungen strukturiert aufgenommen werden.",
  },
  {
    icon: "summary",
    title: "Zusammenfassungen verstehen",
    text: "Sie sehen, welche Informationen nach dem Gespräch übrig bleiben und wie daraus klare nächste Schritte werden.",
  },
  {
    icon: "shield",
    title: "Datenschutz und Grenzen besprechen",
    text: "Wir klären, welche Daten verarbeitet werden, wann weitergeleitet wird und welche Aufgaben beim Menschen bleiben.",
  },
] as const;

const demoSteps = [
  "Unternehmen verstehen",
  "Anwendungsfälle identifizieren",
  "KI-Telefonassistent zeigen",
  "Nächste Schritte besprechen",
];

export function DemoPage() {
  usePageMeta(pageMeta.demo);

  return (
    <main id="main">
      <JsonLd
        data={[
          serviceSchema("Demo für OrbiCall KI Telefonassistent", pageMeta.demo.path),
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Demo", path: pageMeta.demo.path },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Demo"
        title="Demo für Ihren KI Telefonassistenten buchen"
        lead="In der OrbiCall Demo sehen Sie konkret, wie ein KI Telefonassistent Anrufe annimmt, Anliegen erkennt, Terminprozesse unterstützt und Gesprächszusammenfassungen erstellt."
        primaryCta={{ label: "Demo buchen", href: "external-demo" }}
        secondaryCta={{ label: "Preise ansehen", href: "/preise" }}
      >
        <div className="answer-card">
          <p className="section-kicker">Direkte Antwort</p>
          <p>
            Die Demo zeigt OrbiCall anhand realistischer Telefon-Szenarien und klärt, welche Anwendungsfälle
            für Ihr Unternehmen sinnvoll automatisiert werden können.
          </p>
          <DemoButton />
        </div>
      </PageHero>

      <section className="section soft-section" aria-labelledby="demo-content-title">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Inhalte</p>
            <h2 id="demo-content-title">Das wird in der Demo gezeigt.</h2>
            <p className="section-lead">
              Die Demo ist bewusst kompakt, fachlich und praxisnah. Sie soll zeigen, ob OrbiCall zu Ihren
              Telefonprozessen passt.
            </p>
          </div>
          <div className="feature-grid large-grid" data-reveal>
            {demoItems.map((item) => (
              <article className="glass-card feature-card" key={item.title}>
                <span className="icon-badge">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" aria-labelledby="demo-process-title">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Ablauf</p>
            <h2 id="demo-process-title">In vier Schritten zu einer klaren Einschätzung.</h2>
          </div>
          <div className="demo-step-grid" data-reveal>
            {demoSteps.map((step, index) => (
              <article className="step-card" key={step}>
                <span className="step-number">0{index + 1}</span>
                <span className="icon-badge">
                  <Icon name={index === 0 ? "building" : index === 1 ? "message" : index === 2 ? "phone" : "check"} />
                </span>
                <div>
                  <h3>{step}</h3>
                  <p>
                    {index === 0 && "Wir verstehen Branche, Teamgröße, Anrufvolumen und typische Kundenanfragen."}
                    {index === 1 && "Wir identifizieren, welche Telefonate automatisiert oder besser vorbereitet werden können."}
                    {index === 2 && "Wir zeigen Gesprächslogik, Zusammenfassungen, Terminabfragen und Weiterleitungen."}
                    {index === 3 && "Wir klären Aufwand, Setup, Datenschutz, Testphase und sinnvolle nächste Schritte."}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <DemoButton />
          </div>
        </div>
      </section>
    </main>
  );
}
