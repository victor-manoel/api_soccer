import { API_Host, API_Key } from "@env";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api-football-v1.p.rapidapi.com",
});

api.defaults.headers.common["X-RapidAPI-Host"] = API_Host;
api.defaults.headers.common["X-RapidAPI-Key"] = API_Key;
export default api;
