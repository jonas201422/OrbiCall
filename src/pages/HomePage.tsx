import { BenefitsSection } from "../components/BenefitsSection";
import { ContactSection } from "../components/ContactSection";
import { CTASection } from "../components/CTASection";
import { FAQBlock } from "../components/FAQBlock";
import { Hero } from "../components/Hero";
import { IndustrySection } from "../components/IndustrySection";
import { JsonLd } from "../components/JsonLd";
import { LossCalculator } from "../components/LossCalculator";
import { ProblemSection } from "../components/ProblemSection";
import { ProcessSteps } from "../components/ProcessSteps";
import { SecuritySection } from "../components/SecuritySection";
import { SolutionSection } from "../components/SolutionSection";
import { StatsSection } from "../components/StatsSection";
import { homeFaq, pageMeta } from "../data/content";
import { faqSchema, serviceSchema } from "../data/schemas";
import { usePageMeta } from "../hooks/usePageMeta";

export function HomePage() {
  usePageMeta(pageMeta.home);

  return (
    <main id="main">
      <JsonLd data={[serviceSchema("KI Telefonassistent für Unternehmen in Österreich", "/"), faqSchema(homeFaq, "/")]} />
      <Hero />
      <LossCalculator />
      <ProblemSection />
      <StatsSection />
      <SolutionSection />
      <IndustrySection />
      <ProcessSteps />
      <BenefitsSection />
      <SecuritySection />
      <FAQBlock
        id="startseite-faq"
        title="Häufige Fragen zu OrbiCall"
        lead="Kurz beantwortet für Unternehmen, die Telefonannahme automatisieren und gleichzeitig vertrauenswürdig bleiben möchten."
        items={homeFaq}
      />
      <CTASection />
      <ContactSection />
    </main>
  );
}
