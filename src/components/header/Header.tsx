import "./Header.css";
import dayjs from "dayjs";

const FORMAT_DATE_STRING = "DD MMM YYYY";

export const Header = ({
  city,
  date,
  temp,
  icon,
  description,
  shortDescription,
}: any) => {
  const currentWeatherIcon = require(`../../assets/img/${icon}.png`);
  return (
    <>
      <h2 className="title">{city}</h2>
      <time className="date" dateTime={dayjs(date).toISOString()}>
        {dayjs(date).format(FORMAT_DATE_STRING)}
      </time>
      <div className="icon">
        <img src={currentWeatherIcon} alt={shortDescription} />
      </div>
      <div className="degree">{temp}</div>
      <div className="weather">{description}</div>
    </>
  );
};
