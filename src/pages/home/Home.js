import Cloud from "../../components/cloud/Cloud";
import Forecast from "../../components/forecast/Forecast";
import Header from "../../components/header/Header";
import Weather from "../../components/weather/Weather";
import useOpenWeather from "../../hooks/useOpenWeather";
import "../../styles/css/style.css";

export default function Home() {
  let weather = useOpenWeather();
  console.log(weather);

  if (weather.loading === "loading") {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (weather.loading === "failed") {
    return (
      <div>
        <h1>{weather.error}</h1>
      </div>
    );
  }

  return (
    <div className="container">
      {weather.loading === "success" && (
        <>
          <Header
            temp={weather.data.today[0].main.temp}
            temp_max={weather.data.today[0].main.temp_max}
            temp_min={weather.data.today[0].main.temp_min}
          />
          <main>
            <Cloud />
            {weather.data.today.length > 1 && (
              <Weather today={weather.data.today} />
            )}
            <Forecast forecast={weather.data.next_day} />
          </main>
        </>
      )}
    </div>
  );
}
