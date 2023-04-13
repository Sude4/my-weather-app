import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { WeatherContext } from "../context/WeatherContext";

const TemperatureChart = () => {
  const { weeklyWeather } = useContext(WeatherContext);

  const data = {
    labels: weeklyWeather.map((weather) => weather.day),
    datasets: [
      {
        label: "Temperature (°C)",
        data: weeklyWeather.map((weather) => weather.temp),
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default TemperatureChart;
