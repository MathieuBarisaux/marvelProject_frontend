import "./Header.scss";

import { Link, useLocation } from "react-router-dom";

import Cookies from "js-cookie";

import logo from "../../logo.ad6c786b.svg";

const Header = (props) => {
  const { bearerToken, bearerPresent, setBearerPresent } = props;

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
                <Link to={"/myfavorites"}>
                  <li>
                    <i className="fas fa-bookmark"></i> Favorites
                  </li>
                </Link>
                {bearerToken ? (
                  <div className="Nav__user__buttons">
                    <button
                      className="Nav__user__buttons__disconnect"
                      onClick={() => {
                        Cookies.remove("bearerToken");
                        setBearerPresent(!bearerPresent);
                      }}
                    >
                      Disconect
                    </button>
                  </div>
                ) : (
                  <div className="Nav__user__buttons">
                    <Link to={"/signup"}>
                      <button className="Nav__user__buttons__signup">
                        Signup
                      </button>
                    </Link>
                    <Link to={"/login"}>
                      <button className="Nav__user__buttons__login">
                        Login
                      </button>
                    </Link>
                  </div>
                )}
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
