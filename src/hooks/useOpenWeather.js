import axios from "axios";
import { useState, useEffect } from "react";
import { weatherEndpoint } from "../common/endpoint";
import nextDayForecastFilter from "../helper/nextDayForecast";
import todayForecastFilter from "../helper/todayForecast";

export default function useOpenWeather(id) {
  const [weather, setWeather] = useState({
    loading: "idle",
    data: [],
    error: null,
  });

  useEffect(() => {
    setWeather({ ...weather, loading: "loading" });

    const getWeather = async () => {
      try {
        const response = await axios.get(weatherEndpoint(id));
        const todayForecast = await todayForecastFilter(response.data.list);
        const nextDayForecast = await nextDayForecastFilter(response.data.list);

        setWeather({
          ...weather,
          loading: "success",
          data: {
            today: todayForecast,
            next_day: nextDayForecast,
            city: response.data.city,
          },
        });
      } catch (error) {
        setWeather({
          ...weather,
          loading: "failed",
          error: error.response.data,
        });
      }
    };

    getWeather();
  }, [id]);

  return weather;
}
