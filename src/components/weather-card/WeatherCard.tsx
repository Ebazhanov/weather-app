import { Header } from "../header/Header";
import { Detail } from "../details/Details";
import "./WeatherCard.css";

export const WeatherCard = () => {
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
