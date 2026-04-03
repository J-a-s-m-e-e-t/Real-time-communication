import axios from "axios";

// const BASE_URL= import.meta.env.MODE==="development" ?"http://localhost:5001/api":"/api";
//  export const axiosInstance=axios.create({
//     baseURL:`${import.meta.env.VITE_API_URL}/api`,
//     withCredentials:true, //send cookies

// })
const apiUrl = import.meta.env.VITE_API_URL;

if (import.meta.env.MODE === "production" && !apiUrl?.startsWith("http")) {
  console.error("VITE_API_URL is missing or malformed:", apiUrl);
}

export const axiosInstance = axios.create({
  baseURL: `${apiUrl}/api`,
  withCredentials: true,
});
