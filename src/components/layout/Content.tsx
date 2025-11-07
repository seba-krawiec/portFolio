type ContentProps = {
  children: ChildNode | string | undefined;
};

export const Content = ({ children }: ContentProps) => {
  return <div>{children}Content</div>;
};
