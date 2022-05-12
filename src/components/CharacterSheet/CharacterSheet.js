import "./CharacterSheet.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CharacterSheet = (props) => {
  const { item } = props;

  const [actualFav, setActualFav] = useState([]);
  const [addFavorite, setAddFavorite] = useState(false);

  if (item.description.length > 130) {
    const newDescription = item.description.substring(0, 130) + "...";

    item.description = newDescription;
  }

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
    <div className="CharacterSheet">
      <img
        src={item.thumbnail.path + "." + item.thumbnail.extension}
        alt="Character of marvel"
      />
      <div>
        <h4>{item.name}</h4>
        <p>
          {item.description
            ? item.description
            : "Sorry but we don't have description for this heroes !"}
        </p>

        <Link to={`/character/${item._id}`}>
          <div className="CharacterSheet__viewMore">
            <i className="fas fa-eye"></i>
            <p>More</p>
          </div>
        </Link>

        <div
          className="CharacterSheet__favorite"
          onClick={() => {
            const newFav = {
              id: item._id,
              name: item.name,
              thumbnail: item.thumbnail.path + "." + item.thumbnail.extension,
            };

            if (actualFav.length > 0) {
              const actualFavCopy = [...actualFav];
              actualFavCopy.push(newFav);

              const newFavArray = JSON.stringify(actualFavCopy);
              localStorage.setItem("characters", newFavArray);

              if (addFavorite === false) {
                setAddFavorite(true);
              } else {
                setAddFavorite(false);
              }
            } else {
              let characterFav = [];

              characterFav.push(newFav);

              const characterFavString = JSON.stringify(characterFav);
              localStorage.setItem("characters", characterFavString);
              if (addFavorite === false) {
                setAddFavorite(true);
              } else {
                setAddFavorite(false);
              }
            }
          }}
        >
          <i className="fas fa-star"></i>
        </div>
      </div>
    </div>
  );
};

export default CharacterSheet;
