import "./Details.css";

export default function Detail() {
  return (
    <>
      <dl className="card__details details">
        <div className="details__group">
          <dt>humidity</dt>
          <dt>73%</dt>
        </div>
      </dl>
      <dl className="card__details details">
        <div className="details__group">
          <dt>wind</dt>
          <dt>6 m/c</dt>
        </div>
      </dl>
      <dl className="card__details details">
        <div className="details__group">
          <dt>visibility</dt>
          <dt>10/km</dt>
        </div>
      </dl>
      <dl className="card__details details">
        <div className="details__group">
          <dt>sunrise</dt>
          <dt>6:26</dt>
        </div>
      </dl>
      <div className="card__toggle toggle">
        <input className="toggle__radio" type="radio" name="day" id="today" />
        <label className="toggle__label" htmlFor="today">
          Today
        </label>
        <input
          className="toggle__radio"
          type="radio"
          name="day"
          id="tomorrow"
        />
        <label className="toggle__label" htmlFor="tomorrow">
          Tomorrow
        </label>
      </div>
    </>
  );
}
