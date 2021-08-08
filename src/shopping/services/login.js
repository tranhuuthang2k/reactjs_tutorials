import axios from "axios";
import qs from "qs";
const loginUser = async (email, password) => {
  const url = "https://reqres.in/api/login";
  const params = qs.stringify({
    email: email,
    password: password,
  });
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  const res = await axios.post(url, params, config);
  const result = res.status === 200 ? res.data : {};
  return result;
};
export const apiLogin = {
  loginUser,
};
