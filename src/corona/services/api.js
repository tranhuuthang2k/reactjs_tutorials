import axios from 'axios';

const getDataVirusCorona = async () => {
  const url = `https://api.covid19api.com/summary`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}

export const api = {
  getDataVirusCorona
}