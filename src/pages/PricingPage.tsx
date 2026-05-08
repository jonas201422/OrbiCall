import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { DemoButton } from "../components/DemoButton";
import { Icon } from "../components/Icon";
import { JsonLd } from "../components/JsonLd";
import { PageHero } from "../components/PageHero";
import { pageMeta, pricingBenefits } from "../data/content";
import { breadcrumbSchema, serviceSchema } from "../data/schemas";
import { usePageMeta } from "../hooks/usePageMeta";

const pricingCards = [
  {
    title: "Erstberatung",
    price: "Kostenloser Einstieg",
    text: "Wir prüfen gemeinsam, welche Telefonprozesse sich für Ihr Unternehmen automatisieren lassen.",
    items: ["Anrufarten verstehen", "Branche und Ziele klären", "Demo-Szenario vorbereiten"],
  },
  {
    title: "Individuelles Angebot",
    price: "Nach Bedarf",
    text: "Das Angebot richtet sich nach Anrufvolumen, Branchenlogik, Integrationen und gewünschtem Serviceumfang.",
    items: ["Setup und Testphase", "KI Gesprächslogik", "Weiterleitungen und Zusammenfassungen"],
  },
  {
    title: "Live-Betrieb",
    price: "Skalierbar",
    text: "Nach der Einrichtung wird OrbiCall im Alltag genutzt und anhand echter Anfragen optimiert.",
    items: ["Live-Schaltung", "Auswertung typischer Anrufe", "Laufende Verbesserungen"],
  },
];

export function PricingPage() {
  usePageMeta(pageMeta.pricing);

  return (
    <main id="main">
      <JsonLd
        data={[
          serviceSchema("Preise für OrbiCall KI Telefonassistent", pageMeta.pricing.path),
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Preise", path: pageMeta.pricing.path },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Preise"
        title="Individuelles Angebot für Ihren KI Telefonassistenten"
        lead="OrbiCall wird an Branche, Anrufvolumen, Terminprozesse und Weiterleitungen angepasst. Deshalb erhalten Unternehmen ein seriöses Angebot statt pauschaler Paketversprechen."
        primaryCta={{ label: "Demo buchen", href: "external-demo" }}
        secondaryCta={{ label: "Kontakt aufnehmen", href: "/kontakt" }}
      >
        <div className="answer-card">
          <p className="section-kicker">Direkte Antwort</p>
          <p>
            OrbiCall erstellt individuelle Angebote. Entscheidend sind Anrufvolumen, gewünschte Funktionen,
            Integrationen, Testphase und die Komplexität der Telefonprozesse.
          </p>
        </div>
      </PageHero>

      <div className="container">
        <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Preise", href: "/preise" }]} />
      </div>

      <section className="section pricing-section" aria-labelledby="pricing-title">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Struktur</p>
            <h2 id="pricing-title">Klare Bausteine statt unklarer Flatrate.</h2>
            <p className="section-lead">
              Wenn konkrete Preise final definiert sind, sollten sie hier ergänzt werden. Bis dahin zeigt diese Seite
              transparent, woraus ein OrbiCall Angebot besteht.
            </p>
          </div>
          <div className="pricing-grid" data-reveal>
            {pricingCards.map((card) => (
              <article className="glass-card pricing-card" key={card.title}>
                <h3>{card.title}</h3>
                <strong>{card.price}</strong>
                <p>{card.text}</p>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section content-section" aria-labelledby="included-title">
        <div className="container content-grid">
          <article className="content-copy" data-reveal>
            <p className="section-kicker">Leistungsumfang</p>
            <h2 id="included-title">Was ist im Angebot typischerweise enthalten?</h2>
            <p>
              Ein sinnvoller KI Telefonassistent besteht nicht nur aus einer Stimme am Telefon. Er braucht eine klare
              Gesprächslogik, definierte Grenzen, passende Antworten, Datenschutzabstimmung und ein Testsetup, das
              echte Anrufe realistisch abbildet.
            </p>
            <p>
              OrbiCall plant daher zuerst, welche Anfragen automatisiert werden sollen: Terminbuchung mit KI, FAQ,
              Weiterleitungen, Gesprächszusammenfassungen, Rückruflisten oder Lead-Qualifizierung. Danach wird das
              Angebot passend zum Unternehmen erstellt.
            </p>
          </article>
          <div className="checklist-panel" data-reveal>
            {pricingBenefits.map((benefit) => (
              <div className="benefit-item" key={benefit}>
                <Icon name="check" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section comparison-section" aria-labelledby="price-next-title">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Transparenz</p>
            <h2 id="price-next-title">Was noch offen ist und wie es weitergeht.</h2>
          </div>
          <div className="comparison-grid" data-reveal>
            <article className="glass-card comparison-card">
              <p className="section-kicker">Noch offen</p>
              <h3>Konkrete Preise ergänzen</h3>
              <p>
                Sobald Paketpreise, Mindestlaufzeiten, Setup-Kosten oder Nutzungsmodelle final sind, sollten diese
                Angaben hier rechtlich und vertrieblich geprüft ergänzt werden.
              </p>
            </article>
            <article className="glass-card comparison-card highlighted">
              <p className="section-kicker">Nächster Schritt</p>
              <h3>Demo buchen</h3>
              <p>
                In der Demo wird klar, welcher Umfang für Ihr Unternehmen sinnvoll ist und welche Angebotsstruktur
                realistisch passt.
              </p>
              <DemoButton />
            </article>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
