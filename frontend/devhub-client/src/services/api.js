// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // your backend URL
  withCredentials: true, // useful if you're using cookies
});

export default api;
