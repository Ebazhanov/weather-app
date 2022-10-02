import "./Details.css";

export const Detail = () => {
  return (
    <>
      <dl className="card__details details">
        <div className="details__group">
          <dt>title</dt>
          <dt>weather</dt>
        </div>
        ))
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
};
