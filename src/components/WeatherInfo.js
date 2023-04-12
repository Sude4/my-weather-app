import React from 'react';

const WeatherInfo = ({ weatherData }) => {
  const { name, main } = weatherData;

  return (
    <div>
      <h2>{name}</h2>
      <p>{main.temp}°C</p>
      <p>{main.humidity}% Humidity</p>
      <p>{main.pressure} hPa Pressure</p>
    </div>
  );
};

export default WeatherInfo;
