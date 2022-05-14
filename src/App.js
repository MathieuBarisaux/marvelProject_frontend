import "./App.scss";

// ** Hooks **
import { useEffect, useState } from "react";

// ** Dependencies **
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

// ** Components **
import Header from "./components/Header/Header";

// ** Containers **
import Home from "./containers/Home/Home";
import Characters from "./containers/Characters/Characters";
import Comics from "./containers/Comics/Comics";
import Character from "./containers/Character/Character";
import AllFavorites from "./containers/AllFavorites/AllFavorites";
import Signup from "./containers/Signup/Signup";

function App() {
  const [actualFavCharacters, setActualFavCharacters] = useState([]);
  const [actualFavComics, setActualFavComics] = useState([]);

  const [bearerToken, setBearerToken] = useState("");
  const [bearerPresent, setBearerPresent] = useState(false);

  useEffect(() => {
    const checkActualStorage = () => {
      const checkFavCharacters = localStorage.getItem("characters");
      const checkFavComics = localStorage.getItem("comics");

      let actualFavCharactersArray = [];
      if (checkFavCharacters) {
        actualFavCharactersArray = JSON.parse(checkFavCharacters);
      }

      let actualFavComicsArray = [];
      if (checkFavComics) {
        actualFavComicsArray = JSON.parse(checkFavComics);
      }

      setActualFavCharacters(actualFavCharactersArray);
      setActualFavComics(actualFavComicsArray);
    };
    checkActualStorage();
  }, []);

  useEffect(() => {
    const tokenUser = Cookies.get("bearerToken");
    setBearerToken(tokenUser);
    // eslint-disable-next-line
  }, [bearerPresent]);

  return (
    <>
      <Router>
        <Header
          bearerToken={bearerToken}
          setBearerPresent={setBearerPresent}
          bearerPresent={bearerPresent}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/characters"
            element={
              <Characters
                actualFavCharacters={actualFavCharacters}
                setActualFavCharacters={setActualFavCharacters}
              />
            }
          />
          <Route
            path="/comics"
            element={
              <Comics
                actualFavComics={actualFavComics}
                setActualFavComics={setActualFavComics}
              />
            }
          />
          <Route path="/character/:characterId" element={<Character />} />
          <Route
            path="/myfavorites"
            element={
              <AllFavorites
                actualFavCharacters={actualFavCharacters}
                actualFavComics={actualFavComics}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup
                setBearerPresent={setBearerPresent}
                bearerPresent={bearerPresent}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
