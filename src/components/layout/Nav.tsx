import type { CSSProperties } from "preact";
import {
  IconCv,
  IconProjects,
  IconContact,
  IconHome,
  IconExp,
} from "../../../public/icons/";
import "../sass/_layoutCss/Nav.scss";
import { BtnPrimary } from "../buttons/BtnPrimary";
import cv2025 from "../../../public/pdfs/sebastian-krawiec_desarrollador-web.pdf";
import AnchorPrimary from "../buttons/AnchorPrimary";

type Props = {
  location?: string;
  style?: CSSProperties;
};

export const Nav = ({ location, style }: Props) => {
  return (
    <nav className="navBar" style={style}>
      {location !== "home" && (
        <BtnPrimary>
          <AnchorPrimary goTo="#home" label="inicio" icon={<IconHome />} />
        </BtnPrimary>
      )}

      <BtnPrimary>
        <AnchorPrimary goTo="#exp" label="Experiencia" icon={<IconExp />} />
      </BtnPrimary>
      <BtnPrimary>
        <AnchorPrimary
          goTo="#projects"
          label="Proyectos"
          icon={<IconProjects />}
        />
      </BtnPrimary>
      <BtnPrimary>
        <AnchorPrimary
          goTo="#contact"
          label="Contacto"
          icon={<IconContact />}
        />
      </BtnPrimary>
      <BtnPrimary>
        <AnchorPrimary
          goTo={cv2025}
          target="_blank"
          label="Curriculum"
          icon={<IconCv />}
        />
      </BtnPrimary>
    </nav>
  );
};
