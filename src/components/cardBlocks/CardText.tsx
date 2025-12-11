type props = {
  content: string;
  textClass?: string;
};

export const CardText = ({ content, textClass }: props) => {
  return <p className={textClass}>{content}</p>;
};
