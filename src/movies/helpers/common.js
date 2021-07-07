import jwt from 'jsonwebtoken';

const SERECT_KEY_TOKEN = 'reactJS-2105';

function isEmptyObject(obj) {
  for(let prop in obj) {
    //hasOwnProperty: kiem tra trong object co ton key ko ???
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
  // return true : object rong
}


// save token localStorage
function saveTokenLocalStorage(token) {
  if(token !== null && token !== ''){
    window.localStorage.setItem('token_login', token);
  }
}

// remove token localStorage
function removeToken() {
  window.localStorage.removeItem('token_login');
}

// get token
function getTokenStorage() {
  let token = window.localStorage.getItem('token_login');
  return token;
}

// giai ma token
function decryptToken() {
  let encryptToken = getTokenStorage();
  let decoded = {};
  if(encryptToken !== null && encryptToken !== ''){
    decoded = jwt.verify(encryptToken, SERECT_KEY_TOKEN);
  }
  return decoded;
}

// get email login
function getEmailUser() {
  const infoUser = decryptToken();
  if(infoUser.hasOwnProperty('email')){
    return infoUser.email;
  }
  return null;
}
function getIdUser(){
  const infoUser = decryptToken();
  if(infoUser.hasOwnProperty('id')){
    return parseInt(infoUser.id);
  }
  return 0;
}

function fakeAuthLogin() {
  let user = getEmailUser();
  let id = getIdUser();
  if(user !== null && id > 0){
    return true;
  }
  return false;
}

export const helper = {
  isEmptyObject,
  saveTokenLocalStorage,
  getEmailUser,
  removeToken,
  fakeAuthLogin,
}