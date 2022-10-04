import React, { useEffect, useState } from "react";
import "./App.css";
import { PageTitle } from "../page-title/PageTitle";
import { WeatherCard } from "../weather-card/WeatherCard";
import { useLocation } from "../../hooks/use-location";
import { getUrl, transformWeather } from "../../utils/utils";
import { API_END_POINT, API_KEY } from "../../utils/constants";
import { Loader } from "../loader/Loader";

function App() {
  const [latitude, longitude] = useLocation();
  const [weatherData, setWeatherData] = useState({});

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
      //console.log(rawData);
      setWeatherData(transformWeather(rawData));
      console.log(weatherData);
    };
    fetchData();
  }, [latitude, longitude]);

  return (
    <div className="container">
      <PageTitle title="Weather App" />
      {!weatherData ? <Loader /> : <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
