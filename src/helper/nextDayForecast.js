import moment from "moment";

export default function nextDayForecastFilter(data) {
  return data.filter(
    (x) =>
      moment.unix(x.dt).format("HH:mm") ===
      moment.unix(data[0].dt).format("HH:mm")
  );
}
