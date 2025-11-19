import { Contact, Home, Expertise, Projects } from "./components/Pages";
import "./app.scss";
import { Nav } from "./components/layout";

export function App() {
  const navWrapper = {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
    position: "sticky",
    top: "3rem",
    zIndex: "10",
  };

  const navContainer = {
    display: "flex",
    maxWidth: "53vw",
    marginRight: "-6.4rem",
  };

  return (
    <div className="app">
      <Home />
      <div style={navWrapper}>
        <div style={navContainer}>
          <Nav />
        </div>
      </div>
      <Expertise />
      <Projects />
      <Contact />
    </div>
  );
}
