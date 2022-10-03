import React, { useEffect, useState } from "react";
import "./App.css";
import { PageTitle } from "../page-title/PageTitle";
import { WeatherCard } from "../weather-card/WeatherCard";
import { useLocation } from "../../hooks/use-location";
import { getUrl, transformWeather } from "../../utils/Utils";
import { API_END_POINT, API_KEY } from "../../utils/constants";

function App() {
  const [latitude, longitude] = useLocation();
  const [weatherData, setWeatherData] = useState(null);

  //console.log(latitude, longitude);

  useEffect(() => {
    const fetchData = async () => {
      if (!latitude || !longitude) {
        return;
      }
      const url = getUrl(API_END_POINT, latitude, longitude, API_KEY);
      //console.log(url);

      const response = await fetch(url);
      const rawData = await response.json();
      console.log(rawData);
      setWeatherData(transformWeather);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <PageTitle title="Weather App" />
      <WeatherCard />
    </div>
  );
}

export default App;
