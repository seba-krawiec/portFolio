import type { ReactNode } from "preact/compat";
import "../sass/_layoutCss/Content.scss";

type Props = {
  children: ReactNode;
  extraClass?: string;
};

export const Content = ({ children, extraClass }: Props) => {
  return <div className={`content ${extraClass}`}>{children}</div>;
};
