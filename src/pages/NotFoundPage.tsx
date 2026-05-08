import { Icon } from "../components/Icon";
import { PageHero } from "../components/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";

export function NotFoundPage() {
  usePageMeta({
    title: "Seite nicht gefunden | OrbiCall",
    description: "Diese OrbiCall Seite wurde nicht gefunden.",
    path: window.location.pathname,
  });

  return (
    <main id="main">
      <PageHero
        eyebrow="404"
        title="Diese Seite wurde nicht gefunden"
        lead="Die gesuchte Seite existiert nicht oder wurde verschoben. Die wichtigsten OrbiCall Seiten sind weiterhin direkt erreichbar."
        primaryCta={{ label: "Zur Startseite", href: "/" }}
        secondaryCta={{ label: "Demo buchen", href: "external-demo" }}
      />
      <section className="section soft-section" aria-labelledby="not-found-links">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Weiter</p>
            <h2 id="not-found-links">Wichtige OrbiCall Seiten</h2>
          </div>
          <div className="feature-grid three-grid">
            {[
              { label: "KI Telefonassistent", href: "/ki-telefonassistent" },
              { label: "Preise", href: "/preise" },
              { label: "Kontakt", href: "/kontakt" },
            ].map((link) => (
              <a className="glass-card feature-card link-card" href={link.href} key={link.href}>
                <span className="icon-badge">
                  <Icon name="arrow" />
                </span>
                <h3>{link.label}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
