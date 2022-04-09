const Searchbar = ({ onSearch, onChange, value, id }) => {
  return (
    <div>
      <div className="search-container">
        <label htmlFor="search">
          Search your favorite teams and see what your fandom's success has
          looked like{" "}
        </label>
        <input
          placeholder="Search teams..."
          type="text"
          id={id}
          onChange={onChange}
          value={value}
        />
      </div>
      <div className="button-container">
        <button className="basketball">Basketball</button>
        <button className="baseball">Baseball</button>
        <button className="hockey">Hockey</button>
        <button className="football">Football</button>
        <button className="soccer">Soccer</button>
      </div>
    </div>
  );
};

export default Searchbar;
