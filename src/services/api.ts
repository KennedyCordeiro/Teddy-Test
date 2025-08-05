import axios from "axios";

const api = axios.create({
  baseURL: "https://boasorte.teddybackoffice.com.br",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
