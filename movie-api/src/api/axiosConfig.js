import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://2e9a-2401-4900-7b95-4686-604b-35b8-ebfb-eaa0.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
    'Access-Control-Allow-Origin': 'true',
    // Add other necessary headers
  },
  withCredentials: true,
});

export default instance;
