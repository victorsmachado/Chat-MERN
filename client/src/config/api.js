import axios from "axios";

const api = axios.create({
  // baseURL: "https://api.idook.com.br",
  baseURL: "http://localhost:5000",
});

export default api;
