export default function counterAvgDiff(data) {
  let avgDiff = 0;
  data.forEach((element) => {
    avgDiff += (element.main.temp_max - element.main.temp_min) / 5;
  });

  return avgDiff;
}
