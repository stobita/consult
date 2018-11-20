import axios from "axios";

const http = axios.create();

http.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
http.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("jwt")}`;
  return config;
});

export default http;
