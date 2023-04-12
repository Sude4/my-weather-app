import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${"d7f79500851c5e784eb20bacbbb9ca68"}&units=metric`
        );
        setWeatherData(response.data);
        setError(null);
      } catch (error) {
        setWeatherData(null);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (location) {
      fetchData();
    }
  }, [location, apiKey]);

  return (
    <WeatherContext.Provider
      value={{ location, setLocation, weatherData, isLoading, error }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };
export default WeatherContext;
