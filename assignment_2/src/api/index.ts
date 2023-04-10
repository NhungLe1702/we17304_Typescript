import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5050",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
  },
  timeout: 3000,
});

export default instance;
