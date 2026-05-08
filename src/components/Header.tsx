import { useEffect, useState } from "react";
import { industryLinks, navLinks } from "../data/site";
import { DemoButton } from "./DemoButton";
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
        <a className="logo-link" href="/" aria-label="OrbiCall Startseite" onClick={closeMenu}>
          <Logo />
        </a>

        <nav id="mobile-navigation" className={`main-nav ${isOpen ? "is-open" : ""}`} aria-label="Hauptnavigation">
          {navLinks.map((link) =>
            link.href === "/branchen" ? (
              <div className="nav-dropdown" key={link.href}>
                <a className="nav-dropdown-trigger" href="/branchen" onClick={closeMenu}>
                  Branchen
                  <Icon name="arrow" />
                </a>
                <div className="nav-dropdown-menu" aria-label="Branchen Untermenü">
                  {industryLinks.map((industry) => (
                    <a href={industry.href} key={industry.href} onClick={closeMenu}>
                      {industry.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ),
          )}
          <DemoButton className="mobile-only nav-demo-link" />
        </nav>

        <div className="nav-actions">
          <DemoButton className="btn btn-small btn-primary desktop-only" />
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
