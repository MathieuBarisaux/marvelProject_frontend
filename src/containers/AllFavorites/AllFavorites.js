import "./AllFavorites.scss";

const AllFavorites = (props) => {
  const { actualFavCharacters, actualFavComics } = props;

  return (
    <div className="AllFavorites">
      <h1 className="container">Favorites</h1>
      <h2 className="container">All your favorites characters</h2>
      <div className="AllFavorites__characters">
        {actualFavCharacters.length > 0 ? (
          actualFavCharacters.map((item) => {
            return (
              <div className="FavBase__characters">
                <img src={item.thumbnail} alt="" />
                <p key={item.id}>{item.name}</p>
              </div>
            );
          })
        ) : (
          <div className="FavBase__characters">
            <h3>Add characters favorites to display this here</h3>
          </div>
        )}
      </div>
      <h2 className="container">All your favorites comics</h2>
      <div className="AllFavorites__characters">
        {actualFavComics.length > 0 ? (
          actualFavComics.map((item) => {
            return (
              <div className="FavBase__comics">
                <img src={item.thumbnail} alt="" />
                <p key={item.id}>{item.name}</p>
              </div>
            );
          })
        ) : (
          <div className="FavBase__comics">
            <h3>Add comics favorites to display this here</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllFavorites;
