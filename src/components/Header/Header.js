import "./Header.scss";

import { Link, useLocation } from "react-router-dom";

import logo from "../../logo.ad6c786b.svg";

const Header = () => {
  const { pathname } = useLocation();

  // TODO Faire l'animation sur le logo

  return (
    <header className="container">
      <div className="Header">
        <Link to="/">
          <img src={logo} alt="Logo marvel" />
        </Link>
        <div className="Header__background--1"></div>
        <div className="Header__background--2"></div>

        <nav>
          <Link to={"/"}>
            <p className={pathname === "/" ? "Nav__localisation" : " "}>Home</p>
          </Link>

          <Link to={"/characters"}>
            <p
              className={pathname === "/characters" ? "Nav__localisation" : " "}
            >
              Characters
            </p>
          </Link>

          <Link to={"/comics"}>
            <p className={pathname === "/comics" ? "Nav__localisation" : " "}>
              Comics
            </p>
          </Link>

          <div className="Nav__separate"></div>

          <div className="Nav__user">
            <i className="fas fa-user"></i>
            <div>
              <ul>
                <li>
                  <i class="fas fa-bookmark"></i> My favorites
                </li>
              </ul>
            </div>
          </div>
          <div className="Header__background--3"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
