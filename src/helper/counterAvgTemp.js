import round from "lodash/round";

export default function counterAvgTemp(data) {
  let avgTemp = 0;
  data.forEach((element) => {
    avgTemp += element.main.temp / data.length;
  });
  return round(avgTemp, 2);
}
