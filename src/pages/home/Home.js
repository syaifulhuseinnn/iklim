import React, { useState } from "react";
import Cloud from "../../components/cloud_image/CloudImage";
import Forecast from "../../components/forecast/Forecast";
import CurrentWeather from "../../components/current_weather/CurrentWeather";
import Search from "../../components/search/Search";
import Weather from "../../components/weather/Weather";
import useOpenWeather from "../../hooks/useOpenWeather";
import "../../styles/css/style.css";

export const HomeContext = React.createContext();

export default function Home() {
  const [cityId, setCityId] = useState(1214520);
  const openWeather = useOpenWeather(cityId);

  let content;

  if (openWeather.loading === "loading") {
    content = (
      <div className="loading">
        <h3>Loading...</h3>
      </div>
    );
  }

  if (openWeather.loading === "failed") {
    content = (
      <div className="error">
        <h3>{openWeather.error.code}</h3>
        <h3>{openWeather.error.description}</h3>
      </div>
    );
  }

  if (openWeather.loading === "success") {
    content = (
      <main>
        <CurrentWeather
          temp={openWeather.data.today[0].main.temp}
          temp_max={openWeather.data.today[0].main.temp_max}
          temp_min={openWeather.data.today[0].main.temp_min}
          city={openWeather.data.city.name}
        />

        <Cloud />
        {openWeather.data.today.length > 1 && (
          <Weather today={openWeather.data.today} />
        )}
        <Forecast forecast={openWeather.data.next_day} />
      </main>
    );
  }

  return (
    <HomeContext.Provider value={{ cityId, setCityId }}>
      <div className="container">
        <Search />
        {content}
      </div>
    </HomeContext.Provider>
  );
}
