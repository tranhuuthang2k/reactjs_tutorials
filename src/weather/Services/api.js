import axios from "axios";
import { helper } from "../helpers/common";
const getDataWeather = async (city = "") => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric`;
  const res = await axios.get(url);
  const result = res.status === 200 ? res.data : {};
  let data = {};
  if (!helper.isEmptyObject(result)) {
    data.temp = result.main.temp;
    data.pressure = result.main.pressure;
    data.humidity = result.main.humidity;
    data.description = result["weather"][0]["description"];
    data.icon = result["weather"][0]["icon"];
  }

  return data;
};
export const api = {
  getDataWeather,
};
