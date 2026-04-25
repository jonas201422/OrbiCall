import { LegalLayout } from "../components/LegalLayout";
import { site } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export function ImpressumPage() {
  usePageMeta({
    title: "Impressum - Orbicall",
    description: "Impressum und Anbieterkennzeichnung von Orbicall mit Platzhaltern für Betreiberdaten.",
  });

  return (
    <LegalLayout eyebrow="Rechtliches" title="Impressum">
      <div className="operator-note">
        Bitte vor Veröffentlichung mit echten Unternehmensdaten ergänzen und rechtlich prüfen lassen.
      </div>

      <h2>Angaben gemäß gesetzlichen Informationspflichten</h2>
      <dl>
        <dt>Name</dt>
        <dd>{site.brand}</dd>
        <dt>Betreiber</dt>
        <dd>{site.founders}</dd>
        <dt>Land</dt>
        <dd>{site.country}</dd>
        <dt>Adresse</dt>
        <dd className="placeholder">{site.legalAddressPlaceholder}</dd>
        <dt>Rechtsform</dt>
        <dd className="placeholder">{site.legalFormPlaceholder}</dd>
        <dt>E-Mail</dt>
        <dd className="placeholder">{site.legalEmailPlaceholder}</dd>
        <dt>Telefonnummer</dt>
        <dd className="placeholder">{site.legalPhonePlaceholder}</dd>
      </dl>

      <h2>Unternehmensgegenstand</h2>
      <p>AI Call Agents / KI-Telefonassistenz / Automatisierung von Kundenkommunikation.</p>

      <h2>Weitere Angaben</h2>
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
        der Inhalte kann jedoch keine Gewähr übernommen werden. Unbekannte oder noch nicht festgelegte
        Unternehmensdaten sind bewusst als Platzhalter markiert.
      </p>

      <h2>Kontakt</h2>
      <p>
        Für Anfragen bitte das Kontaktformular auf der Startseite nutzen oder die oben genannte E-Mail-Adresse
        ergänzen, sobald die offiziellen Kontaktdaten feststehen.
      </p>
    </LegalLayout>
  );
}
