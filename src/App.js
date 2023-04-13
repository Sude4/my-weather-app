import React from "react";
import LocationInput from "./components/LocationInput";
import Weather from "./components/Weather";
import { WeatherProvider } from "./context/WeatherContext";
import './App.css'




function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <LocationInput />
        <Weather />
      
      </div>
    </WeatherProvider>
  );
}

export default App;
