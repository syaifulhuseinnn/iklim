import axios from "axios";
import { useState, useEffect } from "react";
import { weatherEndpoint } from "../common/endpoint";
import nextDayForecastFilter from "../helper/nextDayForecast";
import todayForecastFilter from "../helper/todayForecast";

export default function useOpenWeather() {
  const [weather, setWeather] = useState({
    loading: "idle",
    data: [],
    error: null,
  });

  useEffect(() => {
    setWeather({ ...weather, loading: "loading" });

    const getWeather = async () => {
      try {
        const response = await axios.get(weatherEndpoint);
        const todayForecast = await todayForecastFilter(response.data.list);
        const nextDayForecast = await nextDayForecastFilter(response.data.list);

        setWeather({
          ...weather,
          loading: "success",
          data: { today: todayForecast, next_day: nextDayForecast },
        });
      } catch (error) {
        setWeather({ ...weather, loading: "failed", error: error });
      }
    };

    getWeather();
  }, []);

  return weather;
}
