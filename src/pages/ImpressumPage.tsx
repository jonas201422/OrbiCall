import { JsonLd } from "../components/JsonLd";
import { LegalLayout } from "../components/LegalLayout";
import { breadcrumbSchema } from "../data/schemas";
import { site } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export function ImpressumPage() {
  usePageMeta({
    title: "Impressum | OrbiCall",
    description: "Impressum und Anbieterkennzeichnung von OrbiCall mit Kontaktinformationen und rechtlichen Pflichtangaben.",
    path: "/impressum",
  });

  return (
    <LegalLayout eyebrow="Rechtliches" title="Impressum">
      <JsonLd data={breadcrumbSchema([{ name: "Startseite", path: "/" }, { name: "Impressum", path: "/impressum" }])} />
      <div className="operator-note">
        TODO: Diese Impressumsseite muss vor Veröffentlichung mit den vollständigen rechtlichen Unternehmensdaten
        ergänzt und rechtlich geprüft werden.
      </div>

      <h2>Angaben gemäß gesetzlichen Informationspflichten</h2>
      <dl>
        <dt>Name der Website</dt>
        <dd>{site.brand}</dd>
        <dt>Betreiber</dt>
        <dd>{site.founderLabel}</dd>
        <dt>Land</dt>
        <dd>{site.country}</dd>
        <dt>Adresse</dt>
        <dd className="placeholder">{site.legalAddressPlaceholder}</dd>
        <dt>Rechtsform</dt>
        <dd className="placeholder">{site.legalFormPlaceholder}</dd>
        <dt>Website</dt>
        <dd>{site.website}</dd>
      </dl>

      <h2>Kontakt</h2>
      <dl>
        {site.contactPeople.map((person) => (
          <div className="definition-group" key={person.email}>
            <dt>{person.name}, {person.role}</dt>
            <dd>
              <a href={`mailto:${person.email}`}>{person.email}</a>
              <br />
              <a href={person.phoneHref}>{person.phone}</a>
            </dd>
          </div>
        ))}
      </dl>

      <h2>Unternehmensgegenstand</h2>
      <p>
        Entwicklung und Betrieb von KI Telefonassistenten, AI Call Agents, Telefonannahme-Automatisierung,
        Terminbuchungsunterstützung und Automatisierung von Kundenkommunikation für Unternehmen.
      </p>

      <h2>Weitere Pflichtangaben</h2>
      <dl>
        <dt>UID-Nummer</dt>
        <dd className="placeholder">{site.uidPlaceholder}</dd>
        <dt>Firmenbuchnummer</dt>
        <dd className="placeholder">{site.registerPlaceholder}</dd>
        <dt>Gewerbebehörde</dt>
        <dd className="placeholder">{site.authorityPlaceholder}</dd>
        <dt>Mitgliedschaft WKO</dt>
        <dd className="placeholder">{site.wkoPlaceholder}</dd>
        <dt>Anwendbare gewerbe- oder berufsrechtliche Vorschriften</dt>
        <dd className="placeholder">{site.rulesPlaceholder}</dd>
      </dl>

      <h2>Haftung für Inhalte</h2>
      <p>
        Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität
        kann keine Gewähr übernommen werden. Fehlende rechtliche Angaben sind bewusst als TODO markiert und müssen vor
        dem produktiven Einsatz ergänzt werden.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Diese Website kann Links zu externen Websites enthalten. Für deren Inhalte sind ausschließlich die jeweiligen
        Betreiber verantwortlich.
      </p>
    </LegalLayout>
  );
}
