import React, { useEffect, useState } from "react";
import "./App.css";
import { WeatherCard } from "../weather-card/WeatherCard";
import { useLocation } from "../../hooks/use-location";
import { getUrl, transformWeather } from "../../utils/utils";
import { API_END_POINT, API_KEY } from "../../utils/constants";
import { Loader } from "../loader/Loader";

function App() {
  const [latitude, longitude] = useLocation();
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const url = getUrl(API_END_POINT, latitude, longitude, API_KEY);
    if (!latitude || !longitude) {
      return;
    }
    fetch(url)
      .then((res) => res.json())
      .then((rawData) => {
        setWeatherData(transformWeather(rawData));
      })
      .catch(() => {
        throw new Error("Error: geolocation API is not valid");
      });
  }, [latitude, longitude]);

  return (
    <div className="container">
      {Object.keys(weatherData).length === 0 ? (
        <Loader />
      ) : (
        <WeatherCard data={weatherData} />
      )}
    </div>
  );
}

export default App;
