import axios from "axios";
import { useSelector } from "react-redux";

// Default config options
const defaultOptions = {
  baseURL: "http://localhost:8080/api/v1"
};

// Create instance
const instance = axios.create(defaultOptions);

// // Set the AUTH token for any request
// instance.interceptors.request.use(async function (config) {
//   const {user} = useSelector(state=> state?.user);
//   config.headers.Authorization = user?.token
//     ? `Bearer ${user?.token}`
//     : "";
//   return config;
// });

export default instance;