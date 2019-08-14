import axios from "axios";

axios.defaults.baseURL = window.location.origin;

window.axios = axios;

export default axios;
