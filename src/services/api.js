import axios from "axios";

const api = axios.create({
  baseURL: "https://sindsempi.herokuapp.com/"
});


export default api;