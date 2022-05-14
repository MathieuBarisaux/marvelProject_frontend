import "./CharacterSheet.scss";

import { Link } from "react-router-dom";

const CharacterSheet = (props) => {
  const { item, actualFavCharacters, setActualFavCharacters } = props;

  if (item.description.length > 130) {
    const newDescription = item.description.substring(0, 130) + "...";

    item.description = newDescription;
  }

  const isAlreadyFavorite = (data) => {
    if (data.length > 0) {
      let indexFound = false;
      for (let i = 0; i < data.length; i++) {
        if (data[i].id === item._id) {
          indexFound = i;
        }
      }
      return indexFound;
    } else {
      return false;
    }
  };

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

            const actualFavCopy = [...actualFavCharacters];
            if (isAlreadyFavorite(actualFavCharacters) === false) {
              actualFavCopy.push(newFav);

              const newFavArray = JSON.stringify(actualFavCopy);
              localStorage.setItem("characters", newFavArray);
              setActualFavCharacters(actualFavCopy);
            } else {
              actualFavCopy.splice(isAlreadyFavorite(actualFavCharacters), 1);

              const newFavArray = JSON.stringify(actualFavCopy);
              localStorage.setItem("characters", newFavArray);
              setActualFavCharacters(actualFavCopy);
            }
          }}
        >
          <i
            className={
              isAlreadyFavorite(actualFavCharacters) === false
                ? "fas fa-star"
                : "fas fa-check"
            }
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CharacterSheet;
