import type { ReactNode } from "preact/compat";

type props = {
  captionClass?: string;
  children: ReactNode;
};
export const CardFigCaption = ({ children, captionClass }: props) => {
  return <figcaption className={captionClass}>{children}</figcaption>;
};
