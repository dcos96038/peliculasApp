import axios from "axios";

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "9c8e29838b2255d4a9671c6105e2f658",
    language: "es-ES",
  },
});

export default movieDB;
