import { LegalLayout } from "../components/LegalLayout";
import { site } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export function DatenschutzPage() {
  usePageMeta({
    title: "Datenschutzerklärung - Orbicall",
    description: "Einfache Datenschutzerklärung für Orbicall mit Hinweisen zu Kontaktaufnahme, Logfiles und Cookies.",
  });

  return (
    <LegalLayout eyebrow="Datenschutz" title="Datenschutzerklärung">
      <p>
        Diese Datenschutzerklärung beschreibt in einfacher Form, welche Daten beim Besuch dieser Website und
        bei einer Kontaktaufnahme verarbeitet werden können. Bitte vor Veröffentlichung mit konkreten technischen
        Dienstleistern, echten Kontaktdaten und rechtlicher Prüfung ergänzen.
      </p>

      <h2>1. Verantwortliche</h2>
      <p>
        Verantwortlich für diese Website ist {site.brand}, betrieben von {site.founders}, {site.country}.
      </p>
      <p className="placeholder">
        Adresse: {site.legalAddressPlaceholder}
        <br />
        E-Mail: {site.legalEmailPlaceholder}
        <br />
        Telefon: {site.legalPhonePlaceholder}
      </p>

      <h2>2. Kontaktaufnahme per Formular oder E-Mail</h2>
      <p>
        Wenn du uns über das Kontaktformular oder per E-Mail kontaktierst, verarbeiten wir die von dir
        angegebenen Daten, um deine Anfrage zu beantworten und eine Demo oder Rückmeldung vorzubereiten.
        Dazu können Name, Unternehmen, E-Mail-Adresse, Telefonnummer und Nachricht gehören.
      </p>
      <p>
        Das Formular speichert keine Daten lokal. Ohne angebundenes Backend wird aktuell nur ein Hinweis angezeigt
        oder eine spätere E-Mail-Weiterleitung vorbereitet, sobald eine Kontaktadresse ergänzt wurde.
      </p>

      <h2>3. Server-Logfiles</h2>
      <p>
        Beim Aufruf der Website können technisch notwendige Zugriffsdaten durch den Hosting-Anbieter verarbeitet
        werden, zum Beispiel IP-Adresse, Zeitpunkt des Aufrufs, angefragte Datei, Browserinformationen und
        Statuscodes. Diese Daten dienen der Bereitstellung, Sicherheit und Fehleranalyse der Website.
      </p>
      <p className="placeholder">Hosting-Anbieter: {site.hostingPlaceholder}</p>

      <h2>4. Cookies und lokale Speicherung</h2>
      <p>
        Die Website nutzt aktuell keine Analyse- oder Marketingcookies. Für den Cookie-Hinweis kann lokal im
        Browser gespeichert werden, welche Auswahl du getroffen hast. Diese Speicherung dient nur der UI-Funktion
        und verhindert, dass der Hinweis bei jedem Besuch erneut erscheint.
      </p>

      <h2>5. Keine Analyse- oder Marketingcookies ohne Einwilligung</h2>
      <p>
        Statistik- und Marketingkategorien sind in der Oberfläche vorbereitet, standardmäßig aber deaktiviert.
        Es werden keine nicht notwendigen Cookies oder Tracking-Skripte gesetzt, bevor eine passende Einwilligung
        und technische Umsetzung vorhanden ist.
      </p>

      <h2>6. Drittanbieter</h2>
      <p>
        Für die Buchung einer Demo kann Calendly eingebunden oder verlinkt werden. Dabei werden Inhalte und
        Skripte von Calendly geladen, um den Buchungsbutton beziehungsweise den Buchungsflow bereitzustellen.
        Beim Öffnen oder Nutzen der Buchung gelten zusätzlich die Datenschutzinformationen von Calendly.
      </p>
      <p className="placeholder">Weitere Drittanbieter: {site.thirdPartyPlaceholder}</p>

      <h2>7. Rechte der betroffenen Personen</h2>
      <p>
        Betroffene Personen können, abhängig von den gesetzlichen Voraussetzungen, Auskunft, Berichtigung,
        Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen bestimmte
        Verarbeitungen verlangen.
      </p>

      <h2>8. Kontakt für Datenschutzanfragen</h2>
      <p className="placeholder">
        Datenschutzkontakt: {site.legalEmailPlaceholder}
      </p>

      <h2>9. Beschwerderecht</h2>
      <p>
        Wenn du der Ansicht bist, dass die Verarbeitung deiner personenbezogenen Daten gegen Datenschutzrecht
        verstößt, kannst du dich bei der zuständigen Datenschutzbehörde beschweren. In Österreich ist dies
        die Österreichische Datenschutzbehörde.
      </p>

      <h2>10. Änderungen</h2>
      <p>
        Diese Datenschutzerklärung sollte angepasst werden, sobald Hosting, Kontaktwege, Integrationen oder
        weitere Dienste final feststehen.
      </p>
    </LegalLayout>
  );
}
