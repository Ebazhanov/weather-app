import { Header } from "../header/Header";
import "./WeatherCard.css";
import Detail from "../details/Details";
import { useState } from "react";

export const WeatherCard = ({ data }: any) => {
  const [currentDay, setCurrentDay] = useState("today");

  const { city, sunrise, sunset, today } = data;
  const todayWeather = data[currentDay];

  return (
    <article className="card">
      <div className="left-col">
        <Header
          city={city}
          /*
          date={todayWeather.date}
          temp={todayWeather.temp}
          icon={todayWeather.icon}
          description={todayWeather.description}
          shortDescription={todayWeather.shortDescription}*/
        />
      </div>
      <div className="right-col">
        <Detail
          onChangeDay={({ target }: { target: any }) =>
            setCurrentDay(target.id)
          }
          weatherDay={currentDay}
        />
      </div>
    </article>
  );
};
