import axios from "axios";
const getDataVirusCorona = async () => {
  const url = "https://api.covid19api.com/summary";
  const res = await axios.get(url);
  const result = res.status === 200 ? res.data : {};
  return result;
};
export const api = {
  getDataVirusCorona,
};
