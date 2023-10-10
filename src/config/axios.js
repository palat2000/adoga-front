import axios from "axios";
import { BASE_URL } from "./env";

axios.defaults.baseURL = BASE_URL;

export default axios;
