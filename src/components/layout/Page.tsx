import type { ReactNode } from "preact/compat";
import "../sass/_layoutCss/Page.scss";

type PageProps = {
  children?: ReactNode;
  id?: string;
  extraClass?: string;
};

export const Page = ({ children, id, extraClass }: PageProps) => {
  return (
    <section className={`page ${extraClass}`} id={id}>
      {children}
    </section>
  );
};
