import type { CSSProperties } from "preact";
import {
  IconCv,
  IconProjects,
  IconContact,
  IconHome,
  IconExp,
} from "../../../public/icons/";
import { BtnPrimary } from "../buttons/BtnPrimary";
import "../sass/_layoutCss/Nav.scss";
import cv2025 from "../../../public/pdfs/cv_2025.png";

type Props = {
  location?: string;
  style?: CSSProperties;
};

export const Nav = ({ location, style }: Props) => {
  return (
    <nav className="navBar" style={style}>
      {location !== "home" && (
        <BtnPrimary goTo="#inicio" label="Inicio" icon={<IconHome />} />
      )}

      <BtnPrimary goTo="#experiencia" label="Experiencia" icon={<IconExp />} />
      <BtnPrimary goTo="#proyectos" label="Proyectos" icon={<IconProjects />} />
      <BtnPrimary goTo="#contacto" label="Contacto" icon={<IconContact />} />
      <BtnPrimary
        goTo={cv2025}
        target="_blank"
        label="Curriculum"
        icon={<IconCv />}
      />
    </nav>
  );
};
