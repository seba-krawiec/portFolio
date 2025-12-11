type props = {
  figureClass: string;
  img: string;
  alt: string;
  imageClass?: string;
};
export const CardFigure = ({ figureClass, imageClass, alt, img }: props) => {
  return (
    <figure className={figureClass}>
      <img className={imageClass} src={img} alt={alt} />
    </figure>
  );
};
