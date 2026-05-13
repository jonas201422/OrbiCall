import { industryLinks, site } from "../data/site";
import { Logo } from "./Logo";

const productLinks = [
  { label: "Startseite", href: "/" },
  { label: "KI Telefonassistent", href: "/ki-telefonassistent" },
  { label: "Branchen", href: "/branchen" },
  { label: "Preise", href: "/preise" },
  { label: "Demo", href: "/demo" },
  { label: "FAQ", href: "/faq" },
];

const companyLinks = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="logo-link footer-logo" href="/" aria-label="OrbiCall Startseite">
            <Logo />
          </a>
          <p>
            KI Telefonassistenten für Unternehmen in Österreich: erreichbar bleiben, Teams entlasten
            und Kundenanfragen professionell strukturieren.
          </p>
          <div className="footer-contact-mini">
            {site.contactEmails.map((email) => (
              <a href={`mailto:${email}`} key={email}>
                {email}
              </a>
            ))}
            <span>{site.website}</span>
          </div>
        </div>

        <nav className="footer-column" aria-label="OrbiCall">
          <h2>OrbiCall</h2>
          {productLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <nav className="footer-column" aria-label="Branchen">
          <h2>Branchen</h2>
          {industryLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <nav className="footer-column" aria-label="Kontakt und Rechtliches">
          <h2>Kontakt</h2>
          {companyLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
          <h2 className="footer-subtitle">Rechtliches</h2>
          {legalLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
          <div className="footer-socials">
            <h2>Socials</h2>
            <div className="social-links">
              {site.socialLinks.map((social) => (
                <a
                  aria-label={`${social.label} ${social.handle}`}
                  href={social.href}
                  key={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${social.label} ${social.handle}`}
                >
                  <InstagramIcon />
                </a>
              ))}
            </div>
          </div>
        </nav>

        <p className="copyright">© 2026 OrbiCall. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
