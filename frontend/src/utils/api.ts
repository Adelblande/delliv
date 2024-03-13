import axios from "axios";

import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      toast.error("E-mail e/ou senha inválidos.");
    }
    return error;
  }
);
