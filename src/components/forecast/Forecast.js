import React from "react";
import ForecastItem from "./ForecastItem";
import round from "lodash/round";
import moment from "moment";
import counterAvgTemp from "../../helper/counterAvgTemp";
import counterAvgDiff from "../../helper/counterAvgDiff";

export default function Forecast({ forecast }) {
  return (
    <div className="forecast" data-testid="forecast-list">
      <div className="forecast__title">
        <h1>Next 5 days</h1>
      </div>
      {forecast.map((value, index) => (
        <ForecastItem
          key={index}
          temp={round(value.main.temp, 1)}
          diff={round(value.main.temp_max - value.main.temp_min, 1)}
          date={moment.unix(value.dt).format("D MMMM YYYY, HH:mm")}
        />
      ))}
      <div className="average">
        <div className="average__temp">
          <div className="average__temp__title">
            <h3>Average Temperature</h3>
          </div>
          <div className="average__temp__number">
            <h1>{counterAvgTemp(forecast)} &#8451;</h1>
          </div>
        </div>
        <div className="average__diff">
          <div className="average__diff__title">
            <h3>Average Difference</h3>
          </div>
          <div className="average__diff__number">
            <h1>{counterAvgDiff(forecast)} &#8451;</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
