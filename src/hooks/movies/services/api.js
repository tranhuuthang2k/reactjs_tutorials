import axios from "axios";
const getdata = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&release_date.gte=2020-07-20&release_date.lte=2020-10-18&with_release_type=3|2`;
  const res = await axios.get(url);

  const result = res.status === 200 ? res.data : {};
  return result;
};
export const api = {
  getdata,
};
