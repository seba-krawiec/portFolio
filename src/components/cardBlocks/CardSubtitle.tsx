type props = {
  subtitle: string;
  subtitleClass?: string;
};
export const CardSubtitle = ({ subtitle, subtitleClass }: props) => {
  return <h3 className={subtitleClass}>{subtitle}</h3>;
};
