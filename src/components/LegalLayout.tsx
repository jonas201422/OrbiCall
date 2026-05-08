import type { ReactNode } from "react";

type LegalLayoutProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function LegalLayout({ eyebrow, title, children }: LegalLayoutProps) {
  return (
    <main className="legal-page" id="main">
      <section className="section legal-hero">
        <div className="container legal-container">
          <p className="section-kicker">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
      </section>
      <section className="section legal-content-section">
        <div className="container legal-container legal-content">{children}</div>
      </section>
    </main>
  );
}
