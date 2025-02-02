import React from 'react';
import SearchInput from './components/SearchInput';
import WeatherDisplay from './components/WeatherDisplay';
import ErrorDisplay from './components/ErrorDisplay';
import { WeatherProvider } from './context/WeatherContext'; // Correct import
import './App.css';

const App = () => {
  return (
    <WeatherProvider>
      <div className="app">
        <h1>Weather Dashboard</h1>
        <SearchInput />
        <ErrorDisplay />
        <WeatherDisplay />
      </div>
    </WeatherProvider>
  );
};

export default App;