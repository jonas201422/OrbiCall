import { useEffect } from "react";
import { site } from "../data/site";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}

const calendlyCssId = "calendly-widget-css";
const calendlyScriptId = "calendly-widget-js";

export function CalendlyBadge() {
  useEffect(() => {
    if (!document.getElementById(calendlyCssId)) {
      const link = document.createElement("link");
      link.id = calendlyCssId;
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    const initBadge = () => {
      document.querySelectorAll(".calendly-badge-widget").forEach((element) => element.remove());
      window.Calendly?.initBadgeWidget({
        url: site.calendlyUrl,
        text: "Jetzt Demo buchen",
        color: "#2563eb",
        textColor: "#ffffff",
        branding: false,
      });
    };

    const existingScript = document.getElementById(calendlyScriptId) as HTMLScriptElement | null;
    if (existingScript) {
      if (window.Calendly) initBadge();
      else existingScript.addEventListener("load", initBadge, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = calendlyScriptId;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.addEventListener("load", initBadge, { once: true });
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", initBadge);
    };
  }, []);

  return null;
}
