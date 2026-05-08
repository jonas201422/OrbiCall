import { imageAssets } from "../data/assets";
import { industryPages } from "../data/content";
import { Icon } from "./Icon";
import { ResponsiveImage } from "./ResponsiveImage";

const industries = [
  {
    title: "Zahnärzte",
    text: "Terminvereinbarung, Rückfragen, Notfälle, volle Rezeption und verpasste Anrufe besser auffangen.",
    icon: "calendar",
    href: industryPages.zahnaerzte.path,
  },
  {
    title: "Friseure",
    text: "Terminbuchung, Absagen, Umbuchungen, Öffnungszeiten, Preisfragen und Neukundenanfragen aufnehmen.",
    icon: "spark",
    href: industryPages.friseure.path,
  },
  {
    title: "Immobilien",
    text: "Besichtigungstermine, Interessentenanfragen, Objektinformationen und Lead-Qualifizierung strukturieren.",
    icon: "building",
    href: industryPages.immobilien.path,
  },
  {
    title: "Werkstätten",
    text: "Servicetermine, Reparaturstatus, Reifenwechsel und Kundenanfragen sauber vorsortieren.",
    icon: "route",
    href: industryPages.werkstaetten.path,
  },
  {
    title: "Restaurants",
    text: "Reservierungen, Öffnungszeiten, Stornierungen und häufige Fragen während Stoßzeiten bearbeiten.",
    icon: "phone",
    href: industryPages.restaurants.path,
  },
  {
    title: "KMU in Österreich",
    text: "Telefonannahme automatisieren und Teams in Linz, Oberösterreich und ganz Österreich entlasten.",
    icon: "building",
    href: "/ki-telefonassistent",
  },
] as const;

export function IndustrySection() {
  return (
    <section className="section industries-section" id="branchen" aria-labelledby="industry-title">
      <div className="container">
        <div className="industry-hero" data-reveal>
          <div className="industry-heading">
            <p className="section-kicker">Branchenlösungen</p>
            <h2 id="industry-title">Branchen</h2>
            <p className="industry-subheadline">KI Telefonassistenten für Branchen mit hohem Anrufvolumen.</p>
            <p className="section-lead">
              OrbiCall eignet sich für Unternehmen, bei denen verpasste Anrufe direkt Termine, Leads oder
              Reservierungen kosten können.
            </p>
          </div>
          <div className="industry-showcase" aria-label="OrbiCall Branchenvisual">
            <ResponsiveImage asset={imageAssets.industries} />
          </div>
        </div>

        <div className="industry-card-grid" data-reveal>
          {industries.map((industry) => (
            <article className="glass-card industry-card" key={industry.title}>
              <span className="icon-badge">
                <Icon name={industry.icon} />
              </span>
              <h3>{industry.title}</h3>
              <p>{industry.text}</p>
              <a className="text-link" href={industry.href}>
                Mehr erfahren
                <Icon name="arrow" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
