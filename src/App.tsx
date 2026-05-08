import { useEffect, useState } from "react";
import { CookieConsent } from "./components/CookieConsent";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { JsonLd } from "./components/JsonLd";
import { organizationSchema, localBusinessSchema } from "./data/schemas";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { AboutPage } from "./pages/AboutPage";
import { BranchesPage } from "./pages/BranchesPage";
import { ContactPage } from "./pages/ContactPage";
import { DatenschutzPage } from "./pages/DatenschutzPage";
import { DemoPage } from "./pages/DemoPage";
import { FAQPage } from "./pages/FAQPage";
import { HomePage } from "./pages/HomePage";
import { ImpressumPage } from "./pages/ImpressumPage";
import { IndustryPage } from "./pages/IndustryPage";
import { KiTelefonassistentPage } from "./pages/KiTelefonassistentPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PricingPage } from "./pages/PricingPage";

const getRoute = () => `${window.location.pathname}${window.location.hash}`;
const normalizePath = (pathname: string) => {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
};

function CurrentPage({ pathname }: { pathname: string }) {
  const cleanPath = normalizePath(pathname);

  switch (cleanPath) {
    case "/":
      return <HomePage />;
    case "/ki-telefonassistent":
      return <KiTelefonassistentPage />;
    case "/branchen":
      return <BranchesPage />;
    case "/branchen/zahnaerzte":
      return <IndustryPage industry="zahnaerzte" />;
    case "/branchen/friseure":
      return <IndustryPage industry="friseure" />;
    case "/branchen/immobilien":
      return <IndustryPage industry="immobilien" />;
    case "/branchen/werkstaetten":
      return <IndustryPage industry="werkstaetten" />;
    case "/branchen/restaurants":
      return <IndustryPage industry="restaurants" />;
    case "/preise":
      return <PricingPage />;
    case "/demo":
      return <DemoPage />;
    case "/ueber-uns":
      return <AboutPage />;
    case "/kontakt":
      return <ContactPage />;
    case "/faq":
      return <FAQPage />;
    case "/impressum":
      return <ImpressumPage />;
    case "/datenschutz":
      return <DatenschutzPage />;
    default:
      return <NotFoundPage />;
  }
}

export function App() {
  const [route, setRoute] = useState(getRoute);
  const pathname = window.location.pathname;

  useRevealOnScroll(route);

  useEffect(() => {
    const updateRoute = () => setRoute(getRoute());
    window.addEventListener("popstate", updateRoute);
    window.addEventListener("hashchange", updateRoute);
    return () => {
      window.removeEventListener("popstate", updateRoute);
      window.removeEventListener("hashchange", updateRoute);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && normalizePath(pathname) === "/") {
      window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }), 60);
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, route]);

  return (
    <>
      <JsonLd data={[organizationSchema, localBusinessSchema]} />
      <Header />
      <CurrentPage pathname={pathname} />
      <Footer />
      <CookieConsent />
    </>
  );
}
