import { Breadcrumbs } from "../components/Breadcrumbs";
import { CTASection } from "../components/CTASection";
import { FAQBlock } from "../components/FAQBlock";
import { Icon } from "../components/Icon";
import { JsonLd } from "../components/JsonLd";
import { PageHero } from "../components/PageHero";
import { industryPages, type IndustryKey } from "../data/content";
import { breadcrumbSchema, faqSchema, serviceSchema } from "../data/schemas";
import { usePageMeta } from "../hooks/usePageMeta";

type IndustryPageProps = {
  industry: IndustryKey;
};

export function IndustryPage({ industry }: IndustryPageProps) {
  const page = industryPages[industry];

  usePageMeta({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
  });

  const breadcrumbs = [
    { label: "Startseite", href: "/" },
    { label: "Branchen", href: "/branchen" },
    { label: page.label, href: page.path },
  ];

  return (
    <main id="main">
      <JsonLd
        data={[
          serviceSchema(page.title, page.path),
          faqSchema(page.faq, page.path),
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Branchen", path: "/branchen" },
            { name: page.label, path: page.path },
          ]),
        ]}
      />
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        lead={page.intro}
        primaryCta={{ label: "Demo buchen", href: "external-demo" }}
        secondaryCta={{ label: "Kontakt aufnehmen", href: "/kontakt" }}
      >
        <div className="answer-card">
          <p className="section-kicker">Direkte Antwort</p>
          <p>{page.quote}</p>
        </div>
      </PageHero>

      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="section soft-section" aria-labelledby="industry-problems-title">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Probleme</p>
            <h2 id="industry-problems-title">Welche Probleme löst OrbiCall?</h2>
            <p className="section-lead">
              OrbiCall ist für konkrete Telefonprozesse gebaut: nicht für KI-Hype, sondern für weniger verpasste
              Anrufe, bessere Erreichbarkeit und klarere Abläufe im Alltag.
            </p>
          </div>
          <div className="feature-grid three-grid" data-reveal>
            {page.problems.map((problem) => (
              <article className="glass-card feature-card" key={problem.title}>
                <span className="icon-badge">
                  <Icon name={problem.icon} />
                </span>
                <h3>{problem.title}</h3>
                <p>{problem.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section content-section" aria-labelledby="industry-functions-title">
        <div className="container content-grid">
          <article className="content-copy" data-reveal>
            <p className="section-kicker">Funktionen</p>
            <h2 id="industry-functions-title">Welche Funktionen bietet OrbiCall für {page.label}?</h2>
            <p>
              Der KI Telefonassistent wird auf die typischen Telefonate Ihrer Branche abgestimmt. Dadurch kann OrbiCall
              nicht nur abheben, sondern die richtigen Fragen stellen, Anfragen vorsortieren und Ihrem Team die Arbeit
              erleichtern.
            </p>
            <p>
              Wichtig ist dabei die klare Grenze zwischen Automatisierung und menschlicher Verantwortung. OrbiCall kann
              Standardprozesse übernehmen, Informationen vorbereiten und Anliegen weiterleiten. Entscheidungen, die
              Fachwissen, Einzelfallprüfung oder persönliche Verantwortung brauchen, bleiben beim Team.
            </p>
          </article>
          <div className="stacked-cards" data-reveal>
            {page.functions.map((feature) => (
              <article className="glass-card compact-card" key={feature.title}>
                <span className="icon-badge">
                  <Icon name={feature.icon} />
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {page.sections.map((section, index) => (
        <section className="section content-section" aria-labelledby={`industry-section-${index}`} key={section.title}>
          <div className={`container content-grid ${index % 2 === 1 ? "reverse" : ""}`}>
            <article className="content-copy" data-reveal>
              <p className="section-kicker">Antwort</p>
              <h2 id={`industry-section-${index}`}>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
            <aside className="insight-panel glass-card" data-reveal>
              <h3>Für österreichische Unternehmen geeignet</h3>
              <p>
                OrbiCall richtet sich an KMU, Praxen und lokale Dienstleister in Österreich, besonders in Linz und
                Oberösterreich. Sprache, Tonalität, Datenschutz und Prozesse werden auf den österreichischen Markt
                abgestimmt.
              </p>
              <a className="text-link" href="/ki-telefonassistent">
                Mehr zum KI Telefonassistenten
                <Icon name="arrow" />
              </a>
            </aside>
          </div>
        </section>
      ))}

      <FAQBlock
        id={`${industry}-faq`}
        title={`Häufige Fragen für ${page.label}`}
        lead="Kurze Antworten zu Einsatz, Grenzen und Einrichtung des OrbiCall KI Telefonassistenten."
        items={page.faq}
      />
      <CTASection />
    </main>
  );
}
