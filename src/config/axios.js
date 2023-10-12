import axios from "axios";
import { BASE_URL } from "./env";

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use((config) => {
  if (localStorage.getItem("TOKEN")) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("TOKEN")}`;
  }
  return config;
});

export default axios;
