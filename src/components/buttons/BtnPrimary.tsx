import type { ReactNode } from "preact/compat";
import type { MouseEventHandler } from "preact";
import "../sass/_buttonsCss/_btn.scss";

type BtnProps = {
  label?: string;
  icon?: ReactNode;
  handleClick?: MouseEventHandler<HTMLAnchorElement>;
  goTo?: string;
  target?: string;
  children?: ReactNode;
};

export const BtnPrimary = ({ label, icon, children }: BtnProps) => {
  return (
    <button className="btn">
      {icon}
      {label}
      {children}
    </button>
  );
};
