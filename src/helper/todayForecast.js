import moment from "moment";

export default function todayForecastFilter(data) {
  return data.filter(
    (value) =>
      moment.unix(value.dt).format("DD MMMM YYYY") ===
      moment.unix(data[0].dt).format("DD MMMM YYYY")
  );
}
