import { Contacto, Inicio, Experiencia, Proyectos } from "./components/Pages";
import "./app.scss";
import { Nav } from "./components/layout";

export function App() {
  const navStyle = {
    position: "sticky",
    left: "67.5rem",
    top: "3rem",
  };

  return (
    <div className="app">
      <Inicio />
      <Nav style={navStyle} />
      <Experiencia />
      <Proyectos />
      <Contacto />
    </div>
  );
}
