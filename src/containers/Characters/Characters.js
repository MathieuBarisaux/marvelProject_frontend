import "./Characters.scss";

import axios from "axios";
import { useEffect, useState } from "react";

// ** Components **
import CharacterSheet from "../../components/CharacterSheet/CharacterSheet";
import SearchBar from "../../components/SearchBar/SearchBar";

const Characters = (props) => {
  const { actualFavCharacters, setActualFavCharacters } = props;

  const [allCharacters, setAllCharacters] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [paging, setPaging] = useState(0);

  const [searchCharacter, setSearchCharacter] = useState("");

  useEffect(() => {
    const callServer = async () => {
      const skip = paging * 100;

      let nameCharacter = "";
      if (searchCharacter) {
        nameCharacter = `&name=${searchCharacter}`;
      }

      const response = await axios.get(
        `https://marvelprojectback.herokuapp.com/characters?&skip=${skip}${nameCharacter}`
      );

      setAllCharacters(response.data.results);
      setIsLoading(false);
    };
    callServer();
  }, [paging, searchCharacter]);

  return (
    <div className="Characters">
      <SearchBar
        placeholder={"Search your favorite character"}
        value={searchCharacter}
        setValue={setSearchCharacter}
        setPaging={setPaging}
      />

      <div className="Characters__title container">
        <h1>HEROES EVERYTIME, EVERYWHERE</h1>
      </div>

      <div className="shadow_left"></div>
      <div className="shadow_right"></div>
      <div className="Characters__container">
        {isLoading === false &&
          allCharacters.map((item) => {
            return (
              <CharacterSheet
                item={item}
                key={item._id}
                actualFavCharacters={actualFavCharacters}
                setActualFavCharacters={setActualFavCharacters}
              />
            );
          })}
      </div>
      {searchCharacter === "" && (
        <div className="Characters__paging">
          {paging > 0 && (
            <>
              {paging > 1 && (
                <>
                  <i
                    className="fas fa-angle-left"
                    onClick={() => {
                      setPaging(0);
                    }}
                  ></i>
                  <p>...</p>
                </>
              )}
              <p
                onClick={() => {
                  setPaging(paging - 1);
                }}
              >
                {paging}
              </p>
            </>
          )}

          <div className="Characters__paging__currentPage">
            <p>{paging + 1}</p>
          </div>

          {paging < 14 && (
            <>
              <p
                onClick={() => {
                  setPaging(paging + 1);
                }}
              >
                {paging + 2}
              </p>
              <p>...</p>
              <i
                className="fas fa-angle-right"
                onClick={() => {
                  setPaging(14);
                }}
              ></i>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Characters;
