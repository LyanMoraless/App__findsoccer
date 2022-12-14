import axios from 'axios';

const api = axios.create({
  baseURL: "http://10.52.48.31:3000"
});

export default api