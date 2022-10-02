import React from "react";
import "./App.css";
import { PageTitle } from "../page-title/PageTitle";
import { WeatherCard } from "../weather-card/WeatherCard";

function App() {
  return (
    <div className="container">
      <PageTitle title="Weather App" />
      <WeatherCard />
    </div>
  );
}

export default App;
