// import { useContext } from "react";
// import { WiDaySunny, WiRain, WiSnow, WiCloud } from "react-icons/wi";
// import { WeatherContext } from "../contexts/WeatherContext";
// import "./WeekWeather.css";

// const WeekWeather = () => {
//   const { weather } = useContext(WeatherContext);

//   const getIcon = (weather) => {
//     switch (weather) {
//       case "Clear":
//         return <WiDaySunny className="weather-icon" />;
//       case "Clouds":
//         return <WiCloud className="weather-icon" />;
//       case "Rain":
//         return <WiRain className="weather-icon" />;
//       case "Snow":
//         return <WiSnow className="weather-icon" />;
//       default:
//         return <WiDaySunny className="weather-icon" />;
//     }
//   };

//   const formatDate = (date) => {
//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     const dayOfWeek = days[new Date(date * 1000).getDay()];
//     return dayOfWeek;
//   };

//   return (
//     <div className="week-weather-container">
//       {weather &&
//         weather.daily.slice(1, 6).map((dailyWeather) => (
//           <div className="daily-weather" key={dailyWeather.dt}>
//             <p className="day">{formatDate(dailyWeather.dt)}</p>
//             {getIcon(dailyWeather.weather[0].main)}
//             <p className="temp">{Math.round(dailyWeather.temp.day)}°C</p>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default WeekWeather;  
import React from "react";
import TemperatureChart from "./TemperatureChart";

const WeekWeather = () => {
  // ...
  return (
    <div>
      // ...
      <TemperatureChart />
    </div>
  );
};

export default WeekWeather;
