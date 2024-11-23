import axios from "axios";

// Base URL for the backend
const baseURL = process.env.NODE_ENV === "production" 
  ? "https://pj-tech-hub-backend.vercel.app" 
  : "http://localhost:8080";

// Create an Axios instance
export const Axiosinstance = axios.create({
  baseURL, // Set baseURL for the instance
  headers: {
    "Content-Type": "application/json", // Set default content type
  },
});

// Request interceptor
Axiosinstance.interceptors.request.use(
  (req) => {
    console.log("Axios Request:", req);
    return req;
  },
  (error) => {
    console.error("Axios Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
Axiosinstance.interceptors.response.use(
  (res) => {
    console.log("Axios Response:", res);
    return res;
  },
  (err) => {
    console.error("Axios Response Error:", err.response || err.message);
    return Promise.reject(err);
  }
);
