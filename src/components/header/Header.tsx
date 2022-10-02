import "./Header.css";
import icon from "../../img/02d.png";

export const Header = () => {
  return (
    <>
      <h2 className="title">City</h2>
      <time className="date" dateTime="2022-10-02">
        02 Oct 20022
      </time>
      <div className="icon">
        <img src={icon} alt="name" />
        <div className="degree">C</div>
        <div className="weather">Clouds</div>
      </div>
    </>
  );
};
