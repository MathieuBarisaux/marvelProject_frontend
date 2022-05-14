import "./ComicSheet.scss";

const ComicSheet = (props) => {
  const { item, actualFavComics, setActualFavComics } = props;

  if (item.description) {
    if (item.description.length > 230) {
      const newDescription = item.description.substring(0, 230) + "...";

      item.description = newDescription;
    }
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
    <div className="ComicSheet">
      <img
        src={item.thumbnail.path + "." + item.thumbnail.extension}
        alt="Comics of marvel"
      />
      <div>
        <h4>{item.title}</h4>
        <p>
          {item.description
            ? item.description
            : "Sorry but we don't have description for this heroes !"}
        </p>
        <div
          className="ComicSheet__favorite"
          onClick={() => {
            const newFav = {
              id: item._id,
              name: item.title,
              thumbnail: item.thumbnail.path + "." + item.thumbnail.extension,
            };

            const actualFavCopy = [...actualFavComics];
            if (isAlreadyFavorite(actualFavComics) === false) {
              actualFavCopy.push(newFav);

              const newFavArray = JSON.stringify(actualFavCopy);
              localStorage.setItem("comics", newFavArray);
              setActualFavComics(actualFavCopy);
            } else {
              actualFavCopy.splice(isAlreadyFavorite(actualFavComics), 1);

              const newFavArray = JSON.stringify(actualFavCopy);
              localStorage.setItem("comics", newFavArray);
              setActualFavComics(actualFavCopy);
            }
          }}
        >
          <i
            className={
              isAlreadyFavorite(actualFavComics) === false
                ? "fas fa-star"
                : "fas fa-check"
            }
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ComicSheet;
