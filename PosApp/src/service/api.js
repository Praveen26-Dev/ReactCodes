import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

/* ======================
   REQUEST INTERCEPTOR
====================== */
api.interceptors.request.use(
  (config) => {
    // later you can attach auth token here
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

/* ======================
   RESPONSE INTERCEPTOR
====================== */
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error?.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
