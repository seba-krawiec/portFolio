import type { ReactNode } from "preact/compat";
import "../sass/_cardCss/_card.scss";
import {
  CardFigure,
  CardbtnWrapper,
  CardText,
  CardSubtitle,
  CardTitle,
  CardFigCaption,
} from "../cardBlocks";

type CardProps = {
  extraClass?: string;
  children: ReactNode;
};

export const Card = ({ extraClass, children }: CardProps) => {
  return (
    <article className={extraClass ? `card ${extraClass}` : "card"}>
      {children}
    </article>
  );
};

Card.image = CardFigure;
Card.imageContent = CardFigCaption;
Card.title = CardTitle;
Card.subtitle = CardSubtitle;
Card.text = CardText;
Card.btnWrapper = CardbtnWrapper;
