import axios from "axios";

const api = axios.create({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("ctd_token")}`,
  },
  baseURL: "https://dhodonto.ctdprojetos.com.br",
});

export default api;
