import axios from "axios";

const API_KEY = "563492ad6f9170000100000130dc1cebe1994db98bc2479fffef136b";

export const api = axios.create({
  baseURL: "https://api.pexels.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: API_KEY
    // 'access-token': localStorage.getItem('olewaToken')
  }
});
