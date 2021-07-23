import axios from "axios";
var jwt = require("jsonwebtoken");
const searchMovieByKeyword = async (key, page = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${key}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getDataMovieById = async (id = 0) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&append_to_response=videos,images&include_image_language=en,null`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getDataMovies = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&release_date.gte=2020-07-20&release_date.lte=2020-10-18&with_release_type=3|2`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const KEY_TOKEN = "REACT_JS";
const checkLoginMovies = (user, password) => {
  let token = null;
  if (user === "admin" && password === "123") {
    return (token = jwt.sign(
      {
        id: 1,
        user: user,
        password: password,
        fullname: "Trần Hữu Thắng",
        address: "Đà Nẵng",
        email: "tranhuuthangcoi@gmal.com",
      },
      KEY_TOKEN
    ));
  }
  return token;
};

export const api = {
  searchMovieByKeyword,
  getDataMovieById,
  getDataMovies,
  checkLoginMovies,
};
