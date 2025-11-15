import type { ReactNode } from "preact/compat";

type ContentProps = {
  children: ReactNode;
};

export const Content = ({ children }: ContentProps) => {
  return <div>{children}Content</div>;
};
