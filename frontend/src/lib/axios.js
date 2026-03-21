import axios from "axios";

const BASE_URL= import.meta.env.MODE==="development" ? "real-time-communication-production.up.railway.app":"/api";
 export const axiosInstance=axios.create({
    baseURL:BASE_URL,
    withCredentials:true, //send cookies

})

// "http://localhost:5001/api"