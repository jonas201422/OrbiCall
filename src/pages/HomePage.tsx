import { BenefitsSection } from "../components/BenefitsSection";
import { ContactSection } from "../components/ContactSection";
import { CTASection } from "../components/CTASection";
import { DashboardPreview } from "../components/DashboardPreview";
import { Hero } from "../components/Hero";
import { IndustrySection } from "../components/IndustrySection";
import { ProblemSection } from "../components/ProblemSection";
import { ProcessSteps } from "../components/ProcessSteps";
import { SecuritySection } from "../components/SecuritySection";
import { SolutionSection } from "../components/SolutionSection";
import { usePageMeta } from "../hooks/usePageMeta";

export function HomePage() {
  usePageMeta({
    title: "Orbicall - AI Call Agents für Unternehmen",
    description:
      "Orbicall beantwortet Anrufe, qualifiziert Kundenanfragen, bucht Termine und ist 24/7 erreichbar für lokale Unternehmen.",
  });

  return (
    <main id="main">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <DashboardPreview />
      <ProcessSteps />
      <IndustrySection />
      <BenefitsSection />
      <SecuritySection />
      <CTASection />
      <ContactSection />
    </main>
  );
}
