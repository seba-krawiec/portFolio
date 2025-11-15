import {
  IconCv,
  IconProjects,
  IconContact,
  IconHome,
  IconExp,
} from "../../../public/icons/";
import { BtnPrimary } from "../buttons/BtnPrimary";
import "./layoutCss/Nav.scss";

type Props = {
  location: string;
};

export const Nav = ({ location }: Props) => {
  return (
    <nav className="navBar">
      {location !== "home" && (
        <BtnPrimary goTo="#inicio" label="Inicio" icon={<IconHome />} />
      )}

      <BtnPrimary goTo="#experiencia" label="Experiencia" icon={<IconExp />} />
      <BtnPrimary goTo="#proyectos" label="Proyectos" icon={<IconProjects />} />
      <BtnPrimary goTo="#contacto" label="Contacto" icon={<IconContact />} />
      <BtnPrimary goTo="curriculum" label="Curriculum" icon={<IconCv />} />
    </nav>
  );
};
