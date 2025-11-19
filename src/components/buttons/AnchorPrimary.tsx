import { type ReactNode } from "react";
import "../sass/_buttonsCss/_btn--anchor.scss";

type AnchorProps = {
  children?: ReactNode;
  goTo?: string;
  target?: string;
  label: string;
  icon?: ReactNode;
};

export default function AnchorPrimary({
  children,
  goTo,
  target,
  label,
  icon,
}: AnchorProps) {
  return (
    <a href={goTo} className="btn--anchor" target={target}>
      {icon}
      {label}
      {children}
    </a>
  );
}
