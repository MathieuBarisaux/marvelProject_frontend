import "./Header.scss";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import Cookies from "js-cookie";

import logo from "../../logo.ad6c786b.svg";

const Header = (props) => {
  const { bearerToken, bearerPresent, setBearerPresent } = props;

  const { pathname } = useLocation();

  const [mobileHeader, setMobileHeader] = useState(false);

  const closeMenuBurger = () => {
    mobileHeader && setMobileHeader(false);
  };

  return (
    <header className={mobileHeader ? "" : "container"}>
      <div className="Header">
        <Link to="/">
          <img src={logo} alt="Logo marvel" />
        </Link>
        <div className="Header__background--1"></div>
        <div className="Header__background--2"></div>

        <i
          className="fas fa-bars"
          onClick={() => {
            setMobileHeader(!mobileHeader);
          }}
        ></i>

        <nav className={mobileHeader ? "mobileHeader" : ""}>
          <i
            className={mobileHeader ? "fas fa-times" : ""}
            onClick={() => {
              setMobileHeader(!mobileHeader);
            }}
          ></i>

          <Link to={"/"}>
            <p
              className={pathname === "/" ? "Nav__localisation" : " "}
              onClick={closeMenuBurger}
            >
              Home
            </p>
          </Link>

          <Link to={"/characters"}>
            <p
              className={pathname === "/characters" ? "Nav__localisation" : " "}
              onClick={closeMenuBurger}
            >
              Characters
            </p>
          </Link>

          <Link to={"/comics"}>
            <p
              className={pathname === "/comics" ? "Nav__localisation" : " "}
              onClick={closeMenuBurger}
            >
              Comics
            </p>
          </Link>

          <div className="Nav__separate"></div>

          <div className="Nav__user">
            <i className="fas fa-user"></i>
            <div>
              <ul>
                <Link to={"/myfavorites"}>
                  <li onClick={closeMenuBurger}>
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
                      <button
                        className="Nav__user__buttons__signup"
                        onClick={closeMenuBurger}
                      >
                        Signup
                      </button>
                    </Link>
                    <Link to={"/login"}>
                      <button
                        className="Nav__user__buttons__login"
                        onClick={closeMenuBurger}
                      >
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
