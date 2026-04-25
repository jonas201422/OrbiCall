import { useEffect, useState } from "react";
import { navLinks, site } from "../data/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Zum Inhalt springen
      </a>
      <div className="nav-shell">
        <a className="logo-link" href="/" aria-label="Orbicall Startseite" onClick={closeMenu}>
          <Logo />
        </a>

        <nav id="mobile-navigation" className={`main-nav ${isOpen ? "is-open" : ""}`} aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="mobile-only nav-demo-link" href={site.calendlyUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Demo buchen
          </a>
        </nav>

        <div className="nav-actions">
          <a className="btn btn-small btn-primary desktop-only" href={site.calendlyUrl} target="_blank" rel="noreferrer">
            <span>Demo buchen</span>
            <Icon name="arrow" />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            <Icon name={isOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}
