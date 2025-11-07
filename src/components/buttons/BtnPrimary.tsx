type BtnProps = {
  children: ChildNode | string;
};

export const BtnPrimary = ({ children }: BtnProps) => {
  return <button>{children}</button>;
};
