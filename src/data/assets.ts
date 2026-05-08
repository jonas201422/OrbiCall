type ImageAsset = {
  src: string;
  alt: string;
  sizes: string;
  width: number;
  height: number;
};

export const imageAssets = {
  hero: {
    src: "/pics/hero.png",
    alt: "OrbiCall Hero-Visual mit Smartphone, KI Telefonassistent, Voice-Wave und dezentem Österreich-Bezug",
    sizes: "(min-width: 1100px) 50vw, 100vw",
    width: 1672,
    height: 941,
  },
  problem: {
    src: "/pics/problem-verpasste-anrufe.png",
    alt: "Visualisierung verpasster Anrufe und verlorener Kundenanfragen in österreichischen Unternehmen",
    sizes: "(min-width: 900px) 36vw, 100vw",
    width: 1122,
    height: 1402,
  },
  solution: {
    src: "/pics/loesungsfoto.png",
    alt: "Funktionsübersicht eines OrbiCall AI Call Agents mit Telefonannahme, Automatisierung und Zusammenfassungen",
    sizes: "(min-width: 900px) 36vw, 100vw",
    width: 1122,
    height: 1402,
  },
  process: {
    src: "/pics/ablauf-links.png",
    alt: "Drei Schritte zur Einrichtung eines OrbiCall KI Telefonassistenten",
    sizes: "(min-width: 900px) 36vw, 100vw",
    width: 1086,
    height: 1448,
  },
  industries: {
    src: "/pics/branchenszenen.png",
    alt: "Anwendungsbereiche für OrbiCall in Praxen, Restaurants, Werkstätten und lokalen Unternehmen",
    sizes: "(min-width: 900px) 36vw, 100vw",
    width: 941,
    height: 1672,
  },
  security: {
    src: "/pics/datenschutz-vertrauen.png",
    alt: "Sicherheits- und Datenschutzvisualisierung für OrbiCall und DSGVO-orientierte Telefonprozesse",
    sizes: "(min-width: 900px) 36vw, 100vw",
    width: 1086,
    height: 1448,
  },
} satisfies Record<string, ImageAsset>;
