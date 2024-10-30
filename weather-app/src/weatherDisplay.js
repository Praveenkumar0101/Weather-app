import React from 'react';
import dateFormat from 'dateformat';

const WeatherDisplay = ({ weatherData, unit, addFavorite }) => {
  if (!weatherData) return null;


  const dailyForecast = weatherData.list.filter(item => item.dt_txt.includes("12:00:00"));

  return (
    <div className="weather-display">
      <div className="current-weather">
        <h2>Current Weather in {weatherData.city.name}, {weatherData.city.country}</h2>
        <p>Temperature: {weatherData.list[0].main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
        <p>Humidity: {weatherData.list[0].main.humidity}%</p>
        <p>Wind Speed: {weatherData.list[0].wind.speed} m/s</p>
        <button className="add-favorite-button" onClick={() => addFavorite({ name: weatherData.city.name, country: weatherData.city.country })}>
          Add to Favorites
        </button>
      </div>

      <h3>5-Day Forecast</h3>
      <div className="forecast">
        {dailyForecast.slice(0, 5).map((forecast, index) => (
          <div key={index} className="forecast-card">
            <p className="forecast-date">{dateFormat(forecast.dt_txt, "ddd, mmm d")}</p>
            <p className="forecast-temp">Temp: {forecast.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
            <p className="forecast-conditions">Conditions: {forecast.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;