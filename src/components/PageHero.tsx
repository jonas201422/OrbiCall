import { Icon } from "./Icon";
import type { ReactNode } from "react";
import { DemoButton } from "./DemoButton";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, lead, primaryCta, secondaryCta, children }: PageHeroProps) {
  return (
    <section className="section page-hero" aria-labelledby="page-title">
      <div className="container page-hero-grid">
        <div className="page-hero-copy" data-reveal>
          <p className="section-kicker">{eyebrow}</p>
          <h1 id="page-title">{title}</h1>
          <p className="hero-subtitle">{lead}</p>
          {(primaryCta || secondaryCta) && (
            <div className="hero-actions page-actions">
              {primaryCta && (
                primaryCta.href === "external-demo" ? (
                  <DemoButton>{primaryCta.label}</DemoButton>
                ) : (
                  <a className="btn btn-primary" href={primaryCta.href}>
                    {primaryCta.label}
                    <Icon name="arrow" />
                  </a>
                )
              )}
              {secondaryCta && (
                secondaryCta.href === "external-demo" ? (
                  <DemoButton className="btn btn-secondary">{secondaryCta.label}</DemoButton>
                ) : (
                  <a className="btn btn-secondary" href={secondaryCta.href}>
                    {secondaryCta.label}
                  </a>
                )
              )}
            </div>
          )}
        </div>
        {children && <div className="page-hero-aside" data-reveal>{children}</div>}
      </div>
    </section>
  );
}
