const SearchForm = () => {
  return (
    <form>
      <div className="menu__form">
        <select name="categories" id="categories">
          <option value="">All Categories</option>
          <option value="category1">category1</option>
          <option value="category1">category1</option>
        </select>
        <input type="text" name="search" placeholder="Search" />
        <button type="submit">
          <img src="/search-icon.svg" alt="" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
