import axios from "axios";

// Base URL for the backend
const url = "https://pj-tech-hub-backend-two.vercel.app";

// Create an Axios instance
export const Axiosinstance = axios.create({
  baseURL: url, // Use the backend URL
  headers: {
    "Content-Type": "application/json", // Set default content type
    // Remove Access-Control-Allow-Origin header here; it's for server responses
  },
});

// Request interceptor (optional)
Axiosinstance.interceptors.request.use(
  async (req) => {
    // Log the request for debugging
    console.log("Axios Request:", req);
    return req;
  },
  (error) => {
    // Handle request error
    console.error("Axios Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
Axiosinstance.interceptors.response.use(
  async (res) => {
    // Log the response for debugging
    console.log("Axios Response:", res);
    return res;
  },
  async (err) => {
    // Handle response errors
    console.error("Axios Response Error:", err.response || err.message);
    if (err.response) {
      if (err.response.status === 401) {
        console.warn("Unauthorized access (401).");
        // Add logic for handling 401 errors (e.g., redirect to login)
      } else if (err.response.status === 403) {
        console.warn("Forbidden access (403).");
        // Add logic for handling 403 errors
      } else if (err.response.status === 500) {
        console.error("Server error (500).");
        // Add logic for handling server errors
      }
    }
    return Promise.reject(err);
  }
);
