import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { Icon } from "../components/Icon";
import { JsonLd } from "../components/JsonLd";
import { PageHero } from "../components/PageHero";
import { industryPages, pageMeta } from "../data/content";
import { breadcrumbSchema, serviceSchema } from "../data/schemas";
import { usePageMeta } from "../hooks/usePageMeta";

const industries = [
  industryPages.zahnaerzte,
  industryPages.friseure,
  industryPages.immobilien,
  industryPages.werkstaetten,
  industryPages.restaurants,
];

export function BranchesPage() {
  usePageMeta(pageMeta.industries);

  return (
    <main id="main">
      <JsonLd
        data={[
          serviceSchema("KI Telefonassistenten für Branchen in Österreich", pageMeta.industries.path),
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Branchen", path: pageMeta.industries.path },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Branchen"
        title="KI Telefonassistenten für Branchen mit hohem Anrufvolumen"
        lead="OrbiCall unterstützt Unternehmen, bei denen jeder verpasste Anruf Termine, Leads, Reservierungen oder Serviceaufträge kosten kann."
        primaryCta={{ label: "Demo buchen", href: "external-demo" }}
        secondaryCta={{ label: "KI Telefonassistent verstehen", href: "/ki-telefonassistent" }}
      >
        <div className="answer-card">
          <p className="section-kicker">Direkte Antwort</p>
          <p>
            OrbiCall eignet sich besonders für Zahnärzte, Friseure, Immobilienmakler, Werkstätten,
            Restaurants und österreichische KMU mit vielen wiederkehrenden Telefonanfragen.
          </p>
        </div>
      </PageHero>

      <div className="container">
        <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Branchen", href: "/branchen" }]} />
      </div>

      <section className="section soft-section" aria-labelledby="branches-title">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Übersicht</p>
            <h2 id="branches-title">Branchenlösungen von OrbiCall.</h2>
            <p className="section-lead">
              Jede Branchen-Seite erklärt konkrete Anwendungsfälle, typische Anrufe und den Nutzen eines
              KI Telefonassistenten im Alltag.
            </p>
          </div>
          <div className="industry-grid branches-overview-grid" data-reveal>
            {industries.map((industry) => (
              <article className="glass-card industry-card" key={industry.path}>
                <span className="icon-badge">
                  <Icon name="phone" />
                </span>
                <h3>{industry.label}</h3>
                <p>{industry.intro}</p>
                <a className="text-link" href={industry.path}>
                  Seite öffnen
                  <Icon name="arrow" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
