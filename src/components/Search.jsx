import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm); // Notify the parent component about the search term
  };

  return (
    <header>
      <form className="search">
        <input
          className="search_input"
          type="text"
          id="search"
          placeholder="Search..."
          onChange={handleSearchChange}
        />
        <button className="search_button" type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
