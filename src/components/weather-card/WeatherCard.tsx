import { Header } from "../header/Header";
import "./WeatherCard.css";
import Detail from "../details/Details";
import { useState } from "react";

export const WeatherCard = ({ data }: any) => {
  const [currentDay, setCurrentDay] = useState("today");

  return (
    <article className="card">
      <div className="left-col">
        <Header />
      </div>
      <div className="right-col">
        <Detail />
      </div>
    </article>
  );
};
