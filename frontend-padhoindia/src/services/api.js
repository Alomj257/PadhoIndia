import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://padhoindia.onrender.com/api",
  headers: { "Content-Type": "application/json" },
});

export const registerUser = (userData) => API.post("/user/register", userData);

export default API;
