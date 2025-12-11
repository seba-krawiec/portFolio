import type { ReactNode } from "preact/compat";
import { PageContent } from "./PageContent";
import "../sass/_layoutCss/Page.scss";

type PageProps = {
  children?: ReactNode;
  id?: string;
  extraClass?: string;
  contentClass?: string;
};

export const Page = ({ children, id, extraClass, contentClass }: PageProps) => {
  return (
    <section className={`page ${extraClass}`} id={id}>
      <Page.content contentClass={contentClass}>{children}</Page.content>
    </section>
  );
};

Page.content = PageContent;
