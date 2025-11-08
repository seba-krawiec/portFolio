import "./layoutCss/Page.scss";

type ContentProps = {
  children?: ChildNode | string | undefined;
};

export const Page = ({ children }: ContentProps) => {
  return <div className="page">{children}</div>;
};
