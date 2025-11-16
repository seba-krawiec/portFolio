import { Page } from "../layout/Page";
import { Nav } from "../layout";
import "../sass/_pagesCss/_pagesHome.scss";

export const Home = () => {
  return (
    <Page extraClass="home" id="home">
      <div className="home-content">
        <div className="home-imgWrapper">
          <img
            className="home-img"
            src="/public/images/foto_cv_00.png"
            alt="profile photo"
          />
        </div>
        <div className="home-wrapper">
          <div className="home-titleWrapper">
            <h1 className="home-title">sebastian krawiec</h1>
            <h2 className="home-subtitle">Desarrollador fullstack</h2>
            <p className="home-text">
              Hola! Soy un desarrollador con <span>3+</span> años de experiencia
              y especializado en el <span>FRONT END</span>. Me enfoco en la
              escucha activa, la mejora constante y el aprendizaje de cosas
              nuevas.
            </p>
          </div>
          <Nav location="home" />
        </div>
      </div>
    </Page>
  );
};
