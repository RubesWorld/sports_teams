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
        <br />
        <br />
        <button>Basketball</button>
        <button>Baseball</button>
        <button>Hockey</button>
        <button>Football</button>
        <button>Soccer</button>
      </div>
    </div>
  );
};

export default Searchbar;
