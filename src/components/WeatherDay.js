// import React from "react";
// import { WiDaySunny, WiCloudy, WiRain, WiSnow } from "react-icons/wi";

// const WeatherDay = ({ day, icon, highTemp, lowTemp }) => {
//   // Render the appropriate weather icon based on the icon prop
//   const renderIcon = (icon) => {
//     switch (icon) {
//       case "01d":
//         return <WiDaySunny />;
//       case "02d":
//         return <WiCloudy />;
//       case "03d":
//         return <WiCloudy />;
//       case "04d":
//         return <WiCloudy />;
//       case "09d":
//         return <WiRain />;
//       case "10d":
//         return <WiRain />;
//       case "11d":
//         return <WiRain />;
//       case "13d":
//         return <WiSnow />;
//       default:
//         return <WiDaySunny />;
//     }
//   };

//   return (
//     <div className="weather-day">
//       <h3>{day}</h3>
//       <div className="weather-icon">{renderIcon(icon)}</div>
//       <div className="weather-temp">
//         <span className="high-temp">{highTemp}°</span>{" "}
//         <span className="low-temp">{lowTemp}°</span>
//       </div>
//     </div>
//   );
// };

// export default WeatherDay;
