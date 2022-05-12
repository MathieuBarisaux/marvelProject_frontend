import "./ComicSheet.scss";

const ComicSheet = (props) => {
  const { item } = props;

  if (item.description) {
    if (item.description.length > 230) {
      const newDescription = item.description.substring(0, 230) + "...";

      item.description = newDescription;
    }
  }

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
        <div className="ComicSheet__favorite">
          <i className="fas fa-star"></i>
        </div>
      </div>
    </div>
  );
};

export default ComicSheet;
