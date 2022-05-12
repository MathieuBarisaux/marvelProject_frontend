import "./SearchBar.scss";

const SearchBar = (props) => {
  const { placeholder, value, setValue, setPaging } = props;

  const catchSearch = (event) => {
    setValue(event.target.value);
    setPaging(0);
  };

  return (
    <div className="SearchBar container">
      <div>
        <i className="fas fa-search"></i>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={catchSearch}
      />
    </div>
  );
};

export default SearchBar;
