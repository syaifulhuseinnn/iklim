export default function counterAvgTemp(data) {
  let avgTemp = 0;
  data.forEach((element) => {
    avgTemp += element.main.temp / 5;
  });
  return avgTemp;
}
