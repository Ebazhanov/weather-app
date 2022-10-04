import "./Header.css";
import icon from "../../img/02d.png";

export const Header = ({
  city,
  date,
  temp,
  description,
  shortDescription,
}: any) => {
  return (
    <>
      <h2 className="title">{city}</h2>
      <time className="date" dateTime="2022-10-02">
        Zhenja
      </time>
      <div className="icon">
        <img src={icon} alt="Clouds" />
        <div className="degree">13 *C</div>
        <div className="weather">Clouds</div>
      </div>
    </>
  );
};
