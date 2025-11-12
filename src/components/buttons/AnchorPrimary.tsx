import { type ReactNode } from "react";
import "./buttonsCss/_btn--anchor.scss";

type AnchorProps = {
  children?: ReactNode;
  goTo?: string;
};

export default function AnchorPrimary({ children, goTo }: AnchorProps) {
  return (
    <a href={goTo} className="btn--anchor">
      {children}
    </a>
  );
}
