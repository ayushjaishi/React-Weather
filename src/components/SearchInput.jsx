import React, { useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const SearchInput = () => {
  const [city, setCity] = useState('');
  const { setLocation } = useContext(WeatherContext);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      setLocation(city);
    }
  };

  return (
    <form 
      onSubmit={handleSearch} 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        padding: '10px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
      }}
    >
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '5px',
          outline: 'none',
          background: 'rgba(255, 255, 255, 0.2)',
          color: 'black',
          width: '200px',
          textAlign: 'center'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 15px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '5px',
          background: '#fff',
          color: '#333',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
