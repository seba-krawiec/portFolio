import { Contact, Home, Expertise, Projects } from "./components/Pages";
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
      <Home />
      <Nav style={navStyle} />
      <Expertise />
      <Projects />
      <Contact />
    </div>
  );
}
