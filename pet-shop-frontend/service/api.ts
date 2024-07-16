import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1000 * 5,
});

api.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
