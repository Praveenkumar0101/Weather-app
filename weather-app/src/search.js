
import React from 'react';

const Search = ({ city, setCity, searchCity }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button className="search-button" onClick={() => searchCity(city)}>
        Search
      </button>
    </div>
  );
};

export default Search;