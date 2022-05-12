import "./Character.scss";

import { useParams } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

const Character = (props) => {
  const characterId = useParams();
  const [character, setCharacter] = useState("");
  const [characterLoading, setCharacterLoading] = useState(true);

  const [characterComics, setCharacterComics] = useState("");

  useEffect(() => {
    const callServer = async () => {
      try {
        const response = await axios.get(
          `https://marvelprojectback.herokuapp.com/characters/${characterId.characterId}`
        );

        setCharacter(response.data);

        const comicsResponse = await axios.get(
          `https://marvelprojectback.herokuapp.com/comics/${characterId.characterId}`
        );
        setCharacterComics(comicsResponse.data);
        console.log(comicsResponse.data);
        setCharacterLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    callServer();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Character container">
      {characterLoading === false && (
        <>
          <img
            src={character.thumbnail.path + "." + character.thumbnail.extension}
            alt="Character Marvel"
          />
          <div className="Character__infos">
            <h3>{character.name}</h3>
            <p>{characterComics.description}</p>
            <div className="Character__comicsContainer">
              {characterComics.comics.map((item) => {
                return (
                  <div
                    className="Character__comicsContainer__comics"
                    key={item._id}
                  >
                    <img
                      src={item.thumbnail.path + "." + item.thumbnail.extension}
                      alt="Comics of this character"
                    />
                    <div>
                      <p>{item.title}</p>
                      <div>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Character;
