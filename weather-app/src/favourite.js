import React from 'react';

const Favorites = ({ favorites, removeFavorite }) => {
  return (
    <div className="favorites">
      <h3 className="favorites-title">Favorite Cities</h3>
      <ul className="favorites-list">
        {favorites.map((city, index) => (
          <li key={index} className="favorite-item">
            <span className="favorite-city">
              {city.name}, {city.country}
            </span>
            <button className="remove-favorite-button" onClick={() => removeFavorite(city.name)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;