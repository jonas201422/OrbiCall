import { CTASection } from "../components/CTASection";
import { Icon } from "../components/Icon";
import { JsonLd } from "../components/JsonLd";
import { PageHero } from "../components/PageHero";
import { pageMeta } from "../data/content";
import { breadcrumbSchema } from "../data/schemas";
import { site } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

const values = [
  {
    icon: "shield",
    title: "Vertrauen vor KI-Hype",
    text: "Telefonie ist sensibel. OrbiCall soll klar, nachvollziehbar und verantwortungsvoll eingesetzt werden.",
  },
  {
    icon: "building",
    title: "Österreichischer Fokus",
    text: "Die Lösung entsteht für KMU, Praxen und Dienstleister in Österreich, besonders in Linz und Oberösterreich.",
  },
  {
    icon: "check",
    title: "Praktische Wirkung",
    text: "Wichtig ist nicht, dass KI beeindruckt. Wichtig ist, dass weniger Anrufe verloren gehen und Teams spürbar entlastet werden.",
  },
] as const;

export function AboutPage() {
  usePageMeta(pageMeta.about);

  return (
    <main id="main">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Über uns", path: pageMeta.about.path },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Über uns"
        title="OrbiCall ist ein österreichisches Startup für KI Telefonassistenten"
        lead="OrbiCall entwickelt AI Call Agents für Unternehmen, die telefonisch erreichbar bleiben, Teams entlasten und Kundenanfragen professioneller strukturieren möchten."
        primaryCta={{ label: "Demo buchen", href: "external-demo" }}
        secondaryCta={{ label: "Kontakt aufnehmen", href: "/kontakt" }}
      >
        <div className="answer-card">
          <p className="section-kicker">Gründer</p>
          <p>
            OrbiCall wird von Jonas Abdulla und Armin Kero als CEOs aufgebaut. Das Ziel ist eine moderne,
            vertrauenswürdige KI-Telefonielösung für österreichische Unternehmen.
          </p>
        </div>
      </PageHero>

      <section className="section content-section" aria-labelledby="about-title">
        <div className="container content-grid">
          <article className="content-copy" data-reveal>
            <p className="section-kicker">Was ist OrbiCall?</p>
            <h2 id="about-title">Ein junges Team mit klarem B2B-Fokus.</h2>
            <p>
              OrbiCall ist ein österreichisches B2B-Startup für KI Telefonassistenten. Die Lösung richtet sich an
              Unternehmen, die telefonisch erreichbar sein müssen, aber nicht jeden Anruf sofort persönlich annehmen
              können. Dazu zählen Zahnarztpraxen, Friseure, Immobilienmakler, Werkstätten, Restaurants und viele KMU.
            </p>
            <p>
              Gründer und CEOs sind Jonas Abdulla und Armin Kero. Beide bauen OrbiCall mit dem Anspruch auf, KI im
              Telefonservice praktisch, verständlich und seriös nutzbar zu machen. Der Fokus liegt nicht auf großen
              Versprechen, sondern auf einem konkreten Problem: Anrufe werden verpasst, Teams werden unterbrochen und
              Kunden erhalten zu spät eine Antwort.
            </p>
            <p>
              OrbiCall soll diese Lücke schließen. Der KI Telefonassistent nimmt Anrufe entgegen, beantwortet häufige
              Fragen, unterstützt Terminbuchungen, fasst Gespräche zusammen und leitet wichtige Anliegen weiter. So
              bleibt der persönliche Service erhalten, während wiederkehrende Telefonarbeit besser organisiert wird.
            </p>
          </article>
          <aside className="founder-card glass-card" data-reveal>
            <h3>Kontakt zu den CEOs</h3>
            {site.contactPeople.map((person) => (
              <div className="founder-contact" key={person.email}>
                <strong>{person.name}</strong>
                <span>{person.role}</span>
                <a href={`mailto:${person.email}`}>{person.email}</a>
                <a href={person.phoneHref}>{person.phone}</a>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="section soft-section" aria-labelledby="values-title">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">Haltung</p>
            <h2 id="values-title">Wofür OrbiCall steht.</h2>
            <p className="section-lead">
              Eine gute KI-Telefonielösung muss professionell wirken, verlässlich funktionieren und verständlich
              erklären, was automatisiert wird und was nicht.
            </p>
          </div>
          <div className="feature-grid three-grid" data-reveal>
            {values.map((value) => (
              <article className="glass-card feature-card" key={value.title}>
                <span className="icon-badge">
                  <Icon name={value.icon} />
                </span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
