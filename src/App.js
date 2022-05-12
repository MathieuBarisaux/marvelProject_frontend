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
  const [actualFav, setActualFav] = useState([]);
  const [addFavorite, setAddFavorite] = useState(false);

  useEffect(() => {
    const checkActualStorage = () => {
      const checkFav = localStorage.getItem("characters");

      let actualFavArray = [];
      if (checkFav) {
        actualFavArray = JSON.parse(checkFav);
      }

      setActualFav(actualFavArray);
    };
    checkActualStorage();
  }, [addFavorite]);

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
                actualFav={actualFav}
                setActualFav={setActualFav}
                setAddFavorite={setAddFavorite}
                addFavorite={addFavorite}
              />
            }
          />
          <Route path="/comics" element={<Comics />} />
          <Route path="/character/:characterId" element={<Character />} />
          <Route
            path="/myfavorites"
            element={<AllFavorites actualFav={actualFav} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
