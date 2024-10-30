
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Search from "./search";
import WeatherDisplay from "./weatherDisplay";
import Favorites from "./favourite";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('metric'); 
  const apiKey = '94dd868dc50b0c1e16876806b84f3894';

  useEffect(() => {
   
    axios.get('http://localhost:5000/favorites')
      .then((response) => setFavorites(response.data))
      .catch((error) => console.error("Error fetching favorites:", error));

    const lastSearchedCity = localStorage.getItem('lastSearchedCity');
    if (lastSearchedCity) {
      setCity(lastSearchedCity);
      searchCity(lastSearchedCity);
    }
  }, []);

  const searchCity = (searchCity) => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${apiKey}&units=${unit}`)
      .then((response) => {
        setWeatherData(response.data);
        setCity(searchCity);
        localStorage.setItem('lastSearchedCity', searchCity); // Save to local storage
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        alert("City not found. Please enter a correct city name.");
      });
  };

  const addFavorite = (cityData) => {
   
    if (!favorites.some(fav => fav.name === cityData.name)) {
      axios.post('http://localhost:5000/favorites', cityData)
        .then((response) => setFavorites([...favorites, response.data]))
        .catch((error) => console.error("Error adding favorite:", error));
    } else {
      console.log("City is already in favorites!");
    }
  };

  const removeFavorite = (cityName) => {
    const favoriteCity = favorites.find(city => city.name === cityName);
    if (favoriteCity) {
      axios.delete(`http://localhost:5000/favorites/${favoriteCity.id}`)
        .then(() => {
          setFavorites(favorites.filter(city => city.name !== cityName));
        })
        .catch((error) => console.error("Error removing favorite:", error));
    }
  };

  const updateFavorite = (cityName, updatedData) => {
    const favoriteCity = favorites.find(city => city.name === cityName);
    if (favoriteCity) {
      axios.patch(`http://localhost:5000/favorites/${favoriteCity.id}`, updatedData)
        .then((response) => {
          setFavorites(
            favorites.map(city => 
              city.id === favoriteCity.id ? response.data : city
            )
          );
        })
        .catch((error) => console.error("Error updating favorite:", error));
    }
  };

  const toggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <Search city={city} setCity={setCity} searchCity={searchCity} />
      <button className="button1" onClick={toggleUnit}>
        Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>
      <WeatherDisplay weatherData={weatherData} unit={unit} addFavorite={addFavorite} />
      <Favorites favorites={favorites} removeFavorite={removeFavorite} updateFavorite={updateFavorite} />
    </div>
  );
};

export default App;
