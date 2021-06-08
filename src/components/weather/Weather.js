import React from "react";
import WeatherItem from "./WeatherItem";
import round from "lodash/round";
import moment from "moment";

export default function Weather({ today }) {
  // console.log(today);
  return (
    <div className="weather_today">
      {today.map((value, index) => (
        <WeatherItem
          key={index}
          temp={round(value.main.temp)}
          diff={round(value.main.temp_max - value.main.temp_min)}
          date={moment.unix(value.dt).format("HH:mm")}
        />
      ))}
    </div>
  );
}
