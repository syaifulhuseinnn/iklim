import React from "react";
import rain from "../../assets/images/22.png";

export default function WeatherItem({ temp, diff, date }) {
  return (
    <div className="weather_today__container">
      <div className="weather_today__item">
        <div className="weather_today__item__title">
          <span>{date}</span>
        </div>
        <div className="weather_today__item__image">
          <img src={rain} alt="cloud" loading="lazy" />
        </div>
        <div className="weather_today__item__desc">
          <div className="weather_today__item__desc__temp">
            <span className="weather_today__item__desc__temp__title">Temp</span>
            <h2 className="weather_today__item__desc__temp__number">
              {temp} &#8451;
            </h2>
          </div>
          <div className="weather_today__item__desc__diff">
            <span className="weather_today__item__desc__diff__title">Diff</span>
            <h2 className="weather_today__item__desc__diff__number">
              {diff}
              &#8451;
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
