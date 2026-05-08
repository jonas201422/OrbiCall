import { JsonLd } from "../components/JsonLd";
import { LegalLayout } from "../components/LegalLayout";
import { breadcrumbSchema } from "../data/schemas";
import { site } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export function DatenschutzPage() {
  usePageMeta({
    title: "Datenschutz | OrbiCall DSGVO",
    description:
      "Datenschutzhinweise von OrbiCall mit DSGVO-Fokus, Kontaktaufnahme, Server-Logfiles, Cookies und Demo-Anfragen.",
    path: "/datenschutz",
  });

  return (
    <LegalLayout eyebrow="Datenschutz" title="Datenschutzerklärung">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Datenschutz", path: "/datenschutz" },
        ])}
      />
      <div className="operator-note">
        TODO: Diese Datenschutzerklärung muss vor Veröffentlichung mit den tatsächlich eingesetzten Hosting-,
        Telefonie-, KI-, Formular-, Kalender- und Analyse-Anbietern abgeglichen und rechtlich geprüft werden.
      </div>

      <p>
        Diese Datenschutzerklärung beschreibt, welche personenbezogenen Daten beim Besuch der Website und bei einer
        Kontaktaufnahme mit OrbiCall verarbeitet werden können. OrbiCall richtet sich an Unternehmen in Österreich und
        achtet auf eine DSGVO-orientierte, transparente und zweckgebundene Verarbeitung.
      </p>

      <h2>1. Verantwortliche</h2>
      <p>
        Verantwortlich für diese Website ist {site.brand}, betrieben von {site.founderLabel}, {site.country}.
      </p>
      <p className="placeholder">
        Adresse: {site.legalAddressPlaceholder}
        <br />
        Rechtsform: {site.legalFormPlaceholder}
      </p>
      <p>
        Datenschutzanfragen können an folgende E-Mail-Adressen gerichtet werden:{" "}
        {site.contactEmails.map((email, index) => (
          <span key={email}>
            {index > 0 ? ", " : ""}
            <a href={`mailto:${email}`}>{email}</a>
          </span>
        ))}
        .
      </p>

      <h2>2. Kontaktaufnahme per Formular, E-Mail oder Telefon</h2>
      <p>
        Wenn Sie OrbiCall kontaktieren, werden die von Ihnen angegebenen Daten verarbeitet, um Ihre Anfrage zu
        beantworten, eine Demo vorzubereiten oder ein Angebot zu erstellen. Dazu können Name, Unternehmen,
        E-Mail-Adresse, Telefonnummer, Nachricht, Branche und gewünschte Telefonprozesse gehören.
      </p>
      <p>
        Das Kontaktformular auf dieser Website öffnet aktuell eine vorbereitete E-Mail. Es speichert keine Anfrage in
        einem eigenen Backend und übermittelt keine Daten an ein Formularsystem.
      </p>

      <h2>3. Demo-Buchung und Kalenderlinks</h2>
      <p>
        Für Demo-Termine kann OrbiCall auf externe Kalender- oder Buchungsdienste verlinken. Beim Öffnen eines externen
        Buchungslinks gelten zusätzlich die Datenschutzinformationen des jeweiligen Anbieters.
      </p>
      <p className="placeholder">{site.thirdPartyPlaceholder}</p>

      <h2>4. Server-Logfiles und Hosting</h2>
      <p>
        Beim Aufruf der Website können technisch notwendige Zugriffsdaten durch den Hosting-Anbieter verarbeitet werden,
        etwa IP-Adresse, Zeitpunkt des Aufrufs, angefragte Datei, Browserinformationen, Referrer und Statuscodes. Diese
        Daten dienen der Bereitstellung, Sicherheit und Fehleranalyse.
      </p>
      <p className="placeholder">{site.hostingPlaceholder}</p>

      <h2>5. Cookies und lokale Speicherung</h2>
      <p>
        Die Website nutzt aktuell eine lokale Speicherung für die Cookie-Auswahl. Diese Speicherung ist technisch
        notwendig, damit der Hinweis nicht bei jedem Besuch erneut erscheint. Analyse- und Marketingdienste werden auf
        dieser Website nicht aktiv eingebunden, solange keine entsprechende Einwilligung und technische Dokumentation
        vorhanden sind.
      </p>

      <h2>6. KI Telefonassistent und Telefoniedaten</h2>
      <p>
        Beim Einsatz eines KI Telefonassistenten können je nach Setup Gesprächsdaten, Kontaktdaten, Anliegen,
        Terminwünsche und Gesprächszusammenfassungen verarbeitet werden. Welche Daten konkret verarbeitet werden, hängt
        vom jeweiligen Kundenprojekt, der Telefonie-Integration und den vereinbarten Prozessen ab.
      </p>
      <p className="placeholder">
        TODO: Konkrete KI-, Telefonie-, Speicher-, Transkriptions- und Integrationsanbieter samt Rechtsgrundlage,
        Auftragsverarbeitung, Speicherfristen und Datenstandorten ergänzen.
      </p>

      <h2>7. Rechtsgrundlagen</h2>
      <p>
        Die Verarbeitung kann je nach Kontext auf vorvertraglichen Maßnahmen, Vertragserfüllung, berechtigten
        Interessen, gesetzlichen Pflichten oder Einwilligung beruhen. Die konkrete Rechtsgrundlage muss für produktive
        Kundenprojekte anhand der finalen technischen Umsetzung geprüft und dokumentiert werden.
      </p>

      <h2>8. Speicherdauer</h2>
      <p>
        Personenbezogene Daten werden nur so lange verarbeitet, wie dies für den jeweiligen Zweck erforderlich ist oder
        gesetzliche Aufbewahrungspflichten bestehen. Für Demo-Anfragen und Telefonieprojekte sind konkrete
        Speicherfristen zu definieren.
      </p>
      <p className="placeholder">TODO: Konkrete Speicherfristen je Datenkategorie ergänzen.</p>

      <h2>9. Rechte betroffener Personen</h2>
      <p>
        Betroffene Personen können, abhängig von den gesetzlichen Voraussetzungen, Auskunft, Berichtigung, Löschung,
        Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch verlangen. Soweit eine Verarbeitung auf
        Einwilligung beruht, kann diese Einwilligung mit Wirkung für die Zukunft widerrufen werden.
      </p>

      <h2>10. Beschwerderecht</h2>
      <p>
        Wenn Sie der Ansicht sind, dass die Verarbeitung personenbezogener Daten gegen Datenschutzrecht verstößt,
        können Sie sich bei der Österreichischen Datenschutzbehörde beschweren.
      </p>

      <h2>11. Änderungen</h2>
      <p>
        Diese Datenschutzerklärung wird angepasst, sobald Hosting, Integrationen, Telefonieanbieter, KI-Dienste,
        Analyse-Tools oder weitere Verarbeitungen final feststehen.
      </p>
    </LegalLayout>
  );
}
