import { CTASection } from "../components/CTASection";
import { FAQBlock } from "../components/FAQBlock";
import { JsonLd } from "../components/JsonLd";
import { PageHero } from "../components/PageHero";
import { faqItems, pageMeta } from "../data/content";
import { breadcrumbSchema, faqSchema } from "../data/schemas";
import { usePageMeta } from "../hooks/usePageMeta";

export function FAQPage() {
  usePageMeta(pageMeta.faq);

  return (
    <main id="main">
      <JsonLd
        data={[
          faqSchema(faqItems, pageMeta.faq.path),
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "FAQ", path: pageMeta.faq.path },
          ]),
        ]}
      />
      <PageHero
        eyebrow="FAQ"
        title="Häufige Fragen zu OrbiCall"
        lead="Klare Antworten zu KI Telefonassistenten, Terminbuchung, Gesprächszusammenfassungen, DSGVO, Weiterleitung, Einrichtung, Kosten und Demo."
        primaryCta={{ label: "Demo buchen", href: "external-demo" }}
        secondaryCta={{ label: "Kontakt aufnehmen", href: "/kontakt" }}
      >
        <div className="answer-card">
          <p className="section-kicker">Kurzantwort</p>
          <p>
            OrbiCall hilft Unternehmen in Österreich, Telefonannahme zu automatisieren und wiederkehrende
            Kundenanfragen zuverlässiger zu bearbeiten.
          </p>
        </div>
      </PageHero>
      <FAQBlock
        id="faq-page-list"
        kicker="Antworten"
        title="Antworten auf die wichtigsten Fragen"
        lead="Diese FAQ ist so formuliert, dass Interessenten, Google und KI-Suchmaschinen schnell verstehen, was OrbiCall leistet."
        items={faqItems}
      />
      <CTASection />
    </main>
  );
}
