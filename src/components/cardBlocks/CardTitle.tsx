type props = {
  title: string;
  titleClass?: string;
};

export const CardTitle = ({ title, titleClass }: props) => {
  return <h2 className={titleClass}>{title}</h2>;
};
