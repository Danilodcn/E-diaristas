import axios from "axios";

// const url = "http://0.0.0.0:5000/api"; // "https://api-e-diaristas-next.vercel.app/api/";
const url = "https://ediaristaspython.herokuapp.com/api"
console.log(url);
export const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});
