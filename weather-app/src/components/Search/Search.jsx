// src/components/SearchBar.js
import React, { useState } from "react";
import { FaSearch, FaLocationArrow } from "react-icons/fa";

const SearchBar = ({ onSearch, onGeoLocation }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
    }
  };

  const handleGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onGeoLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting geolocation:", error.message);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="bg-blue-500 p-4 mb-4 rounded-md text-black">
      <div className="flex items-center justify-center space-x-2">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border border-white rounded-md"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-white text-blue-500 rounded-md"
        >
          <FaSearch size={18} />
        </button>
        <button
          onClick={handleGeoLocation}
          className="p-2 bg-white text-blue-500 rounded-md"
        >
          <FaLocationArrow size={18} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
