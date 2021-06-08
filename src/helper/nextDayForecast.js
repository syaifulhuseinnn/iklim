import moment from "moment";

export default function nextDayForecastFilter(data) {
  // const now = moment().unix();
  // console.log("NOW UNIX => ", now);
  // console.log(moment().format("DD MMMM YYYY, HH:mm"));
  // console.log(
  //   data.map((v) => {
  //     // const x = moment(v.dt).valueOf();
  //     return moment.unix(v.dt).format("DD MMMM YYYY, HH:mm");
  //   })
  // );
  // console.log(moment.unix(data[0].dt).format("HH:mm"));

  return data.filter(
    (x) =>
      moment.unix(x.dt).format("HH:mm") ===
      moment.unix(data[0].dt).format("HH:mm")
  );
}
