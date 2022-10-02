import cloudIcon from "../../assets/cloud.jpg";

export const Header = () => {
  return (
    <>
      <h2 className="card__title">City</h2>
      <time className="card_date" dateTime="2022-10-02">
        02 Oct 20022
      </time>
      <div className="card__icon">
        <img src={cloudIcon} alt="Clouds" />
        <div className="card__degree">C</div>
        <div className="card__weather">Clouds</div>
      </div>
    </>
  );
};
