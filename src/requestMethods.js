import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const BASE_URL_TRAM = "http://ctu-oda-gateway.site/";
const BASE_URL_TRAM2 = "http://13.229.123.104";
const BASE_URL_TRAM3 = "http://3.0.21.185";
export const publicRequestTram = axios.create({
  baseURL: BASE_URL_TRAM3,
  headers: {
    // 'Content-Type': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    // Other headers if needed
  },
  responseType: 'json',
});

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${123}` },
});
