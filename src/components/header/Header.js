import React from "react";
import round from "lodash/round";
import moment from "moment";

export default function Header({ temp, temp_max, temp_min }) {
  return (
    <header>
      <div className="search">
        <div className="search__icon">
          <i className="bx bx-search"></i>
        </div>
      </div>
      <div className="info">
        <div className="info__location">
          <h2>Jakarta</h2>
          <h4>{moment().format("D MMMM YYYY, HH:mm")}</h4>
        </div>
        <div className="info__temp_and_diff">
          <div className="info__temp_and_diff__temp">
            <span className="info__temp_and_diff__temp__title">
              Temperature
            </span>
            <h2 className="info__temp_and_diff__temp__number">
              {round(temp, 1)} &#8451;
            </h2>
          </div>
          <div className="info__temp_and_diff__diff">
            <span className="info__temp_and_diff__diff__title">Difference</span>
            <h2 className="info__temp_and_diff__diff__number">
              {round(temp_max - temp_min, 1)} &#8451;
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
}
