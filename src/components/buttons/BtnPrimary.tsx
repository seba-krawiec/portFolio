import type { ReactNode } from "preact/compat";
import type { MouseEventHandler } from "preact";
import "./buttonsCss/_btn.scss";
import AnchorPrimary from "./AnchorPrimary";

type BtnProps = {
  label: string;
  icon?: ReactNode;
  handleClick?: MouseEventHandler<HTMLAnchorElement>;
  goTo: string;
};

export const BtnPrimary = ({ label, icon, handleClick, goTo }: BtnProps) => {
  return (
    <button className="btn">
      <AnchorPrimary goTo={goTo} className="btn" onClick={handleClick}>
        {icon}
        {label}
      </AnchorPrimary>
    </button>
  );
};
