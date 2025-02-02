import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const ErrorDisplay = () => {
  const { error } = useContext(WeatherContext);

  return error ? (
    <div
      style={{
        padding: '10px',
        margin: '10px 0',
        borderRadius: '8px',
        background: 'rgba(255, 0, 0, 0.1)',
        color: '#ff4d4d',
        textAlign: 'center',
        fontWeight: 'bold',
        boxShadow: '0 4px 10px rgba(255, 0, 0, 0.2)',
        backdropFilter: 'blur(5px)',
        width: '100%',
        maxWidth: '400px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      ⚠️ {error}
    </div>
  ) : null;
};

export default ErrorDisplay;
