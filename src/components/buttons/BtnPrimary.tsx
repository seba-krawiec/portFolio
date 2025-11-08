import type { ReactNode } from "preact/compat";
import "./buttonsCss/BtnPrimary.scss";
import type { MouseEventHandler } from "preact";

type BtnProps = {
  label: string;
  icon?: ReactNode | SVGAElement;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

export const BtnPrimary = ({ label, icon, handleClick }: BtnProps) => {
  return (
    <button className="btn" onClick={handleClick}>
      {icon}
      {label}
    </button>
  );
};
