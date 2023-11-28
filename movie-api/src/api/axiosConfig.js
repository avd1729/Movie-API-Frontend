import axios from 'axios';

export default axios.create({
    baseURL: 'https://e423-121-200-50-94.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});