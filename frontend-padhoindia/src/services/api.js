import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL: "https://padhoindia.onrender.com/api",
  headers: { "Content-Type": "application/json" },
});

// USER
export const registerUser = (userData) => API.post("/user/register", userData);

// EXAMS
export const submitExamForm = (examData) => API.post("/exams", examData);
export const verifyApplication = (data) => API.post("/exams/verify", data);
export const getAllExams = () => API.get("/exams");

// LEVELS
export const getAllLevels = () => API.get("/levels");

export default API;
