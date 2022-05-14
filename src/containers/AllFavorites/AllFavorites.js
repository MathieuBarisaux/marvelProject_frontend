import "./AllFavorites.scss";

const AllFavorites = (props) => {
  const { actualFavCharacters, actualFavComics } = props;

  return (
    <div className="AllFavorites">
      <h1 className="container">Favorites</h1>
      <h2 className="container">All your favorites characters</h2>
      <div className="AllFavorites__characters">
        {actualFavCharacters.map((item) => {
          return (
            <div className="FavBase__characters">
              <img src={item.thumbnail} alt="" />
              <p key={item.id}>{item.name}</p>
            </div>
          );
        })}
      </div>
      <h2 className="container">All your favorites comics</h2>
      <div className="AllFavorites__characters">
        {actualFavComics.map((item) => {
          return (
            <div className="FavBase__comics">
              <img src={item.thumbnail} alt="" />
              <p key={item.id}>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllFavorites;
