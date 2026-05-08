import type { IconName } from "../components/Icon";

export type FAQItem = {
  question: string;
  answer: string;
};

export type FeatureItem = {
  icon: IconName;
  title: string;
  text: string;
};

export type IndustryKey = "zahnaerzte" | "friseure" | "immobilien" | "werkstaetten" | "restaurants";

export const pageMeta = {
  home: {
    path: "/",
    title: "OrbiCall – KI Telefonassistent für Unternehmen in Österreich",
    description:
      "OrbiCall automatisiert Telefonannahme, Terminbuchung und Kundenanfragen mit KI Call Agents für Zahnärzte, Friseure, Immobilien, Werkstätten und KMU.",
  },
  assistant: {
    path: "/ki-telefonassistent",
    title: "KI Telefonassistent einfach erklärt | OrbiCall Österreich",
    description:
      "Was ist ein KI Telefonassistent? OrbiCall erklärt Funktionen, Vorteile, Einrichtung, DSGVO-Fokus und Einsatzbereiche für österreichische Unternehmen.",
  },
  industries: {
    path: "/branchen",
    title: "Branchen für KI Telefonassistenten | OrbiCall",
    description:
      "OrbiCall für Zahnärzte, Friseure, Immobilienmakler, Werkstätten, Restaurants und österreichische KMU mit hohem Telefonaufkommen.",
  },
  pricing: {
    path: "/preise",
    title: "Preise für KI Telefonassistenten | OrbiCall",
    description:
      "Individuelles OrbiCall Angebot: KI Telefonassistent, Telefonannahme, Terminbuchung und Einrichtung für Unternehmen in Österreich.",
  },
  demo: {
    path: "/demo",
    title: "Demo buchen | OrbiCall KI Telefonassistent",
    description:
      "Buchen Sie eine OrbiCall Demo und sehen Sie, wie ein KI Telefonassistent Anrufe annimmt, Termine unterstützt und Teams entlastet.",
  },
  about: {
    path: "/ueber-uns",
    title: "Über OrbiCall | Österreichisches KI-Telefonie-Startup",
    description:
      "OrbiCall ist ein österreichisches Startup für KI Telefonassistenten. Gegründet von Jonas Abdulla und Armin Kero für moderne KMU.",
  },
  contact: {
    path: "/kontakt",
    title: "Kontakt | OrbiCall KI Telefonassistent Österreich",
    description:
      "Kontaktieren Sie OrbiCall für KI Telefonassistenten in Österreich. Ansprechpartner: Jonas Abdulla und Armin Kero.",
  },
  faq: {
    path: "/faq",
    title: "FAQ zu OrbiCall und KI Telefonassistenten",
    description:
      "Antworten auf häufige Fragen zu OrbiCall, KI Telefonassistenten, Terminbuchung, DSGVO, Einrichtung, Kosten und Demo.",
  },
};

export const homeFaq: FAQItem[] = [
  {
    question: "Was ist OrbiCall?",
    answer:
      "OrbiCall ist ein KI Telefonassistent für Unternehmen in Österreich. Die Lösung nimmt Anrufe automatisch entgegen, beantwortet häufige Fragen, unterstützt bei Terminbuchungen und fasst Gespräche für das Team zusammen.",
  },
  {
    question: "Für wen ist OrbiCall geeignet?",
    answer:
      "OrbiCall eignet sich für österreichische KMU, Praxen, Friseure, Immobilienmakler, Werkstätten, Restaurants und Teams, die viele wiederkehrende Telefonanfragen erhalten.",
  },
  {
    question: "Warum ist OrbiCall besser als ein normaler Anrufbeantworter?",
    answer:
      "Ein normaler Anrufbeantworter zeichnet nur Nachrichten auf. OrbiCall führt einen Dialog, fragt wichtige Informationen ab, kann Termine vorbereiten und liefert strukturierte Zusammenfassungen.",
  },
  {
    question: "Kann OrbiCall Termine buchen?",
    answer:
      "Ja. OrbiCall kann Terminwünsche aufnehmen, passende Daten abfragen und je nach Einrichtung Terminbuchungen vorbereiten oder an vorhandene Prozesse anschließen.",
  },
  {
    question: "Ist OrbiCall DSGVO-konform?",
    answer:
      "OrbiCall wird mit DSGVO-orientierten Prozessen, klaren Zuständigkeiten und transparenter Datenverarbeitung für den österreichischen Markt aufgebaut.",
  },
  {
    question: "Wie kann ich OrbiCall testen?",
    answer:
      "Interessenten können eine Demo buchen. Im Demo-Termin wird gezeigt, wie ein KI Telefonassistent für das eigene Unternehmen klingen und arbeiten kann.",
  },
];

export const statsItems = [
  {
    value: "7x",
    title: "schneller qualifizierte Leads",
    text: "Harvard Business Review fand: Unternehmen, die innerhalb einer Stunde reagieren, qualifizieren Leads deutlich häufiger als später reagierende Teams.",
    source: "Harvard Business Review / HBS, 2011",
    href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
  },
  {
    value: "88%",
    title: "bewerten Erlebnis wie Produkt",
    text: "Salesforce berichtet, dass Kund:innen die Erfahrung mit einem Unternehmen fast so wichtig einstufen wie Produkt oder Service selbst.",
    source: "Salesforce State of the Connected Customer, 2022",
    href: "https://www.salesforce.com/au/news/stories/customer-engagement-research/",
  },
  {
    value: "97%",
    title: "sehen Service als Entscheidungsfaktor",
    text: "Microsoft beschreibt Kundenservice als zentralen Differenzierungsfaktor bei der Entscheidung für oder gegen ein Unternehmen.",
    source: "Microsoft Dynamics 365, Global Customer Service Report",
    href: "https://www.microsoft.com/en-us/dynamics-365/blog/business-leader/2016/04/28/97-of-customers-say-quot-customer-service-quot-is-a-key-differentiator-in-their-decisions/",
  },
] as const;

export const faqItems: FAQItem[] = [
  ...homeFaq,
  {
    question: "Kann OrbiCall Anrufe zusammenfassen?",
    answer:
      "Ja. Nach einem Gespräch kann OrbiCall die wichtigsten Punkte zusammenfassen: Anliegen, Kontaktdaten, gewünschte Termine, offene Fragen und empfohlene nächste Schritte.",
  },
  {
    question: "Welche Sprachen unterstützt OrbiCall?",
    answer:
      "OrbiCall kann mehrsprachige Kommunikation unterstützen. Welche Sprachen im konkreten Setup sinnvoll sind, wird in der Einrichtung anhand der Zielgruppe und Branche festgelegt.",
  },
  {
    question: "Was passiert bei komplexen Anfragen?",
    answer:
      "Komplexe oder sensible Anliegen werden nicht künstlich erzwungen. OrbiCall kann definierte Grenzen erkennen, Informationen aufnehmen und das Anliegen an zuständige Mitarbeiter weiterleiten.",
  },
  {
    question: "Kann der KI Agent an Mitarbeiter weiterleiten?",
    answer:
      "Ja. Weiterleitungen können nach Regeln eingerichtet werden, etwa bei Notfällen, VIP-Kunden, bestimmten Stichworten oder Anfragen, die menschliche Entscheidung brauchen.",
  },
  {
    question: "Wie lange dauert die Einrichtung?",
    answer:
      "Die Dauer hängt von Branche, gewünschtem Funktionsumfang und vorhandenen Systemen ab. In vielen Fällen kann ein erster KI Telefonassistent nach einem Erstgespräch, der Anpassung und einer Testphase zügig live gehen.",
  },
  {
    question: "Was kostet OrbiCall?",
    answer:
      "OrbiCall erstellt individuelle Angebote, weil Anrufvolumen, Integrationen, Branchenlogik und Serviceumfang je Unternehmen unterschiedlich sind. Auf der Preisseite sind die Angebotsbausteine beschrieben.",
  },
];

export const assistantFeatures: FeatureItem[] = [
  {
    icon: "calendar",
    title: "Telefonannahme & Terminabstimmung",
    text: "OrbiCall nimmt Anrufe entgegen, fragt Terminwünsche, Rückrufzeiten und wichtige Kontextdaten ab und bereitet Buchungen je nach Setup strukturiert vor.",
  },
  {
    icon: "message",
    title: "Antworten auf häufige Fragen",
    text: "Öffnungszeiten, Leistungen, Preise, Unterlagen, Anfahrt und Standardprozesse werden einheitlich und freundlich beantwortet.",
  },
  {
    icon: "summary",
    title: "Gesprächszusammenfassungen",
    text: "Das Team erhält strukturierte Zusammenfassungen statt unklarer Sprachnachrichten und kann schneller entscheiden, was als Nächstes zu tun ist.",
  },
  {
    icon: "route",
    title: "Weiterleitung an Mitarbeiter",
    text: "Dringende, komplexe oder sensible Anliegen können an definierte Ansprechpartner weitergegeben werden.",
  },
  {
    icon: "globe",
    title: "Mehrsprachige Kommunikation",
    text: "Mehrsprachige Antworten helfen Unternehmen, Anfragen von Kunden in Österreich professionell und inklusiv aufzunehmen.",
  },
  {
    icon: "building",
    title: "Branchenanpassung",
    text: "Gesprächslogik, Fragen, Weiterleitungen und Antworten werden an Branche, Leistungen und Abläufe des Unternehmens angepasst.",
  },
];

export const industryPages: Record<IndustryKey, {
  path: string;
  label: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  quote: string;
  problems: FeatureItem[];
  functions: FeatureItem[];
  sections: Array<{ title: string; body: string[] }>;
  faq: FAQItem[];
}> = {
  zahnaerzte: {
    path: "/branchen/zahnaerzte",
    label: "Zahnärzte",
    eyebrow: "Branchenlösung für Praxen",
    title: "KI Telefonassistent für Zahnärzte in Österreich",
    metaTitle: "KI Telefonassistent für Zahnärzte | OrbiCall Österreich",
    metaDescription:
      "OrbiCall unterstützt Zahnarztpraxen bei Terminvereinbarung, Rückfragen, Notfällen und verpassten Anrufen mit einem KI Telefonassistenten.",
    intro:
      "Zahnarztpraxen verlieren Zeit, wenn das Telefon während Behandlungen, Beratungsgesprächen oder Stoßzeiten dauerhaft klingelt. OrbiCall entlastet die Rezeption, nimmt Anliegen strukturiert auf und hilft dabei, Termine, Rückfragen und dringende Fälle besser zu sortieren.",
    quote:
      "OrbiCall ist ein KI Telefonassistent für Zahnarztpraxen, der Anrufe entgegennimmt, Terminwünsche erfasst, häufige Fragen beantwortet und das Praxisteam mit klaren Gesprächszusammenfassungen entlastet.",
    problems: [
      {
        icon: "phone",
        title: "Verpasste Anrufe",
        text: "Patienten rufen oft nur einmal an. Wenn niemand abhebt, entsteht Frust oder der Termin landet bei einer anderen Praxis.",
      },
      {
        icon: "headset",
        title: "Volle Rezeption",
        text: "Während Anmeldung, Abrechnung und Patientenbetreuung bleibt wenig Zeit für wiederkehrende Telefonate.",
      },
      {
        icon: "shield",
        title: "Sensible Anliegen",
        text: "Notfälle, Schmerzen und medizinische Rückfragen brauchen klare Regeln und eine zuverlässige Weiterleitung.",
      },
    ],
    functions: [
      {
        icon: "calendar",
        title: "Terminvereinbarung",
        text: "OrbiCall fragt Behandlungsgrund, Wunschzeit und Kontaktdaten ab und bereitet die Terminabstimmung vor.",
      },
      {
        icon: "message",
        title: "Rückfragen beantworten",
        text: "Häufige Fragen zu Öffnungszeiten, Unterlagen, Erstterminen oder Anfahrt werden einheitlich beantwortet.",
      },
      {
        icon: "route",
        title: "Notfälle weiterleiten",
        text: "Dringende Anliegen können nach definierten Kriterien an das Team oder eine Notfallinformation übergeben werden.",
      },
    ],
    sections: [
      {
        title: "Welche Probleme löst OrbiCall für Zahnarztpraxen?",
        body: [
          "Viele Praxen kennen das gleiche Muster: Ein Patient steht an der Rezeption, im Behandlungszimmer wartet das Team und gleichzeitig klingelt das Telefon. Jeder Anruf kann wichtig sein, aber nicht jeder Anruf braucht sofort eine Person. OrbiCall nimmt wiederkehrende Anliegen auf, erkennt den Kontext und sorgt dafür, dass Informationen nicht verloren gehen.",
          "Besonders nützlich ist das bei Terminwünschen, Absagen, Rückrufen, Fragen zur Mundhygiene, Unterlagen vor Erstterminen und Anliegen außerhalb der Öffnungszeiten. Die Praxis erhält keine unstrukturierten Sprachnachrichten, sondern verwertbare Informationen.",
        ],
      },
      {
        title: "Warum ist OrbiCall besser als ein normaler Anrufbeantworter?",
        body: [
          "Ein Anrufbeantworter verlangt vom Patienten, selbst zu erklären, was wichtig ist. OrbiCall führt aktiv durch das Gespräch. Der KI Telefonassistent fragt nach Name, Telefonnummer, Anliegen, Dringlichkeit und passenden Rückrufzeiten. Dadurch wird aus einem verpassten Anruf ein bearbeitbarer Vorgang.",
          "Für Zahnarztpraxen in Österreich ist das vor allem dann wertvoll, wenn Termine knapp sind und das Team nicht ständig aus dem Patientenfluss gerissen werden soll.",
        ],
      },
    ],
    faq: [
      {
        question: "Kann OrbiCall Schmerz- oder Notfallanfragen erkennen?",
        answer:
          "OrbiCall kann nach definierten Stichworten und Fragen dringende Anliegen erkennen und an klare Praxisregeln übergeben. Medizinische Entscheidungen bleiben beim Praxisteam.",
      },
      {
        question: "Kann OrbiCall bestehende Praxisprozesse berücksichtigen?",
        answer:
          "Ja. Begrüßung, Öffnungszeiten, Leistungen, Rückrufregeln und Terminlogik werden an die jeweilige Zahnarztpraxis angepasst.",
      },
    ],
  },
  friseure: {
    path: "/branchen/friseure",
    label: "Friseure",
    eyebrow: "Branchenlösung für Salons",
    title: "KI Telefonassistent für Friseure und Beauty-Salons",
    metaTitle: "KI Telefonassistent für Friseure | OrbiCall Österreich",
    metaDescription:
      "OrbiCall hilft Friseuren bei Terminbuchung, Absagen, Umbuchungen, Öffnungszeiten, Preisfragen und Neukundenanfragen.",
    intro:
      "In Friseur- und Beauty-Salons klingelt das Telefon oft genau dann, wenn gerade gefärbt, geschnitten oder beraten wird. OrbiCall nimmt Anfragen entgegen, beantwortet Standardfragen und hilft dabei, Terminwünsche, Absagen und Umbuchungen strukturiert aufzunehmen.",
    quote:
      "OrbiCall ist ein KI Telefonassistent für Friseure, der Terminwünsche, Absagen, Umbuchungen, Preisfragen und Neukundenanfragen automatisch aufnimmt und das Salonteam entlastet.",
    problems: [
      {
        icon: "calendar",
        title: "Terminchaos",
        text: "Neue Termine, Umbuchungen und Absagen kommen laufend herein und unterbrechen die Arbeit am Kunden.",
      },
      {
        icon: "phone",
        title: "Anrufe während Behandlungen",
        text: "Wenn niemand abhebt, verlieren Salons Neukunden oder wichtige kurzfristige Buchungen.",
      },
      {
        icon: "message",
        title: "Wiederkehrende Preisfragen",
        text: "Fragen zu Leistungen, Dauer, Preisen und Öffnungszeiten binden täglich unnötig viel Zeit.",
      },
    ],
    functions: [
      {
        icon: "calendar",
        title: "Terminwünsche aufnehmen",
        text: "Kunden nennen Service, Wunschzeit, Stylist und Kontaktdaten. Das Team erhält eine klare Zusammenfassung.",
      },
      {
        icon: "clock",
        title: "Absagen und Umbuchungen",
        text: "OrbiCall nimmt Änderungen auch außerhalb der Öffnungszeiten auf, damit Lücken schneller genutzt werden können.",
      },
      {
        icon: "spark",
        title: "Neukunden vorqualifizieren",
        text: "Der KI Telefonassistent fragt nach gewünschter Leistung, Haarlänge, Farbe oder Beratungsbedarf.",
      },
    ],
    sections: [
      {
        title: "Für welche Salons ist OrbiCall geeignet?",
        body: [
          "OrbiCall passt zu Friseuren, Barbershops, Kosmetikstudios und Beauty-Teams, die viele kurze Telefonate erhalten. Dazu zählen Terminfragen, Preisfragen, Öffnungszeiten, kurzfristige Verschiebungen und Anfragen von Neukunden.",
          "Gerade kleine Teams profitieren, weil Telefonate nicht mehr jede Behandlung unterbrechen. Der Salon bleibt erreichbar, ohne dass die persönliche Betreuung vor Ort leidet.",
        ],
      },
      {
        title: "Welche Probleme löst OrbiCall im Salonalltag?",
        body: [
          "Ein verpasster Anruf kann ein neuer Stammkunde sein. Gleichzeitig möchte niemand während einer Farbe oder Beratung ständig zum Telefon laufen. OrbiCall macht aus Anrufen strukturierte Aufgaben: Wer hat angerufen, welche Leistung wird gewünscht, welche Zeit passt und wie dringend ist die Anfrage?",
          "Dadurch kann das Team nach Priorität zurückrufen, Lücken im Kalender besser füllen und Standardfragen konsistent beantworten.",
        ],
      },
    ],
    faq: [
      {
        question: "Kann OrbiCall Preisfragen beantworten?",
        answer:
          "Ja, wenn Leistungen und Preislogik hinterlegt sind. Bei individuellen Leistungen kann OrbiCall eine Beratung oder einen Rückruf vorbereiten.",
      },
      {
        question: "Kann OrbiCall kurzfristige Absagen aufnehmen?",
        answer:
          "Ja. Absagen und Umbuchungen können auch außerhalb der Öffnungszeiten aufgenommen und strukturiert an das Salonteam weitergegeben werden.",
      },
    ],
  },
  immobilien: {
    path: "/branchen/immobilien",
    label: "Immobilien",
    eyebrow: "Branchenlösung für Makler",
    title: "KI Telefonassistent für Immobilienmakler",
    metaTitle: "KI Telefonassistent für Immobilienmakler | OrbiCall",
    metaDescription:
      "OrbiCall qualifiziert Interessenten, erfasst Objektanfragen, unterstützt Besichtigungstermine und entlastet Immobilienmakler am Telefon.",
    intro:
      "Immobilienmakler erhalten oft viele Anfragen in kurzer Zeit. Nicht jede Anfrage ist gleich relevant, aber jede sollte professionell beantwortet werden. OrbiCall nimmt Interessentenanfragen entgegen, fragt Objektbezug und Bedarf ab und hilft dabei, Besichtigungstermine besser vorzubereiten.",
    quote:
      "OrbiCall ist ein KI Telefonassistent für Immobilienmakler, der Interessentenanfragen annimmt, Objektinformationen strukturiert erfasst, Leads qualifiziert und Besichtigungstermine vorbereitet.",
    problems: [
      {
        icon: "building",
        title: "Viele Objektanfragen",
        text: "Portale, Website und Empfehlungen erzeugen Anrufe, die schnell beantwortet und zugeordnet werden müssen.",
      },
      {
        icon: "calendar",
        title: "Besichtigungstermine",
        text: "Terminwünsche, Verfügbarkeiten und Rückfragen brauchen Struktur, damit keine Leads verloren gehen.",
      },
      {
        icon: "chart",
        title: "Lead-Qualifizierung",
        text: "Budget, Suchprofil, Finanzierung und Kauf- oder Mietinteresse sollten früh geklärt werden.",
      },
    ],
    functions: [
      {
        icon: "summary",
        title: "Lead-Zusammenfassung",
        text: "OrbiCall fasst Objekt, Kontaktdaten, Suchprofil, Zeitfenster und Dringlichkeit übersichtlich zusammen.",
      },
      {
        icon: "message",
        title: "Objektinformationen",
        text: "Häufige Fragen zu Lage, Eckdaten, Besichtigung und Unterlagen können vorbereitet beantwortet werden.",
      },
      {
        icon: "route",
        title: "Priorisierte Weiterleitung",
        text: "Hoch relevante Interessenten können schneller an den zuständigen Makler weitergegeben werden.",
      },
    ],
    sections: [
      {
        title: "Welche Probleme löst OrbiCall für Immobilienmakler?",
        body: [
          "Bei attraktiven Objekten kommen Anfragen oft gebündelt. Wer zu spät reagiert, verliert qualifizierte Interessenten oder erzeugt unnötige Rückruflisten. OrbiCall nimmt Anrufe entgegen, fragt nach dem konkreten Objekt und sammelt die Informationen, die ein Makler für die nächste Entscheidung braucht.",
          "So entsteht aus jedem Telefonat ein strukturierter Lead statt einer losen Notiz. Das hilft besonders bei mehreren parallelen Objekten und bei Anfragen außerhalb klassischer Bürozeiten.",
        ],
      },
      {
        title: "Wie unterstützt OrbiCall Besichtigungen?",
        body: [
          "Der KI Telefonassistent kann Wunschtermine, Verfügbarkeiten, Anzahl der teilnehmenden Personen und besondere Fragen zur Immobilie aufnehmen. Bei Bedarf kann er auch vorqualifizierende Fragen stellen, etwa nach Kaufabsicht, Finanzierung, Mietbeginn oder Suchkriterien.",
          "Das Team entscheidet anschließend schneller, welche Anfragen Priorität haben und welche Informationen vor einer Besichtigung fehlen.",
        ],
      },
    ],
    faq: [
      {
        question: "Kann OrbiCall Interessenten qualifizieren?",
        answer:
          "Ja. Der KI Telefonassistent kann Suchprofil, Budget, Objektbezug, Zeitfenster und Kontaktdaten abfragen und als strukturierte Lead-Zusammenfassung bereitstellen.",
      },
      {
        question: "Kann OrbiCall mehrere Objekte unterscheiden?",
        answer:
          "Ja. Objektbezeichnungen, Referenznummern oder typische Fragen können im Setup berücksichtigt werden.",
      },
    ],
  },
  werkstaetten: {
    path: "/branchen/werkstaetten",
    label: "Werkstätten",
    eyebrow: "Branchenlösung für Mobilität",
    title: "KI Telefonassistent für Werkstätten und Autohäuser",
    metaTitle: "KI Telefonassistent für Werkstätten | OrbiCall",
    metaDescription:
      "OrbiCall unterstützt Werkstätten und Autohäuser bei Serviceterminen, Reparaturstatus, Reifenwechsel und Kundenanfragen.",
    intro:
      "Werkstätten und Autohäuser haben saisonale Spitzen, viele Rückfragen und häufige Terminwünsche. OrbiCall nimmt Anrufe entgegen, fragt Fahrzeugdaten ab und hilft dabei, Serviceanfragen, Reifenwechsel, Reparaturstatus und Rückrufe übersichtlich zu organisieren.",
    quote:
      "OrbiCall ist ein KI Telefonassistent für Werkstätten und Autohäuser, der Servicetermine vorbereitet, Fahrzeugdaten abfragt, Reparaturstatus-Anfragen aufnimmt und Kundenanfragen zusammenfasst.",
    problems: [
      {
        icon: "clock",
        title: "Saisonale Stoßzeiten",
        text: "Rund um Reifenwechsel, Pickerl, Service und Urlaubssaison steigt das Anrufvolumen deutlich.",
      },
      {
        icon: "phone",
        title: "Rückfragen zum Status",
        text: "Kunden fragen nach Fertigstellung, Ersatzteilen, Preisen oder Rückrufen und blockieren dadurch die Annahme.",
      },
      {
        icon: "file",
        title: "Unvollständige Daten",
        text: "Ohne Kennzeichen, Fahrzeugmodell, Anliegen und Kontaktdaten wird jeder Rückruf mühsam.",
      },
    ],
    functions: [
      {
        icon: "calendar",
        title: "Servicetermine vorbereiten",
        text: "OrbiCall fragt Fahrzeug, Anliegen, Wunschzeit und Kontaktdaten ab, bevor das Team zurückruft.",
      },
      {
        icon: "message",
        title: "Reparaturstatus aufnehmen",
        text: "Der KI Telefonassistent kann Statusfragen erfassen und an die zuständige Person weiterleiten.",
      },
      {
        icon: "route",
        title: "Anfragen sortieren",
        text: "Reifenwechsel, Service, Pickerl, Reparatur, Verkauf und Rückrufbitten werden klar getrennt.",
      },
    ],
    sections: [
      {
        title: "Welche Probleme löst OrbiCall für Werkstätten?",
        body: [
          "In Werkstätten ist das Telefon oft eine operative Bremse. Während Fahrzeuge angenommen, Kunden beraten und Reparaturen koordiniert werden, kommen neue Terminwünsche und Rückfragen herein. OrbiCall nimmt diese Anfragen auf, stellt die wichtigsten Fragen und liefert dem Team eine strukturierte Grundlage.",
          "Besonders hilfreich ist das bei saisonalen Spitzen wie Reifenwechsel, bei Service- und Pickerl-Terminen sowie bei Rückfragen zum Reparaturstatus.",
        ],
      },
      {
        title: "Warum ist OrbiCall besser als ein normaler Anrufbeantworter?",
        body: [
          "Ein Anrufbeantworter liefert oft nur eine unklare Nachricht. OrbiCall fragt nach Kennzeichen oder Fahrzeugmodell, Anliegen, gewünschtem Zeitraum, Erreichbarkeit und Dringlichkeit. Dadurch kann die Werkstatt schneller priorisieren und muss weniger Informationen nachtelefonieren.",
          "Für Autohäuser kann OrbiCall außerdem zwischen Werkstatt, Verkauf, Ersatzteilen und allgemeinen Anfragen unterscheiden.",
        ],
      },
    ],
    faq: [
      {
        question: "Kann OrbiCall Reifenwechsel-Anfragen aufnehmen?",
        answer:
          "Ja. OrbiCall kann Wunschzeit, Fahrzeugdaten, Reifendetails und Kontaktdaten abfragen und dem Team strukturiert weitergeben.",
      },
      {
        question: "Kann OrbiCall Reparaturstatus-Anfragen beantworten?",
        answer:
          "OrbiCall kann Anfragen zum Reparaturstatus aufnehmen und weiterleiten. Automatische Statusauskünfte hängen von den angebundenen Systemen und Freigaben ab.",
      },
    ],
  },
  restaurants: {
    path: "/branchen/restaurants",
    label: "Restaurants",
    eyebrow: "Branchenlösung für Gastronomie",
    title: "KI Telefonassistent für Restaurants",
    metaTitle: "KI Telefonassistent für Restaurants | OrbiCall",
    metaDescription:
      "OrbiCall hilft Restaurants bei Reservierungen, Öffnungszeiten, Stornierungen, häufigen Fragen und Anrufen zu Stoßzeiten.",
    intro:
      "Restaurants erhalten viele Anrufe genau dann, wenn Service, Küche und Gäste volle Aufmerksamkeit brauchen. OrbiCall nimmt Reservierungen, Stornierungen und häufige Fragen auf, damit das Team erreichbar bleibt, ohne den laufenden Betrieb zu stören.",
    quote:
      "OrbiCall ist ein KI Telefonassistent für Restaurants, der Reservierungen, Stornierungen, Öffnungszeiten und häufige Fragen telefonisch aufnimmt und das Team während Stoßzeiten entlastet.",
    problems: [
      {
        icon: "clock",
        title: "Anrufe zu Stoßzeiten",
        text: "Mittags, abends und am Wochenende klingelt das Telefon oft genau während der wichtigsten Servicephasen.",
      },
      {
        icon: "calendar",
        title: "Reservierungen und Stornos",
        text: "Tische, Personenzahl, Uhrzeit, Sonderwünsche und Absagen müssen zuverlässig erfasst werden.",
      },
      {
        icon: "message",
        title: "Häufige Fragen",
        text: "Öffnungszeiten, Küche, Allergene, Parken, Gruppen und Gutscheine werden regelmäßig telefonisch gefragt.",
      },
    ],
    functions: [
      {
        icon: "calendar",
        title: "Reservierungen aufnehmen",
        text: "OrbiCall fragt Datum, Uhrzeit, Personenanzahl, Name, Telefonnummer und besondere Wünsche ab.",
      },
      {
        icon: "phone",
        title: "Stornierungen erfassen",
        text: "Absagen werden auch außerhalb der Öffnungszeiten aufgenommen und können schnell bearbeitet werden.",
      },
      {
        icon: "spark",
        title: "Service entlasten",
        text: "Das Team kann sich auf Gäste konzentrieren, während Standardanfragen zuverlässig beantwortet werden.",
      },
    ],
    sections: [
      {
        title: "Welche Probleme löst OrbiCall für Restaurants?",
        body: [
          "In der Gastronomie zählt Timing. Ein verpasster Anruf kann eine Reservierung sein, aber ein unterbrochener Service kostet ebenfalls Qualität. OrbiCall nimmt Standardanfragen entgegen und sorgt dafür, dass Reservierungen, Stornierungen und Fragen nicht untergehen.",
          "Der KI Telefonassistent ist besonders wertvoll für Restaurants mit hohem Telefonaufkommen, kleinen Teams oder vielen Reservierungsanfragen außerhalb der Öffnungszeiten.",
        ],
      },
      {
        title: "Wie kann OrbiCall Reservierungen unterstützen?",
        body: [
          "OrbiCall kann die wichtigsten Reservierungsdaten abfragen: Name, Telefonnummer, Datum, Uhrzeit, Personenanzahl, Anlass, Sonderwünsche und Hinweise zu Allergien. Das Team erhält danach eine klare Zusammenfassung.",
          "Je nach technischer Einrichtung kann OrbiCall bestehende Reservierungsprozesse vorbereiten oder mit passenden Tools verbunden werden. In jedem Fall bleibt der Gast nicht ohne Antwort.",
        ],
      },
    ],
    faq: [
      {
        question: "Kann OrbiCall Reservierungen direkt bestätigen?",
        answer:
          "Das hängt vom Setup und den angebundenen Systemen ab. OrbiCall kann Reservierungen aufnehmen, vorbereiten und je nach Prozess bestätigen oder zur Prüfung weiterleiten.",
      },
      {
        question: "Kann OrbiCall Öffnungszeiten und häufige Fragen beantworten?",
        answer:
          "Ja. Öffnungszeiten, Ruhetage, Küche, Reservierungsregeln und häufige Fragen können hinterlegt und telefonisch beantwortet werden.",
      },
    ],
  },
};

export const pricingBenefits = [
  "Einrichtung des KI Telefonassistenten auf Basis Ihrer Branche",
  "Anpassung von Begrüßung, Gesprächslogik, FAQ und Weiterleitungen",
  "Unterstützung bei Termin- und Anfrageprozessen",
  "Gesprächszusammenfassungen für Ihr Team",
  "DSGVO-orientierte Abstimmung von Datenflüssen und Verantwortlichkeiten",
  "Testphase vor der Live-Schaltung",
];
