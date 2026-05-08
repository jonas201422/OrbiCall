import { useEffect } from "react";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
};

const previewImage = "https://orbicall.at/og-orbicall.png";

const setMetaContent = (selector: string, content: string) => {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) {
    element.content = content;
  }
};

const ensureMeta = (attributes: Record<string, string>, content: string) => {
  const selector = Object.entries(attributes)
    .map(([name, value]) => `[${name}="${value}"]`)
    .join("");
  let element = document.head.querySelector<HTMLMetaElement>(`meta${selector}`);
  if (!element) {
    element = document.createElement("meta");
    Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value));
    document.head.appendChild(element);
  }
  element.content = content;
};

const setCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = href;
};

export function usePageMeta({ title, description, path = "/" }: PageMeta) {
  useEffect(() => {
    const canonical = `https://orbicall.at${path === "/" ? "" : path}`;

    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    ensureMeta({ property: "og:url" }, canonical);
    ensureMeta({ property: "og:image" }, previewImage);
    ensureMeta({ property: "og:image:secure_url" }, previewImage);
    ensureMeta({ property: "og:image:type" }, "image/png");
    ensureMeta({ property: "og:image:width" }, "1200");
    ensureMeta({ property: "og:image:height" }, "630");
    ensureMeta({ property: "og:image:alt" }, "OrbiCall KI Telefonassistent für Unternehmen in Österreich");
    ensureMeta({ name: "twitter:card" }, "summary_large_image");
    ensureMeta({ name: "twitter:title" }, title);
    ensureMeta({ name: "twitter:description" }, description);
    ensureMeta({ name: "twitter:image" }, previewImage);
    ensureMeta({ name: "twitter:image:alt" }, "OrbiCall KI Telefonassistent für Unternehmen in Österreich");
    setCanonical(canonical);
  }, [description, path, title]);
}
