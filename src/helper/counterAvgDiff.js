import round from "lodash/round";

export default function counterAvgDiff(data) {
  let avgDiff = 0;
  data.forEach((element) => {
    avgDiff += (element.main.temp_max - element.main.temp_min) / data.length;
  });

  return round(avgDiff, 2);
}
