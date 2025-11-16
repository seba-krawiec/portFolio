import type { ReactNode } from "preact/compat";
import type { MouseEventHandler } from "preact";
import "../sass/_buttonsCss/_btn.scss";
import AnchorPrimary from "./AnchorPrimary";

type BtnProps = {
  label: string;
  icon?: ReactNode;
  handleClick?: MouseEventHandler<HTMLAnchorElement>;
  goTo?: string;
  target?: string;
  children?: ReactNode;
};

export const BtnPrimary = ({
  label,
  icon,
  handleClick,
  goTo,
  target,
  children,
}: BtnProps) => {
  return (
    <button className="btn">
      <AnchorPrimary
        goTo={goTo}
        className="btn"
        onClick={handleClick}
        target={target}
      >
        {icon}
        {label}
        {children}
      </AnchorPrimary>
    </button>
  );
};
