import axios from "axios";

export const BASE_URL =
  "https://64372ebe3e4d2b4a12e53434.mockapi.io/tweets/pizza";

export const instancePizza = axios.create({ baseURL: BASE_URL });
