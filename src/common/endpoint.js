const API_KEY = "271da6b323b05ebaf2b4aaa0f3378f89";

export const weatherEndpoint = (id) =>
  `http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${API_KEY}`;
