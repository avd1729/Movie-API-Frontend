import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://4b43-121-200-50-94.ngrok-free.app/',
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
    'Access-Control-Allow-Origin': '*',
    // Add other necessary headers
  },
  withCredentials: true,
});

export default instance;
