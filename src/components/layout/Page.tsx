import type { ReactNode } from "preact/compat";
import "./layoutCss/Page.scss";

type ContentProps = {
  children?: ReactNode;
  id?: string;
};

export const Page = ({ children, id }: ContentProps) => {
  return (
    <div className="page" id={id}>
      {children}
    </div>
  );
};
