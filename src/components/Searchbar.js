const Searchbar = ({ onSearch, onChange, value, id }) => {
  return (
    <div>
      <label htmlFor="search">
        Select your favorite teams and see what your fandom's success has looked
        like:{" "}
      </label>
      <input type="text" id={id} onChange={onChange} value={value} />
      <br />
      <br />
      <button>Basketball</button>
      <button>Baseball</button>
      <button>Hockey</button>
      <button>Football</button>
      <button>Soccer</button>
    </div>
  );
};

export default Searchbar;
