import { Header } from "../header/Header";
import "./WeatherCard.css";
import Detail from "../details/Details";

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
