import { ContactSection } from "../components/ContactSection";
import { JsonLd } from "../components/JsonLd";
import { PageHero } from "../components/PageHero";
import { pageMeta } from "../data/content";
import { breadcrumbSchema } from "../data/schemas";
import { site } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export function ContactPage() {
  usePageMeta(pageMeta.contact);

  return (
    <main id="main">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Kontakt", path: pageMeta.contact.path },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Kontakt"
        title="Kontakt zu OrbiCall"
        lead="Kontaktieren Sie OrbiCall für eine Demo, ein individuelles Angebot oder Fragen zu KI Telefonassistenten für Unternehmen in Österreich."
        primaryCta={{ label: "Demo buchen", href: "external-demo" }}
        secondaryCta={{ label: "FAQ lesen", href: "/faq" }}
      >
        <div className="answer-card">
          <p className="section-kicker">Kontaktdaten</p>
          <p>
            Website: {site.website}
            <br />
            E-Mail: {site.contactEmails.join(" · ")}
          </p>
        </div>
      </PageHero>
      <ContactSection />
    </main>
  );
}
