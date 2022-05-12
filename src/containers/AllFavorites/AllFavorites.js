import "./AllFavorites.scss";

const AllFavorites = (props) => {
  const { actualFav } = props;

  return (
    <div className="AllFavorites">
      <h1 className="container">My favorites</h1>
      <h2 className="container">All your favorites characters</h2>
      <div className="AllFavorites__characters">
        {actualFav.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
      </div>
    </div>
  );
};

export default AllFavorites;
