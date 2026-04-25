type ImageAsset = {
  src: string;
  alt: string;
  sizes: string;
  width: number;
  height: number;
};

export const imageAssets = {
  hero: {
    src: "/images/Hero.png",
    alt: "Orbicall Banner mit Smartphone-Ansicht eines KI-Anrufagenten und leuchtenden Voice-Waves",
    sizes: "(min-width: 1100px) 50vw, 100vw",
    width: 1672,
    height: 941,
  },
  problem: {
    src: "/images/ProblemBild.png",
    alt: "Visualisierung verpasster Anrufe und verlorener Kundenanfragen im Orbicall Design",
    sizes: "(min-width: 900px) 38vw, 100vw",
    width: 1672,
    height: 941,
  },
  solution: {
    src: "/images/Features.png",
    alt: "Funktionsübersicht eines AI Call Agents mit Telefonie, Automatisierung und Zusammenfassungen",
    sizes: "(min-width: 900px) 38vw, 100vw",
    width: 1717,
    height: 916,
  },
  process: {
    src: "/images/3SchritteGrafik.png",
    alt: "Drei Schritte zur Einrichtung eines Orbicall AI Call Agents",
    sizes: "(min-width: 900px) 40vw, 100vw",
    width: 1672,
    height: 941,
  },
  industries: {
    src: "/images/UseCases.png",
    alt: "Anwendungsbereiche für Orbicall in Praxen, Restaurants, Kanzleien und lokalen Unternehmen",
    sizes: "(min-width: 900px) 40vw, 100vw",
    width: 1672,
    height: 941,
  },
  security: {
    src: "/images/Security.png",
    alt: "Sicherheits- und Datenschutzvisualisierung für Orbicall",
    sizes: "(min-width: 900px) 38vw, 100vw",
    width: 1672,
    height: 941,
  },
} satisfies Record<string, ImageAsset>;
