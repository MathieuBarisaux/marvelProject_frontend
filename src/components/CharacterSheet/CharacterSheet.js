import "./CharacterSheet.scss";

import { Link } from "react-router-dom";

const CharacterSheet = (props) => {
  const { item } = props;

  if (item.description.length > 130) {
    const newDescription = item.description.substring(0, 130) + "...";

    item.description = newDescription;
  }

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

        <div className="CharacterSheet__favorite">
          <i className="fas fa-star"></i>
        </div>
      </div>
    </div>
  );
};

export default CharacterSheet;
