import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const WeatherContext = createContext();

// Create the provider component
export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState(localStorage.getItem('lastCity') || 'London');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '2e90ad5eff5235c9a78b83b85d0ff3fd'; // Replace with your OpenWeatherMap API key
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  const fetchWeather = async () => {
    try {
      const response = await axios.get(API_URL);
      setWeatherData(response.data);
      setError('');
      localStorage.setItem('lastCity', location);
    } catch (err) {
      setError('City not found or network error');
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 30000); // Polling every 30 seconds
    return () => clearInterval(interval);
  }, [location]);

  return (
    <WeatherContext.Provider value={{ location, setLocation, weatherData, error }}>
      {children}
    </WeatherContext.Provider>
  );
};