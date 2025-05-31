import axios from "axios";

// Default config options
const defaultOptions = {
  baseURL: "http://localhost:8080/api/v1"
};

// Create instance
const instance = axios.create(defaultOptions);

// Set the AUTH token for any request
// instance.interceptors.request.use(async function (config) {
//   config.headers.Authorization = session
//     ? `Bearer ${session?.get("token")?.value}`
//     : "";
//   return config;
// });

export default instance;