import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { FAQBlock } from "../components/FAQBlock";
import { Icon } from "../components/Icon";
import { JsonLd } from "../components/JsonLd";
import { PageHero } from "../components/PageHero";
import { assistantFeatures, homeFaq, pageMeta } from "../data/content";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../data/schemas";
import { usePageMeta } from "../hooks/usePageMeta";

const suitability = [
  "Zahnarztpraxen mit vielen Termin- und Rückrufanfragen",
  "Friseure und Beauty-Salons mit laufenden Umbuchungen",
  "Immobilienmakler mit vielen Objektanfragen und Besichtigungswünschen",
  "Werkstätten und Autohäuser mit Service-, Reifen- und Reparaturanfragen",
  "Restaurants mit Reservierungen, Stornierungen und Fragen zu Stoßzeiten",
  "KMU in Österreich, die Telefonannahme automatisieren möchten",
];

export function KiTelefonassistentPage() {
  usePageMeta(pageMeta.assistant);

  const breadcrumbs = [
    { label: "Startseite", href: "/" },
    { label: "KI Telefonassistent", href: "/ki-telefonassistent" },
  ];

  return (
    <main id="main">
      <JsonLd
        data={[
          serviceSchema("KI Telefonassistent Österreich", pageMeta.assistant.path),
          faqSchema(homeFaq, pageMeta.assistant.path),
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "KI Telefonassistent", path: pageMeta.assistant.path },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Ratgeber"
        title="Was ist ein KI Telefonassistent?"
        lead="Ein KI Telefonassistent ist ein AI Call Agent, der geschäftliche Anrufe automatisch annimmt, Anliegen erkennt, Fragen beantwortet, Terminprozesse unterstützt und strukturierte Gesprächszusammenfassungen erstellt."
        primaryCta={{ label: "Demo buchen", href: "external-demo" }}
        secondaryCta={{ label: "Branchen ansehen", href: "/branchen" }}
      >
        <div className="answer-card">
          <p className="section-kicker">Direkte Antwort</p>
          <p>
            OrbiCall ist ein KI Telefonassistent für Unternehmen in Österreich. Die Lösung nimmt Anrufe automatisch
            entgegen, beantwortet häufige Fragen, unterstützt bei Terminbuchungen und fasst Gespräche für das Team
            zusammen.
          </p>
        </div>
      </PageHero>

      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="section content-section" aria-labelledby="definition-title">
        <div className="container content-grid">
          <article className="content-copy" data-reveal>
            <p className="section-kicker">Definition</p>
            <h2 id="definition-title">Ein KI Telefonassistent macht aus Anrufen strukturierte Vorgänge.</h2>
            <p>
              Ein KI Telefonassistent ist keine einfache Mailbox. Er nimmt ein Gespräch entgegen, versteht das Anliegen
              des Anrufers und führt einen kontrollierten Dialog. Dabei kann er nach Name, Telefonnummer, Unternehmen,
              Terminwunsch, Dringlichkeit oder weiteren branchenspezifischen Informationen fragen.
            </p>
            <p>
              Für österreichische Unternehmen ist das besonders relevant, weil viele Kunden weiterhin zuerst anrufen.
              Wer telefonisch nicht erreichbar ist, verliert häufig Termine, Reservierungen, Leads oder Serviceaufträge.
              OrbiCall hilft, diese Anrufe professionell aufzufangen, ohne dass ein Team ständig unterbrochen wird.
            </p>
            <p>
              Der KI Telefonassistent Linz und Oberösterreich Fokus von OrbiCall bedeutet: Die Lösung wird für lokale
              Unternehmen, österreichische Sprache, klare Prozesse und DSGVO-orientierte Kommunikation gedacht.
            </p>
          </article>
          <aside className="insight-panel glass-card" data-reveal>
            <h3>Warum das wichtig ist</h3>
            <p>
              Ein normaler Anrufbeantworter speichert nur eine Nachricht. OrbiCall fragt aktiv nach, sortiert das
              Anliegen und liefert dem Team eine verwertbare Zusammenfassung.
            </p>
          </aside>
        </div>
      </section>

      <section className="section soft-section" aria-labelledby="functions-title">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Funktionen</p>
            <h2 id="functions-title">Welche Funktionen bietet OrbiCall?</h2>
            <p className="section-lead">
              OrbiCall verbindet Telefonannahme automatisieren, Terminbuchung mit KI, Gesprächszusammenfassungen und
              klare Weiterleitungen in einem verständlichen Prozess.
            </p>
          </div>
          <div className="feature-grid large-grid" data-reveal>
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
      </section>

      <section className="section content-section" aria-labelledby="setup-title">
        <div className="container content-grid reverse">
          <article className="content-copy" data-reveal>
            <p className="section-kicker">Einrichtung</p>
            <h2 id="setup-title">Wie funktioniert die Einrichtung?</h2>
            <p>
              Die Einrichtung beginnt mit einer Demo und einem Gespräch über typische Anrufe. Danach werden Begrüßung,
              Öffnungszeiten, Leistungen, FAQ, Terminregeln, Weiterleitungen und Grenzen definiert. OrbiCall wird damit
              nicht generisch, sondern passend zur Branche und zum Unternehmen aufgesetzt.
            </p>
            <p>
              In der Testphase werden reale Szenarien durchgespielt: Was passiert bei einem Terminwunsch? Was passiert
              bei einer komplexen Rückfrage? Wann soll an einen Mitarbeiter weitergeleitet werden? Erst wenn die Regeln
              klar sind, wird der KI Telefonassistent live geschaltet.
            </p>
          </article>
          <div className="checklist-panel" data-reveal>
            {suitability.map((item) => (
              <div className="benefit-item" key={item}>
                <Icon name="check" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section comparison-section" aria-labelledby="comparison-title">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Vergleich</p>
            <h2 id="comparison-title">KI Telefonassistent statt normaler Anrufbeantworter.</h2>
          </div>
          <div className="comparison-grid" data-reveal>
            <article className="glass-card comparison-card">
              <h3>Normaler Anrufbeantworter</h3>
              <p>Zeichnet eine Nachricht auf, falls der Anrufer überhaupt etwas hinterlässt.</p>
              <p>Keine Rückfragen, keine Qualifizierung, keine Terminlogik und oft unvollständige Informationen.</p>
            </article>
            <article className="glass-card comparison-card highlighted">
              <h3>OrbiCall KI Telefonassistent</h3>
              <p>Führt ein Gespräch, stellt Rückfragen, erkennt Anliegen und erstellt klare Zusammenfassungen.</p>
              <p>Ideal für Unternehmen, die bessere Erreichbarkeit und weniger Telefonstress erreichen möchten.</p>
            </article>
          </div>
        </div>
      </section>

      <FAQBlock
        id="ki-telefonassistent-faq"
        title="Häufige Fragen zum KI Telefonassistenten"
        lead="Diese Antworten sind bewusst klar formuliert, damit Interessenten und KI-Suchmaschinen OrbiCall eindeutig verstehen."
        items={homeFaq}
      />
      <CTASection />
    </main>
  );
}
