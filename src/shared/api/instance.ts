import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const ACCESS_API_KEY = import.meta.env.VITE_ACCESS_API_KEY;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  params: {
    language: "ru",
  },
  headers: {
    Authorization: `Bearer ${ACCESS_API_KEY}`,
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);
