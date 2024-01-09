// src/components/WeatherCard.js
import React from "react";

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      {weatherData ? (
        <div>
          <h2 className="text-2xl font-bold mb-2">{weatherData.name}</h2>
          <div className="flex items-center">
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
              className="mr-4"
            />
            <span className="text-3xl">{weatherData.main.temp}&deg;C</span>
          </div>
          <p className="text-gray-700 mt-2">
            {weatherData.weather[0].description}
          </p>
          <p className="mt-2">
            Location: {weatherData.coord.lat}, {weatherData.coord.lon}
          </p>
        </div>
      ) : (
        <p>Invalid Name</p>
      )}
    </div>
  );
};

export default WeatherCard;
