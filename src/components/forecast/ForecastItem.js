import React from "react";
import rain from "../../assets/images/22.png";

export default function ForecastItem({ temp, diff, date }) {
  return (
    <div className="forecast__item" data-testid="forecast-item">
      <div className="forecast__item__title">
        <h4>{date}</h4>
      </div>
      <div className="forecast__item__desc">
        <div className="forecast__item__desc__image">
          <img src={rain} alt="" />
        </div>
        <div className="forecast__item__desc__info">
          <div className="forecast__item__desc__info__temp">
            <div className="forecast__item__desc__info__temp__title">
              <span>Temperature</span>
            </div>
            <div className="forecast__item__desc__info__temp__number">
              <h2>{temp} &#8451;</h2>
            </div>
          </div>
          <div className="forecast__item__desc__info__diff">
            <div className="forecast__item__desc__info__diff__title">
              <span>Difference</span>
            </div>
            <div className="forecast__item__desc__info__diff__number">
              <h2>{diff} &#8451;</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
