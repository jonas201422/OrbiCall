import type { ReactNode, SVGProps } from "react";

type IconName =
  | "arrow"
  | "building"
  | "calendar"
  | "chart"
  | "check"
  | "clock"
  | "close"
  | "file"
  | "globe"
  | "headset"
  | "lock"
  | "mail"
  | "menu"
  | "message"
  | "phone"
  | "route"
  | "shield"
  | "spark"
  | "summary"
  | "wave";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

const paths: Record<IconName, ReactNode> = {
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  building: <path d="M4 21V7l8-4 8 4v14M9 21v-7h6v7M8 9h.01M12 9h.01M16 9h.01" />,
  calendar: <path d="M7 3v4M17 3v4M4 9h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />,
  chart: <path d="M4 19V5M4 19h16M8 16V9M12 16V6M16 16v-4" />,
  check: <path d="m5 12 4 4L19 6" />,
  clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l3 2" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  file: <path d="M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h7M10 17h5" />,
  globe: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-8-9h16M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21c-2.3-2.5-3.5-5.5-3.5-9S9.7 5.5 12 3Z" />,
  headset: <path d="M4 13a8 8 0 0 1 16 0v4a3 3 0 0 1-3 3h-2M4 13v3a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 2Zm16 0v3a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 2Z" />,
  lock: <path d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12v10H6V11Zm6 4v2" />,
  mail: <path d="M4 6h16v12H4V6Zm0 1 8 6 8-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  message: <path d="M5 5h14v10H8l-3 4V5Zm4 5h6" />,
  phone: <path d="M7 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2h2Z" />,
  route: <path d="M6 5a3 3 0 1 0 0 6c4 0 8 2 8 5a3 3 0 1 0 3-3c-4 0-8-2-8-5a3 3 0 0 0-3-3Z" />,
  shield: <path d="M12 3 20 6v5c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6l8-3Zm-3 9 2 2 4-5" />,
  spark: <path d="M12 3 9.8 9.8 3 12l6.8 2.2L12 21l2.2-6.8L21 12l-6.8-2.2L12 3Z" />,
  summary: <path d="M6 4h12v16H6V4Zm3 5h6M9 13h6M9 17h4" />,
  wave: <path d="M4 12h2m3 0h1m3 0h2m3 0h2M8 8v8m4-11v14m4-9v4" />,
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
