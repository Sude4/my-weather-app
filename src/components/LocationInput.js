import React, { useContext, useState } from "react";
import WeatherContext from "../context/WeatherContext";

const LocationInput = () => {
  const { setLocation } = useContext(WeatherContext);
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default LocationInput;
