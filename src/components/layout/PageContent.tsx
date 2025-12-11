import type { ReactNode } from "preact/compat";
import "../sass/_layoutCss/Content.scss";

type Props = {
  children: ReactNode;
  contentClass?: string;
};

export const PageContent = ({ children, contentClass }: Props) => {
  return <div className={`content ${contentClass}`}>{children}</div>;
};
