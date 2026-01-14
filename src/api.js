import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:2500",
  baseURL: "https://foodhub-fullstack-1.onrender.com",
});

export default api;