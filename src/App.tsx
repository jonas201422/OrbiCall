import { useEffect, useState } from "react";
import { CookieConsent } from "./components/CookieConsent";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { DatenschutzPage } from "./pages/DatenschutzPage";
import { HomePage } from "./pages/HomePage";
import { ImpressumPage } from "./pages/ImpressumPage";

const getRoute = () => `${window.location.pathname}${window.location.hash}`;

function CurrentPage({ pathname }: { pathname: string }) {
  if (pathname === "/impressum") return <ImpressumPage />;
  if (pathname === "/datenschutz") return <DatenschutzPage />;
  return <HomePage />;
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
    if (hash && pathname === "/") {
      window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }), 60);
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, route]);

  return (
    <>
      <Header />
      <CurrentPage pathname={pathname} />
      <Footer />
      <CookieConsent />
    </>
  );
}
