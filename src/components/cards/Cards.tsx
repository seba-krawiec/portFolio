import type { ReactNode } from "preact/compat";
import "../sass/_cardCss/_card.scss";

type CardProps = {
  children?: ReactNode;
  alt: string;
  img: string;
  extraClass?: string;
  text: string;
  title?: string;
  time?: string;
};

export const Card = ({
  img,
  alt,
  extraClass,
  text,
  title,
  children,
}: CardProps) => {
  return (
    <article className={extraClass ? `card ${extraClass}` : "card"}>
      <figure className="card_imgWrapper">
        <img className="card_img" src={img} alt={alt} />
      </figure>
      <figcaption className="card_textWrapper">
        {title && <h2 className="card_title">{title}</h2>}
        {text && <p className="card_text">{text}</p>}
        {children}
      </figcaption>
    </article>
  );
};

export const HorizontalCard = ({
  extraClass,
  text,
  title,
  children,
  time,
}: CardProps) => {
  return (
    <article className={extraClass ? `card ${extraClass}` : "card"}>
      <div className="card_titleWrapper">
        <h2 className="card_title">{title}</h2>
        <h3 className="card_titleTime">{time}</h3>
      </div>
      {text && <p className="card_text">{text}</p>}
      <div className="card_btnsWrapper">{children}</div>
    </article>
  );
};
