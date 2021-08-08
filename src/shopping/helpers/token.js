const saveokenToLocalStorage = (token) => {
  if (token !== "" && token !== undefined) {
    window.localStorage.setItem("token_login", token);
  }
};
export const token = {
  saveokenToLocalStorage,
};
