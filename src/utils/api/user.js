import axios from "./axios";
import URL from "../baseURL";
export default {
  signIn: postData =>
    axios.post(`${URL}api/login`, postData, {
      withCredentials: true,
    }),

  signUp: postData =>
    axios.post(`${URL}api/register`, postData, {
      withCredentials: true,
    }),
  userData: userId => axios.get(`${URL}api/users/${userId}`),
  getUserIdFromCookies: () =>
    axios.get(`${URL}api/session`, {
      withCredentials: true,
    }),
};
