import { BtnPrimary } from "../buttons/BtnPrimary";
import IconCv from "../../../public/icons/IconCv";
import "./layoutCss/Nav.scss";

export const Nav = () => {
  return (
    <div className="navBar">
      <BtnPrimary label="Inicio" handleClick={() => console.log("click")} />
      <BtnPrimary
        label="Experiencia"
        handleClick={() => console.log("click")}
      />
      <BtnPrimary label="Proyectos" handleClick={() => console.log("click")} />
      <BtnPrimary label="Contacto" handleClick={() => console.log("click")} />
      <BtnPrimary
        label="Curriculum"
        icon={<IconCv fill={"#4F3874"} />}
        handleClick={() => console.log("click")}
      />
    </div>
  );
};
