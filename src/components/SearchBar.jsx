import "./styles/SearchBar.css";
import PropTypes from "prop-types"; // Import PropTypes

import { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div className="search-bar">
      <input
        id="search-input"
        value={search}
        className="search-input"
        type="text"
        placeholder="Search for a song..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
