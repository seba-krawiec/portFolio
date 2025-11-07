type BtnProps = {
  children: ChildNode | string;
};

export const BtnSecondary = ({ children }: BtnProps) => {
  return <button className="btn btn--secondary">{children}</button>;
};
