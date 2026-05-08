import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const distDir = join(root, "..", "dist");
const indexPath = join(distDir, "index.html");
const baseUrl = "https://orbicall.at";
const logoUrl = `${baseUrl}/favicon-192.png`;
const previewImageUrl = `${baseUrl}/og-orbicall.png`;

const routes = [
  {
    path: "/",
    label: "Startseite",
    title: "OrbiCall – KI Telefonassistent für Unternehmen in Österreich",
    description:
      "OrbiCall automatisiert Telefonannahme, Terminbuchung und Kundenanfragen mit KI Call Agents für Zahnärzte, Friseure, Immobilien, Werkstätten und KMU.",
  },
  {
    path: "/ki-telefonassistent",
    label: "KI Telefonassistent",
    title: "KI Telefonassistent einfach erklärt | OrbiCall Österreich",
    description:
      "Was ist ein KI Telefonassistent? OrbiCall erklärt Funktionen, Vorteile, Einrichtung, DSGVO-Fokus und Einsatzbereiche für österreichische Unternehmen.",
  },
  {
    path: "/branchen",
    label: "Branchen",
    title: "Branchen für KI Telefonassistenten | OrbiCall",
    description:
      "OrbiCall für Zahnärzte, Friseure, Immobilienmakler, Werkstätten, Restaurants und österreichische KMU mit hohem Telefonaufkommen.",
  },
  {
    path: "/branchen/zahnaerzte",
    label: "Zahnärzte",
    title: "KI Telefonassistent für Zahnärzte | OrbiCall Österreich",
    description:
      "OrbiCall unterstützt Zahnarztpraxen bei Terminvereinbarung, Rückfragen, Notfällen und verpassten Anrufen mit einem KI Telefonassistenten.",
  },
  {
    path: "/branchen/friseure",
    label: "Friseure",
    title: "KI Telefonassistent für Friseure | OrbiCall Österreich",
    description:
      "OrbiCall hilft Friseuren bei Terminbuchung, Absagen, Umbuchungen, Öffnungszeiten, Preisfragen und Neukundenanfragen.",
  },
  {
    path: "/branchen/immobilien",
    label: "Immobilien",
    title: "KI Telefonassistent für Immobilienmakler | OrbiCall",
    description:
      "OrbiCall qualifiziert Interessenten, erfasst Objektanfragen, unterstützt Besichtigungstermine und entlastet Immobilienmakler am Telefon.",
  },
  {
    path: "/branchen/werkstaetten",
    label: "Werkstätten",
    title: "KI Telefonassistent für Werkstätten | OrbiCall",
    description:
      "OrbiCall unterstützt Werkstätten und Autohäuser bei Serviceterminen, Reparaturstatus, Reifenwechsel und Kundenanfragen.",
  },
  {
    path: "/branchen/restaurants",
    label: "Restaurants",
    title: "KI Telefonassistent für Restaurants | OrbiCall",
    description:
      "OrbiCall hilft Restaurants bei Reservierungen, Öffnungszeiten, Stornierungen, häufigen Fragen und Anrufen zu Stoßzeiten.",
  },
  {
    path: "/preise",
    label: "Preise",
    title: "Preise für KI Telefonassistenten | OrbiCall",
    description:
      "Individuelles OrbiCall Angebot: KI Telefonassistent, Telefonannahme, Terminbuchung und Einrichtung für Unternehmen in Österreich.",
  },
  {
    path: "/demo",
    label: "Demo",
    title: "Demo buchen | OrbiCall KI Telefonassistent",
    description:
      "Buchen Sie eine OrbiCall Demo und sehen Sie, wie ein KI Telefonassistent Anrufe annimmt, Termine unterstützt und Teams entlastet.",
  },
  {
    path: "/ueber-uns",
    label: "Über uns",
    title: "Über OrbiCall | Österreichisches KI-Telefonie-Startup",
    description:
      "OrbiCall ist ein österreichisches Startup für KI Telefonassistenten. Gegründet von Jonas Abdulla und Armin Kero für moderne KMU.",
  },
  {
    path: "/kontakt",
    label: "Kontakt",
    title: "Kontakt | OrbiCall KI Telefonassistent Österreich",
    description:
      "Kontaktieren Sie OrbiCall für KI Telefonassistenten in Österreich. Ansprechpartner: Jonas Abdulla und Armin Kero.",
  },
  {
    path: "/faq",
    label: "FAQ",
    title: "FAQ zu OrbiCall und KI Telefonassistenten",
    description:
      "Antworten auf häufige Fragen zu OrbiCall, KI Telefonassistenten, Terminbuchung, DSGVO, Einrichtung, Kosten und Demo.",
  },
  {
    path: "/impressum",
    label: "Impressum",
    title: "Impressum | OrbiCall",
    description:
      "Impressum und Anbieterkennzeichnung von OrbiCall mit Kontaktinformationen und rechtlichen Pflichtangaben.",
  },
  {
    path: "/datenschutz",
    label: "Datenschutz",
    title: "Datenschutz | OrbiCall DSGVO",
    description:
      "Datenschutzhinweise von OrbiCall mit DSGVO-Fokus, Kontaktaufnahme, Server-Logfiles, Cookies und Demo-Anfragen.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "OrbiCall",
      url: baseUrl,
      logo: logoUrl,
      image: previewImageUrl,
      description:
        "OrbiCall entwickelt KI Telefonassistenten für Unternehmen in Österreich, die Telefonannahme, Terminbuchung und Kundenanfragen automatisieren.",
      founder: [
        { "@type": "Person", name: "Jonas Abdulla" },
        { "@type": "Person", name: "Armin Kero" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          name: "Jonas Abdulla",
          email: "jonasabdulla@orbicall.at",
          telephone: "+43 690 10143884",
          areaServed: "AT",
          availableLanguage: ["de"],
        },
        {
          "@type": "ContactPoint",
          contactType: "sales",
          name: "Armin Kero",
          email: "arminkero@orbicall.at",
          telephone: "+43 676 3108967",
          areaServed: "AT",
          availableLanguage: ["de"],
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#localbusiness`,
      name: "OrbiCall",
      url: baseUrl,
      logo: logoUrl,
      image: previewImageUrl,
      description:
        "KI Telefonassistenten für Unternehmen in Österreich mit Fokus auf Linz, Oberösterreich und KMU.",
      email: "jonasabdulla@orbicall.at",
      telephone: "+43 690 10143884",
      priceRange: "Individuelles Angebot",
      areaServed: [
        { "@type": "Country", name: "Österreich" },
        { "@type": "City", name: "Linz" },
        { "@type": "AdministrativeArea", name: "Oberösterreich" },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "AT",
        addressRegion: "Oberösterreich",
        addressLocality: "Linz",
      },
    },
  ],
};

const serviceSchema = (route) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${baseUrl}${route.path === "/" ? "" : route.path}#service`,
  name: route.title,
  serviceType: "KI Telefonassistent / AI Call Agent",
  provider: { "@id": `${baseUrl}/#organization` },
  areaServed: [
    { "@type": "Country", name: "Österreich" },
    { "@type": "City", name: "Linz" },
    { "@type": "AdministrativeArea", name: "Oberösterreich" },
  ],
  description: route.description,
  url: `${baseUrl}${route.path === "/" ? "" : route.path}`,
});

const commonFaq = [
  {
    question: "Was ist OrbiCall?",
    answer:
      "OrbiCall ist ein KI Telefonassistent für Unternehmen in Österreich. Die Lösung nimmt Anrufe automatisch entgegen, beantwortet häufige Fragen, unterstützt bei Terminbuchungen und fasst Gespräche für das Team zusammen.",
  },
  {
    question: "Für welche Unternehmen ist OrbiCall geeignet?",
    answer:
      "OrbiCall eignet sich für österreichische KMU, Praxen, Friseure, Immobilienmakler, Werkstätten, Restaurants und Teams mit vielen wiederkehrenden Telefonanfragen.",
  },
  {
    question: "Kann OrbiCall Termine buchen?",
    answer:
      "Ja. OrbiCall kann Terminwünsche aufnehmen, passende Daten abfragen und Terminbuchungen je nach Einrichtung vorbereiten oder an vorhandene Prozesse anschließen.",
  },
  {
    question: "Ist OrbiCall DSGVO-konform?",
    answer:
      "OrbiCall wird mit DSGVO-orientierten Prozessen, klaren Zuständigkeiten und transparenter Datenverarbeitung für den österreichischen Markt aufgebaut.",
  },
  {
    question: "Was ist der Unterschied zu einem normalen Anrufbeantworter?",
    answer:
      "Ein normaler Anrufbeantworter zeichnet Nachrichten auf. OrbiCall führt einen Dialog, fragt wichtige Informationen ab und liefert strukturierte Zusammenfassungen.",
  },
  {
    question: "Wie kann ich eine Demo buchen?",
    answer:
      "Interessenten können über die Demo- oder Kontaktseite eine OrbiCall Demo buchen.",
  },
];

const industryFaq = {
  "/branchen/zahnaerzte": [
    {
      question: "Kann OrbiCall Zahnarztpraxen bei Notfallanfragen unterstützen?",
      answer:
        "OrbiCall kann dringende Anliegen nach definierten Regeln erkennen, Informationen aufnehmen und an das Praxisteam weiterleiten.",
    },
    {
      question: "Kann OrbiCall Terminwünsche von Patienten aufnehmen?",
      answer:
        "Ja. OrbiCall fragt Behandlungsgrund, Wunschzeit und Kontaktdaten ab und bereitet die Terminabstimmung vor.",
    },
  ],
  "/branchen/friseure": [
    {
      question: "Kann OrbiCall Terminbuchungen und Umbuchungen für Friseure aufnehmen?",
      answer:
        "Ja. OrbiCall kann Servicewunsch, Wunschzeit, Kontaktdaten, Absagen und Umbuchungen strukturiert erfassen.",
    },
    {
      question: "Kann OrbiCall Preisfragen im Salon beantworten?",
      answer:
        "Ja, wenn Leistungen und Preislogik hinterlegt sind. Individuelle Fragen können zur Beratung weitergeleitet werden.",
    },
  ],
  "/branchen/immobilien": [
    {
      question: "Kann OrbiCall Immobilien-Interessenten qualifizieren?",
      answer:
        "Ja. OrbiCall kann Objektbezug, Suchprofil, Budget, Zeitfenster und Kontaktdaten abfragen.",
    },
    {
      question: "Kann OrbiCall Besichtigungstermine vorbereiten?",
      answer:
        "Ja. OrbiCall kann Wunschtermine und Verfügbarkeiten aufnehmen und dem Makler strukturiert weitergeben.",
    },
  ],
  "/branchen/werkstaetten": [
    {
      question: "Kann OrbiCall Servicetermine für Werkstätten vorbereiten?",
      answer:
        "Ja. OrbiCall fragt Fahrzeugdaten, Anliegen, Wunschzeit und Kontaktdaten ab.",
    },
    {
      question: "Kann OrbiCall Reifenwechsel-Anfragen aufnehmen?",
      answer:
        "Ja. Reifenwechsel-Anfragen können mit Fahrzeugdaten, Wunschzeit und Rückrufinformationen erfasst werden.",
    },
  ],
  "/branchen/restaurants": [
    {
      question: "Kann OrbiCall Reservierungen für Restaurants aufnehmen?",
      answer:
        "Ja. OrbiCall kann Datum, Uhrzeit, Personenanzahl, Name, Telefonnummer und besondere Wünsche erfassen.",
    },
    {
      question: "Kann OrbiCall Öffnungszeiten und häufige Fragen beantworten?",
      answer:
        "Ja. Öffnungszeiten, Ruhetage, Reservierungsregeln und häufige Fragen können hinterlegt werden.",
    },
  ],
};

const faqForRoute = (path) => {
  if (path === "/faq") return commonFaq;
  if (path === "/" || path === "/ki-telefonassistent") return commonFaq.slice(0, 6);
  return industryFaq[path] || [];
};

const faqSchema = (route) => {
  const items = faqForRoute(route.path);
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${baseUrl}${route.path === "/" ? "" : route.path}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
};

const shouldIncludeServiceSchema = (path) => !["/impressum", "/datenschutz"].includes(path);

const breadcrumbSchema = (route) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement:
    route.path === "/"
      ? [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            item: baseUrl,
          },
        ]
      : [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: route.path.startsWith("/branchen/") ? "Branchen" : route.label,
            item: route.path.startsWith("/branchen/") ? `${baseUrl}/branchen` : `${baseUrl}${route.path}`,
          },
          ...(route.path.startsWith("/branchen/")
            ? [
                {
                  "@type": "ListItem",
                  position: 3,
                  name: route.label,
                  item: `${baseUrl}${route.path}`,
                },
              ]
            : []),
        ],
});

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const replaceTag = (html, selector, replacement) => {
  const pattern = new RegExp(selector, "i");
  return html.replace(pattern, replacement);
};

const injectHead = (template, route) => {
  const url = `${baseUrl}${route.path === "/" ? "" : route.path}`;
  let html = template;
  html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
  html = replaceTag(
    html,
    '<meta\\s+name="description"\\s+content="[^"]*"\\s*/?>',
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
  );
  html = replaceTag(
    html,
    '<meta\\s+property="og:title"\\s+content="[^"]*"\\s*/?>',
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
  );
  html = replaceTag(
    html,
    '<meta\\s+property="og:description"\\s+content="[^"]*"\\s*/?>',
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
  );
  html = replaceTag(
    html,
    '<meta\\s+property="og:url"\\s+content="[^"]*"\\s*/?>',
    `<meta property="og:url" content="${escapeHtml(url)}" />`,
  );
  html = replaceTag(
    html,
    '<meta\\s+name="twitter:title"\\s+content="[^"]*"\\s*/?>',
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
  );
  html = replaceTag(
    html,
    '<meta\\s+name="twitter:description"\\s+content="[^"]*"\\s*/?>',
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
  );
  html = replaceTag(
    html,
    '<link\\s+rel="canonical"\\s+href="[^"]*"\\s*/?>',
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
  );

  const staticSchema = [
    organizationSchema,
    shouldIncludeServiceSchema(route.path) ? serviceSchema(route) : null,
    breadcrumbSchema(route),
    faqSchema(route),
  ]
    .filter(Boolean)
    .map(
      (schema) =>
        `<script type="application/ld+json" data-static-schema="true">${JSON.stringify(schema)}</script>`,
    )
    .join("\n    ");

  return html.replace("</head>", `    ${staticSchema}\n  </head>`);
};

const template = await readFile(indexPath, "utf8");

for (const route of routes) {
  const html = injectHead(template, route);
  if (route.path === "/") {
    await writeFile(indexPath, html, "utf8");
    continue;
  }

  const routeDir = join(distDir, route.path);
  await mkdir(routeDir, { recursive: true });
  await writeFile(join(routeDir, "index.html"), html, "utf8");
}

console.log(`Prerendered ${routes.length} route HTML files with SEO head metadata.`);
