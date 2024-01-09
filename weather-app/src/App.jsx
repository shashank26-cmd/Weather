// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/Search/Search";
import WeatherCard from "./components/WeatherCard/WeatherCard";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (query) => {
    try {
      const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`,
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError(
        "Error fetching weather data. Please check the city name and try again.",
      );
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchWeatherDataByLocation = async ({ latitude, longitude }) => {
    try {
      const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`,
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError(
        "Error fetching weather data by location. Please try again or enter a city name.",
      );
      console.error("Error fetching weather data by location:", error);
    }
  };

  useEffect(() => {
    // Initial data fetch (you can modify it based on your requirements)
    fetchWeatherData("London");
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-500 to-purple-700 min-h-screen flex flex-col items-center justify-center">
      <SearchBar
        onSearch={fetchWeatherData}
        onGeoLocation={fetchWeatherDataByLocation}
      />

      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default App;
