const Searchbar = ({ onSearch, onChange, value, id }) => {
  return (
    <div>
      <label htmlFor="search">Search your favorite teams:</label>
      <input type="text" id={id} onChange={onChange} value={value} />
      <hr />
    </div>
  );
};

export default Searchbar;
