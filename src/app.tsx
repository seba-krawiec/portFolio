import { Contacto, Inicio, Experiencia, Proyectos } from "./components/Pages";
import "./app.css";

export function App() {
  return (
    <div className="app">
      <Inicio />
      <Experiencia />
      <Proyectos />
      <Contacto />
    </div>
  );
}
