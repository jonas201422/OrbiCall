import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="logo-link footer-logo" href="/" aria-label="Orbicall Startseite">
            <Logo />
          </a>
          <p>
            AI Call Agents für Unternehmen, die erreichbar bleiben und wiederkehrende Telefonate
            professionell automatisieren möchten.
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer Navigation">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/#kontakt">Kontakt</a>
        </nav>
        <p className="copyright">© 2026 Orbicall. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
