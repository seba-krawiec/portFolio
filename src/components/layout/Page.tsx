import type { ReactNode } from "preact/compat";
import "../sass/_layoutCss/Page.scss";

type ContentProps = {
  children?: ReactNode;
  id?: string;
  extraClass?: string;
};

export const Page = ({ children, id, extraClass }: ContentProps) => {
  return (
    <section className={`page ${extraClass}`} id={id}>
      {children}
    </section>
  );
};
