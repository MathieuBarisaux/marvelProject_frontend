import "./CharacterSheet.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CharacterSheet = (props) => {
  const { item, addFavorite, actualFav, setAddFavorite } = props;

  const [isPresent, setIsPresent] = useState(null);

  if (item.description.length > 130) {
    const newDescription = item.description.substring(0, 130) + "...";

    item.description = newDescription;
  }

  useEffect(() => {
    actualFav.map((i, index) => {
      if (item._id === i.id) {
        setIsPresent(index);
      } else {
        setIsPresent(false);
      }
    });
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

            if (!isPresent) {
              const actualFavCopy = [...actualFav];
              actualFavCopy.push(newFav);

              const newFavArray = JSON.stringify(actualFavCopy);
              localStorage.setItem("characters", newFavArray);
            } else {
              const actualFavCopy = [...actualFav];
              actualFavCopy.splice(isPresent, 1);

              const newFavArray = JSON.stringify(actualFavCopy);
              localStorage.setItem("characters", newFavArray);
            }

            setAddFavorite(!addFavorite);
          }}
        >
          <i
            className={
              isPresent ? (
                <i class="fas fa-check"></i>
              ) : (
                <i class="fas fa-star"></i>
              )
            }
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CharacterSheet;
