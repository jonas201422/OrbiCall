import type { ReactNode } from "react";
import { site } from "../data/site";
import { Icon } from "./Icon";

type DemoButtonProps = {
  children?: ReactNode;
  className?: string;
};

export function DemoButton({ children = "Demo buchen", className = "btn btn-primary" }: DemoButtonProps) {
  return (
    <a className={className} href={site.demoUrl} target="_blank" rel="noopener noreferrer">
      {children}
      <Icon name="arrow" />
    </a>
  );
}
