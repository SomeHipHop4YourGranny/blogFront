import axios from "./axios";
import URL from "../baseURL";
export default {
  signIn: data =>
    axios.post(`${URL}api/login`, data, {
      withCredentials: true,
    }),

  signUp: data =>
    axios.post(`${URL}api/register`, data, {
      withCredentials: true,
    }),
  userData: id => axios.get(`${URL}api/users/${id}`),
  getUserIdFromCookies: () =>
    axios.get(`${URL}api/session`, {
      withCredentials: true,
    }),
};
