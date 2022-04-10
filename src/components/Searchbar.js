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
        <button className="filter-button basketball">Basketball</button>
        <button className="filter-button baseball na">Baseball</button>
        <button className="filter-button hockey na">Hockey</button>
        <button className="filter-button football na">Football</button>
        <button className="filter-button soccer na">Soccer</button>
      </div>
    </div>
  );
};

export default Searchbar;
