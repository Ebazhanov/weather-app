import { Header } from "../header/Header";
import "./WeatherCard.css";
import Detail from "../details/Details";
import { useState } from "react";

export const WeatherCard = ({ data }: any) => {
  const [currentDay, setCurrentDay] = useState("today");

  const { city, sunrise, sunset } = data;
  const todayWeather = data[currentDay];
  const weatherDetail = {
    humidity: todayWeather.humidity,
    wind: todayWeather.wind,
    visibility: todayWeather.visibility,
    sunrise,
    sunset,
  };

  const handleClickOnChangeDay = ({ target }: { target: any }) => {
    setCurrentDay(target.id);
  };

  return (
    <article className="card">
      <div className="left-col">
        <Header city={city} {...todayWeather} />
      </div>
      <div className="right-col">
        <Detail
          onChangeDay={handleClickOnChangeDay}
          weatherDay={currentDay}
          weather={weatherDetail}
        />
      </div>
    </article>
  );
};
