import axios from 'axios';
import jwt from 'jsonwebtoken';

const SERECT_KEY_TOKEN = 'reactJS-2105';
// key nay la ben backend se quy dinh
// ho se cung cap cho ben phia frontend
// key nay 2 ben can bao mat - khong de lo

const searchMovieByKeyword = async (key, page = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${key}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}

const getDataMovieById = async (id = 0) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&append_to_response=videos,images&include_image_language=en,null`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}

const checkLoginUser = (user, pass) => {
  /*
  -khi ma user gui username, mat khau len server(backend api)
  -backend-api se kiem tra xem account co ton tai ko ?
  -backend se tra ve thong tin cua user do duoi dang ma hoa token
  -client-frontend se nhan dc token do - giai ma ra de co duoc cac thong tin cuua nguoi dang nhap
  -giua backend va frontend can co co che ma hoa va giai ma chung
  - su dung demo test: jsonwebtoken
  */
  // vi ko co api login tu backend - tu fix 
  let token = null;
  if(user === 'admin' && pass === '123'){
    // ma hoa thong tin thanh token tra ve
    token = jwt.sign({
      id: 1,
      user: user,
      fullname: 'nguyen thanh trieu',
      email: 'trieunt@gmail.com',
      phone: '0975091304',
      address: 'Ha Noi'
    }, SERECT_KEY_TOKEN);
  }
  return token;
}

export const api = {
  searchMovieByKeyword,
  getDataMovieById,
  checkLoginUser
}