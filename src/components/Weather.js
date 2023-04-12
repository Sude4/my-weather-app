import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const Weather = () => {
  const { weatherData, isLoading, error } = useContext(WeatherContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!weatherData) {
    return <p>Please enter a city name to get weather information.</p>;
  }

  return (
    <div>
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Condition: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default Weather;
// import React, { useContext } from 'react';
// import { WiDaySunny, WiRain, WiSnow, WiThunderstorm, WiCloudy } from 'react-icons/wi';
// import  WeatherContext  from '../context/WeatherContext'; 
// import './Weather.css';
// import WeekWeather from './WeekWeather';

// const Weather = () => {
//   const { weather } = useContext(WeatherContext);

//   const getIcon = (iconId) => {
//     switch (iconId) {
//       case '01d':
//       case '01n':
//         return <WiDaySunny className="icon" />;
//       case '02d':
//       case '02n':
//       case '03d':
//       case '03n':
//         return <WiCloudy className="icon" />;
//       case '04d':
//       case '04n':
//         return <WiCloudy className="icon" />;
//       case '09d':
//       case '09n':
//       case '10d':
//       case '10n':
//         return <WiRain className="icon" />;
//       case '11d':
//       case '11n':
//         return <WiThunderstorm className="icon" />;
//       case '13d':
//       case '13n':
//         return <WiSnow className="icon" />;
//       default:
//         return <WiDaySunny className="icon" />;
//     }
//   };

//   const getDate = (dt) => {
//     const date = new Date(dt * 1000);
//     const day = date.toLocaleDateString('en-US', { weekday: 'long' });
//     return day;
//   };

//   return (
//     <div className="weather-container">
//       {weather ? (
//         <>
//           <div className="weather">
//             <h2>{weather.name}</h2>
//             <div className="weather-info">
//               <div className="weather-icon">{getIcon(weather.weather[0].icon)}</div>
//               <div className="temperature">
//                 <div className="temp">
//                   {Math.round(weather.main.temp)}
//                   <span className="unit">&deg;C</span>
//                 </div>
//                 <div className="description">{weather.weather[0].description}</div>
//               </div>
//             </div>
//           </div>
//           <WeekWeather />
//         </>
//       ) : (
//         <h2>Loading...</h2>
//       )}
//     </div>
//   );
// };

// export default Weather;
