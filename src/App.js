import "./App.scss";

// ** Hooks **
import { useEffect, useState } from "react";

// ** Dependencies **
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ** Components **
import Header from "./components/Header/Header";

// ** Containers **
import Home from "./containers/Home/Home";
import Characters from "./containers/Characters/Characters";
import Comics from "./containers/Comics/Comics";
import Character from "./containers/Character/Character";
import AllFavorites from "./containers/AllFavorites/AllFavorites";

function App() {
  const [actualFavCharacters, setActualFavCharacters] = useState([]);
  const [actualFavComics, setActualFavComics] = useState([]);

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

  return (
    <>
      <Router>
        <Header />
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
