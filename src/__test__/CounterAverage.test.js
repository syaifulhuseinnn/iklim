import counterAvgTemp from "../helper/counterAvgTemp";
import counterAvgDiff from "../helper/counterAvgDiff";

describe("count average temperature and difference", () => {
  const data = [
    {
      main: {
        feels_like: 25.88,
        grnd_level: 1008,
        humidity: 88,
        pressure: 1008,
        sea_level: 1008,
        temp: 25.02,
        temp_kf: -0.04,
        temp_max: 25.06,
        temp_min: 25.02,
      },
    },
    {
      main: {
        feels_like: 25.09,
        grnd_level: 1007,
        humidity: 94,
        pressure: 1010,
        sea_level: 1010,
        temp: 24.16,
        temp_kf: 0,
        temp_max: 24.16,
        temp_min: 24.16,
      },
    },
  ];

  test("count average temperature", () => {
    expect(counterAvgTemp(data)).toBe(24.59);
  });

  test("count average diff", () => {
    expect(counterAvgDiff(data)).toBe(0.02);
  });
});
