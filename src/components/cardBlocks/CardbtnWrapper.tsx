import type { ReactNode } from "preact/compat";

type props = {
  wrapperClass?: string;
  children: ReactNode;
};

export const CardbtnWrapper = ({ wrapperClass, children }: props) => {
  return <div className={wrapperClass}>{children}</div>;
};
