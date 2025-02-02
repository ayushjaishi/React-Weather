import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import "./WeatherDisplay.css"

const WeatherDisplay = () => {
  const { weatherData, error } = useContext(WeatherContext);

  if (error) return null;

  return (
    <div className="weather-container">
      {weatherData ? (
        <div className="weather-card">
          <h2 className="location">{weatherData.name}</h2>
          <p className="temperature">{weatherData.main.temp}°C</p>
          <p className="details">Humidity: {weatherData.main.humidity}%</p>
          <p className="details">Wind Speed: {weatherData.wind.speed} m/s</p>
          <p className="weather-desc">{weatherData.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="Weather Icon"
            className="weather-icon"
          />
        </div>
      ) : (
        <p className="no-data">No weather data available</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
